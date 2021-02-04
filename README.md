
# Alaya mern dev challenge 

<!-- ABOUT THE PROJECT -->
## About The Project

This application which is a MERN stack, backend(node.js / Express / MongoDB) and frontend(React / Redux), when you can write and edit post blog. 

functionalities:

• Login : The users can create their account (signup, login and logout). The auth keep the state between reloads.

• A signup dialog for new users.

• A login dialog.

• Only connected users will be able to create post, and only the author of the post will be able to delete it

• List all Posts with Author name, title, content, image and an indicator to know if a character is in fav list. 

• Detail post’s view, to be able to upload and manage pictures/info on his post .

• button to add the character to a fav list, in case the character is in fav list it can be removed from fav list.

• 404 page.

• The user information for login and the fav list are stored in a DB (MongoDB).

• we added some tests.

• Pagination.

• Preload images and a loader.

### Frontend
The frontend was built in React with Hooks and Redux. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
list of major frameworks and library that was used to built this project.
* [react](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Redux](https://redux.js.org/)
* [redux-saga](https://redux-saga.js.org/)
* [react-router](https://reactrouter.com/)
* [react-redux-hooks](https://react-redux.js.org/next/api/hooks)
* [react-hooks](https://reactjs.org/docs/hooks-intro.html)
* [axios](https://github.com/axios/axios)
* [jest](https://jestjs.io/docs/en/getting-started.html)
* [react testing library](https://testing-library.com/docs/react-testing-library/intro/)
* [Flexbox css](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [css grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Backend
The backend was biult made in Express, list of major frameworks and library that was used to build this project.
* [node.js](https://nodejs.org/en/)
* [express](https://expressjs.com/)
* [passportjs](http://www.passportjs.org/)
* [passport-local](http://www.passportjs.org/packages/passport-local/)
* [passport-jwt](http://www.passportjs.org/packages/passport-jwt/)
* [cloudinary](https://cloudinary.com/)
* [mongoose](https://mongoosejs.com/)

Free to you to use the service you want to do that and to store your assets (like Cloudinary for example).

The purpose is to enhance post with media.

You can design the layout you want on cards and on each post page and use the styling you want.

We want you to use JWT to manage user session https://jwt.io/, to do that you can use passport with a JWT policy.


### Testing
This project has tests on components, reducer, functions/utils and actions, run `yarn test`.

<!-- GETTING STARTED -->
## Getting Started

This application is composed by 2 repositories, the server and the client:

- In the server repository you can find an express HTTP server that connect to a local mongo database and expose
the api.

To clone and run this application.

### Prerequisites

you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com) or you can use [yarn](https://classic.yarnpkg.com/en/docs/install/)) installed on your computer. 

To start the server be sure to have installed mongoDB locally as a service.

From your command line:

### Installation

1. Clone this repo
```sh
git clone https://github.com/arturoliduena/mern-stack.git
```

2. Go into the repository
```sh
cd mern-stack
```

### Frontend 
3. Go into the frontend project from the project root
```sh
cd client
```

4. install package
```sh
yarn
```
or
```sh
npm install
```

5. run frontend
```sh
yarn start
```
or
```sh
npm start
```

### Backend 

1. update `/server.env` file

Your user name, user password and database name must be set in `.env` file.
```txt
PORT=3000
JWT_KEY='TOP_SECRET'
```

2. Go into the backend project from the project root
```sh
cd server
```

3. install package
```sh
npm install
```

4. run backend

```sh
node index.js
```
If you want to restart the server at any change you can also install nodemon and start the server like this
```sh
nodemon index.js
```


