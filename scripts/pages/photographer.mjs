import { getData } from '../utils/data.mjs';
//Mettre le code JavaScript lié à la page photographer.html

const DATA = '../../data/photographers.json';

const { photographers, media } = await getData(DATA);

console.log(photographers);
console.log(media);

function find(items, predicate) {
	const data = [];
	return items.reduce((acc, item, index, array) => {
		if (acc !== undefined) {
			// console.log(acc);
			return acc;
		}
		if (predicate(item, index, array)) {
			return item;
		}

		return acc;
	}, undefined);
}

// photographers.forEach((photograph) => {
// 	find(media, (m) => m.photographerId === photograph.id);
// });

// const data = find(media, (m) => m.photographerId === 925);
// console.log(data);

// let photographTest = (photograh, index, array) => photograh.photographerId === 925;

// filter

const photograhData = (photographID) => media.filter((d) => d.photographerId === photographID);

const res = photograhData(243);

export const vignetteEvent = () => {
	const vignette = document.querySelector('.vignette');

	vignette.addEventListener('click', (e) => {
		console.log('clicked');
		console.log(res);
	});
};
