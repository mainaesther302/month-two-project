CREATE OR ALTER PROCEDURE deleteTour(@Id VARCHAR(255), @Name VARCHAR(255),@Tdestiation VARCHAR(255), @Tdescription VARCHAR(255), @Tprice INT)
AS
BEGIN
   DELETE FROM  TourTables
   WHERE Id=@Id
END;