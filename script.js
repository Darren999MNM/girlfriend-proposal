/*====================================================
 PROJECT MARION ❤️
 script.js - PART 1
====================================================*/

// ================================
// LOADING SCREEN
// ================================

window.addEventListener("load", () => {

    const loading = document.getElementById("loadingScreen");

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        }, 1500);

    }, 4500);

});

// ================================
// START BUTTON
// ================================

const startButton = document.getElementById("startButton");

if(startButton){

    startButton.addEventListener("click",()=>{

        document.getElementById("countdownSection")
        .scrollIntoView({
            behavior:"smooth"
        });

        startCountdown();

    });

}

// ================================
// CINEMATIC COUNTDOWN
// ================================

function startCountdown(){

    const counter=document.getElementById("countdown");

    if(!counter) return;

    const numbers=["3","2","1","❤️"];

    let index=0;

    counter.innerHTML=numbers[index];

    const timer=setInterval(()=>{

        index++;

        if(index<numbers.length){

            counter.style.opacity="0";

            setTimeout(()=>{

                counter.innerHTML=numbers[index];

                counter.style.opacity="1";

            },250);

        }

        else{

            clearInterval(timer);

            setTimeout(()=>{

                document.getElementById("proposal")
                .scrollIntoView({
                    behavior:"smooth"
                });

            },1200);

        }

    },1500);

}

// ================================
// YES BUTTON
// ================================

const yesButton=document.getElementById("yesButton");

if(yesButton){

yesButton.addEventListener("click",()=>{

launchConfetti();

setTimeout(()=>{

window.location.href="proposal.html";

},2500);

});

}

// ================================
// CONFETTI
// ================================

function launchConfetti(){

confetti({

particleCount:250,

spread:180,

origin:{
y:0.65
}

});

}

// ================================
// FLOATING HEARTS
// ================================

const heartsContainer=document.getElementById("hearts");

function createHeart(){

if(!heartsContainer) return;

const heart=document.createElement("div");

heart.classList.add("heart");

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(6+Math.random()*6)+"s";

heart.style.opacity=Math.random();

heart.style.transform=`scale(${0.6+Math.random()}) rotate(45deg)`;

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,500);

// ================================
// FLOATING PETALS
// ================================

const petals=document.getElementById("petals");

function createPetal(){

if(!petals) return;

const petal=document.createElement("div");

petal.classList.add("petal");

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=(7+Math.random()*5)+"s";

petal.style.transform=`rotate(${Math.random()*360}deg)`;

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},13000);

}

setInterval(createPetal,350);

// ================================
// FIREFLIES
// ================================

function createFirefly(){

const firefly=document.createElement("div");

firefly.className="firefly";

firefly.style.left=Math.random()*100+"vw";

firefly.style.top=Math.random()*100+"vh";

document.body.appendChild(firefly);

setTimeout(()=>{

firefly.remove();

},12000);

}

setInterval(createFirefly,1200);

// ================================
// MUSIC AUTO PLAY
// ================================

const music=document.getElementById("music");

document.addEventListener("click",()=>{

if(music){

music.play().catch(()=>{});

}

},{once:true});

// ================================
// SCROLL REVEAL
// ================================

const reveals=document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

const height=window.innerHeight;

if(top<height-120){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",revealOnScroll);

// ================================
// HERO FADE
// ================================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(!hero) return;

const value=window.scrollY;

hero.style.opacity=Math.max(1-value/700,0);

});

// ================================
// GLOW EFFECT
// ================================

setInterval(()=>{

const title=document.querySelector(".hero h1");

if(title){

title.classList.toggle("glow");

}

},2200);

// ================================
// BUTTON HOVER SOUND PLACEHOLDER
// (Optional future feature)
// ================================

console.log("Project Marion Loaded ❤️");
/*====================================================
 PROJECT MARION ❤️
 script.js - PART 2
====================================================*/

/* ==========================================
   ESCAPING NO BUTTON
========================================== */

const noButton = document.getElementById("noButton");

if (noButton) {

    function moveNoButton() {

        const maxX = window.innerWidth - noButton.offsetWidth - 20;
        const maxY = window.innerHeight - noButton.offsetHeight - 20;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noButton.style.position = "fixed";
        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
        noButton.style.transition = "0.25s ease";
    }

    noButton.addEventListener("mouseover", moveNoButton);

    noButton.addEventListener("touchstart", function(e){

        e.preventDefault();

        moveNoButton();

    });

}

/* ==========================================
   ENVELOPE OPENING
========================================== */

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letterSection");

if(envelope){

envelope.addEventListener("click",()=>{

envelope.style.transform="scale(.9) rotateX(180deg)";
envelope.style.opacity="0";

setTimeout(()=>{

envelope.parentElement.style.display="none";

letter.style.display="block";

letter.classList.add("fadeIn");

launchConfetti();

},1200);

});

}

/* ==========================================
   FIREWORKS BUTTON
========================================== */

const fireworksButton =
document.getElementById("fireworksButton");

if(fireworksButton){

fireworksButton.addEventListener("click",()=>{

for(let i=0;i<8;i++){

setTimeout(()=>{

confetti({

particleCount:180,

spread:120,

origin:{
x:Math.random(),
y:Math.random()*0.5
}

});

},i*350);

}

setTimeout(()=>{

alert("❤️ Happy Girlfriend's Day My Princess ❤️");

},3500);

});

}

/* ==========================================
   MEMORY CARD HOVER
========================================== */

const cards =
document.querySelectorAll(".memoryCard");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});

/* ==========================================
   LETTER WRITING EFFECT
========================================== */

const letterParagraph =
document.querySelector(".letter p");

if(letterParagraph){

const original =
letterParagraph.innerHTML;

letterParagraph.innerHTML="";

let index=0;

function writeLetter(){

if(index<original.length){

letterParagraph.innerHTML+=original.charAt(index);

index++;

setTimeout(writeLetter,20);

}

}

setTimeout(writeLetter,1600);

}

/* ==========================================
   PHOTO FADE IN
========================================== */

const memoryObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fadeIn");

}

});

});

cards.forEach(card=>{

memoryObserver.observe(card);

});

/* ==========================================
   FINAL HEART RAIN
========================================== */

function bigHeartRain(){

for(let i=0;i<40;i++){

setTimeout(()=>{

createHeart();

},i*120);

}

}

setTimeout(bigHeartRain,5000);

/* ==========================================
   SMOOTH PAGE FADE
========================================== */

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href && href.endsWith(".html")){

e.preventDefault();

document.body.classList.add("fadeOut");

setTimeout(()=>{

window.location=href;

},1200);

}

});

});

/* ==========================================
   SHOOTING STAR
========================================== */

function shootingStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.width="3px";

star.style.height="3px";

star.style.background="white";

star.style.boxShadow="0 0 20px white";

star.style.left="-50px";

star.style.top=Math.random()*300+"px";

star.style.zIndex="999";

star.style.transition="2s linear";

document.body.appendChild(star);

setTimeout(()=>{

star.style.transform="translate(150vw,60vh)";
star.style.opacity="0";

},100);

setTimeout(()=>{

star.remove();

},2200);

}

setInterval(shootingStar,9000);

/* ==========================================
   LOVE QUOTES
========================================== */

const quotes=[

"❤️ You are my favourite person.",

"🌸 Every moment with you is magic.",

"💖 Forever starts with you.",

"✨ I fall in love with you every day.",

"🥹 You're my safe place."

];

function randomQuote(){

const bubble=document.createElement("div");

bubble.innerHTML=

quotes[Math.floor(Math.random()*quotes.length)];

bubble.style.position="fixed";

bubble.style.left=(20+Math.random()*60)+"%";

bubble.style.bottom="30px";

bubble.style.padding="12px 20px";

bubble.style.borderRadius="30px";

bubble.style.background="rgba(255,255,255,.15)";

bubble.style.backdropFilter="blur(12px)";

bubble.style.zIndex="9999";

bubble.style.transition="4s";

document.body.appendChild(bubble);

setTimeout(()=>{

bubble.style.transform="translateY(-180px)";
bubble.style.opacity="0";

},100);

setTimeout(()=>{

bubble.remove();

},4500);

}

setInterval(randomQuote,18000);

/* ==========================================
   END
========================================== */

console.log("❤️ Project Marion Finished ❤️");
