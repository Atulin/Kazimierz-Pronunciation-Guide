document
    .querySelectorAll('button[data-voice]')
    .forEach((el) => el.addEventListener('click', async (e) => await playSound(e)));

const player = document.getElementById('player') as HTMLAudioElement;
player.addEventListener('ended', () => player.classList.remove('visible'));

const playSound = async (e: Event) => {
    const file = (e.currentTarget as HTMLButtonElement).dataset['voice'];
    player.src = `/sounds/${file}.mp3`;
    player.classList.add('visible');
    await player.play();
}
