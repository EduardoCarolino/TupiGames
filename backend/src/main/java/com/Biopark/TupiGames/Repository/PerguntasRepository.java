package com.Biopark.TupiGames.Repository;

import com.Biopark.TupiGames.Model.JogosEntity;
import com.Biopark.TupiGames.Model.PerguntasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PerguntasRepository extends JpaRepository<PerguntasEntity, Integer> {
}
