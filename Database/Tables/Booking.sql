CREATE TABLE bookingTable
(
    Id VARCHAR (255) PRIMARY KEY NOT NULL,
    UserId VARCHAR (255) NOT NULL,
    TourId VARCHAR (255) NOT NULL,
    HotelId VARCHAR (255) NOT NULL,
    BStartDate VARCHAR (255) NOT NULL,
    BEndDate VARCHAR (255) NOT NULL,
    BookingDate VARCHAR (255) NOT NULL,
    BGuest INT (255) NOT NULL,
    BStatus VARCHAR (255) NOT NULL,
    BEmailSent INT DEFAULT 0,
    isDeleted INT DEFAULT 0,
    FOREIGN KEY (UserId) REFERENCES userTable(Id),
    FOREIGN KEY (TourId) REFERENCES tourTable(Id),
    FOREIGN KEY (HotelId) REFERENCES hotelTable(Id)
)

