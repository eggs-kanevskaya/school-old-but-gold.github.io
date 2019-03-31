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
     file : "ex3/panzad.PNG", 
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

var pz_ru = game.newImageObject(   { 
     file : "ex3/pan_ru.png", 
     x : 0, 
     y : 690, 
     w : 1280, 
     h : 30,
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });

var pan = game.newImageObject(   { 
     file : "ex3/pan.png", 
     x : 0, 
     y : 690, 
     w : 1280, 
     h : 30,
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });

bo = false;
bo1 = false;
bo2 = false;
var s = 40;
//доделать таймкод
game.newLoop('ex3_lang', function () {

  table_pz.draw();
  panzad_ex3.draw();


  brush.drawTextLines({
    lines : ["Это панель задач","Для того, чтобы поменять язык при помощи мыши,","Что бы выбрать другой,"," просто щелкните по нему один раз левой кнопкой мышки.","Выбираете вам нужный язык и нажимаете на него"] , 
    x : 70,
  y : 50, 
    color : "yellow",
    size : s
});

  var mousePos = mouse.getPosition();
  if(mousePos.x < 1176 && mousePos.x > 1146 && mousePos.y > 680 && mousePos.y < 720 && mouse.isPress("LEFT")) bo=true;
    if (bo) lang.draw();


  if(mousePos.x > 1070 && mousePos.x < 1280 && mousePos.y > 564 && mousePos.y < 605 && mouse.isPress("LEFT")) bo1=true;
    if (bo1) 
    {
      game.setLoop('ex3_ru');
    }


    if(mousePos.x > 1070 && mousePos.x < 1280 && mousePos.y > 606 && mousePos.y < 650 && mouse.isPress("LEFT")) bo2=true;
    if (bo2) game.setLoop('ex3_en');

})

bool = false;
bool1 = false;
s = 40;

game.newLoop('ex3_ru', function () {
  back.draw();
  pz_ru.draw();

  brush.drawTextLines({
    lines : ["Язык изменился на другой, посмотрите сами","Для того, чтобы поменять язык при помощи клавиатуры","Нажмите клавишу shift (держать) и ctr","Либо shift и alt"] , 
    x : 70,
  y : 50, 
    color : "yellow",
    size : s
  });


  if (key.isDown("ALT") && key.isPress("SHIFT") || bool){
    s = 1;
    bool = true;
    brush.drawTextLines({
      lines : ["Вы нажали shift и alt ","Язык будет изменен на английский","Для тренеровки смены языков нажмите левую кнопку мыши","Для того, чтобы пройти дальше - правую"] , 
      x : 70,
    y : 50, 
      color : "yellow",
      size : 40
  });
    pan.draw();

    if (pjs.mouseControl.isPress("LEFT")){
    game.setLoop('ex3_tr_lang_en');
    }

    if (pjs.mouseControl.isPress("RIGHT")){
    game.setLoop('ex3_pusk');
  }

  }

  if (key.isDown("CTRL") && key.isPress("SHIFT") || bool1){
    s = 1;
    bool = true;
    brush.drawTextLines({
      lines : ["Вы нажали shift и ctrl ","Язык будет изменен на русский","Для тренеровки смены языков нажмите левую кнопку мыши","Для того, чтобы пройти дальше - правую"] , 
      x : 70,
    y : 50, 
      color : "yellow",
      size : 40
  });
    pan.draw();

    if (pjs.mouseControl.isPress("LEFT")){
    game.setLoop('ex3_tr_lang_ru');
    }

    if (pjs.mouseControl.isPress("RIGHT")){
    game.setLoop('ex3_pusk');
  }

  }

})

game.newLoop('ex3_en', function () {
  back.draw();
  pan.draw();

  brush.drawTextLines({
    lines : ["Язык изменился на другой, посмотрите сами","Для того, чтобы поменять язык при помощи клавиатуры","Нажмите клавишу shift  и ctr (держать)","Либо shift и alt (держать)"] , 
    x : 70,
  y : 50, 
    color : "yellow",
    size : s
  });

  if (key.isDown("ALT") && key.isPress("SHIFT") || bool){
    s = 1;
    bool = true;
    brush.drawTextLines({
      lines : ["Вы нажали shift и alt ","Язык будет изменен на русский","Для тренеровки смены языков нажмите левую кнопку мыши","Для того, чтобы пройти дальше - правую"] , 
      x : 70,
    y : 50, 
      color : "yellow",
      size : 40
  });
    pz_ru.draw();

    if (pjs.mouseControl.isPress("LEFT")){
    game.setLoop('ex3_tr_lang_ru');
    }

    if (pjs.mouseControl.isPress("RIGHT")){
    game.setLoop('ex3_pusk');
  }

  }

  if (key.isDown("CTRL") && key.isPress("SHIFT") || bool1){
    s = 1;
    bool = true;
    brush.drawTextLines({
      lines : ["Вы нажали shift и ctrl ","Язык будет изменен на русский","Для тренеровки смены языков нажмите левую кнопку мыши","Для того, чтобы пройти дальше - правую"] , 
      x : 70,
    y : 50, 
      color : "yellow",
      size : 40
  });
    pz_ru.draw();

    if (pjs.mouseControl.isPress("LEFT")){
    game.setLoop('ex3_tr_lang_ru');
    }

    if (pjs.mouseControl.isPress("RIGHT")){
    game.setLoop('ex3_pusk');
  }

  }

})



bool = false;
game.newLoop('ex3_tr_lang_en', function () {

  back.draw();
  pan.draw();

  brush.drawTextLines({
      lines : ["Для того, чтобы поменять язык нажмите Shift и Alt","Потренируемся на этих двух кнопках,","так как они стандартные","Для выхода нажмите правую кнопку мыши"] , 
      x : 70,
    y : 50, 
      color : "yellow",
      size : 40
  });

  if (key.isDown("ALT") && key.isPress("SHIFT")){
    game.setLoop('ex3_en')
  }

  if (pjs.mouseControl.isPress("RIGHT")){
    game.setLoop('ex3_pusk');
  }
})

game.newLoop('ex3_tr_lang_ru', function () {

  back.draw();
  pz_ru.draw();

  brush.drawTextLines({
      lines : ["Для того, чтобы поменять язык нажмите Shift и Alt","Потренируемся на этих двух кнопках,","так как они стандартные","Для выхода нажмите правую кнопку мыши"] , 
      x : 70,
    y : 50, 
      color : "yellow",
      size : 40
  });

  if (key.isDown("ALT") && key.isPress("SHIFT")){
    game.setLoop('ex3_ru')
  }
  if (pjs.mouseControl.isPress("RIGHT")){
    game.setLoop('ex3_pusk');
  }
})
bool = false;

var pusk_h = game.newImageObject(   { 
     file : "ex3/pusk.jpg", 
     x : 680, 
     y : 100, 
     w : 593, 
     h : 408,
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });

var pusk = game.newImageObject(   { 
     file : "ex3/pusk_h.png", 
     x : 0, 
     y : 244, 
     w : 644, 
     h : 446,
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });
var h = game.newImageObject(   { 
     file : "ex3/h.jpg", 
     x : 0, 
     y : 585, 
     w : 133, 
     h : 76,
     //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
   });
bool = false;
bool1 = false;
bool2 = false;

game.newLoop('ex3_pusk', function () {

  back.draw();
  pan.draw();
  pusk_h.draw();

  brush.drawTextLines({
    lines : ["Для того, чтобы выключить компьютер нужно:","Открыть пуск","Нажать на выключение","Завершение работы","Левой кнопкой мыши"] , 
    x : 70,
  y : 50, 
    color : "yellow",
    size : 40
}); 
  var mousePos = mouse.getPosition();
  if(mousePos.x > 0 && mousePos.x < 38 && mousePos.y > 692 && mousePos.y < 715 && mouse.isPress("LEFT")) bool=true;
    if (bool) {
      pusk.draw();
      if(mousePos.x > 0 && mousePos.x < 27 && mousePos.y > 661 && mousePos.y < 688 && mouse.isPress("LEFT")) bool1=true;
        if (bool1) h.draw();
          if(mousePos.x > 0 && mousePos.x < 127 && mousePos.y > 612 && mousePos.y < 634 && mouse.isPress("LEFT")) bool2=true;
            if (bool2) game.setLoop('ex3_end');
    }

}) 


game.newLoop('ex3_end', function () {
  back.draw();

  brush.drawTextLines({
    lines : ["Вы выключили свой компьютер,","для повтора упражнения нажмите левую кнопку мыши","Можете переходить к следующему уроку"] , 
    x : 70,
  y : 50, 
    color : "yellow",
    size : 40
}); 
  if (pjs.mouseControl.isPress("LEFT")){
    game.setLoop('ex3_pusk');
    }
}) 

game.setLoop('ex3');
game.start();
