import { NoMatriz, Palavras } from "@/types/jogoDoCacaPalavra";
import { direcaoPalavra } from "@/constants";

function geracaoDaMatriz(): NoMatriz[][] {
    const matriz: NoMatriz[][] = [];


    const linha: NoMatriz[] = [];
    const aux: NoMatriz = {
        letra: '',
        id: null,
        linhaInicial: 0,
        colunaInicial: 0,
    }
    let init: number = 0;

    for(let i = 19; i !== 0; i--){
        if(init === 0){
            for(let x = 19; x !== 0; x--){
            linha.push(aux);
        }
                            
        init = 1;
        }

        matriz.push(linha)
    }

    return matriz
}

function construcaoObjPalavra(direcaoPalavra: string[], palavras: Palavras[]): Palavras[] {
    const indicePalvrasEscolhidas: Palavras[] = [];
        for (let i = 3; i > 0; i--) {
            const indicePalavra: number = Math.round(Math.random() * 4) + 0;
            const direcao: number = 0; /*Math.round(Math.random() * 1) + 0;*/

            palavras[indicePalavra].tipo = direcaoPalavra[direcao];

            indicePalvrasEscolhidas.push(palavras[indicePalavra]);
        }
    return indicePalvrasEscolhidas
}

function insercaoMatrix(resultado: Palavras[]): NoMatriz[][] {
    resultado.forEach((indice) => {
        if(indice.tipo === direcaoPalavra[0]){
            let coluna: number = Math.round(Math.random() * 19);
            let linha: number = Math.round(Math.random() * 19);

            //valida se a palavra não irá esceder a linha
            if(indice.palavra.length + coluna > 19){
                for(let newColn = indice.palavra.length + coluna; newColn != 19; newColn--){
                    if(newColn === 19){
                        coluna = newColn;
                    }
                }
            }

            //está apto?
            let validLinha: boolean = true;
            // let validColun: Boolean = true;

            for(let linhaApta = linha; linhaApta === linha; linhaApta--){
                for(let i = 19; i !== 0; i--){
                    validLinha = Matrix[linha][i]
                }
            }
            for(let i = 19; valid === false || i !== 0; i--){
                for(let x = 19; x !== 0; x--){
                    Matrix[i][x]
                }
            }
        }
    })
}


export const CacaPalavras = {
    geracaoDaMatriz,
    construcaoObjPalavra,
    insercaoMatrix,
}