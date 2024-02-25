
document.addEventListener('DOMContentLoaded', () => {
    const thankYou = document.querySelector('.thank-you');
    const animations = [
        'spin 1s linear infinite',
        'bounce 2s infinite',
        'pulse 3s infinite ease-in-out',
        'sway 5s infinite ease-in-out'
    ];

    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    thankYou.style.animation = randomAnimation;
});