document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('sliderContainer');
    let isMoving = false;

    slider.addEventListener('mouseenter', () => {
        isMoving = true;
    });

    slider.addEventListener('mouseleave', () => {
        isMoving = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (isMoving) {
            const containerWidth = document.getElementById('photoSlider').offsetWidth;
            const sliderWidth = slider.offsetWidth;

            const moveRatio = (e.clientX / containerWidth) * (sliderWidth - containerWidth);
            slider.style.transform = `translateX(-${moveRatio}px)`;
        }
    });
});


/*build slider of three images*/