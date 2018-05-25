CREATE TABLE Boards (
    ID serial,
    # ON DELETE CASCADE deletes orphan data
    USER_ID int NOT NULL REFERENCES Users(ID) ON DELETE CASCADE,
    LIST_NAME varchar NOT NULL
);