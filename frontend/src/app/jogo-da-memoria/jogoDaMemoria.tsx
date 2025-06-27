'use client'

import { Palavras } from "@/types/jogoDoCacaPalavra";
import { useRef, useState } from "react";

type JogoDaMemoriaProps = {
    cards: Palavras[];
}

export default function JogoDaMemoria({ cards }: JogoDaMemoriaProps) {
    const container = useRef<HTMLDivElement>(null);
    const [pontuacao, setPontuacao] = useState<number>(0);
    const [firstCard, setFirstCard] = useState<{element: HTMLElement, id: string} | null>(null);
    const [blockClick, setBlockClick] = useState<boolean>(false);
    const [matchedCards, setMatchedCards] = useState<string[]>([]);
    const [aux, setAux] = useState<number>(0);

    function handleCardClick(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.currentTarget;
        const cardId = target.getAttribute('data-id');
        
        if (!cardId || matchedCards.includes(cardId) || blockClick) return;

        if(aux === 0){
            target.textContent = cards.find(c => c.id_palavra.toString() === cardId)?.palavra || '';
            setAux(1)
        }else{
            target.textContent = cards.find(c => c.id_palavra.toString() === cardId)?.traducao || '';
            setAux(0)
        }

        if (!firstCard) {
            setFirstCard({ element: target, id: cardId });
            return;
        }

        if (firstCard.element === target) return;

        setBlockClick(true);

        if (firstCard.id === cardId) {
            setPontuacao(prev => prev + 1);
            setMatchedCards(prev => [...prev, cardId]);
            setFirstCard(null);
            setBlockClick(false);
        } else {
            setTimeout(() => {
                target.textContent = '';
                firstCard.element.textContent = '';
                setFirstCard(null);
                setBlockClick(false);
            }, 1000);
        }
    }

    const allMatched = matchedCards.length === cards.length/2;

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center font-bold">
            {allMatched ? (
                <>
                <div className="text-4xl mb-8 emerald-900">Você venceu!</div>
                <div className="cursor-pointer emerald-900" onClick={()=>window.location.reload()}>Jogar novamente</div>
                </>
            ) : (
                <>
                    <div className="text-2xl text-emerald-900 mb-8">Pontuação: {pontuacao}/{cards.length/2}</div>
                    <div 
                        className="grid grid-cols-5 gap-4 w-full max-w-4xl mx-auto p-4"
                        ref={container}
                    >
                        {cards.map((card, index) => (
                            <div 
                                key={`${card.id_palavra}-${index}`}
                                className={`bg-emerald-900 aspect-square rounded-[8px] cursor-pointer flex justify-center text-[#f9f9f9] items-center text-xl
                                    ${matchedCards.includes(card.id_palavra.toString()) ? 'opacity-50 pointer-events-none' : ''}
                                    transition-all duration-200 hover:scale-105`}
                                data-id={card.id_palavra}
                                onClick={handleCardClick}
                            >
                                {matchedCards.includes(card.id_palavra.toString()) ? card.palavra : ''}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}