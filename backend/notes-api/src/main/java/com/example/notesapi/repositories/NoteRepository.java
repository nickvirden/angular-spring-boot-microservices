package com.example.notesapi.repositories;

import com.example.notesapi.models.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, Long> {

}