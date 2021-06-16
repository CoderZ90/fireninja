

# Ninja Chat APP

This project is a realtime chat APP where all of your friends can talk together no matter where you are or anyhting you just need to go to the App make a new group and add your friends and BOOM! start chatting.


## Live Website 🚀

https://fireninja.netlify.app


## Screenshots

![App Screenshot](https://camo.githubusercontent.com/aab00add3598f5acce26f781012f06cfbe4b489f1dbf9cc914f1835736f97897/68747470733a2f2f692e6962622e636f2f474a777979396d2f4276392d4a73332d514c4f4c592d48442e6a7067)

  
## Features

 - [Free forever](https://github.com/CoderZ90/fireninja)
 - [Awesome UI & Open Source](https://github.com/CoderZ90/fireninja)
 - [Firebase Login Authentication](https://github.com/CoderZ90/fireninja)
 - [Logout system](https://github.com/CoderZ90/fireninja)
 - [Chat saves when logout / reload](https://github.com/CoderZ90/fireninja)
 - [Able to create group](https://github.com/CoderZ90/fireninja)
 - [Uptop 30+ Members](https://github.com/CoderZ90/fireninja)
 - [Fasted comunnication in this planet](https://github.com/CoderZ90/fireninja)
 - [File Upload system ](https://github.com/CoderZ90/fireninja)
 - [User typing... system](https://github.com/CoderZ90/fireninja)

  
## API Reference

API Used to create this Chat app 

- https://chatengine.io
- https://api.chatengine.io/users/ 👆
- https://firebase.google.com [ Login system not API ]



#### Get all items [Example on how to use API ]

```http
  GET /api/items

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Security 🛡️
When use your api store your API porect ID & Key in .env file. Create a file with name ".env" name and then store your data.

#### Like this

    REACT_CHAT_ENGINE_ID: '<Your-project-ID>'
    REACT_CHAT_ENGINE_KEY: '<Your-API-key>'


## Deployment

To deploy this project run

```bash
  npm run build
```

It will give you a "Build" folder for production after you get the folder follow these steps to deploy it succesfully.


#### Go to netlify.com

+ Go to sites tab
+ scroll to bottom [ you will see file upload option ]
+ Drag & drop your build folder in the box
+ In minutes your react app will be deployed

  
## Optimizations

- Performance Tweaks
- Responsive layout for mobile devices

  
## Bonus - E-mail notifications
If you want to upgrade this chat application even further than what is shown in the video, you can add e-mail notifications.

 More info on https://chatengine.io/docs/email_notifications.

  
## Contributing

Contributions are always welcome!

See `It makes us happy` for ways to get started.
Just add our website link for contribution to your project.

  
## To Get Started with it

[See documentation or read it here](https://reactjs.org/docs/getting-started.html)



  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_PROJECT_ID`

`YOUR_API_KEY`

  
## FAQ

#### Why we use .env file to store our ID & KEY data ?

It makes the app secure so that the hackers trying to hack your app cannot get the data ( project ID & key ) of your app

#### Is this APP Safe ?

Yes! This app is 100% safe . As the login authentication is done by `Firebase` which is made by google
  
## Feature We Are Working on

- Light/dark mode toggle
- Calling to friend
- Games online
- Upgraded Loading screen

  
## Feedback

If you have any feedback, please reach out to us at adityasingh.nasa@gmail.com

  
![Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png)

    
## Roadmap

- Additional browser support

- Add more integrations

  
## Tech Stack

**Client:** ReactJS

**External:** Chat Engine API

  
## Run Locally

**Clone the project**

```bash
  git clone https://github.com/CoderZ90/fireninja.git
```

**Go to the project directory**

```bash
  cd fireninja
```

**Install dependencies**

```bash
  npm install
```

**Start the server**

```bash
  npm start
```

### More to know

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


  
## Authors

- Created With 💖 by [@CoderZ90](https://github.com/CoderZ90/)

  
