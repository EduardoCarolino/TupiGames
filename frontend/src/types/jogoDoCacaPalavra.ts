export type Palavras = {
  id_palavra: number;
  palavra: string;
  traducao: string;
  id_imagem: string;
  dica_palavra: string;
}

export type NoMatriz = {
  letra: string;
  id: string | null;
  linhaInicial: number;
  colunaInicial: number;
}

