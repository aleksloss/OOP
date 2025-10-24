// импортируем необходимые модули
// import modules

const readLineSync = require('readline-sync');

//Импортируем игровые модули
const runGuessTheNumber = require('./guess-the-number/game');
const runTicTacToe = require('./tic-tac-toe/game');
const runRockPaperScissors = require('./rock-paper-scissors/game');

//контроллер игрового цикла
//Game loop controller
let keepPlaying = true;

//Основной цикл меню. Будет продолжаться, пока игрок не захочет выйти
//Main menu loop. Will continue until the player wants to exit

while (keepPlaying) {
    console.clear();
    console.log("====================");
    console.log("=welcome to the game=");
    console.log("====================");
    console.log("Which game mode do you want to play?");

    const games = [
        'Guess the Number',
        'Tic Tac Toe',
        'Rock Paper Scissors'
    ];
    //отображаем доступные игры
    const index = readLineSync.keyInSelect(games, 'Choose a game or exit');

    //в зависимости от выбора игрока запускаем соответсвующую игру
    switch (index) {
        case 0:
            runGuessTheNumber();
            break;
        case 1:
            runTicTacToe();
            break; 
        case 2:
            runRockPaperScissors();
            break;    
        //дальше будет добавляться новые игры
        default:
            console.log("Exiting the game. Goodbye!");
            keepPlaying = false;
            break;
    }
    //После завершения игры спрашиваем, хочет ли игрок сыграть снова
    if (keepPlaying) {
        if (!readLineSync.keyInYN('Do you want to another game?')){
            keepPlaying = false;
            console.log("Goodbye!");
        }
    }
}