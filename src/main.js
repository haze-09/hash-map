import hashMap from "./hashMap.js";

let test = hashMap();

test.set('apple', 'red');

let query = test.get('apple');

console.log(query);

