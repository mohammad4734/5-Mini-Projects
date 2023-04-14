const button=document.getElementById("submit");
const emailInput=document.getElementById("email");

var pattern=/^\S+@\S+\.\S+$/ig;

button.onclick=function(e)
{
    e.preventDefault(); 
    if(pattern.test(emailInput.value))
    {
        location.href = "https://www.digikala.com";
        emailInput.value="";
    }
    else
        alert("gmail is invalid");
}
