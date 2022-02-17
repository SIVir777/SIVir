console.log('hello');
const miniKnopka = document.querySelectorAll('.mini-knopka');
const borderKnopka = document.querySelectorAll('.mini-knopka-border');
borderKnopka.forEach( function(item) {
	item.addEventListener('click', function() {
		const thisPortfolio = this.parentNode.nextElementSibling;
		if (thisPortfolio.classList.contains('hitten-portfolio')) {
			thisPortfolio.classList.remove('hitten-portfolio');
			this.classList.add('triangle-transform');
			this.previousElementSibling.classList.add('mini-knopka-transform');
		} else {
			thisPortfolio.classList.add('hitten-portfolio');
			this.classList.remove('triangle-transform');
			this.previousElementSibling.classList.remove('mini-knopka-transform');
		};
	})
})
//Код по Адаптации
const hamburger = document.querySelector('.hamburger');
const adaptMenu = document.querySelector('.extended-menu');
hamburger.addEventListener('click', function() {
	const menuUl = document.querySelector('.menu');
	adaptMenu.classList.toggle('hidden-extended-menu');
	menuUl.addEventListener('click', function(event) {
		event.stopPropagation();
	});
	adaptMenu.addEventListener('click', function(event) {
		event.stopPropagation();
	});
	document.addEventListener('click', function() {
		adaptMenu.classList.add('hidden-extended-menu');
	});
})
