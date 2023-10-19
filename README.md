# Amazon Kendra Construct Library

This module is community project.
Currently suppport following data sources.

- S3

## Instalatiom

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
  edition: Edition.DEVELOPER,
});
```

## Permissions

```ts
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Index } from 'cdk-kendra';
declare const myFunc: lambda.Function;

const index = new Index(this, 'Index');
index.grantQuery(myFunc);
```

```ts
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Index } from 'cdk-kendra';
declare const myFunc: lambda.Function;

const index = new Index(this, 'Index');
index.grant(myFunc, 'kendra:DescribeIndex');
```
