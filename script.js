@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');


:root{

--bg:#f5f5f7;
--text:#111;
--card:rgba(255,255,255,.65);
--accent:#7c3aed;
--shadow:0 20px 50px rgba(0,0,0,.12);

}


.dark{

--bg:#09090b;
--text:#fff;
--card:rgba(255,255,255,.08);
--accent:#22c55e;
--shadow:0 20px 50px rgba(0,0,0,.5);

}



*{

margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;

}



body{

font-family:'Inter',sans-serif;
background:var(--bg);
color:var(--text);
transition:.5s;

}





/* NAV */


header{

position:fixed;
top:0;
width:100%;
z-index:100;

}



nav{

width:90%;
margin:20px auto;

display:flex;
align-items:center;
justify-content:space-between;

padding:15px 30px;

background:var(--card);
backdrop-filter:blur(15px);

border-radius:25px;

box-shadow:var(--shadow);

}



.logo h1{

font-size:35px;
color:var(--accent);

}



.logo span{

font-size:12px;
font-weight:700;

}



ul{

display:flex;
gap:25px;
list-style:none;

}



ul a{

text-decoration:none;
color:var(--text);
font-weight:600;
transition:.3s;

}



ul a:hover{

color:var(--accent);

}




#theme-toggle{

border:none;
cursor:pointer;

width:45px;
height:45px;

border-radius:50%;

background:var(--accent);
color:white;

font-size:20px;

transition:.4s;

}



#theme-toggle:hover{

transform:rotate(180deg) scale(1.1);

}





/* HERO */


.hero{

height:100vh;

display:flex;
justify-content:center;
align-items:center;

text-align:center;


background:

radial-gradient(
circle at top,
var(--accent),
transparent 45%
);


}



.hero-content{

animation:show 1s;

}



.hero h2{

font-size:60px;
max-width:900px;

}



.hero p{

font-size:20px;
margin:25px;

}





.btn{

display:inline-block;

padding:15px 35px;

border-radius:50px;

background:var(--accent);

color:white;

text-decoration:none;

font-weight:700;

transition:.4s;

}



.btn:hover{

transform:translateY(-8px) scale(1.05);

box-shadow:0 20px 40px var(--accent);

}





/* SECTIONS */


section{

padding:100px 10%;

text-align:center;

opacity:0;

transform:translateY(50px);

transition:1s;

}



section.show{

opacity:1;

transform:none;

}



h2{

font-size:40px;
margin-bottom:30px;

}





/* PRODUCTS */


.products{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

}



.product{

background:var(--card);

backdrop-filter:blur(20px);

padding:40px 25px;

border-radius:30px;

box-shadow:var(--shadow);

transition:.5s;

cursor:pointer;

}



.product:hover{

transform:

translateY(-15px)
rotateX(8deg)
scale(1.05);

}





/* GALLERY */


.gallery-box{

height:300px;

background:var(--card);

border-radius:30px;

display:flex;

align-items:center;
justify-content:center;

box-shadow:var(--shadow);

}





/* CONTACT */


.contact{

max-width:500px;

margin:auto;

padding:40px;

background:var(--card);

backdrop-filter:blur(20px);

border-radius:30px;

box-shadow:var(--shadow);

}



.contact p{

line-height:1.8;

margin-bottom:25px;

}





footer{

padding:30px;

text-align:center;

}





@keyframes show{

from{

opacity:0;
transform:translateY(40px);

}

to{

opacity:1;

}

}





@media(max-width:800px){


nav{

flex-direction:column;
gap:15px;

}


ul{

gap:15px;

}


.hero h2{

font-size:35px;

}


.products{

grid-template-columns:1fr;

}


}
