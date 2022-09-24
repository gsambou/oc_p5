export const createElement = (element) => document.createElement(element);

export const appendElement = (parent, element) => {
	parent.append(element);
};

/*
 Append all Created Elements to the DOM
 */

export const appendElements = (parent, elements) => {
	elements.forEach((element) => {
		parent.append(element);
	});
};

export const prepend = (parent, element) => {
	parent.prepend(element);
};

export const setElement = (parent, element, className, textContent = '', color = '', prep = true) => {
	element.classList.add(className);
	if (color) {
		element.style.color = color;
	}
	if (textContent) {
		element.textContent = textContent;
	}
	if (prep) {
		prepend(parent, element);
	} else {
		appendElement(parent, element);
	}
};

/*
set textContent and className to element
*/
export const setElementProperties = (element, className = '', textContent = '') => {
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
export const setAttribute = (element, attribute, value = '') => {
	element.setAttribute(attribute, value);
};

// Recupère l'id via l'url
export const getId = () => {
	return Number(window.location.href.split('=')[1]);
};

export const querySelector = (selectorName) => document.querySelector(selectorName);
