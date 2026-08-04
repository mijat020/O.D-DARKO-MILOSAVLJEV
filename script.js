const themeButton = document.getElementById("theme-toggle");


themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        themeButton.innerHTML="☀️";

    }else{

        themeButton.innerHTML="🌙";

    }

});





// Animacija pri skrolovanju

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });


},{
    threshold:0.15
});



sections.forEach(section=>{

    observer.observe(section);

});





// Mali 3D efekat na karticama

const cards = document.querySelectorAll(".product");


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect = card.getBoundingClientRect();


const x = e.clientX - rect.left;

const y = e.clientY - rect.top;


const rotateX = (y - rect.height / 2) / 15;

const rotateY = (rect.width / 2 - x) / 15;



card.style.transform =
`
translateY(-15px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;



});




card.addEventListener("mouseleave",()=>{


card.style.transform="";



});


});
