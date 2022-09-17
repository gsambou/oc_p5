import { photographerFactory } from '../factories/photographer.mjs';
import { getData } from '../utils/dataProcess.mjs';

/*
 Photographer constant DATA
 */

const DATA = '../../data/photographers.json';

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
	const photographersSection = document.querySelector('.photographer_section');

	photographers.forEach((photographer) => {
		const userCardDOM = displayPhoto(photographer);
		// console.log(userCardDOM);
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers(DATA);
	displayData(photographers);
}

init();
