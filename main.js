function initializeGrid() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.setAttribute('style', 'width: 8px; height: 8px; background: black;');
        container.appendChild(div);
    }
}

initializeGrid()