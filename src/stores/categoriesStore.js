import { writable } from 'svelte/store';

const categories = writable([
	{
		basic: {
			trending: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			newIn: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			sell: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			mostFavorited: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg'
		},
		holiday: {
			trending: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			newIn: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			sell: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			mostFavorited: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg'
		},
		summer: {
			trending: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			newIn: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			sell: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			mostFavorited: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg'
		},
		winter: {
			trending: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			newIn: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			sell: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg',
			mostFavorited: 'https://yesweb.se/sfab/img/women/suits/suit-black.jpg'
		}
	}
]);

export default categories;
