let btn = document.querySelector(".dropdown__btn");
let dropdown = document.querySelector(".dropdown__body");
let style = dropdown.style;

btn.addEventListener('click', () => {
	style.display == '' ? (style.display = 'flex') : (style.display = '');
}
);

window.addEventListener('click', (event) => {
	target = event.target;
	target == btn || target == dropdown ? null : style.display = '';

})