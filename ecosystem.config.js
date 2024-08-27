module.exports = {
  apps: [
    {
      name: 'landig-page',
      script: 'npm run build && npm run start',
      post_update: [
        'echo App has been updated, running npm install...',
        'npm install',
        'echo App is being restarted now',
      ],
      exec_timeout: 30000,
    },
  ],
};
