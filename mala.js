document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const slide = document.querySelector('.slide');

    nextButton.onclick = function() {
        let items = document.querySelectorAll('.item');
        slide.appendChild(items[0]);
    };

    prevButton.onclick = function() {
        let items = document.querySelectorAll('.item');
        slide.prepend(items[items.length - 1]);
    };
});
