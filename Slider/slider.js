const body=document.querySelector("body");
const image=document.querySelector(".img");
const leftbtn=document.getElementById("left");
const rightbtn=document.getElementById("right");
const spanEl=document.querySelectorAll(".points span");


const number=[1,2,3,4,5,6];
var count=Math.floor(Math.random()*5);

/********  define function ********/

function Setattr(param)
{
    image.setAttribute("src",`imgs/${param}.png`);
    image.setAttribute("alt",`picture-${param}`);
    spanEl[param-1].style.backgroundColor="blue";
}

body.onload=function()
{
    Setattr(number[count]);
}


rightbtn.addEventListener("click",Right);
leftbtn.addEventListener("click",Left);

function Right()
{   
    count++;
    if(count>=number.length)
    {
        spanEl[number[count-1]-1].style.backgroundColor="white";
        count=0;
    }
        
    Setattr(number[count]);
    if(count>0)
        spanEl[number[count]-2].style.backgroundColor="white";
}

function Left()
{
    count--;
    if(count<0)
    {
        count=number.length-1;
        spanEl[number[count-count]-1].style.backgroundColor="white";
    }
    
    Setattr(number[count]);
    if(count<number.length-1)
        spanEl[number[count]].style.backgroundColor="white";
}
  



