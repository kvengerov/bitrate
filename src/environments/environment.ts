// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDAY3KXxENDzBwkEAS-juSjL1q3zXRQpY4',
    authDomain: 'bitrate-30a57.firebaseapp.com',
    databaseURL: 'https://bitrate-30a57.firebaseio.com',
    projectId: 'bitrate-30a57',
    storageBucket: 'bitrate-30a57.appspot.com',
    messagingSenderId: '685923677726'
  },
  firechat: {
    apiKey: 'AIzaSyCdF1bLT4nTe8chdcFPN42M5BsaoTKh9wE',
    authDomain: 'agilie-it-school-chat.firebaseapp.com',
    databaseURL: 'https://agilie-it-school-chat.firebaseio.com',
    projectId: 'agilie-it-school-chat',
    storageBucket: 'agilie-it-school-chat.appspot.com',
    messagingSenderId: '980324210351'
  }
};
