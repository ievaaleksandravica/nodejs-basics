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
![image](https://user-images.githubusercontent.com/79845207/144475875-5b7266d5-2c7a-4971-ad2e-2639cad5236e.png)

#### Chat App


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
   * Resoure updating (PATCH)
      * `patch` is designed for updating an existing resource.
      * `app.patch('users/:id', async (req, res) => {
    try {} catch (error) {}})`
      * `User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })`
         * `new: true` returns the updated document
         * `runValidators: true` validations will be run on the new value.
      * set up `error` handling for: invalid parameters, empty ids, validation errors and server errors.
   * Resource deletion (DELETE)
      * `app.delete('/users/:id', async (req, res) => {try { } catch (error) { })`
* Promise Chaining
   * if you try to perform more promises, you could technically integrate the second callback in the `then` promise of the first one. However, it has an issue with a lot of nesting and complexity, also duplicate code.
   * with Promise Chaining we can simplify the code, by executing the first callback as usual, call the second callback within the `then` call with `return` and then stop the first `then` promise and create a second one: `function(a, b).then((response) => {return function(response, c)}).then((response) => {}).catch((error) => {})` * this gives a benefit of no nesting.
   * `promise-chaining.js`
* Async/Await
   * for promise based code that looks more synchronous than asynchronous. small set of tools to work with promises.
   * `async` function in which you can use `await` feature.
      * first created an empty callback and console.log. By default it will return `undefined`
      * mark function as `async` before the params. this will no longer return undefined, but `Promise { undefined }` - returns a promise with value undefined.
      * `async` functions will always return promise.
      * as it returns a promise, you can immediately use promise with `then` and `error`. This will then return the actual result.
      * you can get `catch` with throwing an error.
   * `await` - function inside the async callback which allows you to not write promise outputs for every promise but only once for the await. It will still execute the promises as defined but without each promise `then` and `catch`
   * if one promise is rejected, the remaining promises will not run.
* Seperate route files
   * create new router using `const router = new express.Router()` (in a new file)
   * move all your routes to the new file - you will need to replace `app` with your new routers name. (do not forget to require everything you need.)
   * export via `module.exports = router`
   * import in `index.js`
   * use `app.use(router)` to connect your index.js file to the new routers.
##### API Authentication and Security
* Securily storing passwords.
   * No passwords should be stored as plain text to avoid any problems with hacking etc.
   * We will store `hashed passwords` with algorithm that is not reversable - `bCrypt`
      * `npm i bcrypt@5.0.1`
      * `const bcrypt = require('bcrypt')`
      * `bcrypt('PlainPassword', numberOfHashRounds)` 
      * it has to be a part of async / await function as it uses promises.
      * number of hash rounds - 8 is an optimal number for hashing.
      * `bcrypt.compare('red123456', hashedPassword)` compare the plain text password with hashed one that we are storing.
   * Hashing is different than encryption
      * Encryption can be reversed (two way algorithm)
      * Hashing can not be reversed (one way algorithm)
   * In our task app, passwords are using in two places:
      * When creating a user
      * When updating a user
      * Customizations will be done not in the router, but in the model instead
   * Mongoose supports `middleware` 
      * Way to customize a behavior of your mongoose model.
      * https://mongoosejs.com/docs/middleware.html
      * We want to run some code, before we `save` the user - check if there is a plain text password and if yes, hash it
      * To take advantage of the middleware, we first have to create the schema and then pass the model:
         * `const userSchema = new mongoose.Schema({here goes all your attributes})`
         * `const User = mongoose.model('User', userSchema)` - now here you can simply use the schema created already.
         * this restructuring will allow us to take advantage of the mongoose middleware
      * Now the middleware gives you two options to work with your model's schema
         * `userSchema.pre` - before action
         * `userSchema.post` - after action
      * `userSchema.pre('save', async function(next) { const user = this next })`
         * `this` gives you access to the current instance
         * `next` informs when you are done running the function
      * It will work for `create`, but `update` queries bypass this middleware. In order to make it work:
         * Go to your routes
         * `findByIdAndUpdate` this operation bypasses the middleware and therefore does not work.
         * change your method to first just identify the user, using `findByID`. 
         * then use the `loop` to find the matching updates.
         * finally, use `user.save()` to actually save the user - at this moment the middleware can work again.
      * Now you can start the `hashing` process
         * First need to check if it is already hashed. `if (user.isModified('password'))`
         * `user.password = await bcrypt.hash(user.password, 8)`
* Logging in users
   * setting up a new route `router.post('/users/login', async (req, res) {})`
   * define a new function `findByCredentials(email, password)` in the model file.
      * you need a seperate schema as a function for this and pass that to the model `userSchema.statics.findByCredentials`
      * First you use `findOne` based on the email address.
      * If no matches, you want to `throw new Error ('')`
      * If a match is found, you want to verify it using `bcrypt.compare(password, user.password)`
      * If passwords do not match, throw an error again.
      * If everything matched, you want to `return user`
   * call this function `const user = await User.findByCredentials(req.body.email, req.body.password)`
   * with error messages for login, is best to not be too specific to not expose too much information.
   * you had to set that `email` is unique, however, that means that you also need to drop the database and recreate it by just running the terminal again.
* JSON Web Tokens
   * We will have two kind of routes: 
      * `public` visible to everybody (sign up and login)
      * `private` based on authentication (everything else)
   * Login route needs to send back an authentication token to be used in all the other routes.
   * `JWT` - JSON Web Token Standard
      * tokens can expire after x time
      * npm module `npm i jsonwebtoken@8.5.1`
      * Token consists of three parts (seperated by `.`) - 3 base64 encoded JSON strings
         1. header with meta information
         2. payload (body)
         3. signature to verify the token.
   * Creating token
      * `const jwt = require('jsonwebtoken')`
      * `const token = jwt.sign({ _id: uniqueIdentifier }, 'anyprivatekey')` - generates the token
   * Verifying token
      * `const data = jwt.verify(token, 'thisismynewcourse')`
      * returns an object with the data if verified.
      * if not verified throws an error.
   * Set token to expire
      * `{ expiresIn: '30 seconds' }` add an option as the third argument when creating the token with `sign`
   * Generate JWT for User Login and Sign Up routes and send it back to the user.
      * in the user model, generate a new instance (model) method `userSchema.methods.generateAuthToken = async function ()` 
      * access the user using `this`
      * use the `jwt.sign` method to generate the token
      * take `_id` as identifier and value `user._id.toString()` - you have to convert it.
      * in your route call the method on the user instance `const token = await user.generateAuthToken()`
      * then you can pass this token in the response.
   * Track tokens in the user model
      * Allows to login in multiple devices.
      * Create a new field on the user model - it's gonna be an array of objects `tokens: [{ token: type:string}]`
      * Then in your generate token method, you need to push the tokens to the array everytime you generate them:
         * `user.tokens = user.tokens.concat({ token: token })`
         * `await user.save()`
* Express Middleware
   * Without middleware: new request -> new route handler
   * With middleware: new request -> do something -> run route handler.
   * Set up a new middleware function:
      * `app.use((req, res, next) => { res.status(503).send({ error: "Currently site is under maintenaince! We will be back soon." })`
      * you have access to the same `req` and `res` arguments.
      * `next` is an argument to use if you want to proceed with running the routes after receiving request.
      * if you do not specify the `next` the route handlers will not be executed.
* Accepting Authentication Tokens
   * new directory `middleware` will store a new file for each middleware that we are trying to define. Let's create one `auth.js`
      1. create a new function `auth`
      2. export the function `auth`
      3. import(`require`) it in your `model` file
      4. add it to individual routes as the second parameter `router.get('/users', auth, async (req, res) => {})`
   * in `postman` work in the headers section 
      1. Key `Authorization`
      2. Value `Bearer token_value`
   * `auth` function itself
      1. require `jsonwebtoken`
      2. require `user` model
      3. `try/catch` block to try and autenticate the user.
      4. `req.header('Authorization')` access your token that was provided in the header and get rid of the Bearer by usin `replace()` method.
      5. verify and decode the token `jwt.verify(token, 'thisismynewcourse')`
      6. find the user, using `findOne` with two queries: `_id` and `tokens.token`
      7. If no users, then throw an error
   * Limit what you can see
      1. route `get /users` is becoming useless because noone should see all user data.
      2. refactor it to `get /users/me` to be able to read user profile.
      3. in your `auth function` send back `req.user = user` to be able to get it.
* Advanced Postman
   * Environment and environment variables
      1. Create new environment `Task Manager API (dev)`
      2. Create key/value pairs for environment variables
         * variable `url`: key `localhost:3000`
      3. Assign the environment
      4. Replace the link manually with `{{url}}` in all your API calls.
      5. Now you can easily replace the URLs
   * Authentication
      1. Multiple requests to use the same authentication pattern.
      2. Grab the token.
      3. Navigate to the  `Authorization` tab, choose `Bearer Token` - it works but still only for this request.
      4. Change the type to `Inherit auth from parent` - define the auth scheme one.
      5. `Edit` your collection, go to the  `Authorization` tab & update the token there.
      6. For the paths were you don't need authentication, simply select `No Auth`
   * Automate updating the auth token
      1. in the API call section, `Tests` section.
      2. change the token in the collection to environment variable `{{authToken}}`
      3. in your create user and login user path section `test` use this JavaScript:
         * `if (pm.response.code === 200) {pm.environment.set('authToken', pm.response.json().token)}` 
         * 200 for logging in, 201 for creating
         * it will set the `authToken` to the current one when logging in.
* Logging out
   * Logout of one session.
      * New route to allow users to log out.
      * `req.token = token` - in the Auth middleware. Will give access to the used token.
      * `router.post('/users/logout', auth, async (req, res) => {})` - in the User router
      * `req.user.tokens = req.user.tokens.filter((token) => { return token.token !== req.token })` - only return the tokens that are not currently used.
      * create new api request in Postman with inherited authorization.
   * Logout all sessions.
       * `router.post('/users/logoutAll', auth, async (req, res) => {})` - in the User router
       * `req.user.tokens = []`
* Hiding private data
   * what data to hide:
      * `password` should definitely be protected and never visible. 
      * `tokens` no need to display this either.
   * in models, create instance method `userSchema.methods.getPublicProfile`
      * in this method return `user.toObject()` - just like this it would actually return what you already have.
      * to customize it only with the data that you want: `delete userObject.password` and `delete userObject.tokens`
   * the above mentioned solution is still manual as it still requires you to call this function manually. To automate this:
      * you dont need to call the method created if you name it `userSchema.methods.toJSON`
      * it will now always work when you want to retreive `user`
      * it works because `toJSON` is what the system would already do behind the scenes with `JSON.stringify(user)`, but forcing it with toJSON method allows us to customize it and still return it as a `user`
* Authenticating User Endpoints
   * Removing `GET users/:id` route as this should not be possible anymore.
   * Customize `DELETE users/:id` route
      * add `auth` as the second parameter
      * customize url from `users/:id` to `users/me` 
      * customize id from `req.params.id` to `req.user._id` (we have access to the user from our `auth` metod set in the auth middleware)
      * refactor the `findByIdAndDelete` process with `await req.user.remove()` 
   * Customize `PATCH users/:id` route
      * add `auth` as the second parameter
      * customize url from `users/:id` to `users/me` 
      * refactor your code using `req.user` where needed and remove any id lookups.
      * no need to check if user anymore exists as the method by default requires auth and hence user.
* The User/Task Relationship
   * `models/task.js` 
      * add a new field `owner` with `type: mongoose.Schema.Types.ObjectId` and `required: true`
      * another field: `ref: 'User' - creates a relationship
      * drop the database in `Robo 3T` because you created new required field.
   * `routers/task.js` 
      * require `middleware/auth`
      * adjust a route to include `auth` as second param
      * adjust the Task object
         * `...req.body` - ES6 dynamic shorthand to take all the fields from the body,
         * `owner: req.user._id` - take the id from the user from the req as this is passed on via `auth`
   * `index.js`
      * 
   * `models/user.js`
      * create a virtual model - relationship between two entities
      * `userSchema.virtual('tasks', {})` - sets up many to one relationship between two models without storing it in the database
      * object params:
         * `ref: 'Task'` object we are referring to
         * `localField: '_id'` related field in this model
         * `foreignField: 'owner'` related field in the other model
* Authenticating Task Endpoints (`routers/task.js`)
   * add `auth` as second parameter
   * change the way to identify the task to `await Task.findOne({ _id, owner: req.user._id })`
* Cascade Delete Tasks
   * when user chooses to delete himself
   * we can do it using middleware
   * `userSchema.pre('remove`', async function (next) {})`
   * `const user = this`
   * `await Task.deleteMany({ owner: user._id })`
   * `next()`
##### Sorting, Pagination and Filtering
* Working with Timestamps
   * creating fields `createdAt` and `updatedAt`
   * to enable timestamps, need to customize the schema
   * `models/user.js`
      * `const userSchema` - here we need to provide a second argument that is also an object
      * `timestamps: true` should be the value of this object
      * as usual, when modifying schema, you need to wipe your database
      * now, create a new user and now you will see the two new fields.
   * `models/tasks.js`
      * here we need to first refactor the way how we define the model/schema.
      * `const taskSchema = new mongoose.Schema()`
      * `const Task = mongoose.model('Task', taskSchema)`
      * then do the same we did for user model with the second argument object with `timestamps: true`
* Filtering data
   * options for the user
   * focus on `GET /tasks` route, because this is the only one that sends back an array of data
   * if you have a lot of data, it will be slow and outdated / unused data
   * will achieve it by using the `query parameters`
   * best to use `await req.user.populate({ path: 'tasks', match: { "completed": "false"} }).execPopulate()` function to populate the tasks with a certain criteria, but does not work for me, so I am sticking to `find`.
   * query params can be added to the API call `{{url}}/tasks?completed=true` and Postman automatically sees it as a `key`
   * to make it dependent on the query params, do the following:
      1. use your `find` or `populate` method with object `match` => `find(match)`
      2. create a new `const` for that object with the basic criteria with id lookup => `const match = { owner: req.user._id }`
      3. do an if lookup to assign the `completed` value if any `if (req.query.completed) {match.completed = req.query.completed === "true"}`
   * with this setup you can now easily make three requests:
      1. all tasks
      2. completed tasks
      3. incompleted tasks
* Paginating data
   * Pagination, also known as paging, is the process of dividing a document into discrete pages, either electronic pages or printed pages. 
   * e.g. Google Search results are using `pagination` - even if it finds a lot of results, it does not show them all on the same page, you have many pages.
   * e.g. Instagram is fetching the next 'pages' behind the scenes as you are scrolling (here usually you don't need to manually request data)
   * not fetching all the data all at once.
   * `limit` and `skip`
      * `GET /tasks?limit=10&skip=0` get 10 results and do not skip any of them (means first page)
      * `GET /tasks?limit=10&skip=20` get 10 results and skip 20 (means third page)
      * you could use it with the `populate` approach by adding a new key/value pair `options: {limit: parseInt(req.query.limit)}`
      * if you use `find`, then you can use a method for limit `const tasks = await Task.find(match).limit(parseInt(req.query.limit))`
      * same logic as for `limit` can be applied to `skip`
* Sorting Data
   * sort data in a specific order, e.g. 
      1. when the task was last created 
      2. when the task was last updated
      3. completed tasks first
      4. incomplete tasks first
   * `GET /tasks?sortBy=createdAt_asc` sample format.
   * to achieve this, you need to use `.sort({ createdAt: 1 })` method where you have an object with the field you wanna base the sorting on and 
      1. `1` for ascending
      2. `-1` for descending
   * to set this up dynamically:
      1. replace the object you use in the `sort` function with `const sort = {}`
      2. set up an `if` statement
      3. split the result of `sortBy` query string
      4. convert the value of `asc` or `desc` to `-1` or `1` using ternary operator
      5. `sort(parts[0]) = parts[1] === "desc" ? -1 : 1`
##### File Uploads
* How to upload images, store in the database and make it accessible via the server.
* Allow users to upload profile images in our task app.
* Adding Support for File Uploads
   * Express by default does not support file uploads, but there is an `npm multer` package. Multer is short form from multi-part.
   * We won't be using JSON data anymore, but `multipart/form-data` using binary data.
   * `npm i multer@1.4.3` to install the package.
   * First, exploring it with basic example in `index.js`
      1. start the server via `npm run dev`
      2. `const multer = require('multer')`
      3. you will need to setup multiple instances of `multer` if you want to use it for different types of files (e.g. pdf, jpg)
      4. in this case, we will not setup any validation and allow any type of files to be uploaded.
      5. `const upload = multer({})` new instance of multer with all the options for the configuration.
      6. `dest: images` destination (folder, where the files should be stored.
      7. `app.post('/upload', (req, res) => {()})` set up a route where to upload the images.
      8. with `multer` you get access to middleware `upload.single('upload')`
   * All files used in this section can be found here: `https://files.mead.io/5c64e8f75ffe`
   * In Postman:
      1. create a new request `POST /localhost:3000/upload`
      2. instead of using `raw json`, we need to use `form-data` - here we can specify the binary data of a file.
      3. we need to work with the `key-value` pairs. the key needs to match with what we provided in the middleware `single` option (`upload` in our case) and change the type to `file` - this will autofil the value field automatically and allow you to upload files.
   * When you execute the request:
      1. postman will look for value `upload` (as defined in the middleware function) and take the image that is there.
      2. it will store the image in `images` folder as specified in the `dest` key.
   * If you try to open the image in VS Code, it will not work, because it has binary data and VS is not able to open it.
      * If you want to see that it works properly, add the correct file extension, e.g. `jpg` to see that it works.
   * Similary setup a route `POST ('/users/me/avatar`)` in User router to setup a profile picture upload.
* Validating file uploads
   1. File size (to certain capacity)
   2. File type (e.g. only pdf or image)
   * everything needs to be configured in the options object that is passed to multer method 
      * `limits: {fileSize: 1000000}` where size refers to bytes, so if you want 1MB it is gonna be 1 million bytes - if you upload bigger files, you will get `500` error.
      * `fileFilter(req, file, cb) {}` function to filter out certain file formats
         1. `req` contains information about the request being made, 
         2. `file` contains information about the file being uploaded, 
         3. `cb` callback to tell multer when we are done filtering the file.
      * configure the function
         1. `if (!file.originalname.endsWith('.pdf'))`
         2. `cb(undefined, true)`
         3. `cb(new Error('File must be a PDF'))`
      * use regex for filename patterns in the if statement: regex101.com
         1. regex for ends with doc or docx: `\.(doc|docx)$`
         2. include it in the if statement: `if (!file.originalname.match(/\.(doc|docx)$/))`
* Validation challenge
   * setting up profile picture validation
   * adding `png, jpg, jpeg` as allowed formats
   * limiting file size to 1000000
* Handling Express Errors
   * customize the errors when file upload fails (whether file type or file size)
   * take `multer` out of the route function:
      1. add another function `, (error, req, res, next) => { }` if things fail in your route - the arguments tells express that this is a function to handle uncought errors.
      2. in the above mentioned function, send back the error message: `res.status(400).send({ error: error.message })`
   * to summarize, function with arguments `(req, res)` will be used to manage success or cought errors, whereas `(error, req, res, next)` handles uncought errors. These two functions are both added to the route - take it as the last argument of the route function.
* Adding images to User Profile
   * link between the image uploaded and the user who actually uploaded the image.
   1. add authentication: add it as second argument before multer: `auth, avatar.single('avatar')`
   2. store the image (not on your file system, because it would get wiped, everytime you deploy your code)
      * field on the user model, to store the binary data of the image.
      * adjust user model with: `avatar: {type: Buffer}` - will allow to store the binary data along side with the user.
      * remove `dest: avatar` property from the multer properties object, so that it does not store the image in the directory and instead passed the data via the function that you can use.
      * assign the image to the user: `req.user.avatar = req.file.buffer`
      * save the image to the profile (use async) `await req.user.save()`
   3. access the binary data stored in the database
      * copy all the binary data from the object
      * use jsbin.com to transfer the image in html
      * use img tag `<img src="data:image/jpg;base64,BINARYDATA">`
   4. route to delete the avatar they have uploaded
      * set up if condition to send error if no image found
      * set the avatar to undefined if exists, then send and save back response.
* Serving up files
   * set up a URL that will show the image in the browser
   * another route: `router.get('/users/:id/avatar', async (req, res) => {})` with using `try/catch`
   * find the user using `User.findByID(req.params.id)`
   * use if condition to throw an error if no user OR no user.avatar `throw new Error("Cannot find user or avatar.")`
   * if user and avatar was found:
      1. identify what file you are getting back using response headers: `res.set('Content-Type', 'image/jpg')`
      2. `res.send(user.avatar)`
   * go to the browser and open the route: `http://localhost:3000/users/:id/avatar` (in Postman you would only get binary data)
   * jsbin.com to see how can you use this image:
      1. `<img src="" alt="">`
      2. `src: http://localhost:3000/users/6192bbfd2a3cbf111a88bffc/avatar`
* Auto-Cropping and Image Formatting:
   * using npm module `sharp` to process the images processed by users before we save them.
      * ability to resize images
      * convert to unified image type (we will use png)
   * first a little cleanup
      * remove avatar and image folders
      * in user model `toJSON` method add `delete userObject.avatar` as there is no need to send back the avatar here
   * setup sharp
      * install sharp `npm i sharp@0.29.3`
      * require `const sharp = require('sharp')` in user model
      * start the server again `npm run dev`
   * adjust avatar post route
      * work with `router.post('/users/me/avatar')` route
      * remove `req.user.avatar = req.file.buffer`
      * pass your file to sharp using new const `const buffer = await sharp(req.file.buffer).toBuffer()`
      * use `resize({ width: 250, height: 250 }).png()` methods to resize and convert to png
      * use the const asignment again `req.user.avatar = buffer`
      * update `get avatar` route header to `res.set('Content-Type', 'image/png')`
##### Sending Emails
* Set up email notifications using a function via SendGrid service (npm module). There are different providers. We will use Sendgrid.
* Exploring Sendgrid
   * sendgrid.com offers free version and does not require a custom domain.
   * under Email API -> Integration Guid -> Web API -> Node.js
      * provide API key (random name), then this will create a key, add it to your confid file.
   * new directory `emails` and file `account.js`
      * import the API key from the config file
   * npm module
      * install `npm i @sendgrid/mail@7.6.0`
      * require `const sgMail = require('@sendgrid/mail')`
      * pass API key `sgMail.setApiKey(sengridApiKey)`
   * verification
      * go to settings -> sender authentication -> single sender verification
      * complete the setup and confirm the email
   * send email
      * use `sgMail.send({})` method
      * pass `to:, from:, subject:, text:` information
   * verify 
      * whether in SendGrid interface, following the verification step or checking your inbox
      * might end up in spam, because it is supposably being sent from your account
* Sending Welcome and Cancellation Emails
   * `account.js` will define functions that will be called when a certain route in e.g. `user model` is called.
   * `const sendWelcomeEmail = (email, name) => {use the sgMail.send({}function here})`
   * export the function (actually multiple functions): `module.exports = {sendWelcomeEmail}`
   * require the function in the user model: `const { sendWelcomeEmail } = require('../emails/account')`
   * integrate it in your route: `sendWelcomeEmail(user.email, user.name)`
   * test it by executing `POST` request via Postman.
   * `send` method returns a promise, so if you wanted to you could use `async/await` but it would simply mean that the system needs to wait before moving on and generating the token and sending the response. This is not required in our case though.
   * You can also choose `html` variable in the send method if you want to configure one. 
   * In SendGrid you have an option to register a new domain. You will need to change DNS records to prove that you own the domain.
* Environment Variables
   * currently our only `.env` variable is setup when we are defining `port` for heroku.
   * now we will set it up to also work locally for:
      * security
      * customization
   * `db/mongoose.js` 
      * `mongodb://127.0.0.1:27017/task-manager-api` connects to our local database, won't work when deployed to heroku. One value for DEV, one for PROD.
      * without env variables, we would not be able to customize it.
   * `index.js`
      * setup own environment variable for PORT
      * create a `config` folder and `dev.env` file in there
         * this file consists of key/value pairs, one on each line `key=value` with no spaces, commas, etc.
         * now you can remove the 3000 from `index.js`
      * use `env-cmd` npm module to use env variables
         * install `npm i env-cmd@10.1.0 --save-dev` because we only need it locally on our maschine and not on heroku
         * you will see it in the `package.json` file under `devDependencies`
      * adjust the script for `dev` in `package.json`
         * `env-cmd -f ./config/dev.env nodemon src/index.js` 
         * now when we run the dev command, `env-cmd` is going to grab all of the environment variables & then continue to run the node application with provided variables.
         * now when you will run `npm run dev` it will retreive the right env variable. If you change it, you have to restart your server.
   * `accounts.js`
      * if we leave the api key here, it becomes publicly available.
      * replace your `const config = require('../../../config')` and `const sengridApiKey = config.keys.SENDGRID_KEY` as the key for `sgMail.setApiKey()` and instead use `sgMail.setApiKey(process.env.SENDGRID_API_KEY)` (after you defined a `SENDGRID_API_KEY` in your `dev.env` file)
      * test it and see that the email sendout will still work.
   * JWT token variable
      * add JWT_SECRET to your env.dev file
      * `models/user` replace the static value
      * `middleware/auth` replace the static value
   * Mongoose URL variable
      * add MONGODB_URL to your env.dev file
      * `db/mongoose` replace the static value with MONGODB_URL variable
* Creating a Production MongoDB Database
   * Getting production ready database.
   * Use MongoDB Hosting Server - Atlas (solution by MongoDB itself.): https://www.mongodb.com/cloud/atlas
      * Create account
      * Verify email
      * Enter details about your project
      * Select the free plan
      * Create a Shared Cluster
         1. AWS
         2. Region: closest to you (e.g. Frankfurt)
         3. M0 Plan - free plan with 0.5GB of storage
         4. Create cluster
         5. Click on `All Clusters` to see it's status. It will take some time.
      * Connect to localhost database
         1. Add IP addresss: `0.0.0.0/0` - will whitelist all IP addresses.
         2. Create a database user, note down password
         3. Choose connection method `MongoDB Compass` - MongoDB GUI
            * Download MongoDB Compass
            * Install it
            * Paste connection string as what you had in the .env file for Mongo DB and click connect
            * You will now see all the same data as in the Robo3t
      * Connect to production database
         1. Disconnect from your localhost
         2. Use connections string that's under 'I already have Compass' and version under 1.11
         3. Encode special characters in the password: https://en.wikipedia.org/wiki/Percent-encoding
      * Robo 3T will no longer be needed
      * SRV records come from DNS records 
      * If you forgot the password, go to Database Access -> Edit -> Show Password.
* Heroku Deployment
   * remove playground directory
   * initialize repository as git repository `git init`
   * ignore `config` and `node_modules`
      1. create `.gitignore`
      2. add `node_modules`
      3. add `config`
   * `git add .` and `git commit`
   * push to Github
      1. create new repository `nodejs-task-manager-api`
      2. push repository according to the guidelines
   * push to Heroku
      1. create heroku remote `heroku create aleksandravica-task-manager` 
      2. check that heroku remote was added `heroku remote`
      3. add the env variables: `heroku config:set key=value`
      4. to remove env variable: `heroku config:unset key`
      5. see all env variables: `heroku config`
      6. set up `JWT_SECRET` (you can use different value here)
      7. set up `SENDGRID_API_KEY` exactly what you had
      8. set up `MONGODB_URL` using the connection link `Connect your application` and put the whole string in single quotes
      9. `git push heroku main`
   * check in Postman
      1. Update your env variable to the link Heroku generated
      2. need to make sure that your MongoDB Atlas password is escaped with percent characters again, you can change it directly in heroku
   * connect to Production Database in MongoDB compass
      * just double click on the database and you will see the records there
##### Testing Node.js
* Jest Testing Framework
   * Two major players - Jest (https://jestjs.io/) and Mocha (https://mochajs.org/), we will use Jest
   * Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
   * Setup
      1. install `npm i jest@27.3.1 --save-dev`: only for dev environment
      2. setup script in `package.json`: `"test": "jest"`
      3. run the test command `npm test`: you will get info that no tests are found, how many files were checked.
      4. create a test folder `tests` and file `math.test.js` - you have to have `.test.js` for Jest to check it
      5. running `npm test` is now gonna find a file, but still fail.
   * Writing test
      1. call `test(name, function)` function (does not need to be required)
      2. if the function does not throw an error, it is considered a `PASS`, else a `FAIL`
      3. so, when writing tests, it is all related to throwing errors.
   * Reasons for testing
      1. testing saves time
      2. creates reliable software
      3. gives flexibility to developers
         1. refactoring
         2. collaborating
         3. profiling
      4. peace of mind
* Writing Tests and Assertions
   * set up a dummy file `src/math.js`
   * set up a dummy function `calculateTip`
   * export the function
   * load function in the test file `math.test.js`: `const { calculateTip } = require('../src/math')`
   * call `test()` function
   * write the test function with entering manual numbers for checking - `assertions`: a confident and forceful statement of fact or belief.
      * `const total = calculateTip(10, 0.3)`
      * `if (total !== 13)` - `throw new Error`
   * Jest comes with an `expect` library to use assertions easier
      * `expect(total).toBe(13)`
      * explore the whole library: https://jestjs.io/docs/expect#expectvalue
   * Now you can refactor things without having to change the tests
   * You can add second call to test, for different expected outcomes, e.g. if you have default value
* Writing your own tests
   * functions to test https://gist.github.com/andrewjmead/85e30a13d838d2a6fc229f961b3ceb69
   * export functions from js file
   * import functions in test file
   * write tests using `expect().toBe()`
* Testing Asynchronous Code
   * similar to testing synchronous code, just couple of adjustments
   * adding command line argument to `package.json` `test` script for tests to automatically restart when test code changes `"test": "jest --watch"`
   * now you don't need to rerun the tests manually
   * Jest does not know that our code contains async code, so if there is no error thrown immediately it will consider the test as passed.
   * to avoid messing with async, provide one argument `done` and this will let Jest know that it is an async function
      * `test('Async test demo', (done) => {`
      *    `setTimeout(() => {`
      *    `expect(1).toBe(2)`
      *    `done()`
      *    `}, 2000)`
      * `})`
   * you can also simply call the test function using `async/await`
      * `test('Should add two numbers async await', async () => {`
      *    `const sum = await add(10, 22)`
      *    `expect(sum).toBe(32)`
      * `})`
* Testing an Express Application
   * We have to make sure that we are loading in our `config/dev.env` environment variables (currently they are only being loaded when we run the `npm run dev` script, but not `npm test`)
      1. create a new file in the `config` directory: `test.env` because the database will change (it will have seed data only)
      2. take the `dev.env` file content, copy it to `test.env`
      3. adjust the database url string with adding `test` to it: `task-manager-api-test`
      4. this will make sure we use seperate database for the test data
      5. adjust the `package.json` script for `test`: add `env-cmd -f ./config/test.env` to the script
   * Add a new root property in `package.json` to configure Jest for our application:
      1. `"jest": {"testEnvironment": "node"}`
      2. based on configuration docs: https://jestjs.io/docs/configuration#testenvironment-string
   * Get Supertest npm module
      1. Use `Supertest` library https://www.npmjs.com/package/supertest  
      2. Supertest actually does not need your server to be up and running, it's stand-alone application
      3. `npm i supertest@6.1.6 --save-dev` install as dev dependency (only needed for local setup)
   * Prepare testing setup
      1. create new file in your `tests` directory: `user.test.js`
      2. load in supertest `const request = require('supertest')`
      3. get access to express
         * create new file in the `src` directory `app.js`: this is where the express application will get set up and exported
         * take everything from `index.js` and copy to `app.js`
         * remove the `app.listen` function from `app.js` (as described above we do not need it here)
         * export the application instead `module.exports = app`
         * as we are not calling listen, we do not really need the `port`, so we can remove it from `app.js`
         * load the newly configured `app` into `index.js`: `const app = require('./app')`
         * remove all the `require`, `app` and `app.use` calls, only leaving `app, port, app.listen` in the `index.js` file
         * Start your server
            1. In `dev` you still start the `index.js` file, it takes care of everything.
            2. For testing, we need to grab it only from `app.js` because it has everything that we need
      4. grab the created `app` in `user.test.js`: `const app = require('../src/app')`
   * Start writing tests:
      1. call the test function as usual `test('Should sign up a new user', async () => {})`
      2. call the request function passing the express app and route as variable and method `await request(app).post('/users')`
      3. use `.send({})` to pass the body you want to send with the request
      4. assert HTTP status code: `.expect(201)`
      5. run the test, it will create the tests in your test database (you can check mongodb compass). If you rerun the test, the test will fail the second time because it will error (As the user already exists)
      6. to prevent that, you need to reset the database before every test run.
* Jest Setup and Teardown
   * Using Jest lifecycle methods to use before or after running the test case: https://jestjs.io/docs/setup-teardown
   * `beforeEach(() => {})` will run before each test case in the `user.test.js` is executed
   * `afterEach(() => {})` will run after each test case in the `user.test.js` is executed
   * `beforeEach(() => {})` - clean the database
      1. load User model `const User = require('../src/models/user')`
      2. remove all users with `User.deleteMany()`
      3. make sure its asynchronous with setting the function to be `async` and use `await` for deletion
      4. now you can run the tests as many times as you want as it will wipe the database before every run, meaning removing users and, hence, not violating the `unique` rule.
   * `beforeEach(() => {})` - add a sample user for auth
      1. create user object `const user = {name: "x"}`
      2. use `await` to create and save the new user `await new User(userOne).save()`
   * close mongoose connection to avoid errors with:
      1. `const mongoose = require("mongoose")`
      2. `afterAll(() => {mongoose.connection.close()}`)
   * new test case for logging in
      1. `test('Should log in existing user', async () => {})`
      2. `await request(app).post('/users/login').send({})`
      3. `.expect(200)`
* Testing with Authentication
   * we will need an authentication token here.
   * start by modifying the way you create your test user to make sure they have an authentication token
      1. load in `jwt` for token generation: `const jwt = require('jsonwebtoken')`
      2. load in `mongoose` for ObjectID generation:`const mongoose = require("mongoose")`
      3. create ObjectID by `const userOneID = new mongoose.Types.ObjectId`
      4. add it to the user `_id: userOneID`
      5. create a token `tokens: [{token: jwt.sign({ _id: userOneID }, process.env.JWT_SECRET)}]` with id and secret
   * now you can setup tests for use cases that require authentication
      1. `test('Should get profile for existing user', async () => {})`
      2. `await request(app).get('/users/me').send().expect(200)`
      3. the first two lines above was the same as for any other test, but the problem is that so far we do not set up the authentication header nowhere
      4. add the `set` call to add the authorization header `.set('Authorization', Bearer ${userOne.tokens[0].token})`
   * set up test cases for
      1. 'Should delete account for user'
      2. 'Should not delete account for unauthenticated user'
      3. 'Should get profile for existing user'
      4. 'Should not get profile for unauthenticated user'
* Advanced Assertions
   * Assert things about the response body or database related.
   * Get access to the response 
      1. put your await function call in a constant ` const response = await request(app)....` to await for the promise. This will store the response in the variable, including the body.
   * Things you can test:
      1. assert that the database was changed correctly(e.g. that there is a new user) 
         * `const user = await User.findById(response.body.user._id)`
         * `expect(user).not.toBeNull()`
      2. assertions about the response, e.g. the body contains data about user `User One Ieva`
         * `expect(response.body.user.name).toBe('Test User 23')`
      3. if we are working with objects:
         * `expect(response.body).toMatchObject({ user: {...}, token: user.tokens[0].token})`
      4. check that plain text password is not stored in the database
         * `expect(user.password).not.toBe("testUser1232")`
   * Assertions should be grounded to what actually can go wrong
* Mocking libraries
   * https://jestjs.io/docs/manual-mocks
   * mock (replacing real functions that run with functions that you create in test environment) npm modules, e.g. emails are being sent out.
   * create a directory for mocks `tests/__mocks__`. Jest will lookup this naming convention
   * create a file for the npm module you want to mock, following the naming convention, e.g. `require('@sendgrid/mail')` has to be stored as
      1. directory `@sendgrid`
      2. file `mail.js`
   * provide all the details that are needed to work, in this case: `setApiKey` and `send`
      1. setup an empty object with the necessary values `module.exports = {setAPIKey() {}, send() {}}`
      2. with this the functions will still be called but they will now be empty, so the api key will be empty and the send method wont have any data so no actions will happen here
* Wrapping up user tests
   * How to send a file using Supertest
      1. `test('Should upload avatar image', async () =>{})`
      2. new directory `tests/fixtures`. Fixtures are files that allow you to make an environment for your tests to run
      3. put your image in that directory `profile-pic.jpg`
      4. start writing your test function as usual: `await request(app).post('..').set('Authorization', '..')
      5. use `.attach(formField, path)` for adding images (e.g. `('avatar', 'tests/fixtures/profile-pic.jpg')`) - this will properly upload everything
      6. `.expect(200)`
      7. now your test should be passing
   * More assertions for file uploads
      1. check that binary data was indeed saved
         * `const user = await User.findById(userOneID)`
         * `expect({}).toBe({})` would fail, because with the equality two objects are not the same.
         * to compare objects, you should use `toEqual` instead
         * to check for certain type use `expect.any(type)` as the paramater of the `toEqual()`
         * `expect({user.avatar}).toEqual(expect.any(Buffer)})`
      2. `test('Should update valid user fields'`
      3. `test('Should not update invalid user fields'`
* Setup Task Test Suite
   * create a seperate test suite for tasks to not have all test cases in one file
   * remove `math` files as they were only used for testing purposes
   * create a second tests suite `task.test.js`
   * load in the test file:
      1. load `const request = require('supertest')`
      2. load `const Task = require('../src/models/task')`
   * create a file for database `fixtures/db.js` to allow us to play with the database and the users
      1. same user data as used in user test suite - move `userOneID` and `userOne` from user test suite to the db
      2. load in `const mongoose = require('mongoose')` and remove it from user
      3. load in `const jwt = require('jsonwebtoken')` and remove it from user
      4. load in `const User = require('../../src/models/user')`
      4. create a function in `db.js`: `const setupDatabase = async () => {})` 
      5. move the contents from user.test `beforeEach` function to the db.js `setupDatabase` function
      6. export the key value pairs so you can use them in your test suite `module.exports = { userOneID, userOne, setupDatabase }`
      7. load the file into user.test.js `const {userOneID, userOne, setupDatabase } = require('./fixtures/db')`
      8. call the `setupDatabase` in the beforeEach `beforeEach(setupDatabase)`
      7. 
   * prepare your test suite
      1. import from `db.js` as before
      2. import `const app = require('../src/app')`
      3. use the same beforeEach function as in `user.test.js`
   * avoid test suites interfering with each other
      1. in `package.json` add an option `--runInBand` to run in series and avoid any overlaps
   * create a test
      1. `test('Should create task for user', () => {})`
      2. `const response = await request(app)`
      3. `.post('/tasks')`
      4. `.set('Authorization', Bearer ${userOne.tokens[0].token})`
      5. `.send({ description: "Have a good day"})`
      6. `.expect(201)`
      7. `const task = await Task.findById(response.body._id)`
      8. `expect(task).not.toBeNull()`
      9. `expect(task.completed).toBe(false)`
* Testing with Task Data
   * `db.js` adjustments
      1. load `const Task = require('../../src/models/task')`
      2. create `userTwoID` and `userTwo` so we have two users to play with, save it in the `setupDatabase` function as well
      3. create couple of tasks with `{_id, description, completed, owner}`
      4. delete existing tasks from `setupDatabase`: `    await Task.deleteMany()`
      5. save tasks to the database `await new Task(taskOne).save()`
   * `task.test.js`
      1. Should get tasks for authenticated user
      2. Authenticated user cannot delete other user tasks
* Bonus: extra test ideas
   * https://gist.github.com/andrewjmead/988d5965c609a641202600b073e54266
 


### Chat App 
#### Creating the Chat App project
* Chat App Introduction
   1. real time data transfers
   2. user one sends it, user two receives it with almost no delay.
   3. using websockets and socket.io
* Create the Chat App Project
   1. `mkdir chat-app`, then navigate to it
   2. `mkdir src`, then navigate to it
   3. `touch index.js`
* Create an Express Web Server
   1. Initialize npm: `npm init`
   2. install Express: `npm i express@4.17.1`
   3. Set up new express server
      * `const express = require('express')`
      * `const app = express()`
      * `app.get('/', function (req, res) {})`
   4. Listen on port 3000 `app.listen(3000)`
   5. Serve up the public directory 
      * `const path = require('path')`
      * `const publicDirectory = path.join(__dirname, '../public')`
      * create `public/index.html` and put your content in there
   6. run `node src/index.js`
* Setup scripts in package.json
   1. create start script `"start": "node src/index.js"` and test it with `npm start`
   2. install nodemon as dev depencency `npm i nodemon@2.0.15 --save-dev `
   4. create dev script `"dev": "nodemon src/index.js"` and test it with `npm run dev`
#### Web Sockets and Socket.io
* WebSocket Protocol
   1. used to create real time applications for different programming languages, including Node.js
   2. server (Node.js starts it)
   3. different clients can connect to this server, using WebSockets
   4. WebSockets allow for full-duplex communication (bi-directional communication), whereas in HTTPs protocol it was one directional: only client can initiate the communication with the server. With WebSockets:
      - client can initiate communication with the server
      - server can initiate communication with the client
   5. WebSocket is a seperate protocol from HTTP
   6. Persistent connection between client and server
   7. Example with Chat App:
      - First Client -> Server: posts "My new message"
      - Server -> Other Clients: posts first users message
* Introduction to Socket.io
   1. Socket.io library https://socket.io/
   2. Install `npm i socket.io@4.4.0`
   3. Start the server `npm run dev`
   4. Refactor your current Express setup which will allow us to use Socket.io easier
      * load in http module `const http = require('http')`
      * create a new webserver `const server = http.createServer(app)` 
      * change your `app.listen` to `server.listen`
   5. Configure Socket.io on the server side
      * load in `const socketio = require('socket.io')`
      * create new instance of socket.io `const io = socketio(server)` - when you require the library, you call the function and then you actually call it to configure socket.io with that server
      * print a message, when given client connects `io.on('connection', () => {}`: will be fired off when a given client makes a new connection
   6. Configure Socket.io on the client side
      * `<script src="/socket.io/socket.io.js"></script>` client side version of the library
      * create `public/js/chat.js` file and load it in your html file `<script src="js/chat.js"> </script>`
      * in `chat.js` simply call the socket.io `io()`
      * now your server message connected in point 5, you will receive the connection message.
* Socket.io Events
   1. How to transfer the data between the client and the server in real time.
   2. Side project `Counter App`
      * start with 0 count `let count = 0`
      * adjust the `io.on` function in `index.js`:
         - takes the param `(socket)` which is an object that contains information about the new connection
         - `socket.emit('countUpdated', count)` send an event from a server to a client
      * adjust the `io.on` function in `chat.js`
         - `const socket = io()`
         - `socket.on('countUpdated', () => {})`
         - add a message to test it and check that it shows up in the browser
      * allow user to increment the count
         - create button in html `<button id="increment">+1</button>`
         - add eventListener in chat.js `document.querySelector('#increment').addEventListener(('click', () => {}))`
         - emit event from client `socket.emit('increment')`
         - receive event on server `socket.on('increment', count++})`
         - send it back to all clients `io.emit('countUpdated',count)`
   3. Socket.io Event Challenge
      - Goal: send a velcome message to new users
         * Have server emit "message"  when new client connects: Send "Welcome" as the event data
         * Have client listen for "message" event and print to console.
         * Test your work!
      - Goal: allow clients to sent messages
         * Create a form with an input and button
         * Setup event listener for form submisstion
         * Have server listen for the SendMessage event
         * Test your work
   4. Broadcasting Events
      * When new user joins or leaves, there is a message to all users about that.
      * Broadcasting: sending to everybody, except the current client.
      * Broadcasting message when someone joins
         - In `index.js` changes to `connection` event's callback function
         - add ` socket.broadcast.emit('sendWelcomeMessage', 'A new user has joined.')`
         - note, the event name here has to be the same as what your user is listening to in `chat.js`
      * Broadcasting message when someone leaves
         - `io.on` used only for connecting
         - `socket.on('disconnect')` used for disconnecting (within the connection call)
         - within the function, no need to user broadcast as the user is already disconnected and cannot get the message
         - `io.emit('message', 'A user has left')`
         - test your work
* Sharing your location
   1. Allow users to share their location.
   2. To get the location we will be running browser's geolocation on the client's side
   3. Geolocation API https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
   4. Setup
      - Create seperate button ` <button id="send-location">Send location</button>`
      - Add event listener to send-location `document.querySelector('#send-location').addEventListener('click',(event) => {})`
      - Not all browsers support the Geolocation API, so factor that in `if (!navigator.geolocation)`
      - If location available, use `navigator.geolocation.getCurrentPosition()` 
      - Retreive the coordinates, e.g. `latitude: position.coords.latitude`
      - Have a client emit "sendLocation" with an object as a data `socket.emit('sendLocation', coordinates)`
      - Server should listen to the "sendLocation" event `socket.on('sendLocation', (coordinates) => {})`
      - When fired, send a "message" to all connected clients `io.emit('message', Location: ${coordinates.latitude}, ${coordinates.longitude})`
   5. Send a link to location instead of coordinates
      - `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude})`
* Event Acknowledgements
   1. The receiver of the event to acknowledge that the event was received and process it afterwards, e.g. send location - client would receive a notification that the event was indeed received.
      - server (emit) -> client (recieve) --acknowledgment--> server
      - client (emit) -> server (receive) --acknowledgment--> client
   2. Setup (sendMessage event)
      - on the clients side: provide it as a function in your `emit` call for the event `socket.emit('sendMessage', response, () => {})`
      - on the server side: provide another param as function for listneing `socket.on` for the event `(message, callback)`
      - call it on the bottom of the function `callback()`. You can also provide arguments to this callback if you wish to.
      - You can test it now.
   3. Setup (reject messages with foul language)
      - `npm i bad-words@3.0.4` https://www.npmjs.com/package/bad-words
      - `const Filter = require('bad-words')`
      - adjust your `socket.on('sendMessage)` event
         * initialize new instance `const filter = new Filter()`
         * `if (filter.isProfane)` check for profane words
         * adjust the code in `chat.js` with if condition - if there was a message, i.e. error, console.log it, otherwise send message
   4. Challenge (sendLocation)
      * setup the client's acknowledgment function
      * setup the server to send back the acknowledgment
      * have the client print "Location shared"
* Form and Button States
   1. Enable and disable the form during the period the message is being sent. 
      *  `chat.js` event listener on `#message-form`: disable the button immediately once event is captured and disable it once you send back the response
      * create variables for the elements we will be reusing
         - `const $messageForm = document.querySelector('#message-form')`
         - `const $messageFormInput = $messageForm.querySelector("input")`
         - `const $messageFormButton = $messageForm.querySelector("button")`
      * disable button using DOM
         - `$messageFormButton.setAttribute("disabled", "disabled")`
      * reenable button using DOM
         - `$messageFormButton.removeAttribute("disabled")`
   2. Clear the input after the message was sent
      * after the message is being sent, clear the value of the input field `$messageFormInput.value = ''`
      * set the focus to be on the input field `$messageFormInput.focus()`
   3. Disable sendLocation button while we are sending it.  
      * disable button     `$sendLocationButton.setAttribute('disabled', 'disabled')` 
      * add notification text `    $locationStatus.innerHTML = 'Finding your location...'`
      * enable button `        $sendLocationButton.removeAttribute('disabled')`
      * remove notification text `$locationStatus.innerHTML = ''`
* Rendering Messages
   1. On the browser window instead of a terminal using `moustache` library
   2. Setup the library
      * all required libraries can be found here https://links.mead.io/chatlibs
      * `index.html` new script tag `<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min.js"></script>` as the first one
   3. Create first Mustache template in `index.js`
      * you can create one template and then use it multiple times
      * setup a script tag with id `<script id="message-template" type="text/html">html</script`
      * inside of the script tag put some html
      * create a div for all messages `<div id="messages"></div>`
   4. Use Mustache library to render
      * in `chat.js` render the message for the socket.on message listener
      * select `messages` element using `document.querySelector`
      * select `message-template` element using `document.querySelector.innerHTML`
      * create which content Mustache should actually render `const html = Mustache.render(messageTemplate)`
      *  `$messages.insertAdjacentHTML('beforeend', html)`
   5. Render dynamic content
      * `index.html` your scripts html `{{message}}`
      * `chat.js` `{ message: message }` as the second parameter for your mustache.render function
* Rendering Location Messages
   1. Create a seperate event for location sharing messages
      - Have server emit "locationMessage" with the URL
      - Have the client listen for "locationMessage" and print the URL to the console
      - Test your work
   2. Render new template for location messages
      - Replicate the message template (change the id to something else)
      - Add a line inside the paragraph with the link text ("My current location") - URL link should be the maps URL (dynamic)
      - Select the template from Javascript
      - Render the template with the URL and append to messages list
      - Test your work.
* Working With Time
   1. Generate, transfer and format timestamps
   2. Generate date (example)
      - `const now = new Date()` - whenever you call it, it is gonna generate the current time.
      - `now.toString()` - converts the date to string
      - `now.getDate()` - allows you to extract the day of the month
      - `now.getTime()` - timestamp: returns a number which represents number of miliseconds since Jan 1, 1970 (unix epic)
   3. Generate timestamps (chat app)
      - `index.js` focus on `message` event first
      - send back objects instead of strings to send back `   {text: "Welcome!", timestamp: new Date().getTime()}`
      - create new directory and file `src/utils/messages.js` - this file will define few functions that are going to generate message objects
      - `generateMessage` function to return the message with timestamp - export it, import in index.js and call it with the message.
      - adjust the client side to work as well. In `chat.js` specify what you want to display: `message: message.text`
   4. Integrate timestamps in the template
      - adjust the mustache html template `{{createdAt}}` and make sure that in `chat.js` you are actually passing it.
   5. Use `moment` library to format a date
      - `<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>`
      - `moment(message.createdAt).format('H:mm:ss')`
* Add Timestamps for location messages
   1. create `generateLocationMessage` and export url and created at
   2. use `generateLocationMessage` when server emits `locationMessage`
   3. Update template to render time before the url
   4. Compile the template with the URL and the formatted time
   5. Test your work!
* Styling the Chat App
   1. links.mead.io/chatassets - download the necessary styles
      - `css` contains stylesheet and minified version
      - `img` has favicon icon to display
   2. bring the two directories over to our chat app
      - move them to our `public directory`
   3. Adjust the `head` tag
      - adjust the title
      - link the icon
      - load in the stylesheet
   4. Integrate styles from the stylesheet
      - create a div containing sidebar and main section
      - move all the code to the main section
   5. Adjust contents of the main section
      - add a class for messages (to move the message section to the bottom)
      - put both buttons in one div
   6. Adjust message style
      - adjust the styles in the script section
      - add new paragraph and two span tags for the name and timestamp
      - 


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
* `bcrypt` A library to help you hash passwords.
* `jsonwebtoken` JSON Web Token (JWT) is an open standard that defines a compact and self-contained way of securely transmitting information between parties as a JSON object.
* `multer` Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
* `sharp` The typical use case for this high speed Node.js module is to convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP and AVIF images of varying dimensions.
* `@sendgrid/mail` This is a dedicated service for interaction with the mail endpoint of the SendGrid v3 API.
* `env-cmd` A simple node program for executing commands using an environment from an env file.
* `jest` Delightful JavaScript Testing
* `supertest` The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.
* `socket.io` Socket.IO enables real-time bidirectional event-based communication.
* `bad-words` As of version 2, requires you either have an environment that understands ES2016 and beyond or a transpiler like Babel.



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
* `Error: listen EADDRINUSE: address already in use :::3000 mongo` - to kill the background service:
   * `lsof -i tcp:3000` get your PID
   * `kill -9 10387` kill the service
   * `npm run dev` restart the services

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
