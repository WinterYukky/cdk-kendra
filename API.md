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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSourceBase <a name="DataSourceBase" id="cdk-kendra.DataSourceBase"></a>

- *Implements:* <a href="#cdk-kendra.IDataSource">IDataSource</a>, aws-cdk-lib.aws_iam.IGrantable

#### Initializers <a name="Initializers" id="cdk-kendra.DataSourceBase.Initializer"></a>

```typescript
import { DataSourceBase } from 'cdk-kendra'

new DataSourceBase(scope: Construct, id: string, props: DataSourceBaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.DataSourceBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-kendra.DataSourceBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.DataSourceBase.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-kendra.DataSourceBaseProps">DataSourceBaseProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-kendra.DataSourceBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-kendra.DataSourceBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-kendra.DataSourceBase.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-kendra.DataSourceBaseProps">DataSourceBaseProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.DataSourceBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-kendra.DataSourceBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-kendra.DataSourceBase.bind">bind</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-kendra.DataSourceBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-kendra.DataSourceBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-kendra.DataSourceBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `bind` <a name="bind" id="cdk-kendra.DataSourceBase.bind"></a>

```typescript
public bind(index: IIndex): void
```

###### `index`<sup>Required</sup> <a name="index" id="cdk-kendra.DataSourceBase.bind.parameter.index"></a>

- *Type:* <a href="#cdk-kendra.IIndex">IIndex</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.DataSourceBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-kendra.DataSourceBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-kendra.DataSourceBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-kendra.DataSourceBase.isConstruct"></a>

```typescript
import { DataSourceBase } from 'cdk-kendra'

DataSourceBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-kendra.DataSourceBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-kendra.DataSourceBase.isOwnedResource"></a>

```typescript
import { DataSourceBase } from 'cdk-kendra'

DataSourceBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-kendra.DataSourceBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-kendra.DataSourceBase.isResource"></a>

```typescript
import { DataSourceBase } from 'cdk-kendra'

DataSourceBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-kendra.DataSourceBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.DataSourceBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-kendra.DataSourceBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-kendra.DataSourceBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-kendra.DataSourceBase.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.DataSourceBase.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.DataSourceBase.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.DataSourceBase.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-kendra.DataSourceBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-kendra.DataSourceBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-kendra.DataSourceBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="cdk-kendra.DataSourceBase.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="cdk-kendra.DataSourceBase.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="cdk-kendra.DataSourceBase.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="cdk-kendra.DataSourceBase.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---


### Index <a name="Index" id="cdk-kendra.Index"></a>

- *Implements:* <a href="#cdk-kendra.IIndex">IIndex</a>

#### Initializers <a name="Initializers" id="cdk-kendra.Index.Initializer"></a>

```typescript
import { Index } from 'cdk-kendra'

new Index(scope: Construct, id: string, props?: IndexProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.Index.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-kendra.Index.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.Index.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-kendra.IndexProps">IndexProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-kendra.Index.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-kendra.Index.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-kendra.Index.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-kendra.IndexProps">IndexProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.Index.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-kendra.Index.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-kendra.Index.addDataSource">addDataSource</a></code> | Adding the data source to this index. |
| <code><a href="#cdk-kendra.Index.grant">grant</a></code> | Grant the actions defined in actions to the given grantee on this index resource. |
| <code><a href="#cdk-kendra.Index.grantReadDocument">grantReadDocument</a></code> | Grant read permissions for documents of this index. |
| <code><a href="#cdk-kendra.Index.grantWriteDocument">grantWriteDocument</a></code> | Grant write permissions for documents of this index. |

---

##### `toString` <a name="toString" id="cdk-kendra.Index.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-kendra.Index.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-kendra.Index.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addDataSource` <a name="addDataSource" id="cdk-kendra.Index.addDataSource"></a>

```typescript
public addDataSource(dataSource: DataSourceBase): void
```

Adding the data source to this index.

###### `dataSource`<sup>Required</sup> <a name="dataSource" id="cdk-kendra.Index.addDataSource.parameter.dataSource"></a>

- *Type:* <a href="#cdk-kendra.DataSourceBase">DataSourceBase</a>

---

##### `grant` <a name="grant" id="cdk-kendra.Index.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string): Grant
```

Grant the actions defined in actions to the given grantee on this index resource.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-kendra.Index.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="cdk-kendra.Index.grant.parameter.actions"></a>

- *Type:* string

---

##### `grantReadDocument` <a name="grantReadDocument" id="cdk-kendra.Index.grantReadDocument"></a>

```typescript
public grantReadDocument(grantee: IGrantable): Grant
```

Grant read permissions for documents of this index.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-kendra.Index.grantReadDocument.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantWriteDocument` <a name="grantWriteDocument" id="cdk-kendra.Index.grantWriteDocument"></a>

```typescript
public grantWriteDocument(grantee: IGrantable): Grant
```

Grant write permissions for documents of this index.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-kendra.Index.grantWriteDocument.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.Index.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-kendra.Index.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-kendra.Index.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-kendra.Index.isConstruct"></a>

```typescript
import { Index } from 'cdk-kendra'

Index.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-kendra.Index.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-kendra.Index.isOwnedResource"></a>

```typescript
import { Index } from 'cdk-kendra'

Index.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-kendra.Index.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-kendra.Index.isResource"></a>

```typescript
import { Index } from 'cdk-kendra'

Index.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-kendra.Index.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.Index.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-kendra.Index.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-kendra.Index.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-kendra.Index.property.indexArn">indexArn</a></code> | <code>string</code> | The ARN of the index. |
| <code><a href="#cdk-kendra.Index.property.indexId">indexId</a></code> | <code>string</code> | The ID of the index. |
| <code><a href="#cdk-kendra.Index.property.indexName">indexName</a></code> | <code>string</code> | The name of the index. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-kendra.Index.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-kendra.Index.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-kendra.Index.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `indexArn`<sup>Required</sup> <a name="indexArn" id="cdk-kendra.Index.property.indexArn"></a>

```typescript
public readonly indexArn: string;
```

- *Type:* string

The ARN of the index.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="cdk-kendra.Index.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The ID of the index.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="cdk-kendra.Index.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The name of the index.

---


### S3DataSource <a name="S3DataSource" id="cdk-kendra.S3DataSource"></a>

#### Initializers <a name="Initializers" id="cdk-kendra.S3DataSource.Initializer"></a>

```typescript
import { S3DataSource } from 'cdk-kendra'

new S3DataSource(scope: Construct, id: string, props: S3DataSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.S3DataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-kendra.S3DataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.S3DataSource.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-kendra.S3DataSourceProps">S3DataSourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-kendra.S3DataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-kendra.S3DataSource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-kendra.S3DataSource.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-kendra.S3DataSourceProps">S3DataSourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.S3DataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-kendra.S3DataSource.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-kendra.S3DataSource.bind">bind</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-kendra.S3DataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-kendra.S3DataSource.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-kendra.S3DataSource.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `bind` <a name="bind" id="cdk-kendra.S3DataSource.bind"></a>

```typescript
public bind(index: IIndex): void
```

###### `index`<sup>Required</sup> <a name="index" id="cdk-kendra.S3DataSource.bind.parameter.index"></a>

- *Type:* <a href="#cdk-kendra.IIndex">IIndex</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.S3DataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-kendra.S3DataSource.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-kendra.S3DataSource.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-kendra.S3DataSource.isConstruct"></a>

```typescript
import { S3DataSource } from 'cdk-kendra'

S3DataSource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-kendra.S3DataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-kendra.S3DataSource.isOwnedResource"></a>

```typescript
import { S3DataSource } from 'cdk-kendra'

S3DataSource.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-kendra.S3DataSource.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-kendra.S3DataSource.isResource"></a>

```typescript
import { S3DataSource } from 'cdk-kendra'

S3DataSource.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-kendra.S3DataSource.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.S3DataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-kendra.S3DataSource.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-kendra.S3DataSource.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-kendra.S3DataSource.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.S3DataSource.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.S3DataSource.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.S3DataSource.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-kendra.S3DataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-kendra.S3DataSource.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-kendra.S3DataSource.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="cdk-kendra.S3DataSource.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="cdk-kendra.S3DataSource.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="cdk-kendra.S3DataSource.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="cdk-kendra.S3DataSource.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---


## Structs <a name="Structs" id="Structs"></a>

### DataSourceBaseOptions <a name="DataSourceBaseOptions" id="cdk-kendra.DataSourceBaseOptions"></a>

#### Initializer <a name="Initializer" id="cdk-kendra.DataSourceBaseOptions.Initializer"></a>

```typescript
import { DataSourceBaseOptions } from 'cdk-kendra'

const dataSourceBaseOptions: DataSourceBaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.DataSourceBaseOptions.property.description">description</a></code> | <code>string</code> | A description of the data source. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-kendra.DataSourceBaseOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the data source.

---

### DataSourceBaseProps <a name="DataSourceBaseProps" id="cdk-kendra.DataSourceBaseProps"></a>

#### Initializer <a name="Initializer" id="cdk-kendra.DataSourceBaseProps.Initializer"></a>

```typescript
import { DataSourceBaseProps } from 'cdk-kendra'

const dataSourceBaseProps: DataSourceBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.DataSourceBaseProps.property.description">description</a></code> | <code>string</code> | A description of the data source. |
| <code><a href="#cdk-kendra.DataSourceBaseProps.property.type">type</a></code> | <code><a href="#cdk-kendra.Type">Type</a></code> | The Amazon Kendra data source's type. |
| <code><a href="#cdk-kendra.DataSourceBaseProps.property.config">config</a></code> | <code>{[ key: string ]: any}</code> | Configuration information for an Amazon Kendra data source. |
| <code><a href="#cdk-kendra.DataSourceBaseProps.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | The Amazon Kendra data source's name. |
| <code><a href="#cdk-kendra.DataSourceBaseProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Amazon Kendra data source role. |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-kendra.DataSourceBaseProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the data source.

---

##### `type`<sup>Required</sup> <a name="type" id="cdk-kendra.DataSourceBaseProps.property.type"></a>

```typescript
public readonly type: Type;
```

- *Type:* <a href="#cdk-kendra.Type">Type</a>

The Amazon Kendra data source's type.

---

##### `config`<sup>Optional</sup> <a name="config" id="cdk-kendra.DataSourceBaseProps.property.config"></a>

```typescript
public readonly config: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* When specify type is Type.CUSTOM then non configuration else must provide.

Configuration information for an Amazon Kendra data source.

The contents of the configuration depend on the type of data source.
You can only specify one type of data source in the configuration.

The Configuration parameter is required for all other data sources.

> [ — http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration]( — http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration)

---

##### `dataSourceName`<sup>Optional</sup> <a name="dataSourceName" id="cdk-kendra.DataSourceBaseProps.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string
- *Default:* CDK generated name

The Amazon Kendra data source's name.

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-kendra.DataSourceBaseProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for Amazon Kendra data source.

Amazon Kendra data source role.

This is the role that will be assumed by the data source upon crawl.
It controls the permissions that the data source will have. The Role must
be assumable by the `kendra.amazonaws.com` service principal.

---

### EditionOption <a name="EditionOption" id="cdk-kendra.EditionOption"></a>

#### Initializer <a name="Initializer" id="cdk-kendra.EditionOption.Initializer"></a>

```typescript
import { EditionOption } from 'cdk-kendra'

const editionOption: EditionOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.EditionOption.property.queryCapacityUnits">queryCapacityUnits</a></code> | <code>number</code> | The amount of extra query capacity for an index and `GetQuerySuggestions` capacity. |
| <code><a href="#cdk-kendra.EditionOption.property.storageCapacityUnits">storageCapacityUnits</a></code> | <code>number</code> | The amount of extra storage capacity for an index. |

---

##### `queryCapacityUnits`<sup>Optional</sup> <a name="queryCapacityUnits" id="cdk-kendra.EditionOption.property.queryCapacityUnits"></a>

```typescript
public readonly queryCapacityUnits: number;
```

- *Type:* number
- *Default:* 0

The amount of extra query capacity for an index and `GetQuerySuggestions` capacity.

A single extra capacity unit for an index provides 0.1 queries per second or approximately 8,000 queries per day.
You can add up to 100 extra capacity units.

`GetQuerySuggestions` capacity is five times the provisioned query capacity for an index,
or the base capacity of 2.5 calls per second, whichever is higher.
For example, the base capacity for an index is 0.1 queries per second,
and `GetQuerySuggestions` capacity has a base of 2.5 calls per second.
If you add another 0.1 queries per second to total 0.2 queries per second for an index,
the `GetQuerySuggestions` capacity is 2.5 calls per second (higher than five times 0.2 queries per second).

> [https://docs.aws.amazon.com/kendra/latest/APIReference/API_GetQuerySuggestions.html](https://docs.aws.amazon.com/kendra/latest/APIReference/API_GetQuerySuggestions.html)

---

##### `storageCapacityUnits`<sup>Optional</sup> <a name="storageCapacityUnits" id="cdk-kendra.EditionOption.property.storageCapacityUnits"></a>

```typescript
public readonly storageCapacityUnits: number;
```

- *Type:* number
- *Default:* 0

The amount of extra storage capacity for an index.

A single capacity unit provides 30 GB of storage space or 100,000 documents,
whichever is reached first. You can add up to 100 extra capacity units.

---

### IndexProps <a name="IndexProps" id="cdk-kendra.IndexProps"></a>

#### Initializer <a name="Initializer" id="cdk-kendra.IndexProps.Initializer"></a>

```typescript
import { IndexProps } from 'cdk-kendra'

const indexProps: IndexProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.IndexProps.property.dataSources">dataSources</a></code> | <code><a href="#cdk-kendra.DataSourceBase">DataSourceBase</a>[]</code> | Data sources linked to the index. |
| <code><a href="#cdk-kendra.IndexProps.property.description">description</a></code> | <code>string</code> | A description of the index. |
| <code><a href="#cdk-kendra.IndexProps.property.edition">edition</a></code> | <code><a href="#cdk-kendra.Edition">Edition</a></code> | The Amazon Kendra index's edition. |
| <code><a href="#cdk-kendra.IndexProps.property.indexName">indexName</a></code> | <code>string</code> | The Amazon Kendra index's name. |
| <code><a href="#cdk-kendra.IndexProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Amazon Kendra index role. |

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="cdk-kendra.IndexProps.property.dataSources"></a>

```typescript
public readonly dataSources: DataSourceBase[];
```

- *Type:* <a href="#cdk-kendra.DataSourceBase">DataSourceBase</a>[]

Data sources linked to the index.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-kendra.IndexProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the index.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="cdk-kendra.IndexProps.property.edition"></a>

```typescript
public readonly edition: Edition;
```

- *Type:* <a href="#cdk-kendra.Edition">Edition</a>
- *Default:* Edition.enterprise()

The Amazon Kendra index's edition.

---

##### `indexName`<sup>Optional</sup> <a name="indexName" id="cdk-kendra.IndexProps.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string
- *Default:* CDK generated name

The Amazon Kendra index's name.

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-kendra.IndexProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for Amazon Kendra index.

Amazon Kendra index role.

This is the role that will be assumed by the index upon crawl.
It controls the permissions that the index will have. The Role must
be assumable by the `kendra.amazonaws.com` service principal.

Amazon Kendra requires permissions to access your CloudWatch log.

---

### S3DataSourceProps <a name="S3DataSourceProps" id="cdk-kendra.S3DataSourceProps"></a>

#### Initializer <a name="Initializer" id="cdk-kendra.S3DataSourceProps.Initializer"></a>

```typescript
import { S3DataSourceProps } from 'cdk-kendra'

const s3DataSourceProps: S3DataSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.S3DataSourceProps.property.description">description</a></code> | <code>string</code> | A description of the data source. |
| <code><a href="#cdk-kendra.S3DataSourceProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-kendra.S3DataSourceProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the data source.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-kendra.S3DataSourceProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

## Classes <a name="Classes" id="Classes"></a>

### Edition <a name="Edition" id="cdk-kendra.Edition"></a>

The Amazon Kendra editions.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.Edition.developer">developer</a></code> | Kendra Developer Edition (KDE) provides developers with a lower-cost option to build a proof-of-concept; |
| <code><a href="#cdk-kendra.Edition.enterprise">enterprise</a></code> | Kendra Enterprise Edition (KEE) provides a high-availability service for production workloads. |

---

##### `developer` <a name="developer" id="cdk-kendra.Edition.developer"></a>

```typescript
import { Edition } from 'cdk-kendra'

Edition.developer()
```

Kendra Developer Edition (KDE) provides developers with a lower-cost option to build a proof-of-concept;

this edition is not recommended for production workloads.

##### `enterprise` <a name="enterprise" id="cdk-kendra.Edition.enterprise"></a>

```typescript
import { Edition } from 'cdk-kendra'

Edition.enterprise(option?: EditionOption)
```

Kendra Enterprise Edition (KEE) provides a high-availability service for production workloads.

###### `option`<sup>Optional</sup> <a name="option" id="cdk-kendra.Edition.enterprise.parameter.option"></a>

- *Type:* <a href="#cdk-kendra.EditionOption">EditionOption</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.Edition.property.editionName">editionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.Edition.property.queryCapacityUnits">queryCapacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-kendra.Edition.property.storageCapacityUnits">storageCapacityUnits</a></code> | <code>number</code> | *No description.* |

---

##### `editionName`<sup>Required</sup> <a name="editionName" id="cdk-kendra.Edition.property.editionName"></a>

```typescript
public readonly editionName: string;
```

- *Type:* string

---

##### `queryCapacityUnits`<sup>Optional</sup> <a name="queryCapacityUnits" id="cdk-kendra.Edition.property.queryCapacityUnits"></a>

```typescript
public readonly queryCapacityUnits: number;
```

- *Type:* number

---

##### `storageCapacityUnits`<sup>Optional</sup> <a name="storageCapacityUnits" id="cdk-kendra.Edition.property.storageCapacityUnits"></a>

```typescript
public readonly storageCapacityUnits: number;
```

- *Type:* number

---


### FieldMapping <a name="FieldMapping" id="cdk-kendra.FieldMapping"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.FieldMapping.date">date</a></code> | *No description.* |
| <code><a href="#cdk-kendra.FieldMapping.long">long</a></code> | *No description.* |
| <code><a href="#cdk-kendra.FieldMapping.string">string</a></code> | *No description.* |
| <code><a href="#cdk-kendra.FieldMapping.stringList">stringList</a></code> | *No description.* |

---

##### `date` <a name="date" id="cdk-kendra.FieldMapping.date"></a>

```typescript
import { FieldMapping } from 'cdk-kendra'

FieldMapping.date(fieldName: string, sourceName: string)
```

###### `fieldName`<sup>Required</sup> <a name="fieldName" id="cdk-kendra.FieldMapping.date.parameter.fieldName"></a>

- *Type:* string

---

###### `sourceName`<sup>Required</sup> <a name="sourceName" id="cdk-kendra.FieldMapping.date.parameter.sourceName"></a>

- *Type:* string

---

##### `long` <a name="long" id="cdk-kendra.FieldMapping.long"></a>

```typescript
import { FieldMapping } from 'cdk-kendra'

FieldMapping.long(fieldName: string, sourceName: string)
```

###### `fieldName`<sup>Required</sup> <a name="fieldName" id="cdk-kendra.FieldMapping.long.parameter.fieldName"></a>

- *Type:* string

---

###### `sourceName`<sup>Required</sup> <a name="sourceName" id="cdk-kendra.FieldMapping.long.parameter.sourceName"></a>

- *Type:* string

---

##### `string` <a name="string" id="cdk-kendra.FieldMapping.string"></a>

```typescript
import { FieldMapping } from 'cdk-kendra'

FieldMapping.string(fieldName: string, sourceName: string)
```

###### `fieldName`<sup>Required</sup> <a name="fieldName" id="cdk-kendra.FieldMapping.string.parameter.fieldName"></a>

- *Type:* string

---

###### `sourceName`<sup>Required</sup> <a name="sourceName" id="cdk-kendra.FieldMapping.string.parameter.sourceName"></a>

- *Type:* string

---

##### `stringList` <a name="stringList" id="cdk-kendra.FieldMapping.stringList"></a>

```typescript
import { FieldMapping } from 'cdk-kendra'

FieldMapping.stringList(fieldName: string, sourceName: string)
```

###### `fieldName`<sup>Required</sup> <a name="fieldName" id="cdk-kendra.FieldMapping.stringList.parameter.fieldName"></a>

- *Type:* string

---

###### `sourceName`<sup>Required</sup> <a name="sourceName" id="cdk-kendra.FieldMapping.stringList.parameter.sourceName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.FieldMapping.property.dataSourceFieldName">dataSourceFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.FieldMapping.property.indexFieldName">indexFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.FieldMapping.property.indexFieldType">indexFieldType</a></code> | <code><a href="#cdk-kendra.IndexFieldType">IndexFieldType</a></code> | *No description.* |
| <code><a href="#cdk-kendra.FieldMapping.property.dateFieldFormat">dateFieldFormat</a></code> | <code>string</code> | *No description.* |

---

##### `dataSourceFieldName`<sup>Required</sup> <a name="dataSourceFieldName" id="cdk-kendra.FieldMapping.property.dataSourceFieldName"></a>

```typescript
public readonly dataSourceFieldName: string;
```

- *Type:* string

---

##### `indexFieldName`<sup>Required</sup> <a name="indexFieldName" id="cdk-kendra.FieldMapping.property.indexFieldName"></a>

```typescript
public readonly indexFieldName: string;
```

- *Type:* string

---

##### `indexFieldType`<sup>Required</sup> <a name="indexFieldType" id="cdk-kendra.FieldMapping.property.indexFieldType"></a>

```typescript
public readonly indexFieldType: IndexFieldType;
```

- *Type:* <a href="#cdk-kendra.IndexFieldType">IndexFieldType</a>

---

##### `dateFieldFormat`<sup>Optional</sup> <a name="dateFieldFormat" id="cdk-kendra.FieldMapping.property.dateFieldFormat"></a>

```typescript
public readonly dateFieldFormat: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IDataSource <a name="IDataSource" id="cdk-kendra.IDataSource"></a>

- *Implemented By:* <a href="#cdk-kendra.DataSourceBase">DataSourceBase</a>, <a href="#cdk-kendra.S3DataSource">S3DataSource</a>, <a href="#cdk-kendra.IDataSource">IDataSource</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.IDataSource.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.IDataSource.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-kendra.IDataSource.property.dataSourceName">dataSourceName</a></code> | <code>string</code> | *No description.* |

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="cdk-kendra.IDataSource.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="cdk-kendra.IDataSource.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="cdk-kendra.IDataSource.property.dataSourceName"></a>

```typescript
public readonly dataSourceName: string;
```

- *Type:* string

---

### IIndex <a name="IIndex" id="cdk-kendra.IIndex"></a>

- *Implemented By:* <a href="#cdk-kendra.Index">Index</a>, <a href="#cdk-kendra.IIndex">IIndex</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.IIndex.addDataSource">addDataSource</a></code> | Adding the data source to this index. |
| <code><a href="#cdk-kendra.IIndex.grant">grant</a></code> | Grant the actions defined in actions to the given grantee on this index resource. |
| <code><a href="#cdk-kendra.IIndex.grantReadDocument">grantReadDocument</a></code> | Grant read permissions for documents of this index. |
| <code><a href="#cdk-kendra.IIndex.grantWriteDocument">grantWriteDocument</a></code> | Grant write permissions for documents of this index. |

---

##### `addDataSource` <a name="addDataSource" id="cdk-kendra.IIndex.addDataSource"></a>

```typescript
public addDataSource(dataSource: DataSourceBase): void
```

Adding the data source to this index.

###### `dataSource`<sup>Required</sup> <a name="dataSource" id="cdk-kendra.IIndex.addDataSource.parameter.dataSource"></a>

- *Type:* <a href="#cdk-kendra.DataSourceBase">DataSourceBase</a>

The data source.

---

##### `grant` <a name="grant" id="cdk-kendra.IIndex.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string): Grant
```

Grant the actions defined in actions to the given grantee on this index resource.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-kendra.IIndex.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `actions`<sup>Required</sup> <a name="actions" id="cdk-kendra.IIndex.grant.parameter.actions"></a>

- *Type:* string

The actions.

---

##### `grantReadDocument` <a name="grantReadDocument" id="cdk-kendra.IIndex.grantReadDocument"></a>

```typescript
public grantReadDocument(grantee: IGrantable): Grant
```

Grant read permissions for documents of this index.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-kendra.IIndex.grantReadDocument.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

##### `grantWriteDocument` <a name="grantWriteDocument" id="cdk-kendra.IIndex.grantWriteDocument"></a>

```typescript
public grantWriteDocument(grantee: IGrantable): Grant
```

Grant write permissions for documents of this index.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-kendra.IIndex.grantWriteDocument.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-kendra.IIndex.property.indexArn">indexArn</a></code> | <code>string</code> | The ARN of the index. |
| <code><a href="#cdk-kendra.IIndex.property.indexId">indexId</a></code> | <code>string</code> | The ID of the index. |
| <code><a href="#cdk-kendra.IIndex.property.indexName">indexName</a></code> | <code>string</code> | The name of the index. |

---

##### `indexArn`<sup>Required</sup> <a name="indexArn" id="cdk-kendra.IIndex.property.indexArn"></a>

```typescript
public readonly indexArn: string;
```

- *Type:* string

The ARN of the index.

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="cdk-kendra.IIndex.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

The ID of the index.

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="cdk-kendra.IIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

The name of the index.

---

## Enums <a name="Enums" id="Enums"></a>

### IndexFieldType <a name="IndexFieldType" id="cdk-kendra.IndexFieldType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.IndexFieldType.STRING">STRING</a></code> | *No description.* |
| <code><a href="#cdk-kendra.IndexFieldType.LONG">LONG</a></code> | *No description.* |
| <code><a href="#cdk-kendra.IndexFieldType.STRING_LIST">STRING_LIST</a></code> | *No description.* |
| <code><a href="#cdk-kendra.IndexFieldType.DATE">DATE</a></code> | *No description.* |

---

##### `STRING` <a name="STRING" id="cdk-kendra.IndexFieldType.STRING"></a>

---


##### `LONG` <a name="LONG" id="cdk-kendra.IndexFieldType.LONG"></a>

---


##### `STRING_LIST` <a name="STRING_LIST" id="cdk-kendra.IndexFieldType.STRING_LIST"></a>

---


##### `DATE` <a name="DATE" id="cdk-kendra.IndexFieldType.DATE"></a>

---


### Type <a name="Type" id="cdk-kendra.Type"></a>

The types of Amazon Kendra Data source.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-kendra.Type.ALFRESCO">ALFRESCO</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.BOX">BOX</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.CONFLUENCE">CONFLUENCE</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.CUSTOM">CUSTOM</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.DATABASE">DATABASE</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.FSX">FSX</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.GITHUB">GITHUB</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.GOOGLEDRIVE">GOOGLEDRIVE</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.JIRA">JIRA</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.ONEDRIVE">ONEDRIVE</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.QUIP">QUIP</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.S3">S3</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.SALESFORCE">SALESFORCE</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.SERVICENOW">SERVICENOW</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.SHAREPOINT">SHAREPOINT</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.SLACK">SLACK</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.TEMPLATE">TEMPLATE</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.WEBCRAWLER">WEBCRAWLER</a></code> | *No description.* |
| <code><a href="#cdk-kendra.Type.WORKDOCS">WORKDOCS</a></code> | *No description.* |

---

##### `ALFRESCO` <a name="ALFRESCO" id="cdk-kendra.Type.ALFRESCO"></a>

---


##### `BOX` <a name="BOX" id="cdk-kendra.Type.BOX"></a>

---


##### `CONFLUENCE` <a name="CONFLUENCE" id="cdk-kendra.Type.CONFLUENCE"></a>

---


##### `CUSTOM` <a name="CUSTOM" id="cdk-kendra.Type.CUSTOM"></a>

---


##### `DATABASE` <a name="DATABASE" id="cdk-kendra.Type.DATABASE"></a>

---


##### `FSX` <a name="FSX" id="cdk-kendra.Type.FSX"></a>

---


##### `GITHUB` <a name="GITHUB" id="cdk-kendra.Type.GITHUB"></a>

---


##### `GOOGLEDRIVE` <a name="GOOGLEDRIVE" id="cdk-kendra.Type.GOOGLEDRIVE"></a>

---


##### `JIRA` <a name="JIRA" id="cdk-kendra.Type.JIRA"></a>

---


##### `ONEDRIVE` <a name="ONEDRIVE" id="cdk-kendra.Type.ONEDRIVE"></a>

---


##### `QUIP` <a name="QUIP" id="cdk-kendra.Type.QUIP"></a>

---


##### `S3` <a name="S3" id="cdk-kendra.Type.S3"></a>

---


##### `SALESFORCE` <a name="SALESFORCE" id="cdk-kendra.Type.SALESFORCE"></a>

---


##### `SERVICENOW` <a name="SERVICENOW" id="cdk-kendra.Type.SERVICENOW"></a>

---


##### `SHAREPOINT` <a name="SHAREPOINT" id="cdk-kendra.Type.SHAREPOINT"></a>

---


##### `SLACK` <a name="SLACK" id="cdk-kendra.Type.SLACK"></a>

---


##### `TEMPLATE` <a name="TEMPLATE" id="cdk-kendra.Type.TEMPLATE"></a>

---


##### `WEBCRAWLER` <a name="WEBCRAWLER" id="cdk-kendra.Type.WEBCRAWLER"></a>

---


##### `WORKDOCS` <a name="WORKDOCS" id="cdk-kendra.Type.WORKDOCS"></a>

---

