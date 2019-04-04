var pjs = new PointJS(1100, 620, {backgroundColor: ''})
  
pjs.system.initFullPage();

var game = pjs.game;
var mouse = pjs.mouseControl;
mouse.initControl();
var r = pjs.math.random;

var fon=[], s = 50;

for (var x = 0; x<100; x++) {
  for (var y = 0; y<100; y++) {
    fon.push(
    game.newRectObject({ 
     x : x*s, 
     y : y*s, 
     w : s-1, 
     h : s-1, 
     fillColor : "gray", 
   })
      );
  }
}

var player = game.newCircleObject(   { 
     x : 100, 
     y : 100, 
     radius : 10, 
     fillColor : "red"
   });



var eat =[];

for (var i = 0; i<3000; i++) {
  eat.push(
   game.newCircleObject({ 
     x : r(0, 5000), 
     y : r(0, 5000), 
     radius : r(3, 10), 
     fillColor : pjs.colors.randomColor(0, 255)
   })
    );
}


var b=player.radius;

game.newLoop('game', function () {



for (var i in fon) {
 if (fon[i].isInCamera()) {
  fon[i].draw();
 }
}

for (var i in eat) {
 if (eat[i].isInCamera()) {
  eat[i].draw();

  if (player.getDistanceC(eat[i].getPosition(1)) < player.radius+eat[i].radius + 20) {
  eat[i].moveTimeC(player.getPositionC(), 40);
  }


  if (player.getDistanceC(eat[i].getPosition(1)) < player.radius+eat[i].radius) {
   eat.splice(i, 1);
   b+=0.2;
   player.setRadiusC(b);
  }



 }
}


if (eat.length<2900) {

for (var i = 0; i<5000; i++) {
  eat.push(
   game.newCircleObject({ 
     x : r(0, 5000), 
     y : r(0, 5000), 
     radius : r(3, 10), 
     fillColor : pjs.colors.randomColor(0, 255)
   })
    );
 }

}




player.moveTimeC(mouse.getPosition(), player.radius*4);


pjs.camera.setPositionC(player.getPosition(1));

player.draw();

if (player.radius > 20){

	pjs.brush.drawTextLines({
  		lines : ["Вы дошли до максимального размера!","Конец игры"] , 
  		x : 70,
 		y : 50, 
  		color : "black",
  		size : 60
	});

}

//console.log(pjs.OOP.getArrInCamera(fon).length);

}) // закончился ировой цикл myGame

game.setLoop('game');
game.start();