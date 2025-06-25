import Link from "next/link"
import Image from "next/image"

type Jogos = {
    nome: string;
    caminho: string;
    imagem: string;
};

type JogosProps = {
    jogos: Jogos[]
};

export default function Jogos(jogo: JogosProps) {
    console.log(jogo)

    return (
    <div className="gap-[20px] flex justify-center py-[20px] px-[40px]">
        {jogo.jogos.map((value)=>{

        return (
            <Link href={value.caminho} key={value.nome}>
                <div className="shadow-md w-[300px] h-[250px]">
                    <Image
                        src={value.imagem}
                        alt={value.nome}
                        width={300}
                        height={250}
                        className="object-cover w-[300px] h-[250px] rounded-[10px]"
                    />
                </div>
            </Link>
        )
        })}
    </div>
    )
}