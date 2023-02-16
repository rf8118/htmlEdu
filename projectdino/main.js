let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;

let dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);        
    }
}

class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);                
    }
}
dino.draw();

let timer=0;
let cactusArray = [];
function 프레임실행하기(){
    requestAnimationFrame(프레임실행하기);
    timer ++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    if (timer%120 == 0)
    {
        let cactus = new Cactus();
        cactusArray.push(cactus);
    }
    cactusArray.forEach( (a, i, o) =>{
        if (a.x < 0){
            o.splice(i, 1);
        }
        a.x -- ;
        a.draw();
    })
    dino.draw();
}
프레임실행하기();
