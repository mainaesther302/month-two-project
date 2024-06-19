CREATE OR ALTER PROCEDURE addHotel(@Id VARCHAR(255), @Name VARCHAR(255),@HLocation VARCHAR(255) ,@StarRating VARCHAR(255))
AS
BEGIN
    INSERT INTO HotelTable (Id, Name,HLocation,StarRating) 
    VALUES (@Id, @Name,@HLocation ,@StarRating )
END;