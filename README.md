# ts-utils

A collection of utility tools for typescript. 

Nothing is implemented yet, so you will have to arm yourself with patience!

## Commands (defined in ```package.json```)
```npm run build``` Build the module as esm and commonjs (```esm```/```cjs```) in ```dist``` directory (runs ```npm run clean``` before building new files)

```npm run clean``` Deletes all the files and folder genrated by ```npm run build```

```npm run test``` Runs all test files in the project

```npm run test:cov``` Runs all test files in the project and generates a test coverage report

```npm run test:clean``` Cleans (deletes) all the files and folders generated by ```npm run test:cov```

## Build 
This template has been configured to build your files as ```commonjs``` and ```esm``` modules.
The build configuration can be found partially in the ```tsconfig.json``` file in the root of the project, 
while specific configurations for ```commonjs``` and ```esm``` can be found in the ```config``` folder.

The files will be generated in a ```dist``` folder in the root of the project, each module type (```esm```/```commonjs```)
is located in respective folders named ```esm``` and ```cjs```. These files are refrenced in the ```package.json```, so if 
you change this configuration or folder names, you should ensure to also alter your ```package.json``` to reflect these changes.

The project is build by running ```npm run build``` in CLI from the root of the project, where ```package.json``` is also located.

Old build files are automatically removed before building to ensure that you always have the the newest and ONLY the newest 
build files.

## Test
Jest has been preconfigured with this template. 
All files/folders which follows this pattern: ```**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)``` will be tested as default.

**Examples**

All these files will be tested:

```anything.spec.ts```

```anything.spec.tsx```

```anything.spec.js```

```anything.spec.jsx```

```anything.test.ts```

```anything.test.tsx```

```anything.test.js```

```anything.test.jsx```

As well as anything located in ```__tests__``` folder:

```__tests__/anything.js```

```__tests__/anything.ts```

```__tests__/anything```

```__tests__/anything.hello```


You can change the jest configuration through the ```jest.config.ts``` file.


To run your tests you should run ```npm run test``` in CLI from the root of the project, where ```package.json``` is also located.


A code coverage setup has also been configured and can be started with the ```npm run test:cov``` command. 
This will show the code coverage as a table in CLI and also generate static HTML, css, js files for a simple serving of the information 
in a ```coverage``` folder in the root of the project. 
Furthermore will it provide a simple test report in a ```test_report``` folder in ```xml``` format.


To clean all the test files from the project, run ```npm run test:clean``` in CLI from the root of the project.


## Deploy

I will write further about publishing, but for starters you should just look into ```npm publish```. 
A pre-publish script has been added to ensure the project is freshly build before publishing, this will 
automatically run before publishing with the ```npm publish``` command.

Read more about publishing here: https://docs.npmjs.com/cli/v8/commands/npm-publish

And here: https://zellwk.com/blog/publish-to-npm/

<br><br><br>
**Powered by typescript-module-template (https://github.com/Cosby1992/typescript-module-template)**

