var carr=['pink','red',`blue`,`green`,`pink`];
var i=0;
setInterval(()=>{
    document.body.style.backgroundColor=`${carr[i]}`
    i++;
    if(i>=carr.length)
    {
        i=0;
    }
},1000);

