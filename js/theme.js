var switcher = document.getElementById('chb_theme');

switcher.onclick = function() {
	if (switcher.checked) {
		darkTheme();
	} else {
		lightTheme();
	}
}

if (localStorage.getItem('switch') == 'on') {
	darkTheme();
}

function darkTheme() {
	switcher.checked = true;
	localStorage.setItem('switch', 'on');
	document.body.setAttribute('theme', 'dark');	
}

function lightTheme() {
	switcher.checked = false;
	localStorage.setItem('switch', 'off');
	document.body.removeAttribute('theme');	
}

// Automatic theme change depending on the time of day
var today = new Date();
var hour = today.getHours();

if (hour >= 17 || hour < 6) {
	darkTheme();
} else {
	lightTheme();
}