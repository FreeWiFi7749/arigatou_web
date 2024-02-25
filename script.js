document.addEventListener('DOMContentLoaded', () => {
    const thankYou = document.querySelector('.thank-you');
    const animations = [
        'spin 1s linear infinite',
        'bounce 2s infinite',
        'pulse 3s infinite ease-in-out',
        'sway 5s infinite ease-in-out',
        'spin-fast 0.2s linear infinite',
        'fadeInOut 3s infinite',
        'shake 1s infinite',
        'bigBounce 2s infinite',
        'flyAway 3s ease-in forwards',
        'spinAndMove 10s infinite linear'
    ];

    let randomAnimation;
    do {
        randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    } while (thankYou.style.animation === randomAnimation);

    thankYou.style.animation = randomAnimation;
});