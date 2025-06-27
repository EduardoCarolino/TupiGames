package com.Biopark.TupiGames.Repository;

import com.Biopark.TupiGames.Model.JogosEntity;
import com.Biopark.TupiGames.Model.QuizEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepository extends JpaRepository<QuizEntity, Integer> {
}
