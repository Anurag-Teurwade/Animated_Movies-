function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = trailer.querySelector('video');
    
    if (trailer.classList.contains('active')) {
        video.pause();
        trailer.classList.remove('active');
    } else {
        video.play();
        trailer.classList.add('active');
    }
}


function changeBg(bg, title) {
    
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

  
    banner.style.background = `url("../Animated_Movies/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
