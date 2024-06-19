CREATE OR ALTER PROCEDURE updateBooking(
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
   UPDATE bookingTable SET  UserId= @UserId,TourId=@TourId,HotelId=@HotelId,BStartDate=@BStartDate,BEndDate=@BEndDate,BookingDate=@BookingDate,BGuest=@BGuest,BStatus=@BStatus
   WHERE Id=@Id
END