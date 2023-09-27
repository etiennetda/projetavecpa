var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// Démarrez le défilement automatique toutes les 3 secondes
setInterval(function() {
    plusSlides(1); // Appel à plusSlides(1) pour passer à la diapositive suivante
}, 3000);

document.getElementById("buttonWithHeart").addEventListener("click", function() {
    // Redirigez vers une autre page lorsque le bouton est cliqué
    window.location.href = "favoris/favoris.html";
});