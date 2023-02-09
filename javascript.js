const btn = document.getElementById('btn');

btn.addEventListener('click',userInput);


function userInput() {
    let input = prompt('Enter your grid size', "0");
    let num = parseInt(input);
    if (num > 100) {
        alert('Enter a number less than 100!')
    } else 
        createGrid(num)
}


const container = document.querySelector('#container');

function createGrid(num) {
        for (let i = 0; i < num; i++) {
            let boxContainer = container.appendChild(document.createElement('div'));
            boxContainer.classList.add('boxContainer');
            for (let i = 0; i < num; i++){
                let box = boxContainer.appendChild(document.createElement('div'))
                box.classList.add('box')
            }
        }
    fill();
}

function fill() {
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









