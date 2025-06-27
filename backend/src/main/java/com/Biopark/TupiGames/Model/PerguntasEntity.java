package com.Biopark.TupiGames.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "perguntas")
public class PerguntasEntity {

    @Id
    Integer id_pergunta;

    @Column(name = "pergunta", nullable = false)
    String pergunta;

    @Column(name = "alternativa_a", nullable = false)
    String alternativa_a;

    @Column(name = "alternativa_b", nullable = false)
    String alternativa_b;

    @Column(name = "alternativa_c", nullable = false)
    String alternativa_c;

    @Column(name = "alternativa_d", nullable = false)
    String alternativa_d;

    @Column(name = "resposta_certa", nullable = false)
    String resposta_certa;

    @Column(name = "id_quiz", nullable = false)
    int id_quiz;

    public PerguntasEntity() {
    }

    public PerguntasEntity(Integer id_pergunta, String pergunta, String alternativa_a, String alternativa_b, String alternativa_c, String alternativa_d, String resposta_certa, int id_quiz) {
        this.id_pergunta = id_pergunta;
        this.pergunta = pergunta;
        this.alternativa_a = alternativa_a;
        this.alternativa_b = alternativa_b;
        this.alternativa_c = alternativa_c;
        this.alternativa_d = alternativa_d;
        this.resposta_certa = resposta_certa;
        this.id_quiz = id_quiz;
    }

    public Integer getId_pergunta() {
        return id_pergunta;
    }

    public void setId_pergunta(Integer id_pergunta) {
        this.id_pergunta = id_pergunta;
    }

    public String getPergunta() {
        return pergunta;
    }

    public void setPergunta(String pergunta) {
        this.pergunta = pergunta;
    }

    public String getAlternativa_a() {
        return alternativa_a;
    }

    public void setAlternativa_a(String alternativa_a) {
        this.alternativa_a = alternativa_a;
    }

    public String getAlternativa_b() {
        return alternativa_b;
    }

    public void setAlternativa_b(String alternativa_b) {
        this.alternativa_b = alternativa_b;
    }

    public String getAlternativa_c() {
        return alternativa_c;
    }

    public void setAlternativa_c(String alternativa_c) {
        this.alternativa_c = alternativa_c;
    }

    public String getAlternativa_d() {
        return alternativa_d;
    }

    public void setAlternativa_d(String alternativa_d) {
        this.alternativa_d = alternativa_d;
    }

    public String getResposta_certa() {
        return resposta_certa;
    }

    public void setResposta_certa(String resposta_certa) {
        this.resposta_certa = resposta_certa;
    }

    public int getId_quiz() {
        return id_quiz;
    }

    public void setId_quiz(int id_quiz) {
        this.id_quiz = id_quiz;
    }
}
