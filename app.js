
//npm comes with node.it helps in 3 things-
//1)reuse our own code in other projects
//2)use code written by other developers
//3)lastly share our own code with other developers as well
//npm project is hosted at npmjs.com 
//npm calls a reusable code a package(/module/dependencies),its a folder that contains a js code


//local dependency- use it only in this particular project
//npm i <packageName>

//global dependency-use it in any project 
//npm install -g <packageName>
//sudo npm install -g <pacakgeName> (mac)

//package.json - manifest file (stores important info about project/pacakge)'
//manual approach (create pacakge.json in the root, create properties etc)
//npm init (step by step ,press enter to skip)
//npm init -y (everything default) 

const _ = require('lodash');

const items =[1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)