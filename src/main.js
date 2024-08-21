import hashMap from "./hashMap.js";

let test = hashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("apple", "good");
test.set("jacket", "black");

test.set("moon", "silver");
test.remove("apple");

console.log(test.entries());
console.log(test.length());

console.log(test.noOfBuckets());
