
//os module
const { log } = require('console');
const os =require('os')
//info about current user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

//currentOS is a method from os module
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);

//in node we can interact with file system with the help of built-in modules,which can not be done with js in browser