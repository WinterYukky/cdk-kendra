import { CfnDataSource } from 'aws-cdk-lib/aws-kendra';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { DataSourceBase, DataSourceBaseOptions, Type } from '../kendra';

export interface S3DataSourceProps extends DataSourceBaseOptions {
  readonly bucket: s3.IBucket;
}

export class S3DataSource extends DataSourceBase {
  constructor(scope: Construct, id: string, props: S3DataSourceProps) {
    super(scope, id, {
      ...props,
      type: Type.S3,
      config: {
        s3Configuration: {
          bucketName: props.bucket.bucketName,
        },
      } satisfies CfnDataSource.DataSourceConfigurationProperty,
    });
    props.bucket.grantReadWrite(this);
  }
}
