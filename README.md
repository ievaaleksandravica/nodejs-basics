## [The Complete Node.js Developer Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728836?start=0#content)

This repository is based on the Udemy course  [The Complete Node.js Developer Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728836?start=0#content)
 and follows all the sections and excercises

#### Notes App
![image](https://user-images.githubusercontent.com/79845207/136558092-ba03c9bf-0e72-4c2a-8f79-1974e5ad61af.png)
![image](https://user-images.githubusercontent.com/79845207/136558387-8f001bca-a67d-4ec4-a379-5284dc6444c2.png)
![image](https://user-images.githubusercontent.com/79845207/136558302-852fd029-d291-4166-b9fa-9a467e781eb7.png)
![image](https://user-images.githubusercontent.com/79845207/136558206-6d74dc8a-f7a0-432f-8293-6c399d124b3c.png)

#### Weather App 
![image](https://user-images.githubusercontent.com/79845207/138916648-e59cd68a-8fd6-4a58-878c-73d2e959b343.png)

#### Task App 
 
### Playground
* `1-json.js` Examples of JSON `parse` and `stringify` functionality combinining it with `fs.writeFileSync` and `fs.readFileSync` functionality
* `1-json.json` JSON object storing data
* `2-json.js` Challenge based on the above mentioned JSON and FS functionality:
   * 1. Load and parse the JSON Data
   * 2. Change the name and age property
   * 3. Stringify the changed object and overwrite the original data
* `2-json.json` JSON object storing data
* `3-arrow-function.js` examples of ES6 arrow function syntax and benefits
   * 1. alternative syntax with `=>`
   * 2. shortcut for one line functions, no return needed
   * 3. do not work with objects, need to use the ES6 syntax of `name() {}`
   * 4. they are not binded by their own `this` keywords therefore great to use with standard functions
* `4-arrow-challenge.js` challenge to create method where you need to use the filter method. `getTasksToDo` uses ES6 syntax, `filter` method uses arrow function shortcut.
* `5-callbacks.js` - callback function examples with `setTimeout` (async), `filter` (sync). Includes example of `geocode` callback function written by as and challenge of `add` callback function.
* `6-es6.objects.js` 
   * object property shorthand - if property name is the same as variable name, you can use the shorthand to define it in objects.
   * object destructuring - syntax `const {property1: newName, property2, property3 = default} = object` -> allows you to access variables with less code
* `7-raw-http.js` - make an http request using the core `http` or `https` node modules.
   * need to store the data somewhere
   * register the event data beginning
   * register the event data end
   * you actually need to fire up the event.
   * `request.on('', () => {})` is basically an event listener
* `8-default-params.js` - examples on how to assign default values to prevent the app from crashing or displaying  `undefined`: it's very simple. Assign a value to the params in your function, both for strings (string value) or objects (provide an empty object)

### Notes App
* `app.js` 
   * Script to call functions from other files 
   * Require and use validator npm module
   * Require and use chalk npm module
   * Get the arguments entered in console. e.g. `node app.js add`  `process.argv` - argument vector (array) - first node path executable on your machine, path to app.js, value you provided
   * Setting up yargs commands for add, remove, read and list.
   * Adding and defining yargs options, using the `builder` property.
   * Replacing `console.log(yargs.argv)` with `yargs.parse` to skip the duplicate printing, but still allow to parse the options.
   * Configuring `add` and `remove` commands by defining yargs commands and calling the related functions in the handler.
   * File is refactored to use ES6 and Arrow Function Syntax
* `notes.json` File storing all the notes.
* `notes.js` Functions to be called in app.js file
   * `addNote` function that loads existing notes, checks if a note exists, if not, then adds a note to notes array & updates the json file. Run with help of `loadNotes` and `saveNotes` helper functions. Refactored with `find` instead of `filter` function.
   * `removeNote` function that loads, existing notes, checks if a note is found, if yes, removes it and updated the json file.  Run with help of `loadNotes` and `saveNotes` helper functions.
   * `listNotes` function that loads all notes and displays them.
   * `readNotes` function that finds a note by title and displays the body of the note.


### Weather App 
* `app.js` 
   * requiring `postman-request` npm package for easier API processing
   * requiring `config.js` to access WeatherStack API key
   * calling WeatherStack API key, using the `request({url:url}, (error, response) => {}) function
   * one of `error` or `response` is always going to be undefined.
   * printing a small forecast to the user (using `WeatherStack` API)
   * calling & returning geocode using a callback function `utils/geocode.js`
   * calling & returning forecast using a callback function `utils/geocode.js`
   * callback chaining - calling forecast callback within geocoding function.   
   * adding `process.argv` to get location from the terminal
* `utils/geocode.js` 
   * geocode callback function using `mapbox` api
   * Error handling 
     * low level errors, where error argument exists and response is not defined
     * no matching results - there is a response but with error code
   * returning respective data in callback
   * refactored using destructuring and es6 object shorthand   
* `utils/forecast.js` 
   * forecast callback function using `weatherStack` api
   * Error handling 
      * low level errors, where error argument exists and response is not defined
      * no matching results - there is a response but with error code
* new folder `web-server`
   * initializing npm with `npm init`, created the `package.json`
   * `npm i express` to install the package
   * subdirectory `src` - all node.js scripts will be stored here.
   * `app.js` - load express, configure it to serve something up and start the server.
      * get the express library with single function `express` called to create new express application
      * all you need is to call `express()` function with no arguments
      * app.com, app.com/help, app.com/about - different routes
      * `app.get(route, function (req, res)` what to do when someone visits)
      * `req` - request - info about the requestor
      * `res` - response - info we will send back to the requester
      * start the server on local host `localhost:3000` (port) and callback function (asynchronous) using `app.listen(port, callback function)`
      * sending back html or json as a response
      * to link it to other html file it has to be absolute path `__dirname` and `__filename` - gives you absolute path
         * `path` module to manipulate string paths
         * `path.join()` will let you combine your current path using `_dirname` and navigate where you want to go with eg. `../src` to go to src folder
         * you can now put content directly in the html files of the above mentioned directory, e.g. `public` and then access it via `/about.html` this is done with a help of `app.use(express.static(publicDirectory))` function
         * in that case you also do not need the routes set up using `app.get` 
   * new subdirectory `public` thats gonna store all the assets as part of the express server
   * `index.html` - by naming convention this means that it is gonna be served by default (will show up for the root of the website)
   * `hanldebars` template engine to render dynamic webpages, using express
     * render dynamic documents as opposed to static ones and easily create code that we can use across pages
     * using two npm modules `handlebars.js` and `hbs` - you only need to install hbs as it already is based on handlebars
   * to use handlebars, you need to
      * `app.set('view engine', 'hbs')` - need this function to allow handlebars to work
      * setup the `.hbs` template in `src/views` folder
      * setup route in `src/app.js` using `app.get` method
      * use `res.render(view, {key: value})` in the route
      * use dynamic variables with `{{key}}` syntax in the `.hbs` file
   * use `app.set('views', viewsDirectory)` to customize the name or the path of all your hbs templates
   * setup partials
      * you need to load it first with require
      * `hbs.registerPartials(partialsDirectory)` to associate the right directory with your partials
      * then create a file in your partials folder with `.hbs` extension
      * add your partial in the view with `{{>partialName}}` syntax
   * `404 errors` when page could not be found
     * `*` wildcard character to be used to idenfity the pages that could not be found yet.
     * `help/*` to specify more specific paths
     * the above mentioned routes have to be listed last as express looks for the routes starting from top to bottom in the doc. 
   *  `src`
      * `app.js` - everything that is needed to manage express server (See more details in the comments section)
         * setting up routes
         * using geocode and forecast methods to get results
      * `utils` - both `geocode` and `forecast` methods, same as wheather app.
   * `public` store all the assets as part of the express server
      * `css` css related docs, e.g `style.css` linked in `index.html` using  `<link rel="stylesheet" href="/css/styles.css">` path
      * `js` client side js  related docs, e.g `app.js` linked in `index.hbs` using  `<script src="js/app.js"></script>` path
       * use `fetch` and`then` method to replicate behaviour of async js and retrieve API data for the weather forecast
       * use `addEventListener` to get the users input
   * `templates` stores all handlebars assets - views and partials
   * `Query String`
     * using the following format '?key=value', e.g. 'http://localhost:3000/products?search=games&rating=5'
     * you can access it in the routes, using 'req.query' method.
     * use `if/else` to send back error messages.
     * `Cannot set headers after they are sent to the client` error message in terminal if you try to send back the response twice.
     * You can use the callback function as usual but as a result you will want to use `res.send` and params will be based on `req.query...`


### Task App 
##### Databases
* `MongoDB` 
   * https://www.mongodb.com/ open source database available for all operating systems. Launched in the same year as NodeJS - works very well together.
   * SQL database
      * Data is stored in tables.
      * Each entry is row/record
      * Each data type is a column.
   * NoSQL database (not only SQL)
      * Stored in collection (similar to js objects).
      * Each entry is a document.
      * Each data type is a field.
   * Installation
      * Go to the website and download `MongoDB Community Server` under `On Premises` section.
      * Open download folder and double click to extract the contents. Copy the folder and move it somewhere out of downloads (e.g. your user folder)
      * In the same folder create a new directory for actually storing the databases and call it e.g. `mongodb-data`
      * start the database by running `/Users/ievaaleksandravica/mongodb/bin/mongod --dbpath=/Users/ievaaleksandravica/mongodb-data` in your terminal
      * this will create multiple files in `mongodb-data` and set up the server.
      * if you see a message: `"Waiting for connections","attr":{"port":27017,"ssl":"off"}}` means your server was indeed setup up and running.
   * Installing Mongo GUI - visualization / admin interface
      * `Robo 3T` https://robomongo.org/ - install it from the internet and run through the installation wizard. 
      * Once you will be done with it, under the `MongoDB Connections` section `Create` a new one.
      * The default port used will be `27017`
      * Once you created it, you can 
      * 1.`Test` the connection and if everything is green (note: you have to have the server running in your terminal) and * 2. `Save` and check that connection was properly build by right clicking on the DB in the RoboT3 tool, choosing `New Shell` and writing `db.version()`. Execute it by clicking the green play button and if you get a version, setup is successful.
   * Connecting and Inserting Documents
      * Install `mongodb` npm package `npm i mongodb@4.1.3`
      * Require the installed package as usual
      * call `mongoDB.MongoClient` function that will give you access to connect.
      * store local host url `mongodb://127.0.0.1:27017`
      * give your database any name
      * call `MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {callback})`
      * in the callback to interact with the db, you can use `client.db(databaseName)` to retrieve the database instance
      * then you can  create a collection (table) and insert one record (document) using  `db.collection(collectionName).insertOne({yourDataObject})`.
   * Inserting documents
      * `insertOne` for one document insertion. You can provide callback to get information back about the process. `(error, result => {error or result.insertedId}`
      * `insertMany` for many document insertion. Works very similary to insertOne, just provide array of objects.
      * you can always look up for documentation on MongoDB to get familiar with the setup: https://docs.mongodb.com/drivers/node/current/usage-examples/insertMany/
   * The ObjectID
      * `_id` automatically created unique id of a document.
      * `ObjectId("61826b5c4ad78a85c4caf341")` - different pattern than standard SQL database. These are `GUI` - Globally Unique Identifiers - unique using an algorithm without having to determine what will be the next id (so no auto-incrementation). This gives ability to scale well in a distributed server system. 
      * Can generate ids for documents before inserting them into the database. 
      * Get the ObjectID property `const ObjectID = mongodb.ObjectId`
      * Generate newID `const id = new ObjectId()`
      * Access the timestamp when GUI was generated `id.getTimestamp()`
      * You can then assign this id manually if you want in your collection document insert function.
      * Ids are stored as binary data `ObjectId(_id)`, because it reduces the storage - this has 12 bytes. If you convert it with `toHexString` to actual string it wil double in size.
   * Querying Documents
      * `findOne` function to find one record, matching something. Takes two params ({searchparams}, (error, response) => {}). If no matching records, you get `null`. If multiple matches, you will get the first one.
      * if you wanna search by `_id` you have to provide the object id `ObjectID('')`
      * using `find` to find multiple documents. It does not take a callback as the second argument. It will return a `cursor` instead. To work with that use `toArray` method which then takes a callback with error and response as before, e.g. `(error, response) => {console.log(response)}. Instead of using `toArray` you can also use `count` for the cursor with a callback.
   * Updating documents
      * `updateOne({filter}, {update {$set: {}}}).then(()=> {}).catch(() => {})`
         * `$set` - sets a new value
         * `$inc` - increment a value
      * `updateMany` - basically works the same way as updateOne.
   * Deleting Documents
      * `readOne` and `readMany` - similar syntax to all the other methods. Only one parameter filter is needed `.deleteMany({filter}).then((response) => {}).catch((error) => {})`
* `Promises`
   * Promises are built on a callback pattern.
   * Prmoises is an enhancement of callbacks.
   * You will normally never create promises yourself, they will be provided to you in the libraries that you are using. 
   * If you need to create one you can do it by calling `new Promise((resolve, reject) => {})`
   * e.g. `new Promise((resolve, reject) => {
    setTimeout(() => { resolve([2, 3, 4, 5])
    }, 2000)})`
   * Promise is an object with new methods.
      *`.then` - function when things go well.
      * `.catch` - function when things go wrong.
   * Vocabularly:
      * `pending` when we first create the promise.
      * `fulfilled` if resolve is called
      * `rejected` if reject is called
##### Rest APIs and Mongoose
* `Mongoose`
   * Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
      * https://mongoosejs.com/
      * `npm i mongoose@6.0.12` to install
      * Field validation
      * Authentication
      * Create and customize models
      * `ODM` - object document mapper - map your objects to documents in the database.
   * Connecting to Mongoose:
      * `mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', { useNewUrlParser: true, useCreateIndex: true })`
   * Creating models and creating instance
      * Create a new model: `const Model = mongoose.model('ModelName', { field { properties}})`
      * Create instance: `new Model({ properties })`
      * Save data `instance.save().then(() => {}).catch(()) => {}`
   * Data validation and sanitization
      * `required: true` - make a field required
      * `trim: true` - remove spaces before or afters
      * `lowercase: true` - change all letters to lowercase
      * `default: xx` - setup default value.
      * `validate(value) { if (value < 0) { throw new Error('Age must be a positive number.') }}` - set up custom validation
      * `npm i validator@13.7.0` for more complex validations you can use some libraries   
* `Rest API`
   * Structuring Rest API
      * `REST API` - Representational State Transfer - Application Programming Interface.
      * `API` set of tools that allows you to build software applications. 
      * `REST` allows clients access and manipulate resources using predefined operations. 
         * `RE` - representation of data
         * `ST` - state is being transfered from a client to server
      * Requests are made via `HTTP requests`
         * `GET /tasks/a7eaa` - make request to a server, find the data, send back http response (e.g. 200 JSON response)
         * `POST /tasks` - JSON request with details, create data and send back http response (e.g. 201 JSON response)
      * The Task Resource
         * `C`reate     `POST /tasks`
         * `R`ead many  `GET /tasks`
         * `R`ead one   `GET /tasks/:id`
         * `U`pdate     `PATCH /tasks/:id`
         * `D`elete     `DELETE /tasks/:id`   
      * `HTTP Request` structure is text based
         * Request line `POST /tasks HTTP/1.1` (method, path, http protocol)
         * Headers: key/value pairs `Accept: application/json, Authorization: ....` - as many as we need.
         * Request body: JSON `description: 'Order new drill bits'`
   * Installing Postman
      * https://www.postman.com/
      * `New -> Request`
      * `Collection` like a folder
* Resource Creation
   * Basic setup
      * `npm i nodemon@2.0.14 --save-dev` nodemon as dev dependency.
      * `npm i express@4.17.` installing express.
      * `index.js` starting point for our application where we initialize the express server. 
         * require express: `require('express')`
         * call express function: `express()`
         * listen to the server: `app.listen(port, () => {})`
      * `package.json` scripts to start the application
         * `"start": "node src/index.js", "dev": "nodemon src/index.js"`
      * Run the script: `npm run dev`
   * Resource creation (POST)
      * Setup routes in `index.js`
         * `app.post('', (req, res) => { res.send() })`
         * `app.use(express.json())` to automatically parse json (set it up in your index.js)
         * use `req.body` to get the incoming body data (JSON)
      * Execute the API call in `postman`
         * new collection on Postman `Task App`, then `Add Request`
         * execute a `POST` request to `localhost:3000/users`
         * send data back from Postman by going to `body` - `JSON` - here will be everything you need to create the user.
      * Use your created `models`
         * have your models stored under `src/models` that store only model definitions and export them `module.exports = User`
         * then you can `require` the `mongoose.js` (which connects to the server) and the `user.js` (which is the model definition.)
         * then you can finally create a new user with the `res.body` params and use the promises for error handling. 
         * `const user = new User(req.body)`
         * `user.save().then((res) => {..}).catch((error) => {..})
      * Handle `error` codes: 
         * if error occured, you still get a `200 OK` status because the API call could happen, even if it returns an error. To fix that, use `4**` status codes for wrong data and `5**` for server error.
         * https://httpstatuses.com/
         * before sending baack the response, you can assign the error code `res.status('400')`
   * Resource reading (GET)
      * `app.get("/users", (req, res) => { User.find({}).then((response) => { res.send(response)}).then((error) => { res.send(error)})})` for all users.
      * `app.get("/users/:id", (req, res) => { User.findOne({_id : req.params.id}).then((response) => { res.send(response)}).then((error) => { res.send(error)})})` for one user.
      * if empty response is given, that is considered a success, so you have to handle it manually (with if else)

### Comments
#### NPM modules
* `npm init` initializes npm and creates package.json
* `npm init -y` initializes npm without asking all the questions
* `npm -i package@version` use for installing packages locally
* `sudo npm -i package@version -g` use for installing packages globally (installing on operating system itself) - don't need to require it, gives access to new command in the terminal, in case of nodemon package you can now have nodemon command.
* `npm install` recreates node_modules folder in case its overwritten/deleted for some reason
* Avoid global modules (especially for running scripts)
   * you can set up your own script using terminal commands, e.g.  `package.json - scripts` object, e.g. `"dev": "nodemon src/app.js -e js, hbs"`
   * issue here is that `nodemon` is a terminal command and needs to be installed locally.
   * to prevent that you have to
      * uninstall it locally `npm uninstall -g nodemon` 
      * install it in your dependencies using `npm install nodemon --save-dev`.
      * now you can run your script with npm install, e.g. `npm run dev`

#### Useful npm modules
* `validator` - validates the content of a string
* `chalk` - let's us customize how things are printed in the terminal
* `nodemon` - gives more information about what's happening when you run it. You should just use `nodemon app.js` to execute a file using the nodemon package. If you apply changes it does display them automatically. use ctrl+c to exit
* `yargs` - application that helps to parse command line arguments. Provides hash object instead and parses it. Allows to create specific commands and execute the code you want.
* `postman-request` request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
* `express` minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* `path` defauly node module, does not need to be installed, helps to work with file path.
* `handlebars.js` Handlebars.js and Mustache are both logicless templating languages that keep the view and the code separated like we all know they should be.
* `hbs` Express.js view engine for handlebars.js
* `mongodb` The official MongoDB driver for Node.js.
* `mongoose` Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

#### Debugging tools:
* `console.log` - the most basic one, but helps to debug logic. Simply put `console.log(value)` and you will see the result in the console.
* `node debugger` - works with browsers, needs to be added.       
      * Simply put `debugger` where you want your app to stop and you can get all the values existing so far.
      * In order for this to run, your terminal command will now be e.g. `node inspect app.js list` -
      * Head to the browser (Chrome is the only browser that can be used) and use `chrome://inspect` and you will see two values - Google Home and Remote Target. Get the remote target and `inspect`.
      * Import your folder. Execute the run command. It will pause at `debugger` part. In the `scope` part you can get access to the variables you already set up.

#### Error Messages
* `ReferenceError` gives an explicit message of why things fail. It's still up to us to work through it.
* `Stack trace` - after the error message - all functions that are running until it gets to the error. First line usually has the most important message, e.g. at saveNotes (/Users/ievaaleksandravica/code/ievaaleksandravica/nodejs-course/notes-app/notes.js:60:27)

#### Asynchronous Node.js
* `setTimeout` - one of the most common async methods -> Write some code after specific time has passed.
   * Takes two params: function and time in miliseconds to wait.
   * It initializes the method, but moves on to the next one before this one is finished - that's asynnchronous model.
   * Even if you set timer to 0 seconds, it will be run after the other methods.
* `Call Stack` - data structure provided by V8 JS. Purpose to track the execution of the program. Keeps track of all the functions that are currently running.
   * Synchronous example
      * `main()` - first function (node.js created function)
      * then other functions, e.g. `console.log()` - when it's done, it gets removed from the stack
      * then moving on to the next function. When done, also main function gets removed.
   * Asynchronous example
      * starts with `main()` as in synchronous
      * goes one by one functions.
      * `setTimeout(() => {})` - it's a Node function, not JS. it gets initialized and move to the Node API events - it's not blocking the rest from the app to run.
      * In case of synchronous js program is finished when `main` function is finished, but with async it's done only when all the methods that are in the Callback Queue.
* `Node APIs`
   * Synchronous example - no actions.
   * Aynchronous example
      * when we call `setTimeout()` we are registering an event with Node.js API - this is an event callback pair, where the event is wait 2 seconds and the callback is the function to run.
* `Callback Queue`
   * Synchronous example - no actions.
   * Aynchronous example
      * maintains the list of all of the callback functions that are ready to get executed / is done. (from the Node.js API events)
      * to get it executed, you still need to push it back in the Call Stack. 
      * this is `Event Loop` - it will add the function back to the Call Stack only once it's empty.
* None of the asynchronous events are going to run UNTIL the `main()` function is done.
* `Callback functions`
   * callback function is a function that we provide as an argument of another function with intention of having it called later on.
   * using a callback function does not mean it will always be asynchronous, e.g. forEach is actually synchronous
   * asynchronous functions are interacting with node.js API, whereas synchronous ones are based on plain JS
   * `return` pattern is not gonna work if we start to use asynchronous things within our function, that's where `callback` pattern comes in.



#### API Notes
* In order to hide your API keys with JS - create a file `config.js`, run command `touch .env` to create a `.env` file, run `echo '.env*' >> .gitignore` to add it to the gitignore and add `config.js` to the .gitignore file as well.
* Create a variable in your `config.js` to be an object that stores keys, export it and import it in your file where you wish to use.
* API modules used: 
   * `weatherstack` - Real-Time & Historical World Weather Data API - Retrieve instant, accurate weather information for any location in the world in lightweight JSON format
   * `mapbox` - Mapbox is the location data platform for mobile and web applications. 

#### Git
* `Version control` - allows you to manage different code versions of your application over time. You can always revert to a previous state.
* Install git tools: https://git-scm.com/
* `git --version` should give you a version if everything is installed properly.
* You need initialize `git init` for each project you wanna use it on (from the root folder)
   * everything gets stored in `.git` directory (but it is hidden) and gets altered when you use different git commands. If you want to see it in VS Code, you can change it in Code -> Settings -> Exclude section.
   * `repository` - place where things related to git are stored. there is a local repositories (computer) and remote repositories (such as github or heroku)
* Different git processes
   * `Untracked Files` - by default all the new files you add to your project will show up as untracked files.
   * `Unstaged Changes` - if file has already been included in the previous commit, but the changes have not been commited yet.
   * `Staged Changes` - everything you want to save from all the untracked files. (using `git add .`)
   * `Commits` - takes all of the files from stages changes, bundles them up and saves them (using `git commit -m`)
* Git commands
   * `git status` prints the current status of git.
   * `git add .` all untracked or unstaged files are added to changes ready to be committed.
   * `git commit -m "meaningful message"` committing the changes that were ready.
* To ignore certain files, create a file in the root `.gitignore` and simply add the files and directories, e.g. `node_modules/`

#### Github
##### SSH
* `SSH` - Secure Shell, gives means of securely communicating with another machine. 
* `SSH Key Pair` - Set of two files to facilitate the secure connection.
* `ls -a -l ~/.ssh` allows to check about existing ssh keys. if you have two files in a pattern like `id_....` and `id.....pub` that means you already have the SSH keys setup.
* to create SSH keys:
   * `ssh-keygen -t rsa -b 4096 -C "ieva..@gmail.com"` allows to generate the key pair
      * `-t rsa` type rsa
      * `-b 4096` how many bits you want for your key, most common 4096
      * `-C "ieva..@gmail.com"` - comment for the key
   * wizard will open upp and ask for:
      * enter file where to save the key, default is ok.
      * enter passhphrase - can also enter none
   * key was now created.
      * `id_....` private file to never be shared
      * `id.....pub` will be shared with github and heroku
   * `eval "$(ssh-agent -s)"` - try to start an ssh agent. if it is already running it will print the id (Agent pid 24558)
   * `ssh-add -K ~/.ssh/id_rsa` setting up the connection.
##### Pushing to Github
* Create a new repository directly in Github (under the `+` sign), give whatever name you want to it.
* You will get instructions on how to deal with it. If you initiated `git` already you need to push an existing repository
   * `git remote add origin git@github.com:....` you basically set up the contact so you can use it in the future.
      * `remote` is a version of your project stored somewhere else. 
      * `add` adds, creates a new remote.
      * `origin` you can name the remotes how you want it, but by convension its always origin.
      * `git@...` address of the user.
   * `git push -u origin master` 
      * `-u` allows to set the upstream default (origin)
      * `master` main branch
* Finalize your SSH key setup by giving it to Github.
   * under your name, go to settings -> SSH and GPG keys
   * new SSH key -> name (best based of the device)
   * key - contents of the public SSH file, get it by running this command: `cat ~/.ssh/id_ed25519.pub`
   *`ssh -T git@github.com` test your github connection. - (Hi ievaaleksandravica! You've successfully authenticated, but GitHub does not provide shell access.) this is a good message.
* Now you can push all git commits and push it to main.


#### Heroku
* Install Heroku command line tools for your machine: https://devcenter.heroku.com/articles/heroku-cli: `brew tap heroku/brew && brew install heroku`
* `heroku -v` should give you a version if everything is installed properly.
* `heroku login` links the commands from terminal with your heroku account.
* set up SSH key file to heroku: `heroku keys:add` - it will look for which keys you want to upload.
* `heroku create app-name` creates a location where you can view the application and second url for git repository.
* `heroku git:remote -a aleksandrav-weather-app` add Heroku app as a Git Remote.
* We need to tell which file we need to run in `package.json` file :  `"scripts": {"start": "node src/app.js" },`
* In `app.js`:
   * `const port = process.env.PORT || 3000` - sets the port to the environment variable value with default port.
   * change app.listen with the port variable `app.listen(3000, () => { console.log('Server is up on port.' + port) })`
* Push to heroku.
   * go to your `main` branch and make sure that the changes are there.'
   * `heroku buildpacks:set heroku/nodejs` specify language
   * `git push heroku 

