package com.Biopark.TupiGames.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name = "quiz")
public class QuizEntity {

    @Id
    Integer id_quiz;

    @Column(name = "nome_quiz", nullable = false)
    String nome_quiz;

    @Column(name = "nivel_dificuldade", nullable = false)
    String nivel_dificuldade;

    public QuizEntity() {
    }

    public QuizEntity(Integer id_quiz, String nome_quiz, String nivel_dificuldade) {
        this.id_quiz = id_quiz;
        this.nome_quiz = nome_quiz;
        this.nivel_dificuldade = nivel_dificuldade;
    }

    public Integer getId_quiz() {
        return id_quiz;
    }

    public void setId_quiz(Integer id_quiz) {
        this.id_quiz = id_quiz;
    }

    public String getNome_quiz() {
        return nome_quiz;
    }

    public void setNome_quiz(String nome_quiz) {
        this.nome_quiz = nome_quiz;
    }

    public String getNivel_dificuldade() {
        return nivel_dificuldade;
    }

    public void setNivel_dificuldade(String nivel_dificuldade) {
        this.nivel_dificuldade = nivel_dificuldade;
    }
}

