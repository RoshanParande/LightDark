let btn= document.querySelector("#mode");
let  body= document.querySelector("body");
let mode = "light";

btn.addEventListener('click',()=>{

if( mode === "light"){
mode ="dark";
body.classList.add("dark");
body.classList.remove("light");
btn.setAttribute("class","fa-solid fa-sun");
}

else{
    mode ="light";
    body.classList.add("light");
    body.classList.remove("dark");
    btn.setAttribute("class","fa-solid fa-moon");
}
})
//Roshan
//Dark Light mode btn










