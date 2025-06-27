package com.Biopark.TupiGames.Controller;

import com.Biopark.TupiGames.Model.PerguntasEntity;
import com.Biopark.TupiGames.Model.QuizEntity;
import com.Biopark.TupiGames.Repository.PerguntasRepository;
import com.Biopark.TupiGames.Repository.QuizRepository;
import com.Biopark.TupiGames.Service.QuizPerguntasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/quiz")
public class QuizPerguntasController {
    @Autowired
    QuizPerguntasService quizPerguntasService;

    @GetMapping("/{id}")
    public List<PerguntasEntity> perguntas(@PathVariable int id){
        return quizPerguntasService.findAllPerguntas(id);
    }

    @GetMapping()
    public List<QuizEntity> quiz(){
        return quizPerguntasService.findAllQuiz();
    }

}
