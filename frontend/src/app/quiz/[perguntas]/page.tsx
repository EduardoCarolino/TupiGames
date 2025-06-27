'use client'

import { Quiz } from "@/components/Jogos/Quiz";
import { PerguntaQuiz } from '@/types/perguntas';

const perguntas: PerguntaQuiz[] = [
  {
    pergunta: "Como se escreve onça em tupi?",
    alternativa_a: "pira",
    alternativa_b: "jaguarete",
    alternativa_c: "guasu",
    alternativa_d: "maino",
    resposta_certa: "jaguarete",
    quiz: 2
  },
  {
    pergunta: "Como se escreve peixe em tupi?",
    alternativa_a: "tatú",
    alternativa_b: "maino",
    alternativa_c: "pira",
    alternativa_d: "jaguarete",
    resposta_certa: "pira",
    quiz: 2
  },
  {
    pergunta: "Como se escreve veado em tupi?",
    alternativa_a: "guasu",
    alternativa_b: "tatú",
    alternativa_c: "maino",
    alternativa_d: "pira",
    resposta_certa: "guasu",
    quiz: 2
  },
  {
    pergunta: "Como se escreve tatu em tupi?",
    alternativa_a: "jaguarete",
    alternativa_b: "pira",
    alternativa_c: "tatú",
    alternativa_d: "maino",
    resposta_certa: "tatú",
    quiz: 2
  },
  {
    pergunta: "Como se escreve macaco em tupi?",
    alternativa_a: "maino",
    alternativa_b: "jaguarete",
    alternativa_c: "guasu",
    alternativa_d: "tatú",
    resposta_certa: "maino",
    quiz: 2
  },
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