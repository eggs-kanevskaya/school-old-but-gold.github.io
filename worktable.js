var pjs = new PointJS(1920, 1080, {backgroundColor: 'black'})
var game = pjs.game;
var key = pjs.keyControl;
key.initControl();
var mouse = pjs.mouseControl;
mouse.initControl();
var brush = pjs.brush;

var back = game.newBackgroundObject(   { 
     x : 0, 
     y : 0, 
     w : 1280, 
     h : 720, 
     countX : 1, 
     countY : 1, 
     file : "ex3/table.png"
   });

var panzad = game.newImageObject(   { 
     file : "ex3/panzad.png", 
     x : 0, 
     y : 690, 
     w : 1280, 
     h : 30, 
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });


var table_ex3 = game.newImageObject(   { 
     file : "ex3/table_ex3.png", 
     x : 0, 
     y : 0, 
     w : 1280, 
     h : 720, 
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });


var st1 = game.newRectObject(   { 
     x : 100, 
     y : 410, 
     w : 220, 
     h : 3, 
     fillColor : "#FBFE6F" 
   });

var st2 = game.newRectObject(   { 
     x : 1000, 
     y : 460, 
     w : 3, 
     h : 220, 
     fillColor : "#FBFE6F" 
   });




game.newLoop('ex3', function () {

	table_ex3.draw();
	panzad.draw();
    st1.draw();
  	st2.draw();

    brush.drawTextLines({
  	lines : ["Что такое рабочий стол?","Рабочий стол компьютера — ", "это то, что мы видим сразу же", "после включения компьютера ","и запуска Windows.", "Его можно разделить на две части:"] , 
  	x : 450,
 	y : 50, 
  	color : "yellow",
  	size : 40
});


    brush.drawTextLines({
  	lines : ["Область ярлыков"] , 
  	x : 350,
 	y : 400, 
  	color : "yellow",
  	size : 40
});
    brush.drawTextLines({
  	lines : ["Панель задач."] , 
  	x : 850,
 	y : 400, 
  	color : "yellow",
  	size : 40
});

    brush.drawTextLines({
  	lines : ["Для продолжения нажмите левую кнопку мыши"] , 
  	x : 50,
 	y : 640, 
  	color : "yellow",
  	size : 40
});

    if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('ex3_lang');
	}
   	
}) 


var panzad_ex3 = game.newImageObject(   { 
     file : "ex3/panzad_ex3.png", 
     x : 0, 
     y : 690, 
     w : 1280, 
     h : 30, 
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });


var lang = game.newImageObject(   { 
     file : "ex3/lang.jpg", 
     x : 1070, 
     y : 560, 
     w : 210, 
     h : 132, 
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });

var table_pz = game.newImageObject(   { 
     file : "ex3/table_pz.png", 
     x : 0, 
     y : 0, 
     w : 1280, 
     h : 720, 
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });

bo = false;
//доделать таймкод
game.newLoop('ex3_lang', function () {

	table_pz.draw();
	panzad_ex3.draw();
	var mousePos = mouse.getPosition();
	if(mousePos.x < 1176 && mousePos.x > 1146 && mousePos.y > 680 && mousePos.y < 720 && mouse.isPress("LEFT")) bo=true;
		if (bo) lang.draw();
})


game.newLoop('ex3_af', function () {

	table_ex3.draw();




}) 


game.setLoop('ex3');
game.start();
