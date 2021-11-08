(function() {
    'use strict';
    console.log("reading js");

    /* imgs */
    let img1 = document.getElementById("dorm");
    let img2 = document.getElementById("sf");
    let img3 = document.getElementById("sutro");
    let img4 = document.getElementById("apt");

    let overlayImg = document.getElementById("overlay-img");
    let overlayP = document.getElementById("overlay-p");
    let overlayTime = document.getElementById("overlay-time");

    img1.addEventListener('mouseover', function(e) {
        /* display clear image */
        img1.src = "./images/dorm-500.png";
        /* img1.className = "hover-width"; */
    });

    img1.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('overlay').className = 'showing';
        overlayImg.src = "./images/dorm-500.png";
        overlayP.textContent = "A sweet sweet cotton candy sunset from the window of UC Davis Miller Hall";
        overlayTime.textContent = "FALL 2018";
    });

    img2.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('overlay').className = 'showing';
        overlayImg.src = "./images/sf-500.jpg";
        overlayP.textContent = "A mellow and relaxing sunset blanketing downtown San Francisco as the city takes a rest before it comes alive for the night";
        overlayTime.textContent = "FALL 2019";
    });

    img3.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('overlay').className = 'showing';
        overlayImg.src = "./images/sutro-500.png";
        overlayP.textContent = "A cooling sunset atop of twin speaks looking at the handsome silouette of Sutro Tower";
        overlayTime.textContent = "FALL 2019";
    });

    img4.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('overlay').className = 'showing';
        overlayImg.src = "./images/apartment-500.jpg";
        overlayP.textContent = "A perfect hot and cold blend sunset dawned the power lines and lucious tree viewable from the balcony of my Davis apartment";
        overlayTime.textContent = "FALL 2019";
    });

    img2.addEventListener('mouseover', function(e) {
        img2.src = "./images/sf-500.jpg";
        /* img2.className = "hover-width"; */
    });

    img3.addEventListener('mouseover', function(e) {
        img3.src = "./images/sutro-500.png";
        /* img3.className = "hover-width"; */
    });

    img4.addEventListener('mouseover', function(e) {
        img4.src = "./images/apartment-500.jpg";
        /* img4.className = "hover-width"; */
    });

    img1.addEventListener('mouseout', function(e) {
        /* display clear image */
        img1.src = "./images/dorm-52-blur-300.png";
        /* img1.classList.remove = "hover-width"; */
    });

    img2.addEventListener('mouseout', function(e) {
        img2.src = "./images/sf-80-blur-500.png";
        /* img2.classList.remove = "hover-width"; */
    });

    img3.addEventListener('mouseout', function(e) {
        img3.src = "./images/sutro-95-blur-500.png";
        /* img3.classList.remove = "hover-width"; */
    });

    img4.addEventListener('mouseout', function(e) {
        img4.src = "./images/apartment-100-blur-500.png";
        /* img4.classList.remove = "hover-width"; */
    });

    document.querySelector('.close').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });
}());