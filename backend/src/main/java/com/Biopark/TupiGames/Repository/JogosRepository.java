package com.Biopark.TupiGames.Repository;

import com.Biopark.TupiGames.Model.JogosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface JogosRepository extends JpaRepository<JogosEntity, Integer> {
    @Query("SELECT j FROM jogos j ORDER BY j.id_palavra DESC LIMIT 1")
    JogosEntity findOnePalavraTop();
}
