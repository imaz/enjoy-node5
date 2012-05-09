
var error_usage = function(){
  console.error('Usage: node bubble.js [--color (blue|red|yellow|green)]');
  process.exit(1);
};

var rr = function(min,max){
  var range = max+1 - min;
  return Math.floor(Math.random() * range) + min;
};

function Color(){
  this.kind_index = 0;
  var args = process.argv.slice(2);
  this.kind_set = ['blue','red','yellow','green'];
  while(args.length){
    switch(args.shift()){
      case '-c':
      case '--color':
        this.kind_index = this.kind_set.indexOf(args.shift());
        if(this.kind_index == -1)
          error_usage();
        break;
      default:
        error_usage();
        break;
    }
  }
  var color_detail = ['darkblue','midiumblue','dodgerblue','lightskyblue','aliceblue'];
  this.detail= function(){
    return color_detail[rr(1,5)+this.kind_index*5];
  };
};

function Bubble(){
  var color = new Color();
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
