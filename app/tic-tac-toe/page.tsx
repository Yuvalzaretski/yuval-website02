"use client";
import { useEffect, useMemo, useState } from "react";
import styles from "./page.module.css";

function Square({
  value,
  onClick,
  isWinning,
}: {
  value: string | null;
  onClick: () => void;
  isWinning?: boolean;
}) {
  return (
    <button
      className={`${styles.square} ${isWinning ? styles.winning : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

type ConfettiPiece = {
  left: string;
  delay: string;
  duration: string;
  color: string;
  rotation: number;
  scale: number;
};

const CONFETTI_COLORS = ["#f87171", "#facc15", "#4ade80", "#38bdf8", "#a78bfa"];

function useConfettiPieces(seed: number) {
  return useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: 35 }).map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.4}s`,
      duration: `${1.5 + Math.random() * 0.7}s`,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * 360,
      scale: 0.6 + Math.random() * 0.8,
    }));
  }, [seed]);
}

function ConfettiBurst({ pieces }: { pieces: ConfettiPiece[] }) {
  return (
    <div className={styles.confetti} aria-hidden>
      {pieces.map((piece, index) => (
        <span
          key={`${piece.left}-${index}`}
          className={styles.confettiPiece}
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg) scale(${piece.scale})`,
          }}
        />
      ))}
    </div>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiSeed, setConfettiSeed] = useState(0);

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line ?? [];
  const confettiPieces = useConfettiPieces(confettiSeed);

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setShowConfetti(false);
  }

  useEffect(() => {
    if (winner) {
      setShowConfetti(true);
      setConfettiSeed((seed) => seed + 1);
      const timeout = setTimeout(() => setShowConfetti(false), 2200);
      return () => clearTimeout(timeout);
    }
  }, [winner]);

  const status = winner
    ? `Winner: ${winner}`
    : squares.every((sq) => sq)
    ? "It's a draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className={styles.gameArea}>
      {showConfetti ? <ConfettiBurst pieces={confettiPieces} /> : null}
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
        {squares.map((val, i) => (
          <Square
            key={i}
            value={val}
            onClick={() => handleClick(i)}
            isWinning={winningLine.includes(i)}
          />
        ))}
      </div>
      <button className={styles.resetButton} onClick={resetGame}>
        🔁 New Game
      </button>
    </div>
  );
}

export default function TicTacToePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Tic-Tac-Toe</h1>
      <Board />
    </main>
  );
}
