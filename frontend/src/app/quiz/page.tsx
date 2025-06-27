import Link from "next/link"

export default function JogoDaMemoria(){

    return (
        <div className="w-screen h-screen flex justify-center items-center font-bold">
            <Link href={'/quiz/2'}>
                <div className="cursor-pointer border-emerald-900 border p-[8px] rounded-[10px] bg-[#f9f9f9]">
                    <p className="text-emerald-900 text-2xl text-center p-[2px]">Novo Quiz</p>
                    <div className="bg-white p-[5px] border border-emerald-900 rounded-[10px]">
                        <p className="text-emerald-900">- Esse quiz possue 5 perguntas</p>
                        <p className="text-emerald-900">- Nivel de dificuldade: Fácil</p>
                        <p className="text-emerald-900">- Tema Animais</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}