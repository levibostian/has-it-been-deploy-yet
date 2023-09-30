import { Command } from 'commander';
import { isItDeployed } from '.';
import { exit } from 'process';

const program = new Command()
  .requiredOption('--package-manager <name>', 'npm')
  .requiredOption('--package-name <name>', 'react')
  .requiredOption('--package-version <name>', '1.0.0')
  .parse();

(async () => {
  const {
    packageManager,
    packageName,
    packageVersion
  } = program.opts()
  
  console.log(`Checking if ${packageName}@${packageVersion} is deployed on ${packageManager}...`)

  const isItDeployedResult = await isItDeployed({
    packageManager,
    packageName,
    packageVersion
  })

  if (!isItDeployedResult) {
    console.log('its not')
    exit(1)
  }

  console.log('its deployed')
  exit(0)
})()