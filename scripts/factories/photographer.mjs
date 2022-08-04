export default function photographerFactory(data) {
	const { name, portrait, city, country, price, tagline } = data;
	const picture = `assets/photographers/${portrait}`;

	const createElement = (element) => document.createElement(element);

	const appendElement = (parent, element) => {
		parent.appendChild(element);
	};
	const getHtmlElements = () => {
		const article = createElement('article');
		const img = createElement('img');

		const h2 = createElement('h2');
		const loc = createElement('p');
		const tag = createElement('p');
		const priceNumber = createElement('p');

		loc.classList.add('location');
		loc.textContent = `${city}, ${country}`;

		tag.classList.add('tagline');
		tag.textContent = `${tagline}`;

		priceNumber.classList.add('price');
		priceNumber.textContent = `${price}€/jour`;

		img.setAttribute('src', picture);

		h2.textContent = name;

		return [article, img, h2, loc, tag, priceNumber];
	};

	const appendChild = (parent, elements) => {
		elements.forEach((element) => {
			parent.appendChild(element);
		});
	};

	function getUserCardDOM() {
		const [article, image, ...elements] = getHtmlElements();
		const vignette = createElement('a');
		vignette.setAttribute('href', '../../photographer.html');
		vignette.setAttribute('alt', 'photographe profil');
		appendElement(vignette, image);

		elements.unshift(vignette);
		console.log(vignette);
		appendChild(article, elements);
		return article;
	}
	return { name, picture, city, country, price, tagline, getUserCardDOM };
}
