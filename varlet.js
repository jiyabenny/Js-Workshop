//var is used to declare variables globally 
var name="Jiya";
//let is used to declare variables locally
{
    let name="Appu";
    console.log(name);//this will be the vale in let variable 
}
console.log(name);//this will be the value given in var variable
//const is used to give constant values to the variables
const age=26;
console.log(age);
age=22;//this will be an error since we cant change the value of these constant variables
console.log(age);
