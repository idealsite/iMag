var iMag = [];

//Variables you can change to personalize your iMag
var globalControlsWidth = 48; //Change this if you use different icons for the controllers
var globalControlsHeight = 48;
var globalSpeed = 2; //This is the speed assumed in case you don't define one for an iMag, higher numbers return lower speed
iMag[0] = {}; //Set up the object for the iMag you want to assign speed or controllers
//iMag[0].speed = 1; //This way you can set every iMag's speed, higher numbers return lower speed
//iMag[1].speed = 10;
iMag[0].controlsWidth = 32;
iMag[0].controlsHeight = 32;

//Animation's functions
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

//Create iMags
$(document).ready(function() {
  var number = $(".iMag").size();
  for (var i = 0; i < number; i++) {
    if (!iMag[i]) { iMag[i] = {}; };
    iMag[i].div = $(".iMag").eq(i);
    iMag[i].image = $(".iMag").eq(i).find("img").eq(0);
    iMag[i].image.addClass("iMag_image");
    iMag[i].xMin = iMag[i].div.width() - iMag[i].image.width();
    iMag[i].xMax = 0;
    iMag[i].yMin = iMag[i].div.height() - iMag[i].image.height();
    iMag[i].yMax = 0;
    //Define internal controls' positions
    if (!iMag[i].controlsWidth) { iMag[i].controlsWidth = globalControlsWidth; };
    if (!iMag[i].controlsHeight) { iMag[i].controlsHeight = globalControlsHeight; };
    iMag[i].controlsX = (iMag[i].div.width() - iMag[i].controlsWidth)/2;
    iMag[i].controlsY = (iMag[i].div.height() - iMag[i].controlsHeight)/2;
    //Centre the image if requested
    if (iMag[i].div.hasClass("centerX")) { iMag[i].image.css("left", iMag[i].xCenter); };
    if (iMag[i].div.hasClass("centerY")) { iMag[i].image.css("top", iMag[i].yCenter); };
    if (iMag[i].div.hasClass("centered")) {
      iMag[i].image.css({
        "left": iMag[i].xMin/2,
        "top": iMag[i].yMin/2
      });
    };
    //Create or find controllers
    if ((iMag[i].div.children().size() == 5) && (iMag[i].div.find(".iMag_left")) && (iMag[i].div.find(".iMag_up"))
    && (iMag[i].div.find(".iMag_right")) && (iMag[i].div.find(".iMag_down"))) {
      iMag[i].leftControl = iMag[i].div.find(".iMag_left");
      iMag[i].upControl = iMag[i].div.find(".iMag_up");
      iMag[i].rightControl = iMag[i].div.find(".iMag_right");
      iMag[i].downControl = iMag[i].div.find(".iMag_down");
    } else if (iMag[i].div.children().size() > 0) {
      iMag[i].div.children().not(".iMag_image").remove();
      iMag[i].leftControl = $('<img src="images/arrow_left.png" class="iMag_left" style="left:0px; top:'+iMag[i].controlsY+'px;" />');
      iMag[i].upControl = $('<img src="images/arrow_up.png" class="iMag_up" style="left:'+iMag[i].controlsX+'px; top:0px;" />');
      iMag[i].rightControl = $('<img src="images/arrow_right.png" class="iMag_right" style="right:0px; top:'+iMag[i].controlsY+'px;" />');
      iMag[i].downControl = $('<img src="images/arrow_down.png" class="iMag_down" style="left:'+iMag[i].controlsX+'px; bottom:0px;" />');
      iMag[i].image.after(iMag[i].leftControl, iMag[i].upControl, iMag[i].rightControl, iMag[i].downControl);
    };
    //Attach events' handlers
    iMag[i].leftControl.data("index", i).bind({ mousedown: function() { moveRight(this); }, mouseup: function() { stop(this); } });
    iMag[i].upControl.data("index", i).bind({ mousedown: function() { moveDown(this); }, mouseup: function() { stop(this); } });
    iMag[i].rightControl.data("index", i).bind({ mousedown: function() { moveLeft(this); }, mouseup: function() { stop(this); } });
    iMag[i].downControl.data("index", i).bind({ mousedown: function() { moveUp(this); }, mouseup: function() { stop(this); } });
  };
});
