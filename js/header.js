var button = document.getElementById('chb_header');
var header = document.querySelector('.header');
var icons = document.querySelectorAll('a');

button.onclick = function() {
	if (button.checked) {
		showHeader();
	} else {
		hideHeader();
	}
}

if (localStorage.getItem('header') == 'on' || localStorage.getItem('header') == null) {
	showHeader();
} else {
	hideHeader();
}

function showHeader() {
	button.checked = true;
	localStorage.setItem('header', 'on');

	for (let e of icons) { 
		e.style.margin = '';
		e.style.fontSize = '';
	}

	header.style.opacity = '.75';
	header.style.zIndex = '1';
}

function hideHeader() {
	button.checked = false;
	localStorage.setItem('header', 'off');

	for (let e of icons) { 
		e.style.margin = '40px';
		e.style.fontSize = '65px';
	}

	header.style.opacity = '0';
	header.style.zIndex = '-1';
}