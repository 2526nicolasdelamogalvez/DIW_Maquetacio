// Agafem els ID de l'HTML per a poder manipular-los amb JavaScript
var video = document.getElementById("videorestaurant");
var btnPlay = document.getElementById("btnPlay");
var btnPause = document.getElementById("btnPause");
var volumeUp = document.getElementById("volumeUp");
var volumeOff = document.getElementById("volumeOff");
var nav = document.getElementById("nav"); 

//Boto play
btnPlay.addEventListener("click", function() {
    video.play();
});
//Boto pausa
btnPause.addEventListener("click", function() {
    video.pause();
});
//Boto activar volum
volumeUp.addEventListener("click", function() {
    video.muted = false;  
});
//Boto treure volum
volumeOff.addEventListener("click", function() {
    video.muted = true;   
});
//Animacio scroll 
window.onscroll = function(){
    manageScroll();
}
function manageScroll(){
    posBody = document.body.scrollTop;
    posDoc = document.documentElement.scrollTop;

    if(posBody > 80 || posDoc > 80){
        nav.style.padding = "5px 10px";
        nav.style.backgroundColor = "red"; // color quan fem scroll
    }
    else{
        nav.style.padding = "20px 10px";
        nav.style.backgroundColor = "brown"; // color inicial
    }
    playVideo();
    console.log(posBody, posDoc);
}
//Funcio per a que el video es reprodueixi quan arribem a la seccio del video
function playVideo() {
    if(posBody > 3457 || posDoc > 3457){
        video.play();
    }
    else{
        video.pause();
    }
}