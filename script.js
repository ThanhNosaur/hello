/* typing */

let text="Xin chào, mình là Thanh. Rất vui được làm quen!";
let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();

/* show continue */

setTimeout(()=>{

document.getElementById("continueBtn").classList.remove("hidden");

},5000);

/* page change */

function showPage(id){

document.querySelectorAll(".page").forEach(p=>{

p.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

/* continue */

document.getElementById("continueBtn").onclick=()=>{

showPage("page2");

let car=document.getElementById("car");

car.style.right="40%";

setTimeout(()=>{

setTimeout(()=>{

car.style.right="120%";

},5000);

},3000);

setTimeout(()=>{

showPage("page3");

},11000);

};

/* no button run */

let noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseenter",()=>{

let x=Math.random()*window.innerWidth*0.8;

let y=Math.random()*window.innerHeight*0.8;

noBtn.style.position="absolute";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

});

/* yes button */

document.getElementById("yesBtn").onclick=()=>{

document.getElementById("popup").classList.add("show");

for(let i=0;i<20;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="0px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),3000);

}

};

function closePopup(){

document.getElementById("popup").classList.remove("show");

}