# is-it-deployed

node module (and CLI) that checks if a specific version of a package has been deployed yet. 

# Getting started 

### Run as a CLI

`npx is-it-deployed --package-manager npm --package-name is-it-deployed --package-version 1.0.0`

Command will succeed if the package has been deployed, and fail if it hasn't.

### Run as a module

`npm install is-it-deployed`

```js 
import { isItDeployed } from 'is-it-deployed'

await isItDeployed({ packageManager: '<package-manager-name>', packageName: '<package-name>', packageVersion: '1.0.0' })
// returns true if the package has been deployed, false if it hasn't
```

# Supported package managers

## npm 

To see if a package has been uploaded to npmjs.com, use the `npm` package manager with the module or the CLI. 

Here is an example with the CLI: 

`npx is-it-deployed --package-manager npm --package-name is-it-deployed --package-version 1.0.0`

## CocoaPods 

To see if a package has been uploaded to CocoaPods, use the `cocoapods` package manager with the module or the CLI.

Here is an example with the CLI:

`npx is-it-deployed --package-manager cocoapods --package-name CustomerIO --package-version 2.8.3`

## Maven

To see if a package has been uploaded to the Maven Central repository, use the `maven` package manager with the module or the CLI.

Here is an example with the CLI:

`npx is-it-deployed --package-manager maven --package-name 'io.customer.android:tracking' --package-version 3.6.6`
