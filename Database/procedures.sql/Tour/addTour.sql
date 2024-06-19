CREATE OR ALTER PROCEDURE addTour(@Id VARCHAR(255), @Name VARCHAR(255), @Tdestination VARCHAR(255),@Tdescription VARCHAR(255), @Tprice INT)
AS
BEGIN
    INSERT INTO TourTables (Id, Name,Tdestination, Tdescription, Tprice) 
    VALUES (@Id, @Name, @Tdestination, @Tdescription, @Tprice)
END;