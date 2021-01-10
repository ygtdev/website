const root = document.getElementById('root');
const game = {
    'board': [],
    'lengthOfBoard': 8,
    'maxPlayers': 2, // just for a multiplayer game
    'symbols': ['X', 'O'],
    'players': [
    ],
    'currentPlayer': 0,
    'initPlayer': () => {

        game.currentPlayer = Math.floor(Math.random() * game.maxPlayers);

    },
    'createBoard': () => {

        while(game.board.length <= game.lengthOfBoard){

            game.board.push('');

        }

    },
    'renderBoardInNavigator': () => {

        let content = '';

        for(let i = 0; i <= game.lengthOfBoard; i++){

            content += '<span class="table" ' +
            `onclick="game.makePlay(${i})"></span>`;

        }

        root.innerHTML = content;

    },
    'makePlay': (position) => {

        if(game.board[position] === '' && game.isGameOver === false){

            game.plays += 1;

            console.log('Jogada: ' + game.plays);

            game.board[position] = game.symbols[game.currentPlayer];

            game.whiteInBoard(position, game.symbols[game.currentPlayer]);

            game.checkPass();

            game.changePlayer();

        }

    },
    'isGameOver': false,
    'plays': 0,
    'whiteInBoard': (position, symbol) => {

        let table = document.getElementsByClassName('table');

        table[position].innerHTML = symbol;

    },
    'changePlayer': () => {

        if(game.currentPlayer === 0 || game.currentPlayer > game.maxPlayers){

                game.currentPlayer += 1;

        }else{

            game.currentPlayer -= 1;

        }

    },
    'start': () => {

        game.initPlayer();
        game.createBoard(); 
        game.renderBoardInNavigator();
        game.renderScoreboard();
        game.renderButtonRestart();

        console.log('Fist player to play: ' + game.currentPlayer);

    },
    'passToWin': [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    'checkPass': () => {

        if(game.plays === 9){

            alert('friendship gained!');

            game.restart();
          
        }else{

           for(let i = 0; i < game.board.length; i++){
             
             console.log(game.board[i]);
             
           }
             
           }
            
        },
    'restart': () => {

        game.isGameOver = false;
        game.board.fill(''); // clean the content of array;
        game.plays = 0; // restart the count of plays
        game.start(); // create all content again

    },
    'renderButtonRestart': () => {

        let button = document.createElement('button');
        let content = document.createTextNode('Restart Game');

        button.classList.add('btn');
        button.id = 'restart-game';
        button.appendChild(content);
        button.onclick = () => {

            game.restart();

        }

        root.appendChild(button);

    },
    'changeColor': (positionOne, positionTwo, positionThree) => {

        let elements = document.getElementsByClassName('table');

        elements[positionOne].classList.add('winner-position');
        elements[positionTwo].classList.add('winner-position');
        elements[positionThree].classList.add('winner-position');


    },
    'renderScoreboard': () => {

        let scoreboard = document.createElement('section');

        scoreboard.classList.add('scoreboard');
       

        game.players.forEach(function(element){

            let div = document.createElement('div');
            let playerName = document.createElement('span');
            let playerVictories = document.createElement('span');

            playerName.classList.add('player-name');
            playerVictories.classList.add('player-victories');

            playerName.innerHTML = `Name: ${element.name}`;
            playerVictories.innerHTML = `Victories: ${element.victories}`;

            div.appendChild(playerName);
            div.appendChild(playerVictories);
            scoreboard.appendChild(div);

        });


        root.appendChild(scoreboard);


    }
};

game.start();
