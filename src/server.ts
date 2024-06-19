
import express, {json} from 'express';
import authRoutes from './Routes/auth';
import bookingRouter from './Routes/booking'
import hotelRouter from './Routes/Hotel';

import tourRouter from './Routes/Tour';


// import { join } from 'path/posix';


const app = express();
app.use(json())

app.use("/auth", authRoutes) 
app.use('/booking', bookingRouter)
app.use('/Tour', tourRouter)

app.use('/Hotel', hotelRouter)

app.listen(5500, () => {
    console.log('server is running ')
})