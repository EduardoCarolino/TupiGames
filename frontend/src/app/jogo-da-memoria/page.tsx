import { JogosService } from "@/Service/palavras";
import JogoDaMemoria from "./jogoDaMemoria";
import { Palavras } from "@/types/jogoDoCacaPalavra";

export default async function JogoDaMemoriaHome(){
    const palavras: Palavras[] = await JogosService.jogoDaMemoria(5)

    return (
        <div>
            <JogoDaMemoria cards={palavras}/>
        </div>
    )
}