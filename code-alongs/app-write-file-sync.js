// the variable itself can be called however you want, the important part is to name the node modules correctly. Convention, stick to the same name.
const fs = require('fs');

// works as overwrite, it does not append if you wanna add. If file does not exist it will create it, if it does, it will just change the contents of it.
fs.writeFileSync('notes.txt', 'My name is Ieva.');