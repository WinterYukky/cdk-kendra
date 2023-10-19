import { Lazy, Names, Resource } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { CfnDataSource } from 'aws-cdk-lib/aws-kendra';
import { Construct } from 'constructs';
import { IIndex } from './';

/**
 * The types of Amazon Kendra Data source.
 */
export enum Type {
  ALFRESCO = 'ALFRESCO',
  BOX = 'BOX',
  CONFLUENCE = 'CONFLUENCE',
  CUSTOM = 'CUSTOM',
  DATABASE = 'DATABASE',
  FSX = 'FSX',
  GITHUB = 'GITHUB',
  GOOGLEDRIVE = 'GOOGLEDRIVE',
  JIRA = 'JIRA',
  ONEDRIVE = 'ONEDRIVE',
  QUIP = 'QUIP',
  S3 = 'S3',
  SALESFORCE = 'SALESFORCE',
  SERVICENOW = 'SERVICENOW',
  SHAREPOINT = 'SHAREPOINT',
  SLACK = 'SLACK',
  TEMPLATE = 'TEMPLATE',
  WEBCRAWLER = 'WEBCRAWLER',
  WORKDOCS = 'WORKDOCS',
}

export interface IDataSource {
  readonly dataSourceName: string;
  readonly dataSourceId: string;
  readonly dataSourceArn: string;
}

export interface DataSourceBaseOptions {
  /**
   * A description of the data source.
   * @default - No description.
   */
  readonly description?: string;
}

export interface DataSourceBaseProps extends DataSourceBaseOptions {
  /**
   * The Amazon Kendra data source's type.
   */
  readonly type: Type;

  /**
   * The Amazon Kendra data source's name.
   * @default - CDK generated name
   */
  readonly dataSourceName?: string;

  /**
   * Amazon Kendra data source role.
   * This is the role that will be assumed by the data source upon crawl.
   * It controls the permissions that the data source will have. The Role must
   * be assumable by the `kendra.amazonaws.com` service principal.
   *
   * @default - A unique role will be generated for Amazon Kendra data source.
   */
  readonly role?: iam.IRole;

  /**
   * Configuration information for an Amazon Kendra data source.
   * The contents of the configuration depend on the type of data source.
   * You can only specify one type of data source in the configuration.
   *
   * The Configuration parameter is required for all other data sources.
   *
   * @see — http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration
   * @default - When specify type is Type.CUSTOM then non configuration else must provide.
   */
  readonly config?: { [key: string]: any };
}

export abstract class DataSourceBase
  extends Resource
  implements IDataSource, iam.IGrantable
{
  private index?: IIndex;
  private role?: iam.IRole;
  readonly dataSourceName: string;
  readonly dataSourceId: string;
  readonly dataSourceArn: string;
  get grantPrincipal(): iam.IPrincipal {
    if (!this.role) {
      throw new Error('CUSTOM type data source is not grantable.');
    }
    return this.role;
  }
  constructor(scope: Construct, id: string, props: DataSourceBaseProps) {
    super(scope, id, {
      physicalName:
        props.dataSourceName ??
        Lazy.string({
          produce: () =>
            Names.uniqueResourceName(this, {
              maxLength: 1000,
              allowedSpecialCharacters: '_-',
            }),
        }),
    });
    this.role =
      props.role ?? props.type !== Type.CUSTOM
        ? new iam.Role(this, 'ServiceRole', {
            assumedBy: new iam.ServicePrincipal('kendra.amazonaws.com'),
            path: '/service-role/',
          })
        : undefined;
    const resource = new CfnDataSource(this, 'Default', {
      indexId: Lazy.string({
        produce: () => {
          if (!this.index) {
            throw new Error('Index is missing');
          }
          return this.index.indexId;
        },
      }),
      name: this.physicalName,
      type: props.type,
      dataSourceConfiguration: props.config,
      roleArn: this.role?.roleArn,
    });
    this.dataSourceArn = resource.attrArn;
    this.dataSourceId = resource.attrId;
    this.dataSourceName = this.physicalName;
  }
  bind(index: IIndex) {
    index.grantWriteDocument(this);
    this.grantPrincipal.addToPrincipalPolicy(
      new iam.PolicyStatement({
        actions: [
          'kendra:PutPrincipalMapping',
          'kendra:DeletePrincipalMapping',
          'kendra:ListGroupsOlderThanOrderingId',
          'kendra:DescribePrincipalMapping',
        ],
        resources: [index.indexArn, `${index.indexArn}/data-source/*`],
      }),
    );
    this.index = index;
  }
}

export enum IndexFieldType {
  STRING = 'STRING',
  LONG = 'LONG',
  STRING_LIST = 'STRING_LIST',
  DATE = 'DATE',
}
export class FieldMapping {
  static string(fieldName: string, sourceName: string) {
    return new FieldMapping(IndexFieldType.STRING, fieldName, sourceName);
  }
  static stringList(fieldName: string, sourceName: string) {
    return new FieldMapping(IndexFieldType.STRING_LIST, fieldName, sourceName);
  }
  static long(fieldName: string, sourceName: string) {
    return new FieldMapping(IndexFieldType.LONG, fieldName, sourceName);
  }
  static date(fieldName: string, sourceName: string) {
    return new FieldMapping(
      IndexFieldType.DATE,
      fieldName,
      sourceName,
      'dd-MM-yyyy HH:mm:ss',
    );
  }
  private constructor(
    readonly indexFieldType: IndexFieldType,
    readonly indexFieldName: string,
    readonly dataSourceFieldName: string,
    readonly dateFieldFormat?: string,
  ) {}
}
