document.addEventListener('DOMContentLoaded', function () {
    const centerParagraph = document.getElementById('center-paragraph');
    const centerLogo = document.getElementById('logo');
    const centerHeading = document.getElementById('center')
    const bookCovers = document.querySelectorAll('.book-cover');
    const bookSliding = document.getElementById('carouselExampleIndicators')

    if (bookCovers.length > 0) {
        centerParagraph.style.display = 'none';
        centerLogo.style.display = 'none';
        centerHeading.style.display = 'none';
        bookSliding.style.display = 'none';
    }
});
