package com.Biopark.TupiGames.Service;

import com.Biopark.TupiGames.Model.PerguntasEntity;
import com.Biopark.TupiGames.Model.QuizEntity;
import com.Biopark.TupiGames.Repository.PerguntasRepository;
import com.Biopark.TupiGames.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuizPerguntasService {
    @Autowired
    QuizRepository quizRepository;
    @Autowired
    PerguntasRepository perguntasRepository;

    public List<PerguntasEntity> findAllPerguntas(int id){
        List<PerguntasEntity> perguntas = perguntasRepository.findAll();

        return perguntas.stream().filter(item -> item.getId_quiz() == id).collect(Collectors.toList());
    }

    public List<QuizEntity> findAllQuiz(){
        return quizRepository.findAll();
    }
}
