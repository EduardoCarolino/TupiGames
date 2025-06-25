import { JogosService } from '@/Service/palavras';
import InitGame from './components/initGame';
import { Palavras } from '@/types/jogoDoCacaPalavra';

export default async function ForcaPage() {

  const palavras: Palavras[] = await JogosService.findAllPalavras()

  return (
    <main>
      <InitGame words={palavras} />
    </main>
  );
}