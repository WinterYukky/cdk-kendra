import { CfnDataSource } from 'aws-cdk-lib/aws-kendra';
import { Construct } from 'constructs';
import { DataSourceBase, DataSourceBaseOptions, Type } from '../kendra';

export interface WebCrawlerDataSourceProps extends DataSourceBaseOptions {
  readonly siteMaps: string[];
  readonly urlInclusionPatterns?: string[];
  readonly urlExclusionPatterns?: string[];
}

export class WebCrawlerDataSource extends DataSourceBase {
  constructor(scope: Construct, id: string, props: WebCrawlerDataSourceProps) {
    super(scope, id, {
      ...props,
      type: Type.WEBCRAWLER,
      config: {
        webCrawlerConfiguration: {
          urlInclusionPatterns: props.urlInclusionPatterns,
          urlExclusionPatterns: props.urlExclusionPatterns,
          urls: {
            siteMapsConfiguration: {
              siteMaps: props.siteMaps,
            },
          },
        },
      } satisfies CfnDataSource.DataSourceConfigurationProperty,
    });
  }
}
