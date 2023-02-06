const container = document.querySelector('#container');

function createGrid(input) {
  for (let i = 0; i < input; i++) {
    const row = container.appendChild(document.createElement('div'));
    for (let j = 0; j < input; j++) {
      const box = document.createElement('div');
      box.className = 'box';
      row.appendChild(box);
    } 
  }
}

createGrid(8);


