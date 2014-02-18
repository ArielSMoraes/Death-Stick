function Elemento ()
{
	this.x = 0;
	this.y = 0;

	this.width = 0;
	this.height = 0;
	
	this.face = 0;
}

Elemento.prototype.setWidth = function(width)
{
	this.width = width;
}

Elemento.prototype.setHeight = function(height)
{
	this.height = height;
}

Elemento.prototype.setPosX = function(x)
{
	this.x = x;
}

Elemento.prototype.setPosY = function(y)
{
	this.y = y;
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