(() => {
	const rows = [
		...document.querySelectorAll<HTMLElement>("tr[data-type], tr[data-word]"),
	];
	const data = rows.map(
		(el): { element: Element; type: string; word: string } => ({
			element: el,
			type: el.dataset.type.toLowerCase(),
			word: el.dataset.word.toLowerCase(),
		}),
	);

	document.getElementById("search").addEventListener("input", (e: Event) => {
		const term = (e.target as HTMLInputElement).value.toLowerCase();

		for (const datum of data) {
			const foundType = datum.type.includes(term);
			const foundWord = datum.word.includes(term);

			datum.element.classList.toggle(
				"found-type",
				term.length > 0 && foundType,
			);
			datum.element.classList.toggle(
				"found-word",
				term.length > 0 && foundWord,
			);
			datum.element.classList.toggle("hidden", !(foundType || foundWord));
		}
	});
})();
