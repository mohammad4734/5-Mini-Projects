const textarea=document.querySelector("textarea");
const counter=document.getElementById("counter");

textarea.addEventListener("input",result)

function result(){
    const maxLength=textarea.getAttribute("maxlength");
    const currentLength=textarea.value.length;
    counter.innerHTML=`${currentLength}/${maxLength}`;
}

