import photographerFactory from '../factories/photographer.mjs';
import { vignetteEvent, generateHeader } from './photographer.mjs';
import { getData } from '../utils/data.mjs';

const DATA = '../../data/photographers.json';

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
	displayData(photographers);
	vignetteEvent();
}

export default init;
