package com.Biopark.TupiGames.Model;

import com.Biopark.TupiGames.Service.JogosService;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "jogos")
public class JogosEntity {

    @Id
    Integer id_palavra;

    @Column(name = "palavra", nullable = false)
    String palavra;

    @Column(name = "traducao", nullable = false)
    String traducao;

    @Column(name = "id_imagem")
    String id_imagem;

    @Column(name = "dica_palavra")
    String dica_palavra;

    public JogosEntity(){
        
    }

    public JogosEntity(String dica_palavra, String id_imagem, String traducao, String palavra, Integer id_palavra) {
        this.dica_palavra = dica_palavra;
        this.id_imagem = id_imagem;
        this.traducao = traducao;
        this.palavra = palavra;
        this.id_palavra = id_palavra;
    }

    public Integer getId_palavra() {
        return id_palavra;
    }

    public void setId_palavra(Integer id_palavra) {
        this.id_palavra = id_palavra;
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
