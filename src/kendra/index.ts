import { Arn, ArnFormat, Lazy, Names, Resource, Stack } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { CfnIndex } from 'aws-cdk-lib/aws-kendra';
import { Construct } from 'constructs';
import { DataSourceBase } from './data-source';
export * from './data-source';

export interface IIndex {
  /**
   * The name of the index.
   */
  readonly indexName: string;
  /**
   * The ID of the index.
   */
  readonly indexId: string;
  /**
   * The ARN of the index.
   */
  readonly indexArn: string;
  /**
   * Grant the actions defined in actions to the given grantee
   * on this index resource.
   * @param grantee The principal.
   * @param actions The actions.
   */
  grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant;
  /**
   * Grant read permissions for documents of this index.
   * @param grantee The principal.
   */
  grantReadDocument(grantee: iam.IGrantable): iam.Grant;
  /**
   * Grant write permissions for documents of this index.
   * @param grantee The principal.
   */
  grantWriteDocument(grantee: iam.IGrantable): iam.Grant;
  /**
   * Adding the data source to this index.
   * @param dataSource The data source.
   */
  addDataSource(dataSource: DataSourceBase): void;
}

export interface EditionOption {
  /**
   * The amount of extra query capacity for an index and `GetQuerySuggestions` capacity.
   *
   * A single extra capacity unit for an index provides 0.1 queries per second or approximately 8,000 queries per day.
   * You can add up to 100 extra capacity units.
   *
   * `GetQuerySuggestions` capacity is five times the provisioned query capacity for an index,
   * or the base capacity of 2.5 calls per second, whichever is higher.
   * For example, the base capacity for an index is 0.1 queries per second,
   * and `GetQuerySuggestions` capacity has a base of 2.5 calls per second.
   * If you add another 0.1 queries per second to total 0.2 queries per second for an index,
   * the `GetQuerySuggestions` capacity is 2.5 calls per second (higher than five times 0.2 queries per second).
   *
   * @default 0
   * @see https://docs.aws.amazon.com/kendra/latest/APIReference/API_GetQuerySuggestions.html
   */
  readonly queryCapacityUnits?: number;
  /**
   * The amount of extra storage capacity for an index.
   * A single capacity unit provides 30 GB of storage space or 100,000 documents,
   * whichever is reached first. You can add up to 100 extra capacity units.
   *
   * @default 0
   */
  readonly storageCapacityUnits?: number;
}
/**
 * The Amazon Kendra editions.
 */
export class Edition {
  /**
   * Kendra Developer Edition (KDE) provides developers
   * with a lower-cost option to build a proof-of-concept;
   * this edition is not recommended for production workloads.
   */
  static developer() {
    return new Edition('DEVELOPER_EDITION');
  }
  /**
   * Kendra Enterprise Edition (KEE) provides a high-availability
   * service for production workloads.
   */
  static enterprise(option?: EditionOption) {
    return new Edition(
      'ENTERPRISE_EDITION',
      option?.queryCapacityUnits,
      option?.storageCapacityUnits,
    );
  }
  private constructor(
    readonly editionName: string,
    readonly queryCapacityUnits?: number,
    readonly storageCapacityUnits?: number,
  ) {}
}

export interface IndexProps {
  /**
   * The Amazon Kendra index's name.
   * @default - CDK generated name
   */
  readonly indexName?: string;

  /**
   * The Amazon Kendra index's edition.
   * @default Edition.enterprise()
   */
  readonly edition?: Edition;

  /**
   * Amazon Kendra index role.
   * This is the role that will be assumed by the index upon crawl.
   * It controls the permissions that the index will have. The Role must
   * be assumable by the `kendra.amazonaws.com` service principal.
   *
   * Amazon Kendra requires permissions to access your CloudWatch log.
   *
   * @default - A unique role will be generated for Amazon Kendra index.
   */
  readonly role?: iam.IRole;

  /**
   * A description of the index.
   * @default - No description.
   */
  readonly description?: string;

  /**
   * Data sources linked to the index.
   */
  readonly dataSources?: DataSourceBase[];
}

export class Index extends Resource implements IIndex {
  readonly indexName: string;
  readonly indexId: string;
  readonly indexArn: string;
  constructor(scope: Construct, id: string, props?: IndexProps) {
    super(scope, id, {
      physicalName: Lazy.string({
        produce: () =>
          Names.uniqueResourceName(this, {
            maxLength: 1000,
            allowedSpecialCharacters: '_-',
          }),
      }),
    });
    const logGroupArn = Arn.format(
      {
        service: 'logs',
        resource: 'log-group',
        resourceName: '/aws/kendra/*',
        arnFormat: ArnFormat.COLON_RESOURCE_NAME,
      },
      Stack.of(this),
    );
    const role =
      props?.role ??
      new iam.Role(this, 'Role', {
        assumedBy: new iam.ServicePrincipal('kendra.amazonaws.com'),
        inlinePolicies: {
          DefaultPolicy: new iam.PolicyDocument({
            statements: [
              new iam.PolicyStatement({
                actions: ['cloudwatch:PutMetricData'],
                resources: ['*'],
                conditions: {
                  StringEquals: {
                    'cloudwatch:namespace': 'AWS/Kendra',
                  },
                },
              }),
              new iam.PolicyStatement({
                actions: ['logs:DescribeLogGroups'],
                resources: ['*'],
              }),
              new iam.PolicyStatement({
                actions: ['logs:CreateLogGroup'],
                resources: [logGroupArn],
              }),
              new iam.PolicyStatement({
                actions: [
                  'logs:DescribeLogStreams',
                  'logs:CreateLogStream',
                  'logs:PutLogEvents',
                ],
                resources: [`${logGroupArn}:log-stream:*`],
              }),
            ],
          }),
        },
      });
    const edition = props?.edition ?? Edition.enterprise();
    const capacityUnits =
      edition.queryCapacityUnits || edition.storageCapacityUnits
        ? {
            queryCapacityUnits: edition.queryCapacityUnits ?? 0,
            storageCapacityUnits: edition.storageCapacityUnits ?? 0,
          }
        : undefined;
    const resource = new CfnIndex(this, 'Resource', {
      name: this.physicalName,
      description: props?.description,
      edition: edition.editionName,
      capacityUnits,
      roleArn: role.roleArn,
    });
    this.indexArn = resource.attrArn;
    this.indexId = resource.attrId;
    this.indexName = this.physicalName;
    props?.dataSources?.forEach((dataSource) => dataSource.bind(this));
  }
  addDataSource(dataSource: DataSourceBase): void {
    dataSource.bind(this);
  }
  grant(grantee: iam.IGrantable, ...actions: string[]): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee,
      actions,
      resourceArns: [this.indexArn],
    });
  }
  grantWriteDocument(grantee: iam.IGrantable): iam.Grant {
    return this.grant(
      grantee,
      'kendra:BatchPutDocument',
      'kendra:BatchDeleteDocument',
    );
  }
  grantReadDocument(grantee: iam.IGrantable): iam.Grant {
    return this.grant(grantee, 'kendra:Query', 'kendra:Retrieve');
  }
}
