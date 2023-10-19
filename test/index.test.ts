import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Index } from '../src/index';

describe('Index', () => {
  test('Create Index with default value', () => {
    const stack = new Stack();
    new Index(stack, 'Index');
    Template.fromStack(stack).hasResourceProperties('AWS::Kendra::Index', {
      Name: 'Index',
      Edition: 'ENTERPRISE_EDITION',
    });
  });
});
