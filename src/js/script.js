'use strict';
import calc from './modules/calc';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import { showModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(
		() => showModal('.modal', modalTimerId),
		300000
	);

	calc();
	modal('[data-modal]', '.modal', modalTimerId);
	cards();
	forms('form', modalTimerId);
	slider({
		container: '.offer__slider',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		slide: '.offer__slide',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner',
	});
	tabs(
		'.tabheader__item',
		'.tabcontent',
		'.tabheader__items',
		'tabheader__item_active'
	);
	timer('.timer', '2022-09-31');
});
