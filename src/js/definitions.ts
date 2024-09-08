import { decompressFromUTF16 } from "lz-string";

const definitionButtons = document.querySelectorAll("button[data-definition]");

for (const btn of definitionButtons) {
	btn.addEventListener("click", (e: MouseEvent) => showDefinition(e));
}

const dialog = document.getElementById("definition") as HTMLDialogElement;

dialog.addEventListener("click", (e) => {
	const target = e.target as HTMLDialogElement;
	if (
		e.offsetX < 0 ||
		e.offsetX > target.offsetWidth ||
		(e.offsetY < 0 && e.offsetY > target.offsetHeight)
	) {
		dialog.close();
	}
});

dialog
	.querySelector("button#close")
	.addEventListener("click", () => dialog.close());

const showDefinition = (e: Event) => {
	const p = dialog.querySelector("p.definition") as HTMLParagraphElement;
	const definition = (e.currentTarget as HTMLButtonElement).dataset.definition;
	p.innerHTML = decompressFromUTF16(definition);

	const s = dialog.querySelector("span.title") as HTMLSpanElement;
	s.innerText = (e.currentTarget as HTMLButtonElement).dataset.word;

	dialog.showModal();
};
