export const prompts = {
  browserType: [
    {
      type: 'list',
      message: 'What browser was the person using?',
      name: 'browserType',
      choices: ['Firefox', 'Chrome', 'Edge', 'Safari', 'Opera', 'Internet Explorer', 'Brave', 'DuckDuckGo', 'Awaiting their response on this.', 'Other'],
    },
  ],
  userEmail: [
    {
      type: 'input',
      message: 'Please enter user email',
      name: 'userEmail',
    },
  ],
  officeId: [
    {
      type: 'input',
      message: 'Please enter the user\'s office ID, preferably SalesForce ID',
      name: 'officeId',
    },
  ],
  timeOfOccurrence: [
    {
      type: 'input',
      message: 'Please enter approximately when the user encountered the issue',
      name: 'timeOfOccurrence',
    },
  ],
  description: [
    {
      type: 'input',
      message: 'Please describe the issue',
      name: 'description',
    },
  ],
};
