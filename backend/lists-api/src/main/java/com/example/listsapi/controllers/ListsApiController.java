package com.example.boardsapi.controllers;

import com.example.boardsapi.models.List;
import com.example.boardsapi.repositories.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class ListsApiController {

    @Autowired
    private ListRepository listRepository;

    @GetMapping("/")
    public Iterable<List> findAllBoards() {
        return listRepository.findAll();
    }

    @PostMapping("/")
    public List createNewList(@RequestBody List newList) {
        return listRepository.save(newList);
    }

    @DeleteMapping("/{listId}")
    public HttpStatus deleteListById(@PathVariable Long listId) {
        listRepository.delete(listId);
        return HttpStatus.OK;
    }
}