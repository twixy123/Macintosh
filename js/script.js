

let video = document.querySelector('.video-content__video');

video.addEventListener('click', function () {
    console.log(video);
    
    video.setAttribute('controls', '');
    video.setAttribute('autoplay', '');
});



