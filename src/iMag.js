var iMag = [];

function moveLeft(i){
  iMag[i].speed = Math.abs(parseInt($(".iMag").eq(i).css("margin-left")) - iMag[i].maxLeft);
  alert(iMag[i].speed);
  $(".iMag").eq(i).animate({
    marginLeft: iMag[i].maxLeft
  }, iMag[i].speed);
};
function moveUp(i){
  iMag[i].speed = Math.abs(parseInt($(".iMag").eq(i).css("margin-top")) - iMag[i].maxTop);
  alert(iMag[i].speed);
  $(".iMag").eq(i).animate({
    marginTop: iMag[i].maxTop
  }, iMag[i].speed);
};
function moveRight(i){
  iMag[i].speed = Math.abs(parseInt($(".iMag").eq(i).css("margin-left")) - iMag[i].maxRight);
  alert(iMag[i].speed);
  $(".iMag").eq(i).animate({
    marginLeft: iMag[i].maxRight
  }, iMag[i].speed);
};
function moveDown(i){
  iMag[i].speed = Math.abs(parseInt($(".iMag").eq(i).css("margin-top")) - iMag[i].maxBottom);
  alert(iMag[i].speed);
  $(".iMag").eq(i).animate({
    marginTop: iMag[i].maxBottom
  }, iMag[i].speed);
};

$(document).ready(function(){
  for (var i=0;i<iMag.length;i++){
    $(".iMag").wrap('<div class="iMag_div" style="width:'+iMag[i].width+'px; height:'+iMag[i].height+'px;"/>');
    iMag[i].maxLeft = iMag[i].width - $(".iMag").eq(i).width();
    iMag[i].maxTop = iMag[i].height - $(".iMag").eq(i).height();
    iMag[i].maxRight = 0;
    iMag[i].maxBottom = 0;
  };
});

