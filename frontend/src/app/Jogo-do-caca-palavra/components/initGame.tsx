import { Palavras, NoMatriz } from "@/types/jogoDoCacaPalavra";
import { direcaoPalavra } from "@/constants";
import { CacaPalavras } from "@/Functions/jogoDoCacaPalvra";

type PropsInitJogoDaVelha = {
  palavras: Palavras[];
}

const matriz: NoMatriz[][] = CacaPalavras.geracaoDaMatriz();
const resultado 


export default function InitJogoDaVelha({ palavras }: PropsInitJogoDaVelha){




    const resultado: Palavras[] = construcaoObjPalavra(direcaoPalavra, palavras);
    insercaoMatrix(resultado);
}