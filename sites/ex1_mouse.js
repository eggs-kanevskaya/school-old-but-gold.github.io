var pjs = new PointJS(1920, 1080, {backgroundColor: 'black'})
pjs.system.initFullPage();
var game = pjs.game;
var mouse = pjs.mouseControl;
mouse.initControl();
var brush = pjs.brush;



var mou_r = game.newImageObject(   { 
     file : "ex1/mouse_right.png", 
     x : 900, 
     y : 50, 
     w : 202, 
     h : 600, 
   });

var mou = game.newImageObject(   { 
     file : "ex1/mouse.png", 
     x : 900, 
     y : 50, 
     w : 202, 
     h : 600, 
   });

var back = game.newBackgroundObject(   { 
     x : 0, 
     y : 0, 
     w : 1280, 
     h : 720, 
     countX : 1, 
     countY : 1, 
     file : "ex1/table.png"
   });

var mou_l = game.newImageObject(   { 
     file : "ex1/mouse_left.png", 
     x : 900, 
     y : 50, 
     w : 202, 
     h : 600, 
   });

var mou_c = game.newImageObject(   { 
     file : "ex1/mouse_center.png", 
     x : 900, 
     y : 50, 
     w : 202, 
     h : 600, 
   });


game.newLoop('ex1', function () {

	back.draw();
	mou_l.draw();



	if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('mouse_right');
	}

	brush.drawTextLines({
  	lines : ["Есть две основные кнопки — правая и левая.", "Чаще всего используется левая кнопка мыши,", " но для её использования иногда", "нужно нажимать один раз, а иногда два.", "ДАВАЙТЕ ПОТРЕНИРУЕМСЯ","","Нажмите 1 раз на левую кнопку мыши"] , 
  	x : 100,
 	y : 100, 
  	color : "yellow",
  	size : 40
});
});



game.newLoop('mouse_right', function () {
	back.draw();
	mou_r.draw();

	if (pjs.mouseControl.isPress("RIGHT")){
		game.setLoop('mouse');
	}


	brush.drawTextLines({
  	lines : ["ОТЛИЧНО!", "Правая кнопка мышки всегда используется", "с одним щелчком и обычно открывает", "список операций, которые можно", "о сделать с тем или иным файлом.","","Нажмите 1 раз на правую кнопку мыши"] , 
  	x : 100,
 	y : 100, 
  	color : "yellow",
  	size : 40
});
});


function coinToss() {
  return (Math.floor(Math.random() * 2) === 0);
}


var c;
var count = 0;


game.newLoop('mouse', function () {

	back.draw();
	mou.draw();

	c = coinToss();
	if (c){
		game.setLoop('mouse_gl');
		count +=1;
	}
	else{
		game.setLoop('mouse_gr');
		count +=1;
	}

	if (count > 11){	
		game.setLoop('mouse_der');
	}

	});

game.newLoop('mouse_gr', function () {

	back.draw();
	mou_r.draw();


	brush.drawTextLines({
  	lines : ["ОТЛИЧНО!", "Нажмите на правую кнопку мыши"] , 
  	x : 100,
 	y : 100, 
 	style : "Roboto Lt",
  	color : "yellow",
  	size : 40
});


	if (pjs.mouseControl.isPress("RIGHT")){
		game.setLoop('mouse');
	}


});


game.newLoop('mouse_gl', function () {

	back.draw();
	mou_l.draw();


	brush.drawTextLines({
  	lines : ["ОТЛИЧНО!", "Нажмите на левую кнопку мыши"] , 
  	x : 100,
 	y : 100, 
  	color : "yellow",
  	size : 40
});


	if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('mouse');
	}

	});


game.newLoop('mouse_der', function () {

	back.draw();

	brush.drawTextLines({
  	lines : ["ОТЛИЧНО!", "Вы справились со всеми заданиями","давайте научимся, как правильно держать мышку", "Для продолжения нажмите на левую кнопку мыши"] , 
  	x : 100,
 	y : 100, 
  	color : "yellow",
  	size : 40
});

if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('mouse_der2');
	}



});


game.newLoop('mouse_der2', function () {
	back.draw();
	brush.drawTextLines({
  		lines : ["Существует много способов держать мышку, но только один правильный.", "","Правильно:","", " накрывать мышь ладонью так, чтобы ее нижняя часть находилась у запястья;", "слегка касаться большим пальцем и мизинцем боковых граней мыши;", "класть указательный палец на левую кнопку мыши, безымянный — на правую,","двигать манипулятором легко и плавно;","позволить всей руке двигаться за кистью","Для продолжения нажмите на левую кнопку мыши" ],
  		x : 90,
 		y : 100, 
  		color : "yellow",
 	 	size : 35
	});
	if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('mouse_der3');
	}

});

var gide = game.newImageObject(   { 
     file : "ex1/gide.jpg", 
     x : 500, 
     y : 400, 
     w : 640, 
     h : 264, 
   });



game.newLoop('mouse_der3', function () {

	back.draw();
	gide.draw();
	brush.drawTextLines({
  		lines : ["Неправильно:", "","«сползать» ладонью по мыши так, чтобы часть ладони и запястье лежали на столе;"," с усилием сжимать мышь по бокам;", "класть указательный палец на левую кнопку,"," средний — на правую, а безымянный прижимать к боковой грани мыши;", "давить мышью на коврик;", "перемещать мышь исключительно при помощи кисти.","Для продолжения нажмите на левую кнопку мыши"],
  		x : 80,
 		y : 100, 
  		color : "yellow",
 	 	size : 33
	});
	if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('mouse_der4');
	}

});

var kur = game.newImageObject(   { 
     file : "ex1/kur.png", 
     x : 1000, 
     y : 50, 
     w : 200,
     h : 400, 
   }); 

game.newLoop('mouse_der4', function () {

	back.draw();
kur.draw();

	brush.drawTextLines({
  		lines : ["Давайте сыграем в игру","Бомба следует за Вашим курсором мыши вокруг экрана и ", "взрывается, когда это достигает Вашего курсора.", "Курсор представлен на фотографии.","Вы двигаете мышкой - он двигается на экране","","Для начала игры нажмите левую кнопку мыши"],
  		x : 80,
 		y : 100, 
  		color : "yellow",
 	 	size : 33
	});

	if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('mouse_move');
	}

});



var bomb = game.newImageObject(   { 
     file : "ex1/bomb.gif", 
     x : 0, 
     y : 0, 
     w : 50, 
     h : 38, 
   });


//obj.moveTo( obj2.getPosition(), 2 );
//pjs.mouseControl.getPosition();

var m;
	
var timer = pjs.OOP.newTimer(30000, function () { 
	game.setLoop('gg2'); 
}); 
var distance;

var timer2 = pjs.OOP.newTimer(5000, function () { 
		game.setLoop('gg2');
}); 
	

game.newLoop('mouse_move', function () {

	m = mouse.getPosition();

	back.draw();

	bomb.draw();
	timer.start();

	bomb.moveToC( m, 2 );

	distance = bomb.getDistance( m );


	if (distance < 10){
		timer.stop();
		game.setLoop('gg1');
	}

});

var vzriv = game.newImageObject(   { 
     file : "ex1/explode.gif", 
     x : 0, 
     y : 0, 
     w : 62, 
     h : 89, 
   });

var myPoint = pjs.vector.point(0, 0);

game.newLoop('gg1', function () {
	timer2.start();
	timer2.restart();
	m = mouse.getPosition();
	back.draw();
	vzriv.setPosition( m );
	vzriv.draw();
	bomb.setPosition( myPoint );


});

game.newLoop('gg2', function () {

	back.draw();
	brush.drawTextLines({
  		lines : ["Для того, чтобы начать заново","Нажмите левую кнопку мыши","","","Можно перейти к следующему уроку"],
  		x : 80,
 		y : 100, 
  		color : "yellow",
 	 	size : 40
	});

	
	if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('mouse_move');
	}



});


game.setLoop('ex1');

game.start();