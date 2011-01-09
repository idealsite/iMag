var iMag = [];
var controlsWidth = 48;
var controlsHeight = 48;
var globalSpeed = 1.5;

function moveLeft(i) {

};
function moveUp(i) {

};
function moveRight(i) {

};
function moveDown(i) {

};

$(document).ready(function() {
  var number = $(".iMag").size();
  for (var i = 0; i < number; i++) {
    var currentDiv = $(".iMag").eq(i);
    var currentImage = $(".iMag > img").eq(i);
    currentImage.addClass("iMag_image");
    iMag[i] = {};
    iMag[i].divWidth = currentDiv.width();
    iMag[i].divHeight = currentDiv.height();
    iMag[i].imageWidth = currentImage.width();
    iMag[i].imageHeight = currentImage.height();
    iMag[i].xMin = iMag[i].divWidth - iMag[i].imageWidth;
    iMag[i].yMin = iMag[i].divHeight - iMag[i].imageHeight;
    iMag[i].xMax = 0;
    iMag[i].yMax = 0;
    iMag[i].xCenter = iMag[i].xMin/2;
    iMag[i].yCenter = iMag[i].yMin/2;
    iMag[i].controlsX = (iMag[i].divWidth - controlsWidth)/2;
    iMag[i].controlsY = (iMag[i].divHeight - controlsHeight)/2;
    if (currentDiv.hasClass("centerX")) {
      currentImage.css("left", iMag[i].xCenter);
    };
    if (currentDiv.hasClass("centerY")) {
      currentImage.css("top", iMag[i].yCenter);
    };
    if (currentDiv.hasClass("centered")) {
      currentImage.css({
        "left": iMag[i].xCenter,
        "top": iMag[i].yCenter
      });
    };
    var leftControl = '<img src="images/arrow_left.png" class="iMag_control" style="left:0px; top:'+iMag[i].controlsY+'px;" />';
    var upControl = '<img src="images/arrow_up.png" class="iMag_control" style="left:'+iMag[i].controlsX+'px; top:0px;" />';
    var rightControl = '<img src="images/arrow_right.png" class="iMag_control" style="right:0px; top:'+iMag[i].controlsY+'px;" />';
    var downControl = '<img src="images/arrow_down.png" class="iMag_control" style="left:'+iMag[i].controlsX+'px; bottom:0px;" />';
    currentImage.after(leftControl, upControl, rightControl, downControl);
  };
});
