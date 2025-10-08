const name = "Sahil"
const repoCount = 50
// console.log(name+repoCount+"Value") ... outdated style

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // It is better.

const gameName = new String("sahil-sahu")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString);

const sliceString = gameName.slice(-6,8)
console.log(sliceString);

const newStringOne = "   Sahil   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sahil.com/sahil%20sahu"

console.log(url.replace('%20','-'))
console.log(url.includes('Sundar'))
console.log(gameName.split('-'))