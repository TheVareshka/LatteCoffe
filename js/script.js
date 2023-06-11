const categoryButtons = document.querySelectorAll('.menu-category .btn');
const menuImages = document.querySelectorAll('.menu-gallery .menu-img');

const showImage = (index) => {
    categoryButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });

    menuImages.forEach((image, i) => {
        image.classList.toggle('active', i === index);
    });
};

categoryButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showImage(index);
    });
});