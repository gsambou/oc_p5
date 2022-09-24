/*
 *   Function permettant de recuperer les données
 *    des photographes
 */

export const getData = async (url = '') => {
	const response = fetch(url);
	const data = await response;
	return data.json();
};

/*
 * DATA path
 */

export const DATA = '../../data/photographers.json';
