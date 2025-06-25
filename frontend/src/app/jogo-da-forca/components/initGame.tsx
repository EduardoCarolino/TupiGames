'use client';

import React, { useState, useEffect, useCallback } from 'react';
import ForcaDisplay from './forcaDisplay';
import Keyboard from './keyboard';
import { Palavras } from '@/types/jogoDoCacaPalavra';

type InitGameProps = {
  words: Palavras[];
};

export default function InitGame({ words }: InitGameProps) {
  const [selectedWord, setSelectedWord] = useState<Palavras | null>(null);
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [errors, setErrors] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const selectRandomWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }, [words]);

  const startNewGame = useCallback(() => {
    setSelectedWord(selectRandomWord());
    setUsedLetters([]);
    setErrors(0);
    setGameOver(false);
    setGameWon(false);
    setShowHint(false);
  }, [selectRandomWord]);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  useEffect(() => {
    if (!selectedWord) return;

    if (errors >= 6) {
      setGameOver(true);
      return;
    }

    const uniqueLetters = Array.from(new Set(selectedWord.palavra.split('')));
    const hasWon = uniqueLetters.every(l => usedLetters.includes(l));
    if (hasWon) {
      setGameWon(true);
    }
  }, [errors, usedLetters, selectedWord]);

  const handleCorrectLetter = (letter: string) => {
    setUsedLetters(prev => [...prev, letter]);
  };

  const handleIncorrectLetter = (letter: string) => {
    setUsedLetters(prev => [...prev, letter]);
    setErrors(prev => prev + 1);
  };

  if (!selectedWord) return <div>Carregando...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Jogo da Forca</h1>
      
      <ForcaDisplay
        errors={errors}
        wordLength={selectedWord.palavra.length}
        correctLetters={usedLetters.filter(l => selectedWord.palavra.includes(l))}
        gameOver={gameOver}
        gameWon={gameWon}
        word={selectedWord.palavra}
        translation={selectedWord.traducao}
        hint={selectedWord.dica_palavra}
      />
      
      <Keyboard
        word={selectedWord.palavra}
        onCorrect={handleCorrectLetter}
        onIncorrect={handleIncorrectLetter}
        disabled={gameOver || gameWon}
        usedLetters={usedLetters}
      />
      
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setShowHint(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={showHint || gameOver || gameWon}
        >
          Mostrar Dica
        </button>
        
        <button
          onClick={startNewGame}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Novo Jogo
        </button>
      </div>
      
      {showHint && (
        <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-200 max-w-md text-center">
          <p className="font-bold text-yellow-800">Dica:</p>
          <p>{selectedWord.dica_palavra}</p>
        </div>
      )}
    </div>
  );
}