/*
Create element factory
*/

export const createElement = (element) => document.createElement(element);
export const appendElement = (parent, element) => {
	parent.append(element);
};

/*
 Append all Created Elements to the DOM
 */

const appendElements = (parent, elements) => {
	elements.forEach((element) => {
		parent.append(element);
	});
};

const createElements = () => {
	const article = createElement('article');
	const vignette = createElement('a');
	const img = createElement('img');
	const h2 = createElement('h2');
	const localisation = createElement('p');
	const tag = createElement('p');
	const priceNumber = createElement('p');

	return { article, vignette, img, h2, localisation, tag, priceNumber };
};

/*
set textContent and className to element
*/
const setElementProperties = (element, className = '', textContent = '') => {
	if (className) {
		element.classList.add(className);
	}
	if (textContent) {
		element.textContent = textContent;
	}
};

/*
 * setAttribute of html Element
 */
const setAttribute = (element, attribute, value = '') => {
	element.setAttribute(attribute, value);
};

const redirectPage = (element, id) => {
	element.addEventListener('click', (e) => {
		e.preventDefault();
		window.location.href = `${location.href}photographer.html?id=${id}`;
	});
};

export const photographerFactory = (data) => {
	const { id, name, portrait, city, country, price, tagline } = data;
	const picture = `assets/photographers/${portrait}`;

	const generateElements = () => {
		const { article, vignette, img, h2, localisation, tag, priceNumber } = createElements();

		setElementProperties(localisation, 'location', `${city}, ${country}`);
		setElementProperties(tag, 'tagline', tagline);
		setElementProperties(priceNumber, 'price', `${price}€/jour`);
		setElementProperties(h2, '', name);
		setAttribute(img, 'src', picture);
		setElementProperties(img, 'vignette');
		setAttribute(vignette, 'href', `../../photographer.html?id=${id}`);
		setAttribute(vignette, 'alt', 'photograph profil');
		appendElement(vignette, img);

		return { id, article, vignette, h2, localisation, tag, priceNumber };
	};

	function getUserCardDOM() {
		const data = Object.values(generateElements());
		const [id, article, ...domElements] = data;

		appendElements(article, domElements);

		/*
		 ** redirect on photograph profil at click
		 */
		redirectPage(article, id);
		return article;
	}
	return { name, picture, getUserCardDOM };
};
