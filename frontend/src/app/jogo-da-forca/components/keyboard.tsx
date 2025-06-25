'use client';

import React, { useEffect } from 'react';

const KEYS = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'ç'
];

type KeyboardProps = {
  word: string;
  onCorrect: (letter: string) => void;
  onIncorrect: (letter: string) => void;
  disabled: boolean;
  usedLetters: string[];
};

export default function Keyboard({
  word,
  onCorrect,
  onIncorrect,
  disabled,
  usedLetters
}: KeyboardProps) {
  const handleKeyPress = (key: string) => {
    if (disabled || usedLetters.includes(key)) return;

    if (word.includes(key)) {
      onCorrect(key);
    } else {
      onIncorrect(key);
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (KEYS.includes(key)) {
        handleKeyPress(key);
      }
    };

    document.addEventListener('keypress', handler);
    return () => document.removeEventListener('keypress', handler);
  }, [disabled, usedLetters]);

  return (
    <div className="grid grid-cols-9 gap-2 max-w-2xl">
      {KEYS.map(key => {
        const isUsed = usedLetters.includes(key);
        const isCorrect = isUsed && word.includes(key);
        
        return (
          <button
            onClick={() => handleKeyPress(key)}
            className={`w-10 h-10 border-2 border-gray-300 rounded uppercase font-bold text-lg 
              ${isCorrect ? 'bg-green-500 text-white border-green-500' : ''}
              ${isUsed && !isCorrect ? 'bg-red-500 text-white border-red-500 opacity-50' : ''}
              ${!isUsed ? 'hover:bg-gray-200' : ''}
              transition-colors`}
            disabled={disabled || isUsed}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}