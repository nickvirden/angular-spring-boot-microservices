package com.example.boardsapi.repositories;

import com.example.boardsapi.models.List;
import org.springframework.data.repository.CrudRepository;

public interface ListRepository extends CrudRepository<List, Long> {

}