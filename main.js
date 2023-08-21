function initializeGrid() {
    const container = document.querySelector('.container');
    let zDown = false;
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.toggle('box');

        document.addEventListener('keydown', (e) => {
            if (e.code == 'KeyZ') {
                zDown = true
            }
        })

        document.addEventListener('keyup', (e) => {
            if (e.code == 'KeyZ') {
                zDown = false
            }
        })
    
        div.addEventListener('mouseover', () => {
            div.classList.toggle('hover');
            if (zDown == true) {
                div.classList.add('filled');
            }
        })
        div.addEventListener('mouseleave', () => {
            div.classList.toggle('hover');
        })

        container.appendChild(div);
    }
}

initializeGrid()