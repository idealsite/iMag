var iMag = [];
//
//Variables you can change to personalize your iMag
var controlsWidth = 48; //Change this if you use different icons for the controllers
var controlsHeight = 48;
var globalSpeed = 5; //This is the speed assumed in case you don't define one for an iMag, higher numbers return lower speed
iMag[0] = {}; //Set up the object for the iMag you want to assign speed
iMag[0].speed = 1; //This way you can set every iMag's speed, higher numbers return lower speed
//iMag[1].speed = 10;
//
function moveRight(caller) {
  var i = $(caller).data("index");
  var speed = (iMag[i].speed) ? iMag[i].speed : globalSpeed;
  var time = Math.abs(iMag[i].image.position().left - iMag[i].xMax) * speed;
  iMag[i].image.animate({
    left: iMag[i].xMax
  }, time );
};
function moveDown(caller) {
  var i = $(caller).data("index");
  var speed = (iMag[i].speed) ? iMag[i].speed : globalSpeed;
  var time = Math.abs(iMag[i].image.position().top - iMag[i].yMax) * speed;
  iMag[i].image.animate({
    top: iMag[i].yMax
  }, time );
};
function moveLeft(caller) {
  var i = $(caller).data("index");
  var speed = (iMag[i].speed) ? iMag[i].speed : globalSpeed;
  var time = Math.abs(iMag[i].image.position().left - iMag[i].xMin) * speed;
  iMag[i].image.animate({
    left: iMag[i].xMin
  }, time );
};
function moveUp(caller) {
  var i = $(caller).data("index");
  var speed = (iMag[i].speed) ? iMag[i].speed : globalSpeed;
  var time = Math.abs(iMag[i].image.position().top - iMag[i].yMin) * speed;
  iMag[i].image.animate({
    top: iMag[i].yMin
  }, time );
};
function stop(caller) {
  var i = $(caller).data("index");
  iMag[i].image.stop();
};


$(document).ready(function() {
  var number = $(".iMag").size();
  for (var i = 0; i < number; i++) {
    var div = $(".iMag").eq(i);
    var image = $(".iMag").eq(i).find("img").eq(0);
    image.addClass("iMag_image");
    if (!iMag[i]) { iMag[i] = {}; };
    iMag[i].div = div;
    iMag[i].image = image;
    iMag[i].divWidth = div.width();
    iMag[i].divHeight = div.height();
    iMag[i].imageWidth = image.width();
    iMag[i].imageHeight = image.height();
    iMag[i].xMin = iMag[i].divWidth - iMag[i].imageWidth;
    iMag[i].xMax = 0;
    iMag[i].xCenter = iMag[i].xMin/2;
    iMag[i].yMin = iMag[i].divHeight - iMag[i].imageHeight;
    iMag[i].yMax = 0;
    iMag[i].yCenter = iMag[i].yMin/2;
    iMag[i].controlsX = (iMag[i].divWidth - controlsWidth)/2;
    iMag[i].controlsY = (iMag[i].divHeight - controlsHeight)/2;
    if (div.hasClass("centerX")) {
      image.css("left", iMag[i].xCenter);
    };
    if (div.hasClass("centerY")) {
      image.css("top", iMag[i].yCenter);
    };
    if (div.hasClass("centered")) {
      image.css({
        "left": iMag[i].xCenter,
        "top": iMag[i].yCenter
      });
    };
    iMag[i].leftControl = $('<img src="images/arrow_left.png" class="iMag_control" style="left:0px; top:'+iMag[i].controlsY+'px;" />');
    iMag[i].upControl = $('<img src="images/arrow_up.png" class="iMag_control" style="left:'+iMag[i].controlsX+'px; top:0px;" />');
    iMag[i].rightControl = $('<img src="images/arrow_right.png" class="iMag_control" style="right:0px; top:'+iMag[i].controlsY+'px;" />');
    iMag[i].downControl = $('<img src="images/arrow_down.png" class="iMag_control" style="left:'+iMag[i].controlsX+'px; bottom:0px;" />');
    image.after(iMag[i].leftControl, iMag[i].upControl, iMag[i].rightControl, iMag[i].downControl);
    iMag[i].leftControl.data("index", i).bind({
      mousedown: function() { moveRight(this); },
      mouseup: function() { stop(this); }
    });
    iMag[i].upControl.data("index", i).bind({
      mousedown: function() { moveDown(this); },
      mouseup: function() { stop(this); }
    });
    iMag[i].rightControl.data("index", i).bind({
      mousedown: function() { moveLeft(this); },
      mouseup: function() { stop(this); }
    });
    iMag[i].downControl.data("index", i).bind({
      mousedown: function() { moveUp(this); },
      mouseup: function() { stop(this); }
    });
  };
});
