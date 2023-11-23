let limit=prompt("Enter the limit");
console.log(`the limit is ${limit}`)
let arr=[];
for(let i=0;i<limit;i++){
    arr[i]=prompt(`enter the numbers`);
    }
let odd=arr.filter(el=>el%2!=0)
console.log(`The odd numbers are:`);
console.log(odd);
let cube=odd.map(el=>Math.pow(el,3));
console.log(`The cube of these odd numbers are:`);
console.log(cube);

  
