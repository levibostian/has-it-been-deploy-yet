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