var error_usage = function(){
  console.error('Usage: node bubble.js [--color (blue|red|yellow|green)]');
  process.exit(1);
};

var color = new Color();
var args = process.argv.slice(2);
while(args.length){
  switch(args.shift()){
    case '-c':
    case '--color':
      color.index = color.set.indexOf(args.shift());
      if(color.index == -1)
        error_usage();
      break;
    default:
      error_usage();
      break;
  }
}

var rr = function(min,max){
  var range = max+1 - min;
  return Math.floor(Math.random() * range) + min;
};

function Color(){
  this.index = 0;
  this.set = ['blue','red','yellow','green'];
  var detail = [
    'darkblue','mediumblue','dodgerblue','lightskyblue','aliceblue'
    ,'darkred','crimson','indianred','lightcoral','mistyrose'
    ,'darkorange','orange','gold','yellow','khaki'
    ,'darkgreen','green','forestgreen','limegreen','lightgreen'
    ];
  this.detail= function(){
    return detail[rr(0,4)+this.index*5];
  };
};

function Bubble(){
  var five = require('node-five'),
      yoko = 300, tate = 200,
      window = new five.Window(yoko, tate),
      canvas = new five.Canvas(window),
      ctx = canvas.getContext('2d');

  canvas.width = window.width;
  canvas.height = window.height;

  var bgImage = new five.Image();
  bgImage.src = __dirname + '/images/sea.png';
  ctx.drawImage(bgImage,0,0);

  var timer = setInterval(function(){
      ctx.fillStyle = color.detail();
      ctx.fillText(rr(0,1)==0?'o':'O', rr(1,yoko), rr(1,tate));
      },100);
}

(function(){
  Bubble();
})();
