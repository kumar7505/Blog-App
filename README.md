
# About the Project 

The Blog-App is a web application built using the MERN stack. It allows users to create, delete, update, and modify blogs. Each blog is linked to the user who created it, ensuring that only the creator can modify or delete their own blog posts. The app provides an easy-to-use interface for users to manage their blogs, with features for adding new content, editing existing posts, and deleting unwanted ones. This project showcases how to build a full-stack application with secure user authentication and role-based access control.

<img src="images/logo.png" alt="Logo" width="80" height="80">

## built with

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

### Windows

  * [Download Node Js](https://nodejs.org/en)
  * [Download Git](https://git-scm.com/downloads/win)
  * [Download Mongo db](https://www.mongodb.com/)

### Cloning this repo

```
  > https://github.com/kumar7505/ToDo-App-with-MERN.git
  > cd ToDo-App-with-MERN
```

Install my-project with npm

```bash
  > npm i
```
    
  
## Server explanation

This to-do list app uses APIs to manage tasks by interacting with a backend server. The app sends HTTP requests to create, retrieve, update, and delete tasks in a MongoDB database, ensuring real-time synchronization between the client and server for task management.
## Environment variables

Create a .env file and set the environment variables

```bash
  PORT = LOCALHOST PORT NUMBER
  Mongo_PORT = YOUR MONGO DB LOCALHOST URL
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PORT` | `string` | **Required**. Your PORT number |
| `Mongo_PORT` | `string` | **Required**. Your mongo db localhost url |

## Executing the web

#### Executing the server

```bash
  > cd server
  > npm start
```

#### Executing the UI

```bash
  > cd ..
  > cd 'todo frontend'
  > npm run dev
```
