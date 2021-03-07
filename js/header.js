let buttonHeader = document.getElementById('chb_header');
let header = document.querySelector('.header');
let headerWeather = document.querySelector('.header__weather');
let headerGreeting = document.querySelector('.header__greeting');
let icons = document.querySelectorAll('.main a');

localStorage.getItem('header') === 'shown' || localStorage.getItem('header') === null ? showHeader() : hideHeader();

buttonHeader.onclick = () => buttonHeader.checked ? showHeader() : hideHeader();

function showHeader() {
	buttonHeader.checked = true;
	localStorage.setItem('header', 'shown');

	for (let e of icons) {
		e.classList.remove('big-icons');
	}

	header.style.opacity = '.75';
	header.style.zIndex = '1';
	headerWeather.classList.remove('hide-header-elements');
	headerGreeting.classList.remove('hide-header-elements');
}

function hideHeader() {
	buttonHeader.checked = false;
	localStorage.setItem('header', 'hidden');

	for (let e of icons) {
		e.classList.add('big-icons');
	}

	header.style.opacity = '0';
	header.style.zIndex = '-1';
}

document.addEventListener('keyup', (event) => {
	let header = document.querySelector('.header');
	let sidebar = document.querySelector('.sidebar-wrapper');
	let searchForm = document.querySelector('.search-form');
	let searchInput = document.querySelector('.search-form__input');

	if (searchInput !== document.activeElement &&
		event.keyCode >= 65 &&
		event.keyCode <= 90 &&
		!sidebar.classList.contains('show-sidebar')) {
		if (buttonHeader.checked === false) {
			header.style.opacity = '.75';
			header.style.zIndex = '1';
			headerWeather.classList.add('hide-header-elements');
			headerGreeting.classList.add('hide-header-elements');

			for (let e of icons) {
				e.classList.remove('big-icons');
			}
		}

		header.style.marginBottom = '35px';
		searchForm.classList.add('show-search');
		searchInput.focus();
		searchInput.value = event.key;
	}

	if (event.code === 'Escape') {
		if (buttonHeader.checked === false) {
			header.style.opacity = '0';

			for (let e of icons) {
				e.classList.add('big-icons');
			}
		}

		header.style.marginBottom = '';
		searchForm.classList.remove('show-search');
		searchInput.value = '';
		searchInput.blur();
	}
});