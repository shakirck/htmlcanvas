
var canvas = document.querySelector('canvas');
canvas.width= window.innerWidth;
canvas.height = window.innerHeight;
 var c =canvas.getContext('2d');
// //Rectangle
// c.fillStyle= 'rgba(234,34,0,0.5)';//red
// c.fillRect(400,100,100,100);

// c.fillStyle= 'rgba(0,234,0,0.5)'; //green
// c.fillRect(400,300,100,100);

// c.fillStyle= 'rgba(0,0,234,0.5)'; //blue
// c.fillRect(400,200,100,100);

// c.fillStyle='rgba(100,100,100,0.5)';//grey
// c.fillRect(400,400,100,100);
//


console.log(canvas);

// Line

// c.beginPath();
// c.moveTo(400,300);
// c.lineTo(400,400);
// c.lineTo(800,50);
// c.strokeStyle ="#fa53a5";
// c.stroke();




// arc
// c.beginPath();
// c.arc(300,300,50,0,Math.PI*2,false);
// c.strokeStyle='yellow'
// c.stroke();




// for (var i=0;i<128;i++){
//     var x = Math.random() * window.innerWidth;
//     var y =Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,50,0,Math.PI*2,false);
//     c.strokeStyle='red'
//     c.stroke();
// }

var mouse={
    x:undefined,
    y:undefined
}
var maxRadius = 40;
// var minRadius = 5;

var colorArray=[

    '#F70025',
    '#F7EFE2',
    '#F25C00',
    '#F9A603',
    '#579C87'
]
window.addEventListener('mousemove',
    function(event){
        mouse.x=event.x;
        mouse.y=event.y;
        console.log(mouse);
})


window.addEventListener('resize',
    function(){
        canvas.width= window.innerWidth;
canvas.height = window.innerHeight;
init();
    })






function Circle(x,y,dx,dy,radius){
    this.x = x ;
    this.y = y;
    this.dx = dx;
    this.dy =dy ;
    this.radius= radius;
    this.minRadius=radius;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)]

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        // c.strokeStyle='blue';
        // c.stroke();
        c.fill();
        c.fillStyle=this.color;

    }
     this.update = function(){

        if (this.x + this.radius > innerWidth || this.x  - this.radius < 0){
        this.dx= -this.dx;
     }
        if ( this.y+this.radius >innerHeight || this.y-this.radius <0  ) {
            this.dy=-this.dy;
     }
     this.x += this.dx;
     this.y += this.dy;
    this.draw();

        //INTERACTIVIty

        if (mouse.x -this.x < 50 && mouse.x -this.x >-50&&mouse.y -this.y < 50 && mouse.y -this.y >-50    ){
            if (this.radius<maxRadius){
            this.radius+=1;
             }
        }
        else if(this.radius>this.minRadius){
            this.radius-=1;
        }
    }



 }




 var circleArray=[];

function init(){

circleArray=[];
for(var i =0; i<500;i++){
    var radius=Math.random()*3+1;
    var x =Math.random() * (innerWidth - radius * 2)+ 2*radius;

    var y =Math.random() * (innerHeight-radius*2) +2*radius ;
    var dx=(Math.random()-0.5);
    var dy=(Math.random()-0.5);
    circleArray.push(new Circle(x,y,dx,dy,radius));
}


}


function animate(){

requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth,innerHeight);

for(i=0;i<circleArray.length;i++){
    circleArray[i].update();
}

// console.log(dx,dy);
}
animate();
init();







var canvas = document.querySelector('canvas');
canvas.width= window.innerWidth;
canvas.height = window.innerHeight;
 var c =canvas.getContext('2d');
// //Rectangle
// c.fillStyle= 'rgba(234,34,0,0.5)';//red
// c.fillRect(400,100,100,100);

// c.fillStyle= 'rgba(0,234,0,0.5)'; //green
// c.fillRect(400,300,100,100);

// c.fillStyle= 'rgba(0,0,234,0.5)'; //blue
// c.fillRect(400,200,100,100);

// c.fillStyle='rgba(100,100,100,0.5)';//grey
// c.fillRect(400,400,100,100);
//


console.log(canvas);

// Line

// c.beginPath();
// c.moveTo(400,300);
// c.lineTo(400,400);
// c.lineTo(800,50);
// c.strokeStyle ="#fa53a5";
// c.stroke();




// arc
// c.beginPath();
// c.arc(300,300,50,0,Math.PI*2,false);
// c.strokeStyle='yellow'
// c.stroke();




// for (var i=0;i<128;i++){
//     var x = Math.random() * window.innerWidth;
//     var y =Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,50,0,Math.PI*2,false);
//     c.strokeStyle='red'
//     c.stroke();
// }

var mouse={
    x:undefined,
    y:undefined
}
var maxRadius = 40;
// var minRadius = 5;

var colorArray=[

    '#F70025',
    '#F7EFE2',
    '#F25C00',
    '#F9A603',
    '#579C87'
]
window.addEventListener('mousemove',
    function(event){
        mouse.x=event.x;
        mouse.y=event.y;
        console.log(mouse);
})


window.addEventListener('resize',
    function(){
        canvas.width= window.innerWidth;
canvas.height = window.innerHeight;
init();
    })






function Circle(x,y,dx,dy,radius){
    this.x = x ;
    this.y = y;
    this.dx = dx;
    this.dy =dy ;
    this.radius= radius;
    this.minRadius=radius;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)]

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        // c.strokeStyle='blue';
        // c.stroke();
        c.fill();
        c.fillStyle=this.color;

    }
     this.update = function(){

        if (this.x + this.radius > innerWidth || this.x  - this.radius < 0){
        this.dx= -this.dx;
     }
        if ( this.y+this.radius >innerHeight || this.y-this.radius <0  ) {
            this.dy=-this.dy;
     }
     this.x += this.dx;
     this.y += this.dy;
    this.draw();

        //INTERACTIVIty

        if (mouse.x -this.x < 50 && mouse.x -this.x >-50&&mouse.y -this.y < 50 && mouse.y -this.y >-50    ){
            if (this.radius<maxRadius){
            this.radius+=1;
             }
        }
        else if(this.radius>this.minRadius){
            this.radius-=1;
        }
    }



 }




 var circleArray=[];

function init(){

circleArray=[];
for(var i =0; i<500;i++){
    var radius=Math.random()*3+1;
    var x =Math.random() * (innerWidth - radius * 2)+ 2*radius;

    var y =Math.random() * (innerHeight-radius*2) +2*radius ;
    var dx=(Math.random()-0.5);
    var dy=(Math.random()-0.5);
    circleArray.push(new Circle(x,y,dx,dy,radius));
}


}


function animate(){

requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth,innerHeight);

for(i=0;i<circleArray.length;i++){
    circleArray[i].update();
}

// console.log(dx,dy);
}
animate();
init();







