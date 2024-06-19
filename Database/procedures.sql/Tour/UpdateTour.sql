
CREATE OR ALTER PROCEDURE updateTour(@Id VARCHAR(255),@Name VARCHAR(255), @Tdestination VARCHAR(255),@Tdescription VARCHAR(255), @Tprice INT)
AS
BEGIN
   UPDATE TourTables SET Id=@Id, Name = @Name, @Tdestination=Tdestination, @Tdescription=Tdescription, @Tprice=Tprice
   WHERE Id=@Id
END