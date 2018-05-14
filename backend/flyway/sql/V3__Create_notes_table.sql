CREATE TABLE Notes (
    ID serial,
    LIST_ID int NOT NULL REFERENCES List(ID),
    NOTE_NAME varchar NOT NULL,
    DESCRIPTION varchar NOT NULL
);