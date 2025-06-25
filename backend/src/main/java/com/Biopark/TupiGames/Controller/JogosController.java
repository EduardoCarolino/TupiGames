package com.Biopark.TupiGames.Controller;

import com.Biopark.TupiGames.DTOs.JogosDTO;
import com.Biopark.TupiGames.Model.JogosEntity;
import com.Biopark.TupiGames.Service.JogosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jogos")
public class JogosController {

    @Autowired
    JogosService jogosService;

    @GetMapping("/palavras")
    public List<JogosEntity> palavras(){
        return jogosService.findAllPalavras();
    }

    @GetMapping("/palavrasRandomLimit/{num}")
    public List<JogosEntity> palavrasRandomLimit(@PathVariable int num){
        return jogosService.findRandom(num);
    }

    @PostMapping("/palavras")
    public String createPalavra(@RequestBody JogosDTO jogosDTO){
        return jogosService.create(jogosDTO);
    }

    @GetMapping("/jogoDaMemoria/{num}")
    public List<JogosEntity> jogoDaMemoria(@PathVariable int num){
        return jogosService.jogoMemoria(num);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        return jogosService.delete(id);
    }

    @PutMapping("/{id}")
    public JogosEntity update(@RequestBody JogosDTO jogosDTO, @PathVariable int id){
        return jogosService.update(jogosDTO, id);
    }
}
