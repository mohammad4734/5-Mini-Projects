const hourHand=document.querySelector(".hour");
const minuteHand=document.querySelector(".minute");
const secondHand=document.querySelector(".second");
const digital=document.querySelector(".digital");
const calendar=document.querySelector(".calendar");

function setClock()
{
    var currentDate=new Date();
    var hour=currentDate.getHours();
    var minute=currentDate.getMinutes();
    var second=currentDate.getSeconds();
    var date=currentDate.toDateString();
    var session="AM";

/***** Digital Clock & Calendar *********/

    if(second<10)
        second=`0${second}`;

    if(minute<10)
        minute=`0${minute}`;

    if(hour<10)
        hour=`0${hour}`;

    if(hour==12)
        session="PM";

    else if(hour>12)
    {
        hour=hour-12;
        hour=`0${hour}`;
        session="PM";
    }
    
    var time= `${hour}:${minute}:${second} ${session}`;
    digital.innerHTML=time;
    calendar.innerHTML=date;

/******* Analogue Clock ********/

    var sec=second/60;
    var min=(sec + minute)/60;
    var hr=(min + currentDate.getHours())/12;

    setRotation(secondHand,sec);
    setRotation(minuteHand,min);
    setRotation(hourHand,hr);
}

function setRotation(element,rotationvalue)
{
    element.style.setProperty("--rotation",rotationvalue*360);
}
setInterval(setClock,1000);


/********************* Mode ************************/

const body=document.querySelector("body");
const button=document.querySelector("button");
const analogue=document.querySelector(".analogue");
const center=document.querySelector(".center");

button.onclick=function(){

    if(button.innerHTML==="Light mode")
        Lightmode();
    else
        Darkmode();
};

function Lightmode()
{
    body.style.backgroundColor="white";
    body.style.color="black";
    button.style.backgroundColor="black";
    button.style.color="white";
    button.innerHTML="Dark mode";
    hourHand.style.backgroundColor="black";
    minuteHand.style.backgroundColor="black";
    analogue.style.backgroundColor="white";
    center.style.backgroundColor="black";
}

function Darkmode()
{
    body.style.backgroundColor="black";
    body.style.color="white";
    button.style.backgroundColor="white";
    button.style.color="black";
    button.innerHTML="Light mode";
    hourHand.style.backgroundColor="white";
    minuteHand.style.backgroundColor="white";
    analogue.style.backgroundColor="black";
    center.style.backgroundColor="white"; 
}

