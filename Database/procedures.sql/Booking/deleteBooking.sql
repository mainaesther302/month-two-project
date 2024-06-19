CREATE OR ALTER PROCEDURE deleteBooking(
    @Id VARCHAR(255),
     @UserId VARCHAR(255),
     @TourId VARCHAR(255) ,
     @HotelId VARCHAR(255),
     @BStartDate VARCHAR(255),
     @BEndDate VARCHAR(255) ,
     @BookingDate VARCHAR(255),
     @BGuest INT,
     @BStatus VARCHAR(255)

     )
AS
BEGIN
   DELETE FROM  bookingTable
   WHERE Id=@Id
END;