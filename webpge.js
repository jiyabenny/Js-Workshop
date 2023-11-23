var name=prompt("Enter your name");
const tit=document.querySelector(`#title`);
tit.innerText+=name;
const timer=document.querySelector(`#time`);
setInterval(() => {
    let date=new Date();
    let t=date.toLocaleTimeString();
    timer.innerText=t;   
}, 1000);
 var button=document.getElementById("btn");
 button.onclick=()=>{
    var element = document.body;
    element.classList.toggle("theme");
 };
