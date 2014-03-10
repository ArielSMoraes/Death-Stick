function Elemento ()
{
  this.x = 0;
  this.y = 0;

  this.width = 0;
  this.height = 0;

  this.face = 0;
}

//desenha na tela
Elemento.prototype.drawElement = function (context)
{
  context.beginPath();
  context.rect(this.x, this.y, this.width, this.height);
  context.lineWidth = 1;
  context.strokeStyle = 'pink';
  context.stroke();
  context.closePath();

  context.drawImage(this.image, this.face, 0, this.width, this.height, this.x, this.y, this.width, this.height);
}
