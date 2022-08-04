const createElement = (element) => document.createElement(element);

const appendElement = (parent, element) => {
	parent.appendChild(element);
};

const appendChild = (parent, elements) => {
	elements.forEach((element) => {
		appendElement(parent, element);
	});
};

export default function photographerFactory(data) {
	const { name, portrait, city, country, price, tagline } = data;
	const picture = `assets/photographers/${portrait}`;

	const getHtmlElements = () => {
		const article = createElement('article');
		const img = createElement('img');
		const h2 = createElement('h2');
		const localisation = createElement('p');
		const tag = createElement('p');
		const priceNumber = createElement('p');

		localisation.classList.add('location');
		localisation.textContent = `${city}, ${country}`;
		tag.classList.add('tagline');
		tag.textContent = `${tagline}`;
		priceNumber.classList.add('price');
		priceNumber.textContent = `${price}€/jour`;
		img.setAttribute('src', picture);
		img.classList.add('vignette');
		h2.textContent = name;

		return [article, img, h2, localisation, tag, priceNumber];
	};

	function getUserCardDOM() {
		const [article, image, ...elements] = getHtmlElements();
		const vignette = createElement('a');
		vignette.setAttribute('href', '../../photographer.html');
		vignette.setAttribute('alt', 'photograph profil');
		appendElement(vignette, image);
		elements.unshift(vignette);
		appendChild(article, elements);
		return article;
	}
	return { name, picture, city, country, price, tagline, getUserCardDOM };
}
