let m=Number(prompt("Enter the mark"));
console.log("The grade calculation using ternary statements");
let g=(m>=90)?`O`:(m>=80)?`A+`:(m>=70)?`A`:(m>=60)?`B+`:(m>=50)?`B`:(m>=40)?`P`:`F`;
console.log(`Marks are ${m} and grade is ${g}`);
