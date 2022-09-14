
const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
const clear = document.querySelector('#clear');
const color = document.querySelector('#color');
const colorPicker = document.getElementById('colorPicker');
let currentColor = '#00ffff';
let numberOfSquaresOnOneSide = 16;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

colorPicker.oninput = (e) => setCurrentColor(e.target.value)
function setCurrentColor(newColor) {
    currentColor = newColor
  }



function getNumberofBoxes() {

    let value  = prompt("please enter a value less than or equal to 100(eg: 16 will produce a 16x16 grids)");

    if (value > 100) { alert ('value too high'); }
    else {

        numberOfSquaresOnOneSide = value;

    }

    return numberOfSquaresOnOneSide;
}

function createGrid(numberOfSquaresOnOneSide) {

    container.style.gridTemplateColumns = `repeat(${numberOfSquaresOnOneSide},1fr)`;
    container.innerHTML = ''

    for (let i = 0; i < numberOfSquaresOnOneSide * numberOfSquaresOnOneSide; i++) {

        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div)



    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {



        square.addEventListener('mouseover', function (e) {

            changeColor(e, square)
        })


        square.addEventListener('mousedown', function (e) {

            changeColor(e, square)
        })


    });
}


function changeColor(e, squares) {

    


    if (e.type === 'mouseover' && !mouseDown) return;
    else {

        e.target.style.backgroundColor = currentColor;
        squares.classList.add('entered');
    }


}


container.style.gridTemplateColumns = `repeat(${numberOfSquaresOnOneSide},1fr)`;

createGrid(numberOfSquaresOnOneSide);



btn.addEventListener('click', () => {



    createGrid(getNumberofBoxes());

})




clear.addEventListener('click', () => {



    createGrid(numberOfSquaresOnOneSide);

})






