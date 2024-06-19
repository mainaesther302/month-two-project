CREATE TABLE TourTables(
    Id VARCHAR(255) PRIMARY KEY,
    Name VARCHAR(255)  NOT NULL,
    Tdestination VARCHAR(255)   NOT NULL,
    Tdescription VARCHAR(255)   NOT NULL,
    Tprice INT   NOT NULL,
    IsDeleted INT DEFAULT 0,
)