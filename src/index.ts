import "./index.css";

// import './ch07_5'

// 什麼是ES Modules與CommonJS?

// CommonJS => Nodejs開發
// const data = require('./commonJS')
// console.log(data);

// ES6 ES Modules => js標準
// as別名
// import { userName, age } from "./es6Module";
// console.log(userName, age);
// import * as all from './es6Module'
// console.log(all.userName);
// console.log(all.age);
// console.log(all.address);
import data, { userName as name1, age, address } from './es6Module'
console.log(data);
console.log(name1, age, address);



