# Notary Office Application 📃

## Installation

* Clone repository
```
git clone https://github.com/IvanSemin33/notary-app.git
cd notary-app
yarn install
```
* Add **Firebase Realtime Database config** file `src/Database/config.js`
```javascript
const config = {
  apiKey: "**********",
  projectId: "**********",
  databaseURL: "https://**********.firebaseio.com/",
  authDomain: "https://**********.web.app",
};

export default config;
```
* Build app
```yarn build```

* Deploy app to **Firebase**
```firebase deploy```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
