const express = require('express')
//  get the data in postman body
const bodyParser = require("body-parser")

// assign the express function to app variable
const app = express()

// setting the port 
const PORT = 3000;

//  this object array for creating a new room 
const createRooms = [{
    id:1,
    roomType:"Executive suite" ,
    amenities : "Air conditioning,Bathrobes,Coffeemaker",
    price : 500
},{
    id:2,
    roomType :"Standard suite rooms" ,
    amenities : "Air conditioning,Bathrobes,Coffeemaker,Kitchen",
    price : 650
},
{
    id:3,
    roomType :"Double double room in hotel" ,
    amenities : "Air conditioning,Bathrobes,Coffeemaker,Swimming pool,Kitchen",
    price : 1000
},{
    id:4,
    roomType :"Executive suite" ,
    amenities : "Air conditioning,Bathrobes,Coffeemaker",
    price : 500
}]

//  this object array is for creating a new customer details
const bookingDetails = [{
    id : 1,
    name: "jony",
    date : "10/12/2022",
    startTime : "11:00",
    endTime : "12:00",
    BookingID: "328389",
    BookingDate: "09/11/2022",
    BookingStatus: "Confirmed",
    roomId: 1

},{
    id : 2,
    name: "subramani",
    date : "10/09/2022",
    startTime : "10:00",
    endTime : "13:00",
    BookingID: "789012",
    BookingDate: "01/07/2022",
    BookingStatus: "Confirmed",
    roomId: 3

},{
    id : 3,
    name: "jackson",
    date : "10/11/2022",
    startTime : "09:00",
    endTime : "14:00",
    BookingID: "3728283",
    BookingDate: "12/05/2022",
    BookingStatus: "Confirmed",
    roomId: 2

}]



// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

//  this is create a new details in body from psotman  by using post api
app.post('/createRooms', (req, res) => {
    const newRoom = req.body;
    if (!newRoom.id || !newRoom.roomType || !newRoom.amenities || !newRoom.price) {
        return res.status(401).send("all Details are mandatory");
    }
    createRooms.push(newRoom);
    res.status(201).send("new room is created");
});

//  this is create a new customer details in body from psotman  by using post api
app.post('/newCustomer', (req, res) => {
    const newCustomer = req.body;

    // Check if the room is already booked for the same date and time
    const isRoomAlreadyBooked = bookingDetails.some(existingBooking =>
        existingBooking.roomId === newCustomer.roomId &&
        existingBooking.date === newCustomer.date &&
        existingBooking.startTime === newCustomer.startTime &&
        existingBooking.endTime === newCustomer.endTime
    );

    // Define a list of required fields
    const requiredFields = ["id", "name", "date", "startTime", "endTime", "roomId"];

    // Check if all required fields are provided
    const missingFields = requiredFields.filter(field => !(field in newCustomer));

    // If any required fields are missing or the room is already booked, return an error
    if (missingFields.length > 0 || isRoomAlreadyBooked) {
        let errorMessage = "All fields are required.";
        if (isRoomAlreadyBooked) {
            errorMessage += " This room is already booked for the same date and time.";
        }
        return res.status(400).send(errorMessage);
    }

    // If all checks pass, add the new customer
    bookingDetails.push(newCustomer);
    res.status(201).send("New customer is added.");
});



//  display all rooms , its same procedure for the customer
app.get('/displaRooms',(req,res) => {
    res.json( createRooms)
})


// List all Rooms with Booked Data with


app.get('/roomList', (req, res) => {
    const roomListWithBookings = createRooms.map(room => {
        const bookingsForRoom = bookingDetails.filter(booking => booking.roomId === room.id &&  booking. BookingStatus === "Confirmed");
        return {
            RoomName: room.roomType,
            BookedStatus: bookingsForRoom.length > 0 ? "booked" : "not booked",
            CustomerName: bookingsForRoom.length > 0 ? bookingsForRoom[0].name : "N/A",
            Date: bookingsForRoom.length > 0 ? bookingsForRoom[0].date : "N/A",
            StartTime: bookingsForRoom.length > 0 ? bookingsForRoom[0].startTime : "N/A",
            EndTime: bookingsForRoom.length > 0 ? bookingsForRoom[0].endTime : "N/A"
        };
    });

    res.json(roomListWithBookings);
});

// List all customers with booked Data with

app.get('/customerList', (rq,res) => {
    
    const customerList = bookingDetails.map(cusRoom  => {
        
        const listCustomerWithBooked = createRooms.filter(room => room.id ===  cusRoom.roomId )
        return {
            Customer_name :cusRoom.name ,
            Room_Name : listCustomerWithBooked.length>0 ? listCustomerWithBooked[0].roomType : "N/A",
            date   : cusRoom.date,
            Start_Time : cusRoom.startTime,
            End_Time : cusRoom.endTime

        }
    })

    res.json(customerList)
})

// List how many times a customer has booked the room with below details
app.get('/totalOfRoomBook' , (req,res) => {
    
    const totalBookingByEachCustomer = bookingDetails.map(cusRoom  => {
        
        const listCustomerWithBooked = createRooms.filter(room => room.id ===  cusRoom.roomId )
        return {
            Customer_name :cusRoom.name ,
            Room_Name : listCustomerWithBooked.length>0 ? listCustomerWithBooked[0].roomType : "N/A",
            date   : cusRoom.date,
            Start_Time : cusRoom.startTime,
            End_Time : cusRoom.endTime,
            Booking_id : cusRoom.BookingID,
           Booking_date : cusRoom.BookingDate,
          Booking_status : cusRoom.BookingStatus
        }
    })

    res.json(totalBookingByEachCustomer)
})



//  this listen method helps to run the api in the port

app.listen(PORT, (params) => {
    console.log("Server is running in", PORT);
})




// app.post('/newCustomer', (req, res) => {
//     const newCustomer = req.body;
    
//     const checkIfRoomAlreadyBooked =  bookingDetails.some(check => 
//         check.roomId =  bookingDetails.roomId &&
//         check.date ===  bookingDetails.date &&
//         check.startTime ===  bookingDetails.startTime &&
//         check.endTime ===  bookingDetails.endTime

//         )
//     if (!newCustomer.id || !newCustomer.name || !newCustomer.date || !newCustomer.startTime || !newCustomer.endTime || !newCustomer.roomId || !newCustomer.BookedStatus || !newCustomer.BookingDate || !newCustomer.BookingID)  {
//        if(checkIfRoomAlreadyBooked){
//         return res.status(401).send("this room is already booked"); 
//         }
//     }

//     bookingDetails.push(newCustomer);
//     res.status(201).send("new customer is added");
// });