$(document).ready(function(){
	
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

function SpriteSheet(path, frameWidth, frameHeight){
	this.image = new Image();
	this.frameWidth = frameWidth;
	this.frameHeight = frameHeight;

	var self = this;
	this.image.onload = function() {
		self.framesPerRow = Math.floor(self.image.width / self.frameWidth);
	};

	this.image.src = path;
}

function Animation(spritesheet, frameSpeed, startFrame, endFrame) {
	var animationSequence = []; //array holding order of animation
	var currentFrame = 0; //current frame to draw
	var counter = 0; //keep track of frame rate

	for(var i = startFrame; i <= endFrame; i++){  //i = frameNumber
		animationSequence.push(i);
	}

	this.update = function() {
 
    		// update to the next frame if it is time
    		if (counter == (frameSpeed - 1)){
      			currentFrame = (currentFrame + 1) % animationSequence.length;
		}	
 
    		// update the counter
   		counter = (counter + 1) % frameSpeed;
  	};

	this.draw = function(x,y){
		var row = Math.floor(animationSequence[currentFrame] /spritesheet.framesPerRow);
		var col = Math.floor(animationSequence[currentFrame] % spritesheet.framesPerRow);
		//this makes sense if you think about it! columns repeat, but rows don't 

		 ctx.drawImage(
      			spritesheet.image,
      			col * spritesheet.frameWidth, row * spritesheet.frameHeight,
      			spritesheet.frameWidth, spritesheet.frameHeight,
    			x, y,
      			spritesheet.frameWidth, spritesheet.frameHeight);
	};
	
}
//pic = 425 x 67
//1st animation: 12 frames, 425/12 = 35.4


spritesheet = new SpriteSheet("kirbyCut.png",32, 33);
sleep = new Animation(spritesheet, 10, 0, 11);
console.log(spritesheet.frameWidth);
console.log("lol");

function animate() {
   window.requestAnimationFrame( animate );
   ctx.clearRect(0, 0, 32, 33);
 
   sleep.update();
   sleep.draw(12.5, 12.5);
}

yeee = new animate();
});
