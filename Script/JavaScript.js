console.log('hello');
const miniKnopka = document.querySelectorAll('.mini-knopka');
const borderKnopka = document.querySelectorAll('.mini-knopka-border');
borderKnopka.forEach( function(item) {
	item.addEventListener('click', function() {
		const thisPortfolio = this.parentNode.nextElementSibling;
		if (thisPortfolio.classList.contains('hitten-portfolio')) {
			thisPortfolio.classList.remove('hitten-portfolio');
			this.classList.add('mini-knopka-transform');
			this.previousElementSibling.classList.add('mini-knopka-transform');
		} else {
			thisPortfolio.classList.add('hitten-portfolio');
			this.classList.remove('mini-knopka-transform');
			this.previousElementSibling.classList.remove('mini-knopka-transform');
		};
	})
})
