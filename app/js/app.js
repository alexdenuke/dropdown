let btn = document.querySelector(".dropdown__btn");
let dropdown = document.querySelector('.dropdown');
let dropdownBody = document.querySelector(".dropdown__body");
let style = dropdownBody.style;

// btn.addEventListener('click', function () {
// 	if ( dropdown.style.display === '') {
// 		dropdown.style.display = 'block';
// 	}
// 	else (dropdown.style.display = '');
// 	}
// 	);

// btn.addEventListener("click", () => {
// 	style.display === "" ? (style.display = "block") : (style.display = "");
// 	style.display === 'block' ? alert('hi')
// }
// );
btn.addEventListener('click', () => {
	if (style.display === '') {
		style.display = 'block';
	}
	else (style.display = '');
})
window.addEventListener('click', (event) => {
	target = event.target;
	if (target == btn || target == dropdownBody) {
		return;
	}
	else (style.display = '');

})
