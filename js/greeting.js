// Element
var elem = document.querySelector('.header__greeting');

// Name
var name = 'Anon';
var elem_name = `<span class="header__greeting__name">${name}</span>.`;

// Greetings
var night = 'Good night';
var morning = 'Good morning';
var afternoon = 'Good afternoon';
var evening = 'Good evening';

// Hours of the greetings
greeting();

function greeting() {
	var today = new Date();
	var hour = today.getHours();

	if (hour >= 23 || hour < 6) {
		elem.innerHTML = `${night}, ${elem_name}`;
	} else if (hour >= 6 && hour < 12) {
		elem.innerHTML = `${morning}, ${elem_name}`;
	} else if (hour >= 12 && hour < 17) {
		elem.innerHTML = `${afternoon}, ${elem_name}`;
	} else {
		elem.innerHTML = `${evening}, ${elem_name}`;
	}
	setTimeout(greeting, 3600000);
}