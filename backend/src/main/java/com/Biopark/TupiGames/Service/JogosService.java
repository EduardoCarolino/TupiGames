package com.Biopark.TupiGames.Service;

import com.Biopark.TupiGames.DTOs.JogosDTO;
import com.Biopark.TupiGames.Model.JogosEntity;
import com.Biopark.TupiGames.Repository.JogosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class JogosService {
    @Autowired
    JogosRepository jogosRepository;

    public List<JogosEntity> findAllPalavras(){
        return jogosRepository.findAll();
    }

    public List<JogosEntity> findRandom(int num){
        List<JogosEntity> palavras = jogosRepository.findAll();

        if(num == 0 || num > palavras.size()){
            throw new Error("selecione a quantidade de palavras valida! Quantidade de palavras:" + palavras.size());
        }

        Collections.shuffle(palavras);

        return palavras.subList(0, num);
    }

    public List<JogosEntity> jogoMemoria(int num){
        List<JogosEntity> palavras = jogosRepository.findAll();

        Collections.shuffle(palavras);

        List<JogosEntity> palavrasLimited = palavras.subList(0, num);

        Collections.shuffle(palavrasLimited);

        List<JogosEntity> palavrasDuplicada = new ArrayList<>(palavrasLimited);

        Collections.shuffle(palavrasDuplicada);

        palavrasLimited.addAll(palavrasDuplicada);

        return palavrasLimited;
    }

    public String create(JogosDTO jogosdto){
        JogosEntity id_palavra = jogosRepository.findOnePalavraTop();
        JogosEntity palavra = new JogosEntity();

        palavra.setId_palavra(id_palavra.getId_palavra() + 1);
        palavra.setPalavra(jogosdto.getPalavra());
        palavra.setTraducao(jogosdto.getTraducao());
        palavra.setId_imagem(jogosdto.getId_imagem());
        palavra.setDica_palavra(jogosdto.getDica_palavra());

        jogosRepository.save(palavra);

        return "Entiti salva";
    }

    public String delete(int id){
        jogosRepository.deleteById(id);

        return "delete com sucesso";
    }

    public JogosEntity update(JogosDTO jogosdto, int id){
        Optional<JogosEntity> id_palavra = jogosRepository.findById(id);
        JogosEntity palavra = new JogosEntity();

        if(id_palavra.isEmpty()){
            throw new Error("Palavra não encontrada");
        }

        JogosEntity id_palavra_conf = id_palavra.get();

        palavra.setId_palavra(id_palavra_conf.getId_palavra());
        palavra.setPalavra(jogosdto.getPalavra());
        palavra.setTraducao(jogosdto.getTraducao());
        palavra.setId_imagem(jogosdto.getId_imagem());
        palavra.setDica_palavra(jogosdto.getDica_palavra());

        return jogosRepository.save(palavra);
    }
}
