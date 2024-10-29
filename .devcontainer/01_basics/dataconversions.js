let score="aliya"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>33
//"33abc"=>Nan
//true=>1
//false=>0

let isloggedin="aliya"
let booleanisloggedin=Boolean(isloggedin);
console.log(booleanisloggedin);

//if something=true or nothing empty=false
//1=>True; 0=>false;
//""=>false
//"aliya"=>true

let someNumber=32;
let stringNumber=String(someNumber);
console.log(typeof stringNumber);

//********Operations********
let value=3;
let negvalue=-value;
console.log(negvalue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2/2);
console.log(2**2);
console.log(2%2);*/

let str1="Aliya";
let str2="Mohammadi";
console.log(str1 +" "+ str2);

/*console.log("2"+1+2);//It depends on which data type is used first string is used so it will concatenate in form of string 212
console.log(1+2+"2");//first is int so it will take int and then string 32*/

console.log(+true);
console.log(+"");

let x=3;
let y=x++;
console.log(y);
console.log(x);

let gameCounter=100;
++gameCounter;
console.log(gameCounter);
