document.addEventListener('DOMContentLoaded', function () {
	var burgerMenu = document.querySelector('.burger__menu');
	var headerMenu = document.querySelector('.header__menu');
	var body = document.body;

	burgerMenu.addEventListener('click', function (event) {
		burgerMenu.classList.toggle('active');
		headerMenu.classList.toggle('active');
		body.classList.toggle('lock');
	});
});