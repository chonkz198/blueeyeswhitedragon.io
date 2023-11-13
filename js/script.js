// JavaScript Document
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('intro-video');
    var summonBtn = document.getElementById('summon-btn');

    summonBtn.addEventListener('click', function () {
        // Start playing the video
        video.play();
        
        // Hide the button
        summonBtn.style.display = 'none';
    });

    video.addEventListener('ended', function () {
        // Redirect to the index page or any other page
        window.location.replace('summon.html');
    });
});