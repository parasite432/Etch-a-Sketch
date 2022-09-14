
const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
const clear = document.querySelector('#clear');
let numberOfSquaresOnOneSide = 16;
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);





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








