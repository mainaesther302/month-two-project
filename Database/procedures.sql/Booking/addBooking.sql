CREATE OR ALTER PROCEDURE addBooking(
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
    INSERT INTO bookingTable (Id,UserId,TourId,HotelId,BStartDate,BEndDate,BookingDate,BGuest,BStatus) 
    VALUES (@Id,@UserId,@TourId,@HotelId,@BStartDate,@BEndDate,@BookingDate,@BGuest,@BStatus )
END;