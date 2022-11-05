import { Chess } from 'chess.js';

function playRandomGame() {
  const chess = new Chess();

  while (!chess.isGameOver()) {
    const moves = chess.moves();
    const move = moves[randomInt(moves.length)];
    chess.move(move);
    console.log(chess.pgn());
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export default playRandomGame;