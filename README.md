# Amazon Kendra Construct Library

This module is community project.
Currently suppport following data sources.

- S3

## Instlation

```bash
npm install cdk-kendra
# or
yarn add cdk-kendra
```

## Get started

Define an Amazon Kendra index.

```ts
import { Index } from 'cdk-kendra';

const index = new Index(this, 'Index');
```

## Adding data sources

```ts
import { Index, S3DataSource } from 'cdk-kendra';
declare const dataSource1: S3DataSource;
declare const dataSource2: S3DataSource;

// when initializing
const index = new Index(this, 'Index', {
  dataSources: [dataSource1],
});

// or after initialized
index.addDataSource(dataSource2);
```

## Editions

By default, Amazon Kendra index using Kendra Enterprise Edition (KEE).
When you use Kendra Developer Edition (KDE) then specify edition.

```ts
import { Index, Edition } from 'cdk-kendra';
const index = new Index(this, 'Index', {
  edition: Edition.developer(),
});
```

### Capacity units

Amazon Kendra provides resources for your index in capacity units.
Each capacity unit provides additional resources for your index.
There are separate capacity units for document storage and for queries.
You can only add capacity units to Amazon Kendra Enterprise Edition indexes.
You can't add capacity to a Developer Edition index.

```ts
import { Index, Edition } from 'cdk-kendra';
const index = new Index(this, 'Index', {
  edition: Edition.enterprise({
    queryCapacityUnits: 1,
    storageCapacityUnits: 1,
  }),
});
```

## Permissions

Arbitrary permissions can be granted using the grant API.
```ts
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Index } from 'cdk-kendra';
declare const myFunc: lambda.Function;

const index = new Index(this, 'Index');
index.grant(myFunc, 'kendra:DescribeIndex');
```

You can use `grantReadDocument` for applications that use the Query API or Retrieve API, and `grantWriteDocument` for applications that write documents.
```ts
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Index } from 'cdk-kendra';
declare const myFunc: lambda.Function;

const index = new Index(this, 'Index');
index.grantReadDocument(myFunc);
```

