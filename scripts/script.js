/*Agafem l'id dels controls del video */
var video = document.getElementById("videorestaurant");
var btnPlay = document.getElementById("btnPlay");
var btnPause = document.getElementById("btnPause");
var volumeUp = document.getElementById("volumeUp");
var volumeOff = document.getElementById("volumeOff");
/*Fem funcio per pausar / reanudar video */
function playPause(){
    if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
  
}