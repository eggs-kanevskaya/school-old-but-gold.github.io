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
     file : "ex2/table.png"
   });

//bukvi

//добавить вары кнопок
var klava = game.newImageObject(   { 
     file : "ex2/key.png", 
     x : 200, 
     y : 50, 
     w : 940, 
     h : 334, 
   }); 
var bukvi = game.newImageObject(   { 
     file : "ex2/bukvi.png", 
     x : 200, 
     y : 50, 
     w : 940, 
     h : 334, 
   });
var Key_backesp = game.newImageObject(   { 
     file : "ex2/Key_backesp.png", 
     x : 200, 
     y : 50, 
     w : 940, 
     h : 334, 
   });
var Key_captab = game.newImageObject(   { 
     file : "ex2/Key_captab.png", 
     x : 200, 
     y : 50, 
     w : 940, 
     h : 334, 
   });
var Key_chifr = game.newImageObject(   { 
     file : "ex2/Key_chifr.png", 
     x : 200, 
     y : 50, 
     w : 940, 
     h : 334, 
   });
var Key_priv = game.newImageObject(   { 
     file : "ex2/Key_priv.png", 
     x : 200, 
     y : 50, 
     w : 940, 
     h : 334, 
   });//Key_shift

var Key_shift = game.newImageObject(   { 
     file : "ex2/Key_shift.png", 
     x : 200, 
     y : 50, 
     w : 940, 
     h : 334, 
   });
var Key_spaceEnt = game.newImageObject(   { 
     file : "ex2/Key_spaceEnt.png", 
     x : 200, 
     y : 50, 
     w : 940, 
     h : 334, 
   });

var Key_2019 = game.newImageObject(   { 
     file : "ex2/key_2019.png", 
     x : 200, 
     y : 50, 
     w : 940, 
     h : 334, 
   });

game.newLoop('ex2', function () {

	back.draw();
	klava.draw();

	brush.drawTextLines({
  		lines : ["На клавиатуре, при помощи которой мы печатаем текст,","находится довольно много клавиш.","И каждая из них для чего-то нужна.","В этом уроке мы поговорим об их назначении","и научимся ими правильно пользоваться.","Для продолжения нажмите на левую кнопку мыши"],
  		x : 80,
 		y : 400, 
  		color : "yellow",
 	 	size : 40
	});

	if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('ex2_bokvi');
	}

});


game.newLoop('ex2_bokvi', function () {

	back.draw();
	bukvi.draw();

	brush.drawTextLines({
  		lines : ["Буквы","Самая важная часть клавиатуры -","те клавиши, которыми печатают текст.","Находятся они в центре.","Как правило, на каждой кнопочке есть две буквы –","одна иностранная, другая русская.","Как их переключить объясним в следующих уроках","Для продолжения нажмите на левую кнопку мыши"],
  		x : 80,
 		y : 400, 
  		color : "yellow",
 	 	size : 40
	});

	if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('ex2_shift');
	}


});



game.newLoop('ex2_shift', function () {

	back.draw();
	Key_shift.draw();

	brush.drawTextLines({
  		lines : ["если Вы нажмете на эту кнопку и,","не отпуская ее, еще на какую-нибудь клавишу с буквой,","то буква напечатается большой. ","Давайте потренируемся","Для продолжения нажмите на левую кнопку мыши"],
  		x : 80,
 		y : 400, 
  		color : "yellow",
 	 	size : 40
	});

	if (pjs.mouseControl.isPress("LEFT")){
		game.setLoop('ex2_shift_tr');
	}


});

bool1 = bool2 = bool3 = bool4= bool5 = bool6 =false;

game.newLoop('ex2_shift_tr', function () {
	back.draw();
	Key_priv.draw();

	brush.drawTextLines({
  		lines : ["Напишите слово Привет","Для большой буквы используйте Shift и нужную кнопку"],
  		x : 80,
 		y : 400, 
  		color : "yellow",
 	 	size : 40
	});

	if((key.isDown("SHIFT") && key.isPress("G")) || bool1){
		bool1 = true;
		brush.drawTextLines({
  		lines : ["П"],
  		x : 80,
 		y : 500, 
  		color : "green",
 	 	size : 60
	});
		if(key.isPress("H") || bool2){
			bool2 = true;
			brush.drawTextLines({
  			lines : ["р"],
  			x : 120,
 			y : 500, 
  			color : "green",
	 	 	size : 60
		});

			if(key.isPress("B") || bool3){
			bool3 = true;
			brush.drawTextLines({
  			lines : ["и"],
  			x : 150,
 			y : 500, 
  			color : "green",
	 	 	size : 60
		});

			if(key.isPress("D") || bool4){
			bool4 = true;
			brush.drawTextLines({
  			lines : ["в"],
  			x : 180,
 			y : 500, 
  			color : "green",
	 	 	size : 60
		});

			if(key.isPress("T") || bool5){
			bool5 = true;
			brush.drawTextLines({
  			lines : ["е"],
  			x : 210,
 			y : 500, 
  			color : "green",
	 	 	size : 60
		});
			if(key.isPress("N") || bool6){
			bool6 = true;
			brush.drawTextLines({
  			lines : ["т"],
  			x : 240,
 			y : 500, 
  			color : "green",
	 	 	size : 60
		});
			brush.drawTextLines({
  			lines : ["Отлично!","Для продолжения нажмите на левую кнопку мыши"],
  			x : 140,
 			y : 600, 
  			color : "yellow",
	 	 	size : 40
		});
			if (pjs.mouseControl.isPress("LEFT")){
			game.setLoop('ex2_Caps');
		}
		}
		}
		}
		}
		}
	}
});


game.newLoop('ex2_Caps', function () {

	back.draw();
	Key_captab.draw();

	brush.drawTextLines({
  		lines : ["Caps Lock: После однократного нажатия на эту ","кнопку все буквы будут печататься большими.","Держать ее для этого не нужно.","Чтобы вернуть печать маленькими буквами,","следует еще раз нажать на Caps Lock."],
  		x : 80,
 		y : 400, 
  		color : "yellow",
 	 	size : 40
	});
	brush.drawTextLines({
  		lines : ["","TAB : Делает отступ (красную строку).","Для продолжения нажмите TAB"],
  		x : 80,
 		y : 600, 
  		color : "yellow",
 	 	size : 40
	});
	if(key.isPress("TAB")){
		game.setLoop('ex2_spaceEnt');
		}



});



game.newLoop('ex2_spaceEnt', function () {

	back.draw();
	Key_spaceEnt.draw();



	brush.drawTextLines({
  		lines : ["Space: пробел","При помощи этой кнопки можно сделать расстояние между словами."],
  		x : 80,
 		y : 450, 
  		color : "yellow",
 	 	size : 40
	});

	brush.drawTextLines({
  		lines : ["Enter: опускает на строку ниже. ","Для этого нужно поставить мигающую палочку (мигающий курсор) "," в начало той части текста, ","которую хотите опустить вниз, и нажать на кнопку Enter.","","Для продолжения нажмите Enter"],
  		x : 80,
 		y : 550, 
  		color : "red",
 	 	size : 40
	});

	if(key.isPress("ENTER")){
		game.setLoop('ex2_backsp');
		}


});//удаляет символ перед мигающим курсором

game.newLoop('ex2_backsp', function () {

	back.draw();
	Key_backesp.draw();

	brush.drawTextLines({
  		lines : ["Backspace: удаляет символ перед мигающим курсором","Проще говоря, стирает текст."," Также эта кнопка поднимает текст на строку выше.","Для этого нужно поставить мигающую палочку"," (мигающий курсор) в начало той части ","текста, которую хотите поднять наверх, и нажать на Backspace.","Для продолжения нажмите Backspace"],
  		x : 80,
 		y : 400, 
  		color : "yellow",
 	 	size : 40
	});

	if(key.isPress("BACKSPACE")){
		game.setLoop('ex2_chifr');
		}

});

game.newLoop('ex2_chifr', function () {

	back.draw();
	Key_chifr.draw();

	brush.drawTextLines({
  		lines : ["Цифры - самое простое, они распологаются сверху","Также цифры имеют дополнительный функционал","Для того, чтобы напечатать !№;%:?*()_+ ","Необходимо, как и с большой букв, нажать Shift","Для тренировки нажмите цифру 1"],
  		x : 80,
 		y : 400, 
  		color : "yellow",
 	 	size : 40
	});

	if(key.isPress("1")){
		game.setLoop('ex2_tr');
		}

});


var bool1_k = bool2_k = bool3_k = bool4_k = false;

game.newLoop('ex2_tr', function () {

	back.draw();
	Key_2019.draw();

	brush.drawTextLines({
  		lines : ["Напишите, какой сейчас год "],
  		x : 80,
 		y : 400, 
  		color : "yellow",
 	 	size : 40
	});


	if((key.isPress("2")) || bool1_k){
		bool1_k = true;
		brush.drawTextLines({
  		lines : ["2"],
  		x : 80,
 		y : 500, 
  		color : "green",
 	 	size : 80
	});
		if(key.isPress("0") || bool2_k){
			bool2_k = true;
			brush.drawTextLines({
  			lines : ["0"],
  			x : 120,
 			y : 500, 
  			color : "green",
	 	 	size : 80
		});

			if(key.isPress("1") || bool3_k){
			bool3_k = true;
			brush.drawTextLines({
  			lines : ["1"],
  			x : 150,
 			y : 500, 
  			color : "green",
	 	 	size : 80
		});

			if(key.isPress("9") || bool4_k){
			bool4_k = true;
			brush.drawTextLines({
  			lines : ["9"],
  			x : 180,
 			y : 500, 
  			color : "green",
	 	 	size : 80
		});
			brush.drawTextLines({
  			lines : ["Отлично!","Для продолжения нажмите на левую кнопку мыши"],
  			x : 140,
 			y : 600, 
  			color : "yellow",
	 	 	size : 40
		});
			if (pjs.mouseControl.isPress("LEFT")){
			game.setLoop('ex2_gg');
		}
		}
		}
	}
}

});


game.newLoop('ex2_gg', function () {

	back.draw();
	klava.draw();

	brush.drawTextLines({
  			lines : ["Поздравляем, вы прошли очередной урок!","Можете приступать к следующему"],
  			x : 140,
 			y : 600, 
  			color : "yellow",
	 	 	size : 40
		});
});

game.setLoop('ex2_chifr');

game.start();
