export const getData = async (url = '') => {
	const response = fetch(url);
	const data = await response;
	return data.json();
};
