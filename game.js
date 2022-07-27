const boxes = document.getElementsByClassName('boxes');
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';
let count = 0;
let eachBox;


function gamePlay() {
    for ( let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', () => {
            eachBox = document.getElementById( i + 1 );
            if ( eachBox.innerHTML === 'X' || eachBox.innerHTML ==='O' ) {
                    alert('already clicked')
            }
            else {
                eachBox.innerHTML = currentPlayerTurn()
                validation()
            }
        })
    }
}


function currentPlayerTurn() {
    count++;
    if (count % 2 == 0) {
        currentPlayer = 'X';
    } else {
        currentPlayer='O';
    }
    return currentPlayer;
}


function validation() {
    let win = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],

        [1, 5, 9],
        [3, 5, 7],

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
    ]
    for (let i = 0; i < win.length; i++) {
        if ((document.getElementById(win[i][0]).innerHTML === 'X' && document.getElementById(win[i][1]).innerHTML === 'X' && document.getElementById(win[i][2]).innerHTML === 'X') ||
            (document.getElementById(win[i][0]).innerHTML === 'O' && document.getElementById(win[i][1]).innerHTML === 'O' && document.getElementById(win[i][2]).innerHTML === 'O')){
            alert(`Player ${currentPlayer} wins!`)
            restartGame()
        } 
    }
}


function restartGame() {
    location.reload();
}


gamePlay()
restartButton.addEventListener('click', restartGame)
