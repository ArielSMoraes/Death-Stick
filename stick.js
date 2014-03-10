//stick
function Stick ()
{
  this.image = new Image();
  this.image.src = "images/stick1.png";

  this.width = 32;
  this.height = 32;
  this.x = 0;
  this.y = 0;
}

Stick.prototype = new Elemento();
Stick.prototype.constructor = Stick;

Stick.prototype.setImg = function(img)
{
  this.image.src = img;
}

Stick.prototype.randomPos = function ()
{
  var y = Math.floor((Math.random()* (documentHeight - this.height) )+1);
  var x = Math.floor((Math.random()* (documentWidth - this.width) )+1);

  this.x = x;
  this.y = y;
}

Stick.prototype.intervalChangePosition = function(obj, interval)
{
  setInterval
  (
    function()
    {
      obj.randomPos();
    },
    interval
  );
}
