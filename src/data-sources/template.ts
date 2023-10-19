import { CfnDataSource } from 'aws-cdk-lib/aws-kendra';
import { Construct } from 'constructs';
import { DataSourceBase, DataSourceBaseOptions, Type } from '../kendra';

export interface TemplateDataSourceProps extends DataSourceBaseOptions {
  readonly template: { [key: string]: any };
}

export class TemplateDataSource extends DataSourceBase {
  constructor(scope: Construct, id: string, props: TemplateDataSourceProps) {
    super(scope, id, {
      ...props,
      type: Type.TEMPLATE,
      config: {
        templateConfiguration: {
          template: JSON.stringify(props.template),
        },
      } satisfies CfnDataSource.DataSourceConfigurationProperty,
    });
  }
}
