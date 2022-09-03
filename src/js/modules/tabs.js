function tabs(
	tabsSelector,
	tabsContentSelector,
	tabsParentSelector,
	activeClass
) {
	const tabs = document.querySelectorAll(tabsSelector);
	const tabsContent = document.querySelectorAll(tabsContentSelector);
	const tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {
		tabsContent.forEach((elem) => {
			elem.classList.add('hide');
			elem.classList.remove('show', 'fade');
		});

		tabs.forEach((elem) => {
			elem.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');

		tabs[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((elem, i) => {
				if (target == elem) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
}

export default tabs;
