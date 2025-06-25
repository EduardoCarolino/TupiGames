package com.Biopark.TupiGames.DTOs;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

public class JogosDTO {
    String palavra;
    String traducao;
    String id_imagem;
    String dica_palavra;

    public JogosDTO(){

    }

    public JogosDTO(String dica_palavra, String id_imagem, String traducao, String palavra) {
        this.dica_palavra = dica_palavra;
        this.id_imagem = id_imagem;
        this.traducao = traducao;
        this.palavra = palavra;
    }

    public String getPalavra() {
        return palavra;
    }

    public void setPalavra(String palavra) {
        this.palavra = palavra;
    }

    public String getTraducao() {
        return traducao;
    }

    public void setTraducao(String traducao) {
        this.traducao = traducao;
    }

    public String getId_imagem() {
        return id_imagem;
    }

    public void setId_imagem(String id_imagem) {
        this.id_imagem = id_imagem;
    }

    public String getDica_palavra() {
        return dica_palavra;
    }

    public void setDica_palavra(String dica_palavra) {
        this.dica_palavra = dica_palavra;
    }
}
