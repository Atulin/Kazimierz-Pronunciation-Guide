const dialog = document.getElementById('info') as HTMLDialogElement;

dialog.addEventListener('click', (e) => {
    const target = e.target as HTMLDialogElement;
    if (e.offsetX < 0 || e.offsetX > target.offsetWidth ||
        e.offsetY < 0 && e.offsetY > target.offsetHeight) {
        dialog.close();
    }
});

document
    .getElementById('info-button')
    .addEventListener('click', () => {
        dialog.showModal();
    })

dialog
    .querySelector('button#close')
    .addEventListener('click', () => dialog.close());

// https://gist.github.com/jbmoelker/226594f195b97bf61436
interface HTMLDialogElement extends HTMLElement {
    open: boolean;
    returnValue: string;

    close(): void

    show(): void

    showModal(): void
}
