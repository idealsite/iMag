var iMag = [];
var arrowWidth = 48;
var arrowHeight = 48;
var speed = 1.5;

function moveLeft(i){
  iMag[i].time = Math.abs($(".iMag").eq(i).position().left - iMag[i].maxLeft) * speed;
  $(".iMag").eq(i).animate({
    left: iMag[i].maxLeft
  }, iMag[i].time);
};
function moveUp(i){
  iMag[i].time = Math.abs($(".iMag").eq(i).position().top - iMag[i].maxTop) * speed;
  $(".iMag").eq(i).animate({
    top: iMag[i].maxTop
  }, iMag[i].time);
};
function moveRight(i){
  iMag[i].time = Math.abs($(".iMag").eq(i).position().left - iMag[i].maxRight) * speed;
  $(".iMag").eq(i).animate({
    left: iMag[i].maxRight
  }, iMag[i].time);
};
function moveDown(i){
  iMag[i].time = Math.abs($(".iMag").eq(i).position().top - iMag[i].maxBottom) * speed;
  $(".iMag").eq(i).animate({
    top: iMag[i].maxBottom
  }, iMag[i].time);
};

$(document).ready(function(){
  for (var i in iMag){
    iMag[i].width = parseInt(iMag[i].width);
    iMag[i].height = parseInt(iMag[i].height);
    iMag[i].maxLeft = iMag[i].width - $(".iMag").eq(i).width();
    iMag[i].maxTop = iMag[i].height - $(".iMag").eq(i).height();
    iMag[i].maxRight = 0;
    iMag[i].maxBottom = 0;
    iMag[i].centerLeft = iMag[i].maxLeft/2;
    iMag[i].centerTop = iMag[i].maxTop/2;
    iMag[i].arrowLeft = (iMag[i].width - arrowWidth)/2;
    iMag[i].arrowTop = (iMag[i].height -arrowHeight)/2;
    $(".iMag").eq(i)
      .wrap('<div class="iMag_div" style="width:'+iMag[i].width+'px; height:'+iMag[i].height+'px;" />')
      .after('<img src="images/arrow_left.png" class="iMag_arrow" style="left:0px; top:'+iMag[i].arrowTop+'px;" />')
      .after('<img src="images/arrow_up.png" class="iMag_arrow" style="left:'+iMag[i].arrowLeft+'px; top:0px;" />')
      .after('<img src="images/arrow_right.png" class="iMag_arrow" style="right:0px; top:'+iMag[i].arrowTop+'px;" />')
      .after('<img src="images/arrow_down.png" class="iMag_arrow" style="left:'+iMag[i].arrowLeft+'px; bottom:0px;" />');
    if (iMag[i].x == "centered"){ $(".iMag").eq(i).css("left", iMag[i].centerLeft); };
    if (iMag[i].y == "centered"){ $(".iMag").eq(i).css("top", iMag[i].centerTop); };
  };
});

