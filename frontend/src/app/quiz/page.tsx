import Link from "next/link"

export default function JogoDaMemoria(){

    return (
        <div className="w-screen h-screen flex justify-center items-center font-bold">
            <Link href={'/quiz/2'}>
                <div className="cursor-pointer border-emerald-900 border p-[8px] rounded-[10px]">
                    <p className="text-emerald-900 text-2xl">nome quiz</p>
                    <div className="w-full h-[1px] bg-emerald-900"/>
                    <p>- Quiz possue 20 perguntas</p>
                    <p>- Nivel de dificuldade</p>
                    <p>- Tema animais</p>
                </div>
            </Link>
        </div>
    )
}