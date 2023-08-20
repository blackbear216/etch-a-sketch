function initializeGrid() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.toggle('box');
        div.addEventListener('mouseover', () => {
            div.classList.toggle('hover');
        })
        div.addEventListener('mouseleave', () => {
            div.classList.toggle('hover');
        })
        div.addEventListener('mousedown', () => {
            div.classList.toggle('filled');
        })
        container.appendChild(div);
    }
}

initializeGrid()

