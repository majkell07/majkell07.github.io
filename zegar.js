let ZegarTimerID=null;
function zegar() {
    let teraz= new Date();
    let minuta = teraz.getMinutes();
    let godzina = teraz.getHours();
    let sekunda = teraz.getSeconds();

    let czas12h="";
    czas12h= (godzina>12)? godzina-12 : godzina;
    czas12h+= ((minuta<10)? ":0":":")+minuta;
    czas12h+= ((sekunda<10)? ":0":":")+sekunda+":"+teraz.getMilliseconds();
    czas12h+= (godzina>=12)? " PM":" AM";

    let eleZegar=document.querySelector("#clock");
    //eleZegar.value=teraz.toTimeString(); //24h
    eleZegar.value=czas12h;
    ZegarTimerID=setTimeout(zegar,1);
}

function stopZegar() {
    setTimeout(() => {
        clearTimeout(ZegarTimerID);
    }, 10000);
    
}

// window.onload= function(){
//     zegar();
// }
window.addEventListener("load",zegar);
//window.addEventListener("load",stopZegar);


// ---STOPER ---//
let sec = 0;
let mili = 0;
let min = 0;

function stoper() {
    if(sec>=59){
        min++; sec=0; mili=0;
    }
    if(mili>=9){
        sec++; mili=0;
    }
    else mili++;
    elStoper.value= `${min}.${sec}.${mili}`;
}
function start() {
    setInterval(stoper,100);    
}
let elStoper=""
window.addEventListener("load",()=>{
    elStoper= document.querySelector("#stoper");
    start();
});
