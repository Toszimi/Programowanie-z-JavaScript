const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let speedArray = [
    '1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9','1.0','1.1','1.2','1.3','1.4','1.5','1.6','1.7','1.8','1.9'
];

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Snowflake(x, y, speed, radius){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.radius = radius;
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = 'white';
        c.fill();
    };

    this.update = function(){
        if(this.y > innerHeight){
            this.x = Math.random() * window.innerWidth;
            this.y = this.speed;
        }

        this.y += this.speed;

        this.draw();
    };
}

let snowflakeArray = [];

for(let i = 0; i < 100; i++){
    let radius = Math.floor(Math.random() * 5)+1;
    let x = Math.random() * window.innerWidth;
    let y = 0;
    let speed = Math.random()*speedArray[i];
    snowflakeArray.push(new Snowflake(x, y, speed, radius));
}


function fall(){
    requestAnimationFrame(fall);

    c.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < snowflakeArray.length; i++){
        snowflakeArray[i].update();
    }
}
fall();
