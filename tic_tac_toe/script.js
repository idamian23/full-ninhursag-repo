//BOARD
let board = document.querySelector('.board')
let boardContent = ['', '', '', '', '', '', '', '', '']

//SQUARE
let squares = document.querySelectorAll('.board__square')

//BUTTONS
let controlsMenu = document.querySelector('.controls')
let startButton = document.querySelector('.start-button')
let resetButton = document.querySelector('.reset-button')

//Create board
const createBoard = function () {
  if (!board.firstChild) {
    for (let i = 1; i <= 9; i++) {
      let square = document.createElement('div')
      square.setAttribute('class', 'board__square')
      square.setAttribute('id', `square_${i}`)
      board.append(square)
    }
    controlsMenu.style.marginTop = '8rem'
  } else {
    alert('Game is on!')
  }
}

startButton.addEventListener('click', createBoard)

//Reset board
const resetBoard = function () {
  if (board.firstChild) {
    while (board.firstChild) {
      board.removeChild(board.firstChild)
    }
    boardContent = ['', '', '', '', '', '', '', '', '']
    createBoard()
  } else {
    alert('Game is not started!')
  }
}

resetButton.addEventListener('click', resetBoard)

// SWAP TURN
isPlayer_x_turn = true

const swapTurn = function () {
  isPlayer_x_turn = !isPlayer_x_turn
}

// Handle clicks
const squareClick = function (e) {
  const square = e.target
  const currentClass = isPlayer_x_turn ? 'player_x' : 'player_0'
  let value = parseInt(square.id.slice(-1) - 1)

  if (isPlayer_x_turn) {
    square.classList.add(currentClass)
    boardContent[value] = 'x'
    swapTurn()
  } else {
    square.classList.add(currentClass)
    boardContent[value] = '0'
    swapTurn()
  }
}

board.addEventListener('click', squareClick)

// CHECK WINNER

const checkingWinner = function (array) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i]
    if (array[a] && array[a] === array[b] && array[a] === array[c]) {
      alert('!!!')
    } else {
      return true
    }
  }
}
