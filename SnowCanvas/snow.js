const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Snowflake(x, y, yy, radius){
    this.x = x;
    this.y = y;
    this.yy = yy;
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
            this.y = this.yy;
        }

        this.y += this.yy;

        this.draw();
    };
}

let snowflakeArray = [];

for(let i = 0; i < 20; i++){
    let radius = 5;
    let x = Math.random() * window.innerWidth;
    let y = 1;
    let yy = Math.floor(Math.random() * 20)+1;
    snowflakeArray.push(new Snowflake(x, y, yy, radius));
}


function fall(){
    requestAnimationFrame(fall);

    c.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < snowflakeArray.length; i++){
        snowflakeArray[i].update();
    }
}
fall();
