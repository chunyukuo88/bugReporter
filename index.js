import { prompts } from './prompts.js';
import inquirer from 'inquirer';
import clipboard from 'clipboardy';
import boxen from 'boxen';
import chalk from 'chalk';

const { log } = console;

const derived = {
  logCyanBox: (msg) => log(chalk.cyan(boxen(msg))),
  logGreenBox: (msg) => log(chalk.green(boxen(msg))),
  logYellow: (msg) => log(chalk.yellow(msg)),
};

function greetUser(){
  const year = new Date().getFullYear();
  derived.logGreenBox(`

     ___              ___                    __
    / _ )__ _____ _  / _ \\___ ___  ___  ____/ /____ ____
   / _  / // / _ \`/ / , _/ -_) _ \\/ _ \\/ __/ __/ -_) __/  
  /____/\\_,_/\\_, / /_/|_|\\__/ .__/\\___/_/  \\__/\\__/_/  
            /___/          /_/

  `);
  derived.logCyanBox(`             Copyright ${year} by Bread Monster              `);
}

async function getUserResponses(query, responses) {
  await inquirer.prompt(query).then((responseObject) => {
    const queryName = query[0].name;
    responses[queryName] = responseObject[queryName];
  });
  return responses;
}

function createBufferContent(userResponses) {
  const responses = Object.values(userResponses);
  return `
  🚨🚨 Bug Report 🐛🐛
  Browser Type: ${responses[0]}  \n  *User Email:* ${responses[1]}  \n  *Office ID:* ${responses[2]}  \n  *Time of Occurrence:* ${responses[3]}  \n  *Description:* ${responses[4]}  `;
}

function copyBugReportToBuffer(bufferContent) {
  clipboard.writeSync(bufferContent);
  derived.logGreenBox(`
  The following has been copied to your clipboard:  
  ${bufferContent}
`);
};

async function main(){
  greetUser();
  const queries = Object.values(prompts);
  let userResponses = {
    'Browser Type': '',
    'User Email': '',
    'Office ID': '',
    'Time Of Occurrence': '',
    Description: '',
  };
  for (const query of queries) {
    userResponses = await getUserResponses(query, userResponses);
  }
  const bufferContent = createBufferContent(userResponses);
  copyBugReportToBuffer(bufferContent);
}

await main();
