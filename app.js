//npm global comman, come with code
//npm --version

//local dependency - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
//npm install - g <packageName>

//package.json - mainfest file (store important info acout project)
//manual approach (creat package.json in the root, create properties etc)
//npm init (step by step)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(items)
console.log(newItem);