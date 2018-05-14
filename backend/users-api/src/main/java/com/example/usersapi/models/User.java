package com.example.usersapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @ForeignKey
    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "BOARD_NAME")
    private String boardName;

    @Column(name = "DESCRIPTION")
    private String boardDescription;
}