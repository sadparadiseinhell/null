let switcher = document.getElementById('chb_theme');
let buttonApply = document.getElementById('color_apply');
let buttonReset = document.getElementById('color_reset');
let bgInput = document.getElementById('bg_input');
let fgInput = document.getElementById('fg_input');
let accentInput = document.getElementById('accent_input');

switcher.onclick = () => switcher.checked ? darkTheme() : lightTheme();

localStorage.getItem('theme') === 'dark' ? darkTheme() : lightTheme();

function darkTheme() {
	switcher.checked = true;
	localStorage.setItem('theme', 'dark');
	document.body.setAttribute('theme', 'dark');

	setColors('dark');
}

function lightTheme() {
	switcher.checked = false;
	localStorage.setItem('theme', 'light');
	document.body.setAttribute('theme', 'light');

	setColors('light');
}

buttonReset.onclick = () => {
	let themeName = localStorage.getItem('theme');
	let root = document.querySelector(`[theme="${themeName}"]`);

	localStorage.removeItem(themeName);

	root.style.setProperty('--background', null);
	root.style.setProperty('--foreground', null);
	root.style.setProperty('--accent', null);

	resetColors(themeName);
};

buttonApply.onclick = () => {
	let themeName = localStorage.getItem('theme');
	let root = document.querySelector(`[theme="${themeName}"]`);
	let bgColor = getComputedStyle(root).getPropertyValue('--background');
	let fgColor = getComputedStyle(root).getPropertyValue('--foreground');
	let accentColor = getComputedStyle(root).getPropertyValue('--accent');


	if (bgInput.value !== bgColor) {
		bgColor = bgInput.value;
		root.style.cssText = `--background: ${bgColor};`;
	}

	if (fgInput.value !== fgColor) {
		fgColor = fgInput.value;
		root.style.cssText += `--foreground: ${fgColor};`;
	}

	if (accentInput.value !== accentColor) {
		accentColor = accentInput.value;
		root.style.cssText += `--accent: ${accentColor};`;
	}

	let colors =
	{
		'background': bgColor,
		'foreground': fgColor,
		'accent': accentColor
	};

	localStorage.setItem(themeName, JSON.stringify(colors));
}

function resetColors(themeName) {
	let root = document.querySelector(`[theme="${themeName}"]`);

	let bgColor = getComputedStyle(root).getPropertyValue('--background');
	let fgColor = getComputedStyle(root).getPropertyValue('--foreground');
	let accentColor = getComputedStyle(root).getPropertyValue('--accent');

	let colors =
	{
		'background': bgColor,
		'foreground': fgColor,
		'accent': accentColor
	};

	localStorage.setItem(themeName, JSON.stringify(colors));

	bgInput.value = colors['background'].replace(/\s/g, '');
	fgInput.value = colors['foreground'].replace(/\s/g, '');
	accentInput.value = colors['accent'].replace(/\s/g, '');
}

function setColors(themeName) {
	let root = document.querySelector(`[theme="${themeName}"]`);

	root.style.setProperty('--background', null);
	root.style.setProperty('--foreground', null);
	root.style.setProperty('--accent', null);

	if (localStorage.getItem(themeName) !== null) {
		let colors = JSON.parse(localStorage.getItem(themeName));

		root.style.cssText = `
		--background: ${colors['background']};
		--foreground: ${colors['foreground']};
		--accent: ${colors['accent']};
		`;

		bgInput.value = colors['background'].replace(/\s/g, '');
		fgInput.value = colors['foreground'].replace(/\s/g, '');
		accentInput.value = colors['accent'].replace(/\s/g, '');
	} else {
		resetColors(themeName);
	}
}