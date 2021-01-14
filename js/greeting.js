let greeting = document.querySelector('.header__greeting');
let buttonApplyName = document.getElementById('name_apply');
let nameInput = document.getElementById('greeting_name');

// Greetings
const night = 'Good night';
const morning = 'Good morning';
const afternoon = 'Good afternoon';
const evening = 'Good evening';

// Name
if (localStorage.getItem('name') !== null) {
	let name = localStorage.getItem('name');
	let greetingName = `<span class="header__greeting-name">${name}</span>.`;
	setGreeting(greetingName);
	nameInput.placeholder = name;
} else {
	let name = 'Anon';
	let greetingName = `<span class="header__greeting-name">${name}</span>.`
	setGreeting(greetingName);
	nameInput.placeholder = name;
}

buttonApplyName.onclick = () => {
	if (nameInput.value !== '') {
		let greetingName = `<span class="header__greeting-name">${nameInput.value}</span>.`;
		setGreeting(greetingName);

		localStorage.setItem('name', nameInput.value);

		nameInput.placeholder = nameInput.value;
		nameInput.value = '';
		nameInput.blur();
	}
};

// Hours of the greetings
function setGreeting(greetingName) {
	let hour = new Date().getHours();

	if (hour >= 23 || hour < 6) {
		greeting.innerHTML = `${night}, ${greetingName}`;
	} else if (hour >= 6 && hour < 12) {
		greeting.innerHTML = `${morning}, ${greetingName}`;
	} else if (hour >= 12 && hour < 17) {
		greeting.innerHTML = `${afternoon}, ${greetingName}`;
	} else {
		greeting.innerHTML = `${evening}, ${greetingName}`;
	}
}