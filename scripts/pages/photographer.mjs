import {
	getId,
	createElement,
	appendElement,
	setElement,
	setAttribute,
	querySelector,
	getData,
	DATA,
} from '../utils/index.mjs';

const { photographers, media } = await getData(DATA);

const photographMedia = (photographID) => media.filter((d) => d.photographerId === photographID);
export const photographData = (photographID) => photographers.filter((d) => d.id === photographID);

const sanitizeData = (data) => {
	const copy_data = data[0];
	const { name, city, country, tagline, portrait } = copy_data;
	return { name, city, country, tagline, portrait };
};

const createElements = () => {
	const title = createElement('div');
	const title_name = createElement('h1');
	const title_location = createElement('p');
	const title_tagline = createElement('p');
	const profil = createElement('div');
	const profil_img = createElement('img');
	return { title, title_name, title_location, title_tagline, profil, profil_img };
};

const displayHeader = (photographInfo = {}) => {
	const data = sanitizeData(photographInfo);
	try {
		const parent = querySelector('.photograph-header');
		const { title, title_name, title_location, title_tagline, profil, profil_img } = createElements();
		const picture = `assets/photographers/${data.portrait}`;

		setElement(parent, title, 'title');
		setElement(title, title_name, 'name', data.name, '#d3573c');
		setElement(title, title_location, 'location', `${data.city}, ${data.country}`, '', false);
		setElement(title, title_tagline, 'tagline', data.tagline, '', false);

		profil.classList.add('profil');
		appendElement(parent, profil);
		setAttribute(profil_img, 'src', picture);
		appendElement(profil, profil_img);
	} catch (error) {
		console.log(error);
	}
};

displayHeader(photographData(getId()));

// const main = querySelector('#main');

// const photographer_section = document.createElement('section');
// photographer_section.classList.add('photographer_section');

// main.appendChild(photographer_section);

// const photographer_article = document.createElement('article');
// photographer_section.appendChild(photographer_article);

// const photographer_article_h2 = document.createElement('h2');
// photographer_article_h2.textContent = 'Hello Test';
// photographer_article.appendChild(photographer_article_h2);

console.log(photographMedia(getId()));
