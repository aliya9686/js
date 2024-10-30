//Primitive
//7 types:String,Boolean,BigInt,Symbol,Undefined,Symbol,Number
//Non Primitives(Reference)
//Strings,Functions,Objects
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);
//const bigNumber=12345678999999n;

//Non Primitive
const heroes=["shaktiman","nagaraj","doga"];
let object={
    name:"aliya",
    section:"A",
    age:22,


};
const myFunction=function(){
    console.log("HelloWorld!!");
}

console.log(typeof bigNumber);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherid);
console.log(typeof heroes);
console.log(typeof object);
console.log(typeof myFunction);

//123=number
//12.3=number
//"Hello"=string
//undefined=undefined
//null=object
//symbol=symbol
//true or false=boolean
//1233333333333333333333333333333=bigint
//function=function

//******************************************************************** */
// Stack(Primitive),Heap(Non Primitive)
//Primitive(Stack)
let myYoutubename="Aliya.com";
let anothername=myYoutubename;
anothername="alfiya.com";

console.log(myYoutubename);
console.log(anothername);

//Non Primitive(Heap)
let userOne={
    email:"aliya.com",
    upi:"12333"

};

let userTwo=userOne;

userTwo.email="alfiyamohammadi.com";
console.log(userTwo.email);
console.log(userOne.email);






