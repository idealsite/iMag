var iMag = [];
var controlsWidth = 48;
var controlsHeight = 48;
var globalSpeed = 1.5;

$(document).ready(function() {
  var number = $(".iMag").size();
  for (var i = 0; i < number; i++) {
    var div = $(".iMag").eq(i);
    var image = $(".iMag").eq(i).find("img").eq(0);
    image.addClass("iMag_image");
    iMag[i] = {};
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
  };
});
