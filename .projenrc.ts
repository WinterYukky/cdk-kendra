import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'WinterYukky',
  authorAddress: '49480575+WinterYukky@users.noreply.github.com',
  cdkVersion: '2.102.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-kendra',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/WinterYukky/cdk-kendra.git',
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
    },
  },
  eslintOptions: {
    dirs: ['src'],
    prettier: true,
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
