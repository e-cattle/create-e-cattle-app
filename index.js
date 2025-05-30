#!/usr/bin/env node

import { setTimeout } from 'node:timers/promises';
import * as p from '@clack/prompts';
import color from 'picocolors';
import { execSync } from 'child_process';

const runCommand = command => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${error.message}`);
    process.exit(1);
  }
};

async function main() {
  let gitCheckoutCommand = `git clone --depth 1 https://github.com/e-cattle/mfe-`;
  console.clear();

  await setTimeout(1000);

  p.updateSettings({
    aliases: {
      w: 'up',
      s: 'down',
      a: 'left',
      d: 'right',
    },
  });

  p.intro(
    `${color.bgGreen(color.black(` Welcome to the ${color.bold(`e-Cattle CLI`)} 🐮🐮🐮 `))}`
  );

  const project = await p.group(
    {
      name: () =>
        p.text({
          message: '🏷️ Project name:',
          placeholder: 'e-cattle-host',
          validate: value => {
            if (!value) return 'Please enter a name.';
            if (value.length < 3) return 'Name must be at least 2 characters.';
          },
        }),
      type: ({ results }) =>
        p.select({
          message: `💾 Pick a project type within "${results.name}"`,
          initialValue: 'base',
          maxItems: 2,
          options: [
            { value: 'base', label: 'Base' },
            {
              value: 'base-host-vue',
              label: 'Base and Host - Vue.js, Vuetify and Vite',
            },
            {
              value: 'base-host-credential-vue',
              label: 'Base and Host Credential - Vue.js, Vuetify and Vite',
            },
            { value: 'host-vue', label: 'Host - Vue.js, Vuetify and Vite' },
            {
              value: 'host-credential-vue',
              label: 'Host with credential - Vue.js, Vuetify and Vite',
            },
            { value: 'remote-vue', label: 'Remote - Vue.js, Vuetify and Vite' },
            {
              value: 'remote-credential-vue',
              label: 'Remote Credential - Vue.js, Vuetify and Vite',
            },
          ],
        }),
      install: () =>
        p.confirm({
          message: '⚡ Install dependencies?',
          initialValue: false,
        }),
    },
    {
      onCancel: () => {
        p.cancel('❌ Operation cancelled.');
        process.exit(0);
      },
    }
  );
  gitCheckoutCommand += `${project.type} ${project.name}`;
  runCommand(gitCheckoutCommand);
  if (project.install) {
    const s = p.spinner();
    s.start('Installing via npm');
    runCommand(`cd ${project.name} && npm install`);
    if (
      project.type === 'base-host-vue' ||
      project.type === 'base-host-credential-vue'
    ) {
      runCommand(`cd ${project.name}\\host_app && npm install`);
    }
    // await setTimeout(2500);
    s.stop('Installed via npm');
  }

  const nextSteps = `cd ${project.name}        \n${project.install ? '' : 'npm install\n'}npm run dev`;

  p.note(nextSteps, 'Next steps.');

  console.log(gitCheckoutCommand);

  p.outro(
    `${color.bgGreen(color.black(` Thank you for using the ${color.bold(`e-Cattle CLI`)} 🐮🐮🐮 `))}`
  );
}

main().catch(console.error);
