CREATE TABLE Boards (
    ID serial,
    USER_ID int NOT NULL REFERENCES Users(ID),
    LIST_NAME varchar NOT NULL
);