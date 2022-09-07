import { getData } from '../utils/data.mjs';
//Mettre le code JavaScript lié à la page photographer.html

const DATA = '../../data/photographers.json';

const { photographers, media } = await getData(DATA);

const getId = () => {
	return Number(window.location.href.split('=')[1]);
};

const photographMedia = (photographID) => media.filter((d) => d.photographerId === photographID);
const photographData = (photographID) => photographers.filter((d) => d.id === photographID);

const res = photographData(getId());
console.log(Object.assign({}, res[0]));

export const vignetteEvent = () => {
	const vignette = document.querySelector('.vignette');

	vignette.addEventListener('click', (e) => {
		console.log(vignette);
		console.log(res);
	});
};

export const generateHeader = () => {
	const photographHeader = document.querySelector('.photograph-header');

	console.log(photographHeader);
};

generateHeader();
