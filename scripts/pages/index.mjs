import photographerFactory from '../factories/photographer.mjs';

const DATA = '../../data/photographers.json';

async function getData(url = '') {
	const response = fetch(url);
	const data = await response;
	return data.json();
}

async function getPhotographers() {
	const { photographers } = await getData(DATA);

	return {
		photographers: [...photographers],
	};
}

async function displayData(photographers) {
	const photographersSection = document.querySelector('.photographer_section');

	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	console.log(photographers);
	displayData(photographers);
}

export default init;
