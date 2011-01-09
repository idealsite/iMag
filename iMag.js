var iMag = [];
var arrowWidth = 48;
var arrowHeight = 48;
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
  };
});
