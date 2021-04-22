window.onload = function() {
	let animacion = document.getElementById('animacion-arriba');
	let animacion2 = document.getElementById('animacion-abajo');

	animacion.style.animation = 'moverarriba 1s ease-out';
	animacion2.style.animation = 'moverabajo 1s ease-out';
}


window.addEventListener('scroll', function(){

	let animacioniz = document.getElementById('contenedoriz');

	let posicionObject = animacioniz.getBoundingClientRect().top;

	let tamañoPantalla = window.innerHeight;

	if (posicionObject < tamañoPantalla){
		animacioniz.style.animation = 'moverizquierda 1s ease-out';
	}
})

window.addEventListener('scroll', function(){

	let animaciondere = document.getElementById('contenedordere');

	let posicionObject = animaciondere.getBoundingClientRect().top;

	let tamañoPantalla = window.innerHeight;

	if (posicionObject < tamañoPantalla){
		animaciondere.style.animation = 'moverderecha 1s ease-out';
	}
})