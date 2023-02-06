const btn = document.getElementById('btn');

btn.addEventListener('click',userInput);

function userInput() {
    let input = prompt('Enter your grid size', "0");
    let num = parseInt(input);
    createGrid(num);
}

const container = document.querySelector('#container');

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = container.appendChild(document.createElement('div'));
    for (let j = 0; j < num; j++) {
        const box = document.createElement('div');
        box.className = 'box';
        row.appendChild(box);
        } 
    }
    fill();
}

function fill() {
    const boxes = document.querySelectorAll('.box'); 

    boxes.forEach(box => 
        box.addEventListener('click', color));

    function color() {
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    }
}








