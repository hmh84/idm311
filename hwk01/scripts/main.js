const fullSizeFlip = document.querySelector('.flip[data-size="full"]');
const mobileSizeFlip = document.querySelector('.flip[data-size="mobile"]');
const buttons = document.querySelectorAll('.controls button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const size = button.dataset.size;
        const value = button.value;

        const img = document.querySelector(`.flip[data-size="${size}"]`);
        img.setAttribute('src', `./assets/${size}-size-${value}.png`);

        document.querySelector(`.selected[data-size="${size}"]`).classList.remove('selected');
        button.classList.add('selected');
    });
});