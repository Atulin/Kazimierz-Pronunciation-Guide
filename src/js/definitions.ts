(() => {
    document
        .querySelectorAll('button[data-definition]')
        .forEach((el) => el.addEventListener('click', async (e) => await showDefinition(e)));

    const dialog = document.getElementById('definition') as HTMLDialogElement;

    dialog.addEventListener('click', (e) => {
        const target = e.target as HTMLDialogElement;
        if (e.offsetX < 0 || e.offsetX > target.offsetWidth ||
            e.offsetY < 0 && e.offsetY > target.offsetHeight) {
            dialog.close();
        }
    });

    dialog
        .querySelector('button#close')
        .addEventListener('click', () => dialog.close());

    const showDefinition = async (e: Event) => {
        const p = dialog.querySelector('p.definition') as HTMLParagraphElement;
        p.innerText = (e.currentTarget as HTMLButtonElement).dataset['definition'];

        const s = dialog.querySelector('span.title') as HTMLSpanElement;
        s.innerText = (e.currentTarget as HTMLButtonElement).dataset['word'];

        dialog.showModal();
    }
})()
