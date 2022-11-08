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

// const my_test = getMediaInfo()[0];

const createMediaCard = (data) => {
	const picture = `assets/medias/${data.image ? data.image : data.video}`;
	const parent = document.createElement('div');
	parent.classList.add('img_card_parent');
	const imgCard = document.createElement('img');
	imgCard.classList.add('photographer_img');
	setAttribute(imgCard, 'src', picture);
	parent.append(imgCard);
	const media_list = document.querySelector('.media-list');
	media_list.appendChild(parent);

	const textContainer = document.createElement('div');
	textContainer.classList.add('textContainer');
	parent.append(textContainer);
	const imgCard_title = document.createElement('h3');
	imgCard_title.textContent = data.title;
	textContainer.append(imgCard_title);

	const imgCard_likes_container = document.createElement('div');
	imgCard_likes_container.classList.add('like_numbers');

	textContainer.append(imgCard_likes_container);
	const imgCard_likes = document.createElement('span');
	imgCard_likes.textContent = data.likes;
	imgCard_likes_container.append(imgCard_likes);

	const imgCard_heart = document.createElement('span');
	imgCard_heart.classList.add('heart');
	imgCard_heart.textContent = '♥️';
	imgCard_likes_container.appendChild(imgCard_heart);
};

const getMediaInfo = () => {
	const mymedia = photographMedia(getId());

	mymedia.forEach((element) => {
		const { title, image, likes, video } = element;
		const my_test = { image, video, title, likes };
		createMediaCard(my_test);
	});
};

getMediaInfo();

const phototest = document.querySelectorAll('.photographer_img');

if (phototest) {
	Array.from(phototest).forEach((photo) => {
		photo.addEventListener('click', (e) => {
			e.preventDefault();
			const carroussel = document.querySelector('.carroussel');
			carroussel.style.display = 'block';

			const slider = document.querySelector('.slider');
			const slider_image = document.createElement('li');
			slider_image.classList.add('slider_image');
			const slider_content = document.createElement('ul');
			slider_content.classList.add('slider_list_content');
			slider.append(slider_content);

			const mymedia = photographMedia(getId());
			// const picture = `assets/medias/${mymedia[0].image}`;
			//   const picture = `assets/medias/${data.image ? data.image : data.video}`;

			mymedia.forEach((m) => {
				const picture = `assets/medias/${m.image ? m.image : m.video}`;
				// const picture = `assets/medias/${m.image}`;
				const li = document.createElement('li');
				li.classList.add('slider_content_image');
				const imgCard = document.createElement('img');
				li.append(imgCard);
				imgCard.classList.add('photographer_slider_image');
				setAttribute(imgCard, 'src', picture);
				slider_content.append(li);
			});
		});
	});
} else {
	console.log('wrong click');
}

const slider_left_arrow = document.querySelector('.left-arrow');
const slider_right_arrow = document.querySelector('.right-arrow');

slider_right_arrow.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('clicked right');
	const slider_content_list = document.querySelector('.slider_list_content');

	slider_content_list.style.right = `{1050 * 2}px`;
});

slider_left_arrow.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('clicked left');
	const slider_content_list = document.querySelector('.slider_list_content');

	slider_content_list.style.left = `-1050px`;
});
