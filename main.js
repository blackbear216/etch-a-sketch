function initializeGrid() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.toggle('box');
        div.addEventListener('mouseover', () => {
            div.setAttribute('style', 'background: grey;');
        })
        div.addEventListener('mouseleave', () => {
            div.setAttribute('style', 'background: white;');
        })
        container.appendChild(div);
    }
}

initializeGrid()

