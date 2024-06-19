
CREATE OR ALTER PROCEDURE updateHotel(@Id VARCHAR(255), @Name VARCHAR(255),@HLocation VARCHAR(255) ,@StarRating VARCHAR(255))
AS
BEGIN
   UPDATE HotelTable SET Id=@Id, Name= @Name,@HLocation=HLocation,@StarRating=StarRating
   WHERE Id=@Id
END