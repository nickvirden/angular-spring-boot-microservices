package com.example.notesapi.controllers;

import com.example.notesapi.models.Note;
import com.example.notesapi.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class NotesApiController {

    @Autowired
    private NoteRepository noteRepository;

    @GetMapping("/")
    public Iterable<Note> findAllBoards() {
        return noteRepository.findAll();
    }

    @PostMapping("/")
    public Note createNewNote(@RequestBody Note newNote) {
        return noteRepository.save(newNote);
    }

    @DeleteMapping("/{boardId}")
    public HttpStatus deleteBoardById(@PathVariable Long userId) {
        noteRepository.delete(userId);
        return HttpStatus.OK;
    }
}