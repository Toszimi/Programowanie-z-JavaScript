let ball = document.querySelector('#ball');
let hole = document.querySelector('#hole');

let ballX = 0;
let ballY = 0;
let holeX = 0;
let holeY = 0;
let speedX = 0;
let speedY = 0;

ball.style.visibility = 'hidden';
hole.style.visibility = 'hidden';
const nav = document.getElementById('nav');
document.getElementById('buttonGameStart').addEventListener('click', gameStart);


function gameStart() {
    window.addEventListener('deviceorientation', phoneAngle);
    document.getElementById('buttonGameStart').innerHTML = 'Zagraj';
    document.getElementById('buttonGameStart').style.borderRadius = '20%';
    nav.style.justifyContent = 'flex-start';
    nav.style.alignItems = 'flex-start';
    ball.style.visibility = 'visible';
    hole.style.visibility = 'visible';
    startingCords();
}

function phoneAngle(event) {
    speedX = event.gamma / 45;
    speedY = event.beta / 45;
    Move();
}

function startingCords() {
    ballX = Math.floor(Math.random() * window.innerHeight);
    ballY = Math.floor(Math.random() * window.innerWidth);
    holeX = Math.floor(Math.random() * window.innerHeight);
    holeY = Math.floor(Math.random() * window.innerWidth);
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    hole.style.left = `${holeX}px`;
    hole.style.top = `${holeY}px`;
}

function Move() {
    if (ballX + speedX < window.innerWidth && ballX + speedX > 0) {
        ballX += speedX;
        ball.style.left = `${ballX}px`;
    }

    if (ballY + speedY < window.innerHeight && ballY + speedY > 0) {
        ballY += speedY;
        ball.style.top = `${ballY}px`;
    }
    if (Math.abs((ballX - holeX)) < 7 && Math.abs((ballY - holeY)) < 7) {
        win();
    }

    function win() {
        nav.style.justifyContent = 'center';
        nav.style.alignItems = 'center';
        document.getElementById('buttonGameStart').innerHTML = 'Gratulacje! Kliknij mnie aby zagrać ponownie';
        document.getElementById('buttonGameStart').style.borderRadius = '0%';
        ball.style.visibility = 'hidden';
        hole.style.visibility = 'hidden';
    }
}