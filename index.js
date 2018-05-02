// index.js
import moment from 'moment';

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

let name = "Sean", time = "tomorrow";
console.log(`Hello ${name}, how are you ${time}?`);