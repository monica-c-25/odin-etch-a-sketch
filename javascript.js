let state = 0;

const startingContainer = document.querySelector('#start');

function startGrid(x) {
    for (let i = 0; i < x; i++) {
        let startGrid = startingContainer.appendChild(document.createElement('div'));
        startGrid.classList.add('startGrid');
        for (let i = 0; i < x; i++){
            let boxStart = startGrid.appendChild(document.createElement('div'))
            boxStart.classList.add('boxStart')
        }
    }
fillStart();
}

startGrid(10);

function fillStart() {
    const startBoxes = document.querySelectorAll('.boxStart'); 

    startBoxes.forEach(boxStart => 
        boxStart.addEventListener('mouseover', colorStart));

    function colorStart() {
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    }
}

const btn = document.getElementById('btn');

btn.addEventListener('click',makeGrid);

function makeGrid() {
    if (state==0) {
        let board = document.querySelector('#start');
        board.innerHTML ="";
        userInput();
    } else {
        userInput();
    }
}

function userInput() {
    let input = prompt('Enter your grid size', "0");
    let num = parseInt(input);
    if (num > 100) {
        alert('Enter a number less than 100!')
    } else 
        createGrid(num)
}

function createGrid(num) {
    if (state==0){
        document.body.removeChild(startingContainer);
        let container = document.createElement('div');
        container.id = 'container';
        document.body.appendChild(container);
            for (let i = 0; i < num; i++) {
                let boxContainer = container.appendChild(document.createElement('div'));
                boxContainer.classList.add('boxContainer');
                for (let i = 0; i < num; i++){
                    let box = boxContainer.appendChild(document.createElement('div'))
                 box.classList.add('box')
                }
             }
    } else {
        const container = document.getElementById('container');
        container.innerHTML = '';
        for (let i = 0; i < num; i++) {
            let boxContainer = container.appendChild(document.createElement('div'));
            boxContainer.classList.add('boxContainer');
            for (let i = 0; i < num; i++){
                let box = boxContainer.appendChild(document.createElement('div'))
                box.classList.add('box')
            }
        }
    }
    fill();
}

function fill() {
    state = 1;
    const boxes = document.querySelectorAll('.box'); 

    boxes.forEach(box => 
        box.addEventListener('mouseover', color));

    function color() {
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    
    }
}



const reset = document.getElementById('reset');

reset.addEventListener('click', newBoard);

function newBoard() {
    location.reload();
}











