// Agafem els ID de l'index
var video = document.getElementById("videorestaurant");
var btnPlay = document.getElementById("btnPlay");
var btnPause = document.getElementById("btnPause");
var volumeUp = document.getElementById("volumeUp");
var volumeOff = document.getElementById("volumeOff");
var nav = document.getElementById("nav"); // ← afegeix aquesta línia

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
        nav.style.backgroundColor = "red"; // ← color quan fem scroll
    }
    else{
        nav.style.padding = "20px 10px";
        nav.style.backgroundColor = "brown"; // ← color inicial
    }
    console.log(posBody, posDoc);
}
function play(){
    
}