## [The Complete Node.js Developer Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728836?start=0#content)

This repository is based on the Udemy course  [The Complete Node.js Developer Course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728836?start=0#content)
 and follows all the sections and excercises

 * Code-along exercises 
 * Notes App
 * Weather App 
 * Task App 
 * Comments

### Code-along exercises 
* `first-node-script.js` This file is the very first code along to create a Javascript file and test all the integrations. Very basic and nothing fancy.
* `app-write-file.js` Script to write files - works as overwrite. If file exists it will overwrite, if doesn't it creates it and pushes the content.
* `append-file-content.js` Script to append files. 
* `utils.js` Script to require functions in app.js

### Notes App
* `app.js` 
   * Script to call functions from other files 
   * Require and use validator npm module
   * Require and use chalk npm module
* `notes.txt` File created as a result of the above mentioned file. Appended by running script from ch-1-append-file.js
* `notes.js` Functions to be called in app.js file

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
