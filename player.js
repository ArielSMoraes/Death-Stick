//player
function Player ()
{
	this.haste = 3;
	this.score = 0;
	this.image = new Image();
	this.image.src = "images/player1.png";

	this.width = 64;
	this.height = 64;
	this.x = 0;
	this.y = 0;
}

Player.prototype = new Elemento();
Player.prototype.constructor = Player;

Player.prototype.setHaste = function(acel)
{
	this.haste = acel;
}

Player.prototype.faceDown = function()
{
	this.face = 0;
}

Player.prototype.faceUp = function()
{
	this.face = 192;
}

Player.prototype.faceRight = function()
{
	this.face = 128;
}

Player.prototype.faceLeft = function()
{
	this.face = 64;
}

Player.prototype.scoreAdd = function(valor)
{
	this.score += valor;
	
	if(this.score == 100)
	{
		this.setHaste(this.haste + 3);
	}
	
	if(this.score == 200)
	{
		this.setHaste(this.haste + 3);
	}
	
	if(this.score == 300)
	{
		this.setHaste(this.haste + 3);
	}
}

Player.prototype.drawScore = function(context)
{
	context.font = 'italic 16pt Arial';
	context.fillStyle = '#3333DD';
	context.textAlign = 'center';
	context.fillText('Score: ' + this.score, (canvas.width / 2), 30);
}

Player.prototype.move = function (keysEnabled)
{
	if(keysEnabled[39])
	{
		//direita
		this.faceRight();
		this.setPosX(this.x + this.haste);
		if (this.x > (documentWidth - this.width))
		{
			this.setPosX(documentWidth - this.width);
		}
	}

	if(keysEnabled[37])
	{
		//esquerda
		this.faceLeft();
		this.setPosX(this.x - this.haste);
		if (this.x < 0)
		{
			this.setPosX(0);
		}
	}

	if(keysEnabled[40])
	{
		//baixo
		this.faceDown();
		this.setPosY(this.y + this.haste);
		if (this.y > (documentHeight - this.height))
		{
			this.setPosY(documentHeight - this.height);
		}
	}

	if(keysEnabled[38])
	{
		//cima
		this.faceUp();
		this.setPosY(this.y - this.haste);
		if (this.y < 0)
		{
			this.setPosY(0);
		}
	}
}