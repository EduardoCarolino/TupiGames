'use client';

import React from 'react';

type ForcaDisplayProps = {
  errors: number;
  wordLength: number;
  correctLetters: string[];
  gameOver: boolean;
  gameWon: boolean;
  word: string;
  translation: string;
  hint: string;
};

const BODY_PARTS = [
  <circle key="head" cx="150" cy="50" r="20" className="stroke-black fill-transparent stroke-2" />,
  <line key="body" x1="150" y1="70" x2="150" y2="120" className="stroke-black stroke-2" />,
  <line key="left-arm" x1="150" y1="80" x2="120" y2="100" className="stroke-black stroke-2" />,
  <line key="right-arm" x1="150" y1="80" x2="180" y2="100" className="stroke-black stroke-2" />,
  <line key="left-leg" x1="150" y1="120" x2="120" y2="150" className="stroke-black stroke-2" />,
  <line key="right-leg" x1="150" y1="120" x2="180" y2="150" className="stroke-black stroke-2" />
];

export default function ForcaDisplay({
  errors,
  wordLength,
  correctLetters,
  gameOver,
  gameWon,
  word,
  translation,
  hint
}: ForcaDisplayProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-8">
        <svg height="250" width="200" className="mx-auto">
          <line x1="20" y1="20" x2="20" y2="200" className="stroke-black stroke-4" />
          <line x1="20" y1="20" x2="100" y2="20" className="stroke-black stroke-4" />
          <line x1="100" y1="20" x2="100" y2="30" className="stroke-black stroke-4" />
          
          {BODY_PARTS.slice(0, errors)}
        </svg>
      </div>

      <div className="flex justify-center gap-2 text-4xl font-bold uppercase my-8">
        {Array.from({ length: wordLength }).map((_, index) => (
          <span key={index} className="border-b-4 border-black w-10 text-center">
            <span 
              className={`${correctLetters.includes(word[index]) || gameOver || gameWon
                ? 'visible' 
                : 'invisible'
              } ${
                !correctLetters.includes(word[index]) && (gameOver || gameWon)
                  ? 'text-red-500' 
                  : 'text-black'
              }`}
            >
              {word[index]}
            </span>
          </span>
        ))}
      </div>

      <div className="mt-4 text-center">
        {gameOver && (
          <p className="text-red-500 font-bold text-xl">Você perdeu! A palavra era: {word}</p>
        )}
        {gameWon && (
          <p className="text-green-500 font-bold text-xl">Parabéns! Você ganhou!</p>
        )}
      </div>

      {(gameOver || gameWon) && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="text-lg"><span className="font-bold">Tradução:</span> {translation}</p>
          <p className="text-lg"><span className="font-bold">Dica:</span> {hint}</p>
        </div>
      )}
    </div>
  );
}