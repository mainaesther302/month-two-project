
USE TOURSYSTEM;
GO

CREATE OR ALTER PROCEDURE getTourTest(@Id VARCHAR(255))
AS
BEGIN
    SELECT *
    FROM TourTables
    WHERE Id = @Id;
END