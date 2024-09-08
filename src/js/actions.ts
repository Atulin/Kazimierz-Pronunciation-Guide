const buttons = document.querySelectorAll(".buttons button.button");
const header = document.querySelector("th.action");

let timeout: Timer;

for (const btn of buttons) {
	btn.addEventListener("mouseover", (e: Event) => {
		timeout && clearTimeout(timeout);

		const text = (e.currentTarget as HTMLButtonElement).dataset.action;
		if (header.textContent === text) return;
		header.textContent = text;
	});
}

const groups = document.querySelectorAll(".buttons");

for (const group of groups) {
	group.addEventListener("mouseleave", () => {
		timeout = setTimeout(() => {
			header.textContent = "";
		}, 250);
	});
}
