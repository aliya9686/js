let name="aliya";
let age=22;
console.log(`My name is ${name} age is ${age}`);

const gameName=new String('aliya');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('l'));

let newString=gameName.substring(0,2); //Substring doesnt take negative values
console.log(newString);

const anotherString=gameName.slice(-2,5);//Slice method takes negative values
console.log(anotherString);

const years="      fifteen    ";
console.log(years);
console.log(years.trim());

const url="https://aliya.com/aliya%20";
console.log(url.replace('%20','_'));
console.log(url.includes('aliya'));
console.log(url.includes('alfiya'));

const str="My name is aliya";
const words = str.split(' ');
console.log(words[3]);