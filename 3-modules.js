//Modules = encapsulated code
// commonjs,every file is module 

const names = require('./4-name')
const sayHi = require('./5-untils')
const data = require('./6-alternative-favor')

require('./7-mind-grenade')

console.log(data);
data.sayHi('susan')
sayHi(names.john)
sayHi(names.peter)