// Restart Game Button
var restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll('td');

// clear all the squares
function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);

// check the squares

// Solucion No tradicional porque implica pegar lo mismo 8 veces mas:
// var cellOne = document.querySelector('#one')
//
// cellOne.addEventListener('click',function () {
//   if (cellOne.textContent === '') {
//     cellOne.textContent = 'X';
//   }else if (cellOne.textContent === 'X') {
//     cellOne.textContent = '0';
//   }else {
//     cellOne.textContent = '';
//   }
// })
// Solucion Inteligente:

function changeMarker() {
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker)
}


// For loop to add event listener to all the squares
