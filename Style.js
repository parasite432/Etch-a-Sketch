
const container = document.querySelector('.container');

let numberOfSquaresOnOneSide = 100;


container.style.gridTemplateColumns =`repeat(${numberOfSquaresOnOneSide},1fr)`;


for (let i = 0; i < numberOfSquaresOnOneSide*numberOfSquaresOnOneSide; i++) {

    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div)

}



const squares = document.querySelectorAll('.square');

squares.forEach((square) => { 
    
    
    
    square.addEventListener('mouseenter',  () => {

        console.log('entered');
        square.classList.add('entered');

    })

 





});







