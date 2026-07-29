/*==========================================
 Project Marion ❤️
 gallery.js
==========================================*/

const galleryItems = [
{
image:"images/photo1.jpg",
caption:"❤️ Our Favourite Smile"
},
{
image:"images/photo2.jpg",
caption:"🥰 One of my favourite memories"
},
{
image:"images/photo3.jpg",
caption:"🌸 Every moment with you is beautiful"
},
{
image:"images/photo4.jpg",
caption:"❤️ My Princess"
},
{
video:"videos/video1.mp4",
caption:"😂 One of our funniest moments"
},
{
video:"videos/video2.mp4",
caption:"💖 A memory I'll never forget"
}
];

let currentSlide = 0;

const gallery = document.querySelector(".memoryGrid");

if(gallery){

gallery.innerHTML="";

const viewer=document.createElement("div");
viewer.className="galleryViewer";

const media=document.createElement("div");
media.className="galleryMedia";

const caption=document.createElement("h2");
caption.className="galleryCaption";

const controls=document.createElement("div");
controls.className="galleryControls";

const prev=document.createElement("button");
prev.innerHTML="⟨ Previous";

const next=document.createElement("button");
next.innerHTML="Next ⟩";

controls.appendChild(prev);
controls.appendChild(next);

viewer.appendChild(media);
viewer.appendChild(caption);
viewer.appendChild(controls);

gallery.appendChild(viewer);

function showSlide(index){

if(index<0){

index=galleryItems.length-1;

}

if(index>=galleryItems.length){

index=0;

}

currentSlide=index;

media.innerHTML="";

const item=galleryItems[index];

if(item.image){

const img=document.createElement("img");

img.src=item.image;

img.alt=item.caption;

img.style.width="100%";

img.style.maxHeight="70vh";

img.style.objectFit="cover";

img.style.borderRadius="20px";

img.style.animation="fadeIn 1s";

media.appendChild(img);

}

if(item.video){

const video=document.createElement("video");

video.src=item.video;

video.controls=true;

video.autoplay=true;

video.style.width="100%";

video.style.maxHeight="70vh";

video.style.borderRadius="20px";

video.style.animation="fadeIn 1s";

media.appendChild(video);

}

caption.innerHTML=item.caption;

}

prev.onclick=()=>{

showSlide(currentSlide-1);

};

next.onclick=()=>{

showSlide(currentSlide+1);

};

showSlide(0);

setInterval(()=>{

showSlide(currentSlide+1);

},7000);

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

showSlide(currentSlide+1);

}

if(e.key==="ArrowLeft"){

showSlide(currentSlide-1);

}

});

let touchStartX=0;

viewer.addEventListener("touchstart",(e)=>{

touchStartX=e.changedTouches[0].clientX;

});

viewer.addEventListener("touchend",(e)=>{

let touchEndX=e.changedTouches[0].clientX;

if(touchStartX-touchEndX>50){

showSlide(currentSlide+1);

}

if(touchEndX-touchStartX>50){

showSlide(currentSlide-1);

}

});

}
