
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function f1(){

  
    r=Math.random()*255
    g=Math.random()*255
    b=Math.random()*255
    
    document.getElementById("body").style.backgroundColor="rgb("+String((r))+","+String(g)+","+String(b)+")";


    console.log("naber");
    
    
}