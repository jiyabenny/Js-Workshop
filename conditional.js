let mark=Number(prompt("Enter the mark"));
console.log("The grade calculation using conditional statements");
if(mark>=90){
console.log(`Marks are ${mark} and grade is O`);
}
else if(mark>=80){
    console.log(`Marks are ${mark} and grade is A+`);
}
else if(mark>=70){
    console.log(`Marks are ${mark} and grade is A`);
}
else if(mark>=60){
    console.log(`Marks are ${mark} and grade is B+`);
}
else if(mark>=50){
    console.log(`Marks are ${mark} and grade is B`);
}
else if(mark>=40){
    console.log(`Marks are ${mark} and grade is P`);
}
else {
    console.log(`Marks are ${mark} and grade is F`);
}
 
