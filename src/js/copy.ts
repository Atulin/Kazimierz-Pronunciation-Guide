(() => {
	const copyButtons = document.querySelectorAll("button.link[data-id]");

	for (const btn of copyButtons) {
		btn.addEventListener("click", async (e) => await copy(e));
	}

	const copy = async (e: Event) => {
		const word = (e.currentTarget as HTMLElement).dataset.id;
		const url = window.location.origin;

		try {
			await navigator.clipboard.writeText(`${url}#${word}`);
		} catch (err) {
			alert("Your browser does not support the clipboard API");
		}
	};
})();
