var input=Number(prompt("Enter the number"));
const l=document.querySelector('#list');
for(var i=0;i<=10;i++){
    l.innerHTML+=`<li>${input}*${i}=${input*i}</li>`
}
