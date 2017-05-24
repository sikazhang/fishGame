var ctx1;
var ctx2;


var can1;
var can2;

var lastTime;
var deltaTime;


var canWidth;
var canHeight;

var ane;
var fruit;
var mom;

var mx;
var my;
var bgPic=new Image();
document.body.onload=game;
function game(){
    init();
    lastTime=Date.now();
    deltaTime=0
    gameloop();

}
function init(){
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext('2d');
	bgPic.src="src/background.jpg";


    can1.addEventListener('mousemove',onMouseMove,false);
	canWidth=can1.width;
	canHeight=can1.height;

	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
    
    mom=new momObj();
    mom.init();

    mx=canWidth*0.5;
    my=canHeight*0.5;

}

function gameloop(){

	requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
}

function onMouseMove(e){
	if(e.offSetX||e.layerX){
       mx=e.offSetX == undefined?e.layerX:e.offSetX;
       my=e.offSetY == undefined?e.layerY:e.offSetY;

	}
}