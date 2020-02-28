const core = require('@actions/core')
const execSync = require('child_process').execSync

try {
  let options = {
      stdio: 'inherit',
      env: process.env
  }
   execSync('aio app deploy --skip-deploy', options)
} catch (error) {
  core.setFailed(error.message);
}
