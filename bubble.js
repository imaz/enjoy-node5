var five = require('./node-five'),
    yoko = 300, tate = 200,
    window = new five.Window(yoko, tate),
    canvas = new five.Canvas(window),
    ctx = canvas.getContext('2d');

canvas.width = window.width;
canvas.height = window.height;

var rr = function(min,max){
  var range = max+1 - min;
  return Math.floor(Math.random() * range) + min;
}

var color = function(){
  switch(rr(1,5)){
    case 1:
      return 'darkblue';
    case 2:
      return 'midiumblue';
    case 3:
      return 'dodgerblue';
    case 4:
      return 'lightskyblue';
    case 5:
      return 'aliceblue';
  }
};

var bgImage = new five.Image();
bgImage.src = __dirname + '/images/sea.png';
ctx.drawImage(bgImage,0,0);

var timer = setInterval(function(){
  ctx.fillStyle = color();
  ctx.fillText(rr(0,1)==0?'o':'O', rr(1,yoko), rr(1,tate));
},100);
