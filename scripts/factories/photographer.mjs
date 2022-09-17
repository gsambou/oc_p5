/*
Create element factory
*/

export const createElement = (element) => document.createElement(element);
export const appendElement = (parent, element) => {
	parent.append(element);
};

export const photographerFactory = (data) => {
	const { id, name, portrait, city, country, price, tagline } = data;
	const picture = `assets/photographers/${portrait}`;

	const generateElements = () => {
		const article = createElement('article');
		const vignette = createElement('a');
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

		vignette.setAttribute('href', `../../photographer.html?id=${id}`);
		vignette.setAttribute('alt', 'photograph profil');
		appendElement(vignette, img);
		console.log(vignette);

		return { id, article, vignette, h2, localisation, tag, priceNumber };
	};
	function getUserCardDOM() {
		const { id, article, vignette, h2, localisation, tag, priceNumber } = generateElements();

		appendElement(article, vignette);
		appendElement(article, h2);
		appendElement(article, localisation);
		appendElement(article, tag);
		appendElement(article, priceNumber);

		/*
		 ** redirect on photograph profil at click
		 */
		article.addEventListener('click', (e) => {
			e.preventDefault();
			window.location.href = `${location.href}photographer.html?id=${id}`;
		});
		return article;
	}
	return { name, picture, getUserCardDOM };
};
