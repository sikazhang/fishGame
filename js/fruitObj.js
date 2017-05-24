var fruitObj=function(){
	this.alive=[];
    this.orange=new Image();
    this.blue=new Image();
    this.x=[];
    this.y=[];
    this.l=[];
    this.spd=[];

}
fruitObj.prototype.num=30;
fruitObj.prototype.init= function() {

	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.l[i]=0;
		this.spd[i]=Math.random()*0.01+0.003;
		//this.born(i);
	}
	this.orange.src="src/fruit.png";
	this.blue.src="src/blue.png";
};
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		
      if(this.alive[i]){
      	if(this.l[i]<=15){
 		  this.l[i]+=this.spd[i]*deltaTime;
 		}else{
 			this.y[i]-=this.spd[i]*7*deltaTime;
 		}
		ctx2.drawImage(this.orange,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
        if(this.y[i]<10){
        	this.alive[i]=false;
        }
      }

 		
	}
}
fruitObj.prototype.born=function(i){
	var aneID=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.x[aneID];
	this.y[i]=canHeight-ane.len[aneID];
	this.l[i]=0;
	this.alive[i]=true;




}
// fruitObj.prototype.update=function(){
// 	var sum=0;
// 	for(var i=0;i<this.num;i++){
// 		if(this.alive[i]) sum++
// 	}
// }


function fruitMonitor(){
	var sum=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]) sum++;

	}
	if(sum<15){

		sendFruit();
	}
}

function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}

}