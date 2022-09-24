import { photographerFactory } from '../factories/photographer.mjs';
import { getData, DATA, appendElement, querySelector } from '../utils/index.mjs';

/*
 GetPhotographers DATA
 return: Array of photographers data
 */

async function getPhotographers(data) {
	const { photographers } = await getData(data);

	return {
		photographers: [...photographers],
	};
}

/*
 Display a photographer card factory
 */
const displayPhoto = (photographer) => {
	const photographerModel = photographerFactory(photographer);
	const userCardDOM = photographerModel.getUserCardDOM();
	return userCardDOM;
};

/*
 Display fetched Data from getPhotographers function
 in DOM
 */
async function displayData(photographers) {
	const photographersSection = querySelector('.photographer_section');

	photographers.forEach((photographer) => {
		const userCardDOM = displayPhoto(photographer);
		appendElement(photographersSection, userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers(DATA);
	displayData(photographers);
}

init();
