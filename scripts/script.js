var video = document.getElementById("videorestaurant");
var btnPlay = document.getElementById("btnPlay");
var btnPause = document.getElementById("btnPause");
var volumeUp = document.getElementById("volumeUp");
var volumeOff = document.getElementById("volumeOff");

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function toggleVolum() {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

btnPlay.addEventListener("click", playPause);
btnPause.addEventListener("click", playPause);
volumeUp.addEventListener("click", toggleVolum);
volumeOff.addEventListener("click", toggleVolum);