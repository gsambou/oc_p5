function displayModal() {
	const modal = document.querySelector('.contact_modal');
	modal.addEventListener('click', (e) => {
		e.preventDefault();
		modal.style.display = 'block';
	});
}

function closeModal() {
	const close_icon = document.querySelector('#close_icon');
	console.log(close_icon);
	const modal = document.querySelector('.contact_modal');

	close_icon.addEventListener('click', (e) => {
		modal.style.display = 'none';
	});
}

displayModal();
closeModal();
