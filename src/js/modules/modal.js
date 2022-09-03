function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector);
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

function showModal(modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);
	modal.classList.add('show');
	document.body.style.overflow = 'hidden';

	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function modal(triggerSelector, modalSelector, modalTimerId) {
	const modal = document.querySelector(modalSelector);
	const modalTrigerBtns = document.querySelectorAll(triggerSelector);

	modalTrigerBtns.forEach((elem) => {
		elem.addEventListener('click', () =>
			showModal(modalSelector, modalTimerId)
		);
	});

	modal.addEventListener('click', (event) => {
		if (
			event.target === modal ||
			event.target.getAttribute('data-close') == ''
		) {
			closeModal(modalSelector);
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			closeModal(modalSelector);
		}
	});

	function showModalByScroll() {
		if (
			window.scrollY + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1
		) {
			showModal(modalSelector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export { closeModal };
export { showModal };
