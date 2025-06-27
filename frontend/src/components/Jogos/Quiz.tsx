'use client';

import { useState } from 'react';
import { PerguntaQuiz } from '../../types/perguntas';
import Link from 'next/link';

interface QuizProps {
  perguntas: PerguntaQuiz[];
}

export const Quiz = ({ perguntas }: QuizProps) => {
  const [indicePerguntaAtual, setIndicePerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizConcluido, setQuizConcluido] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);

  const perguntaAtual = perguntas[indicePerguntaAtual];

  const lidarComSelecaoResposta = (chaveResposta: string) => {
    setRespostaSelecionada(chaveResposta);
    
    if (perguntaAtual[`alternativa_${chaveResposta}` as keyof PerguntaQuiz] === perguntaAtual.resposta_certa) {
      setPontuacao(pontuacao + 1);
    }

    setTimeout(() => {
      if (indicePerguntaAtual < perguntas.length - 1) {
        setIndicePerguntaAtual(indicePerguntaAtual + 1);
        setRespostaSelecionada(null);
      } else {
        setQuizConcluido(true);
      }
    }, 1000);
  };

  if (quizConcluido) {
    return (
      <div className="quiz-concluido">
        <h2>Quiz Concluído!</h2>
        <p>Sua pontuação final: {pontuacao}/{perguntas.length}</p>
        <Link href={'/quiz'}>
        <p className='border border-emerald-900 rounded-[10px] cursor-pointer'>Voltar para seleção de Quiz</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-quiz">
      <h2>Pergunta {indicePerguntaAtual + 1} de {perguntas.length}</h2>
      <p className="texto-pergunta">{perguntaAtual.pergunta}</p>
      
      <div className="opcoes">
        {(['a', 'b', 'c', 'd'] as const).map((opcao) => {
          const estaCorreta = perguntaAtual[`alternativa_${opcao}`] === perguntaAtual.resposta_certa;
          let classeCSS = "opcao";
          
          if (respostaSelecionada) {
            if (opcao === respostaSelecionada) {
              classeCSS += estaCorreta ? " correta" : " incorreta";
            } else if (estaCorreta) {
              classeCSS += " correta";
            }
          }
          
          return (
            <button
              key={opcao}
              className={classeCSS}
              onClick={() => !respostaSelecionada && lidarComSelecaoResposta(opcao)}
              disabled={!!respostaSelecionada}
            >
              {perguntaAtual[`alternativa_${opcao}`]}
            </button>
          );
        })}
      </div>
    </div>
  );
};