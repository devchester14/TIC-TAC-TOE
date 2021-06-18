import React, { Fragment, useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../TicTacToe';

const style = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    //If user click on occupied square || if game won, retrun
    if (winner || boardCopy[i]) return;
    // put an X or O in clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>START GAME</button>
  );

  return (
    <Fragment>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p style={{ fontSize: '50px' }}>
          {winner
            ? 'Winner:' + winner
            : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </Fragment>
  );
};

export default Game;
