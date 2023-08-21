function initializeGrid() {
    const container = document.querySelector('.container');

    let zDown = false;
    let eDown = false;

    // handles drawing
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

    // handles erasing
    document.addEventListener('keydown', (e) => {
        if (e.code == 'KeyE') {
            eDown = true
        }
    })
    document.addEventListener('keyup', (e) => {
        if (e.code == 'KeyE') {
            eDown = false
        }
    })

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.toggle('box');

        div.addEventListener('mouseover', () => {
            div.classList.toggle('hover');
            // if Z down, draw in square
            if (zDown == true) {
                div.classList.add('filled');
            // if E down, erase in square
            } else if (eDown == true) {
                div.classList.remove('filled');
            }
        })
        div.addEventListener('mouseleave', () => {
            div.classList.toggle('hover');
        })

        container.appendChild(div);
    }
}

function initializeDrawingFunctionality() {

}

function initializeErasingFunctionality() {

}

initializeGrid()