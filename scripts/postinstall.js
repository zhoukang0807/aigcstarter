const { exec } = require('child_process');

const { arch, platform } = process;

if (platform === 'darwin') {
  console.log('postinstall:', process.cwd());
}