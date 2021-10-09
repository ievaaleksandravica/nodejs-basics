## [The Complete Node.js Developer Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728836?start=0#content)

This repository is based on the Udemy course  [The Complete Node.js Developer Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728836?start=0#content)
 and follows all the sections and excercises

 * Code-along exercises 
 * Playground
 * Notes App
 * Weather App 
 * Task App 
 * Comments

### Code-along exercises 
* `first-node-script.js` This file is the very first code along to create a Javascript file and test all the integrations. Very basic and nothing fancy.
* `app-write-file.js` Script to write files - works as overwrite. If file exists it will overwrite, if doesn't it creates it and pushes the content.
* `append-file-content.js` Script to append files. 
* `utils.js` Script to require functions in app.js

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
   ![image](https://user-images.githubusercontent.com/79845207/136558092-ba03c9bf-0e72-4c2a-8f79-1974e5ad61af.png)
   * `removeNote` function that loads, existing notes, checks if a note is found, if yes, removes it and updated the json file.  Run with help of `loadNotes` and `saveNotes` helper functions.
![image](https://user-images.githubusercontent.com/79845207/136558387-8f001bca-a67d-4ec4-a379-5284dc6444c2.png)

   * file is refactored to use ES6 and Arrow Function Syntax
   * `listNotes` function that loads all notes and displays them.
   ![image](https://user-images.githubusercontent.com/79845207/136558302-852fd029-d291-4166-b9fa-9a467e781eb7.png)

   * `readNotes` function that finds a note by title and displays the body of the note.
![image](https://user-images.githubusercontent.com/79845207/136558206-6d74dc8a-f7a0-432f-8293-6c399d124b3c.png)



### Weather App 
* No files related yet

### Task App 
* No files related yet

### Comments
#### NPM modules
* `npm init` initializes npm and creates package.json
* `npm -i package@version` use for installing packages locally
* `sudo npm -i package@version -g` use for installing packages globally (installing on operating system itself) - don't need to require it, gives access to new command in the terminal, in case of nodemon package you can now have nodemon command.
* `npm install` recreates node_modules folder in case its overwritten/deleted for some reason

#### Useful npm modules
* `validator` - validates the content of a string
* `chalk` - let's us customize how things are printed in the terminal
* `nodemon` - gives more information about what's happening when you run it. You should just use `nodemon app.js` to execute a file using the nodemon package. If you apply changes it does display them automatically. use ctrl+c to exit
* `yargs` - application that helps to parse command line arguments. Provides hash object instead and parses it. Allows to create specific commands and execute the code you want.

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
   * Aynchronous example
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