import { getData } from '../utils/data.mjs';
import { createElement, appendElement } from '../factories/photographer.mjs';
//Mettre le code JavaScript lié à la page photographer.html

const DATA = '../../data/photographers.json';

const { photographers, media } = await getData(DATA);

const getId = () => {
	return Number(window.location.href.split('=')[1]);
};

const photographMedia = (photographID) => media.filter((d) => d.photographerId === photographID);
const photographData = (photographID) => photographers.filter((d) => d.id === photographID);

// BUG: undefined resultat on index page => to fix;
const sanitizeData = (data) => {
	const copy_data = data[0];
	const { name, city, country, tagline, portrait } = copy_data;
	return { name, city, country, tagline, portrait };
};

// sanitizeData(photographData(getId()));

const displayBadge = (photographInfo) => {
	const data = sanitizeData(photographInfo);
	try {
		console.log(data);
		const parent = document.querySelector('.photograph-header');
		const title = createElement('div');
		console.log(title);
		title.classList.add('title');
		parent.prepend(title);

		const title_name = createElement('h1');
		title_name.classList.add('name');
		title_name.style.color = '#d3573c';
		title_name.textContent = data.name;
		title.prepend(title_name);

		const title_location = createElement('p');
		title_location.classList.add('location');
		title_location.textContent = `${data.city},${data.country}`;
		title.appendChild(title_location);

		const title_tagline = createElement('p');
		title_tagline.classList.add('tagline');
		title_tagline.textContent = data.tagline;
		title.appendChild(title_tagline);

		const profil = createElement('div');
		profil.classList.add('profil');
		appendElement(parent, profil);

		const picture = `assets/photographers/${data.portrait}`;
		const profil_img = createElement('img');

		profil_img.setAttribute('src', picture);
		appendElement(profil, profil_img);
	} catch (error) {
		console.log(error);
	}
};

const photographInfo = photographData(getId());

export const vignetteEvent = () => {
	const vignette = document.querySelector('.vignette');
	if (vignette) {
		console.log(vignette);
		vignette.addEventListener('click', (e) => {
			console.log('hello world');
			generateHeader();
		});
	}
};

export const generateHeader = () => {
	displayBadge(photographInfo);
};
vignetteEvent();
