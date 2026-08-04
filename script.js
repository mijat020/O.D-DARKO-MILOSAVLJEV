const button = document.getElementById("theme-toggle");


button.onclick = ()=>{

document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

button.innerHTML="☀️";

}else{

button.innerHTML="🌙";

}

};



const sections=document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let top=section.getBoundingClientRect().top;


if(top < window.innerHeight-100){

section.classList.add("show");

}


});


});
