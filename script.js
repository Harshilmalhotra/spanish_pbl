const spi_container = document.querySelector('.spi_container');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

scrollLeft.addEventListener('click', () => {
    spi_container.scrollBy({
        top: 0,
        left: -100, // Change this value to adjust the scroll distance
        behavior: 'smooth'
    });
    

});

scrollRight.addEventListener('click', () => {
    spi_container.scrollBy({
        top: 0,
        left: 100, // Change this value to adjust the scroll distance
        behavior: 'smooth'
    });
});
