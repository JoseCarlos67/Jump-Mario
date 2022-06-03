const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}

//Verifica se o Mario encostou na pipe com o left = 175px e o bottom do mario igual a 100px.
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 175 && pipePosition > 0 && marioPosition <= 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = 'mario-jump-images/game-over.png'
        mario.style.width = '100px';
        mario.style.marginLeft = '70px';

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump);