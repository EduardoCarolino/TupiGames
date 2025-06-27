import Jogos from "@/components/Jogos";
import { JogosService } from "@/Service/palavras";

export default async function Home() {

  const palavras = await JogosService.findAllPalavras()

  const palavrasRandom = await JogosService.findPalavrasRandomLimit(4)

  console.log(palavras, palavrasRandom)



  type Jogos = {
    nome: string;
    caminho: string;
    imagem: string;
}[];

const jogos: Jogos = [
    {
        nome: 'Jogo da Forca',
        caminho: '/jogo-da-forca',
        imagem: '/jogoDaForca.png'
    },
    {
        nome: 'Jogo da Memoria',
        caminho: '/jogo-da-memoria',
        imagem: '/77fb25a8f9ce07cce068bbfdbefce8f3bf319257 (1).png'
    },
    {
        nome: 'Jogo da associação',
        caminho: '/quiz',
        imagem: '/quiz.png'
    }
]

  return (
    <div>
      <div>
        <Jogos jogos={jogos} />
      </div>
    </div>
  );
}
