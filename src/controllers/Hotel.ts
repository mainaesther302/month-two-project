import { Request, Response, RequestHandler } from 'express';
import { v4 as uuid } from 'uuid';
import { sqlConfig } from '../config/auth';
import mssql from 'mssql';
import { HotelRequest, Hotel } from '../Models/Hotel';
import { DbHelper } from '../DatabaseHelpers';
import { HotelSchema } from '../Helpers/HotelVal';

// *******************************ADD HOTEL****************************
const dbInstance = new DbHelper()
export const AddHotel: RequestHandler = async (req: HotelRequest, res: Response) => {
  try {
    const Id = uuid();
    const { Name,HLocation,StarRating  } = req.body;
    // const pool = await mssql.connect(sqlConfig);

    // await pool.request()
    //   .input('Id', mssql.VarChar, Id)
    //   .input('Name', mssql.VarChar, Name)
    //   .input('HLocation', mssql.VarChar, HLocation)
    //   .input('StarRating', mssql.VarChar, StarRating)
      
    //   .execute('addHotel');
    const { error } = HotelSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message })

        }
        await dbInstance.exec("addHotel", { Id: Id, Name, HLocation,StarRating  })
    res.status(201).json({ message: 'Hotel added successfully' });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
// *******************************GET ALL HOTEL****************************

export const GetHotels: RequestHandler = async (req: HotelRequest, res: Response) => {
  try {
    const hotels = (await dbInstance.exec("getHotels", {})).recordset as Hotel[]
    res.status(200).json(hotels);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// *******************************GET TOUR ****************************
export const  GetHotel:RequestHandler=async (req,res)=>{
    try {
        const Hotel=( await dbInstance.exec("getHotel",{Id:req.params.Id})).recordset[0] as Hotel
        if (Hotel){
            return res.status(200).json(Hotel);
        }
        else{
            return res.status(404).json({message:'Hotel not found'})
        }
        
    } catch (error) {
        return res.status(500).json({message:"Something went wrong "+error });
        
    }

}



// ********************UPDATE HOTEL**********************************
export const UpdateHotel = async (req: Request<{id:string}>, res: Response) => {
  try {
    
    const { error } = HotelSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message })

        }

        const Hotel=( await dbInstance.exec("getHotel",{Id:req.params.id})).recordset[0] as Hotel
        console.log(Hotel);
        
        if (Hotel && Hotel.Id) {
            const { Name, HLocation,StarRating } = req.body
            await dbInstance.exec("updateHotel", { Id: req.params.id, Name, HLocation,StarRating })
            return res.status(200).json({ message: "Hotel updated successfully" })

        }

    
    }
   
  catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
// *******************************DELETE HOTEL****************************

export const DeleteHotel: RequestHandler = async (req: Request, res: Response) => {
    try {
        const Hotel = (await dbInstance.exec("getHotel", { Id: req.params.Id })).recordset[0] as Hotel
        if (Hotel && Hotel.Id) {
            await dbInstance.exec("deleteHotel", { Id: req.params.Id })

            res.status(200).json({ message: 'Hotel deleted successfully' });
        } else {
            res.status(404).json({ message: 'Hotel not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}