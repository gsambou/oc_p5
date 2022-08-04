function displayModal() {
	const contact_btn = document.querySelector('.contact_button');
	const modal = document.querySelector('#contact_modal');
	contact_btn.addEventListener('click', (e) => {
		e.preventDefault();
		modal.style.display = 'block';
	});
}

function closeModal() {
	const close_icon = document.querySelector('#close_icon');
	const modal = document.querySelector('#contact_modal');

	close_icon.addEventListener('click', (e) => {
		modal.style.display = 'none';
	});
}

displayModal();
closeModal();
