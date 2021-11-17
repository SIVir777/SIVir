const knopki = document.querySelectorAll('[data-button]');
knopki.forEach(function (item) {
	item.addEventListener('click', function () {
		const modalOkno = document.querySelector('#' + this.dataset.button);
		modalOkno.classList.remove('hidden');

		const knopkiClose = document.querySelectorAll('[data-knopka-close]');
		knopkiClose.forEach( function(item) {
			item.addEventListener('click', function() {
				modalOkno.classList.add('hidden');
			})
		})

		modalOkno.addEventListener('click', function() {
			modalOkno.classList.add('hidden');
		})
		const samoOkno = modalOkno.querySelector('.centrirovanie');
		samoOkno.addEventListener('click', function(event) {
			event.stopPropagation();
		})
	})
})
