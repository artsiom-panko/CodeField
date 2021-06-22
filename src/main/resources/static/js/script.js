window.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.img__text'),
        currentImage = document.querySelector('.dog_img');

    const imgesSrc = ['img/dog/dog1.jpg',
        'img/dog/dog2.jpg',
        'img/dog/dog3.jpg',
        'img/dog/dog4.jpg',
        'img/dog/dog5.jpg'
    ];

    currentImage.src = imgesSrc[Math.floor(Math.random() * imgesSrc.length)];

    button.addEventListener('click', () => {
        setNextImage();
    })

    currentImage.addEventListener('click', () => {
        setNextImage();
    })

    function setNextImage() {
        var nextImage = imgesSrc[Math.floor(Math.random() * imgesSrc.length)];

        while (nextImage === currentImage.getAttribute("src")) {
            nextImage = imgesSrc[Math.floor(Math.random() * imgesSrc.length)];
        }

        currentImage.src = nextImage;
    }
})