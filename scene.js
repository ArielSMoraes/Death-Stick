//cenario
function Scene(context)
{
	this.backgroundImg = new Image();
	this.backgroundImg.src = 'images/grass-64x64.jpg';
	this.pattern = "";
}

Scene.prototype.setImg = function (context)
{
	this.pattern = context.createPattern(this.backgroundImg, 'repeat');
}

Scene.prototype.drawScene = function (context, canvas)
{
	//var pattern = context.createPattern(this.backgroundImg, 'repeat');
	
	context.rect(0, 0, canvas.width, canvas.height);
	context.fillStyle = this.pattern;
	context.fill();
}

Scene.prototype.colisionScore = function (playerRef, stickRef)
{
	if(this.checkColision(playerRef,stickRef))
	{
		stickRef.randomPos(playerRef);
		playerRef.scoreAdd(10);
	}
}

Scene.prototype.colisionDeath = function (playerRef,stickRef)
{
	if(this.checkColision(playerRef,stickRef))
	{
		return true;
	}
}

Scene.prototype.checkColision = function (objA, objB)
{
//COLISION
	var leftA = 0;
	var leftB = 0;
	var rightA =0;
	var rightB = 0;
	var topA = 0;
	var topB = 0;
	var bottomA = 0;
	var bottomB = 0;
	
	//pega a posição que começa o objeto como sua esquerda, e sua direita é a posição que começa + a sua largura
	leftA = objA.x;
	rightA = objA.x + objA.width;
	topA = objA.y;
	bottomA = objA.y + objA.height;
	
	leftB = objB.x;
	rightB = objB.x + objB.width;
	topB = objB.y;
	bottomB = objB.y + objB.height;
	
	//verifica se algum lado do A esta dentro do B, no fim ao menos 2 lados do retangulo tem de estar dentro
	//no caso, A pode estar na mesma altura de B, mas para colidir seu lado esquerdo, ou direito devem estar dentro de B.
	//então se algum dos lados, estiver distante do outro retangulo, não é preciso mais verificar.
	if( bottomA <= topB ) { return false; }
	if( topA >= bottomB ) { return false; }
	if( rightA <= leftB ) { return false; }
	if( leftA >= rightB ) { return false; }
	
	return true;
//COLISION - END
}