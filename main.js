let size = 16;
const container = document.querySelector('.container');

function initializeGrid(size) {
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

    for (let i = 0; i < size; i++) {
        const subContainer = document.createElement('div');
        subContainer.classList.toggle('subcontainer');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.toggle('box');

            div.addEventListener('mouseenter', () => {
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
           
            subContainer.appendChild(div);
        }
        container.appendChild(subContainer);
    }
}

function getSize() {
    let size = prompt("How many squares per grid? (Max 100)");
    if (size > 100) {
        size = 100;
    } else if (size < 16) {
        size = 16;
    }
    clearGrid();
    initializeGrid(size);
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        console.log("hello");
    }
}

initializeGrid(size)