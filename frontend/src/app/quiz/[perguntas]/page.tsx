'use client'

import { Quiz } from "@/components/Jogos/Quiz";
import { PerguntaQuiz } from '@/types/perguntas';

const perguntas: PerguntaQuiz[] = [
  {
    pergunta: "o que significa cheiroso?",
    alternativa_a: "uma parte do corpo.",
    alternativa_b: "uma comida.",
    alternativa_c: "uma vestimenta.",
    alternativa_d: "uma pessoa com odor agradavel.",
    resposta_certa: "uma pessoa com odor agradavel.",
    quiz: 2
  },
  {
    pergunta: "o que é um carro?",
    alternativa_a: "um meio de transporte.",
    alternativa_b: "um jogo.",
    alternativa_c: "um teste.",
    alternativa_d: "um programa de tv.",
    resposta_certa: "um meio de transporte.",
    quiz: 2
  },
  {
    pergunta: "o que é um carro?",
    alternativa_a: "um meio de transporte.",
    alternativa_b: "um jogo.",
    alternativa_c: "um teste.",
    alternativa_d: "um programa de tv.",
    resposta_certa: "um meio de transporte.",
    quiz: 2
  }
];

export default function PaginaQuiz() {
  return (
    <div className="container-pagina">
      <h1>Jogo de Quiz</h1>
      <Quiz perguntas={perguntas} />
      
      <style jsx>{`
        .container-pagina {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
      `}</style>
      
      <style jsx global>{`
        .container-quiz {
          margin-top: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        
        .texto-pergunta {
          font-size: 1.2em;
          margin-bottom: 20px;
        }
        
        .opcoes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        
        .opcao {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          background-color: white;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .opcao:hover {
          background-color: #f0f0f0;
        }
        
        .opcao:disabled {
          cursor: not-allowed;
        }
        
        .correta {
          background-color: #4caf50;
          color: white;
        }
        
        .incorreta {
          background-color: #f44336;
          color: white;
        }
        
        .quiz-concluido {
          margin-top: 20px;
          padding: 20px;
          border: 1px solid #4caf50;
          border-radius: 8px;
          background-color: #e8f5e9;
        }
      `}</style>
    </div>
  );
}