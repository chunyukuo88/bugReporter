export const prompts = {
  'Browser Type': [
    {
      type: 'list',
      message: 'What browser was the person using?:\n> ',
      name: 'Browser Type',
      choices: ['Firefox', 'Chrome', 'Edge', 'Safari', 'Opera', 'Internet Explorer', 'Brave', 'DuckDuckGo', 'Awaiting their response on this.', 'Other'],
    },
  ],
  'User Email': [
    {
      type: 'input',
      message: 'Please enter user email:\n> ',
      name: 'User Email',
    },
  ],
  'Office ID': [
    {
      type: 'input',
      message: 'Please enter the user\'s office ID, preferably SalesForce ID:\n> ',
      name: 'Office ID',
    },
  ],
  'Time Of Occurrence': [
    {
      type: 'input',
      message: 'Please enter approximately when the user encountered the issue:\n> ',
      name: 'Time Of Occurrence',
    },
  ],
  Description: [
    {
      type: 'input',
      message: 'Please describe the issue:\n> ',
      name: 'Description',
    },
  ],
};
