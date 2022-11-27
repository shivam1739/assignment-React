import { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winMessage, setWinMessage] = useState("");
  console.log(cells);

  // let combination = {

  //     across: [
  //         [0, 1, 2],
  //         [3, 4, 5],
  //         [6, 7, 8]
  //     ],

  //     down: [
  //         [0, 3, 6],
  //         [1, 4, 7],
  //         [2, 5, 8]
  //     ],
  //     diag: [
  //         [0, 4, 8],
  //         [2, 4, 8]
  //     ]

  // }
  const reloadGame = () => {
    setTurn("x");
    setWinMessage("");
    setCells(Array(9).fill(""));
  };

  const checkForWinner = (cells) => {
    //check the winner of the game
    if (
      cells[0] == cells[1] &&
      cells[1] == cells[2] &&
      cells[2] == cells[3] &&
      cells[0] !== ""
    ) {
      console.log("checkForWinner");

      setWinMessage(`${cells[0]} has won`);
    } else if (
      cells[4] === cells[5] &&
      cells[5] === cells[6] &&
      cells[6] == cells[7] &&
      cells[4] !== ""
    ) {
      setWinMessage(`${cells[3]} has won`);
    } else if (
      cells[8] === cells[9] &&
      cells[9] === cells[10] &&
      cells[10] == cells[11] &&
      cells[8] !== ""
    ) {
      setWinMessage(`${cells[6]} has won`);
    } else if (
      cells[0] === cells[4] &&
      cells[4] === cells[8] &&
      cells[8] == cells[12] &&
      cells[0] !== ""
    ) {
      setWinMessage(`${cells[0]} has won`);
    } else if (
      cells[1] === cells[5] &&
      cells[5] === cells[9] &&
      cells[9] == cells[13] &&
      cells[1] !== ""
    ) {
      setWinMessage(`${cells[1]} has won`);
    } else if (
      cells[2] === cells[6] &&
      cells[6] === cells[10] &&
      cells[10] == cells[14] &&
      cells[2] !== ""
    ) {
      setWinMessage(`${cells[2]} has won`);
    } else if (
      cells[3] === cells[7] &&
      cells[7] === cells[11] &&
      cells[11] == cells[15] &&
      cells[3] !== ""
    ) {
      setWinMessage(`${cells[3]} has won`);
    } else if (
      cells[0] === cells[5] &&
      cells[5] === cells[10] &&
      cells[10] == cells[15] &&
      cells[0] !== ""
    ) {
      setWinMessage(`${cells[0]} has won`);
    } else if (
      cells[3] === cells[6] &&
      cells[6] === cells[9] &&
      cells[9] == cells[12] &&
      cells[3] !== ""
    ) {
      setWinMessage(`${cells[3]} has won`);
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("Already Clicked");
      return;
    }

    let newCells = [...cells];
    if (turn === "x") {
      newCells[num] = "x";
      setTurn("o");
    } else {
      newCells[num] = "o";
      setTurn("x");
    }
    console.log(newCells);
    setCells(newCells);

    checkForWinner(newCells);
  };

  const Cell = ({ num }) => {
    return (
      <td onClick={() => handleClick(num)} className="cell">
        {cells[num]}
      </td>
    );
  };

  return (
    <div className="cell-container">
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
            <Cell num={3} />
          </tr>
          <tr>
            <Cell num={4} />
            <Cell num={5} />
            <Cell num={6} />
            <Cell num={7} />
          </tr>
          <tr>
            <Cell num={8} />
            <Cell num={9} />
            <Cell num={10} />
            <Cell num={11} />
          </tr>
        </tbody>
      </table>
      {winMessage && (
        <div>
          <h1>{winMessage}</h1>
          <button onClick={reloadGame}>Reload</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
