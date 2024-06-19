import { Request, Response, RequestHandler } from 'express';
import { v4 as uuid } from 'uuid';
import { sqlConfig } from '../config/auth';
import mssql from 'mssql';
import { TourRequest, Tour } from '../Models/Tour';
import { DbHelper } from '../DatabaseHelpers';
import { TourSchema } from '../Helpers/TourVal';
import { log } from 'console';

// *******************************ADD TOUR****************************

const dbInstance = new DbHelper()
export const AddTour: RequestHandler = async (req: TourRequest, res: Response) => {
    try {
        const Id = uuid();
        const { Name, Tdestination, Tdescription, Tprice } = req.body;
        // const pool = await mssql.connect(sqlConfig);

        // await pool.request()
        //   .input('Id', mssql.VarChar, Id)
        //   .input('Name', mssql.VarChar, Name)
        //   .input('Tdestination', mssql.VarChar, Tdestination)
        //   .input('Tdescription', mssql.VarChar, Tdescription)
        //   .input('Tprice', mssql.VarChar, Tprice)

        //   .execute('addTour');
        const { error } = TourSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message })

        }
        await dbInstance.exec("addTour", { Id: Id, Name, Tdestination, Tdescription, Tprice })

        res.status(201).json({ message: 'Tour added successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
// *******************************GET ALL TOURS****************************

export const GetTours: RequestHandler = async (req: TourRequest, res: Response) => {
    try {
        // const pool = await mssql.connect(sqlConfig);
        // const result = await pool.request().execute('getTours');
        // const tours = result.recordset as Tour[];
        const tours = (await dbInstance.exec("getTours", {})).recordset as Tour[]
        res.status(200).json(tours);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// *******************************GET TOUR ****************************
export const  GetTour:RequestHandler=async (req,res)=>{

    
    try {
        const tour=( await dbInstance.exec("getTour",{Id:req.params.Id})).recordset[0] as Tour
        if (tour){
            return res.status(200).json(tour);
        }
        else{
            return res.status(404).json({message:'Tour not found'})
        }
        
    } catch (error) {
        return res.status(500).json({message:"Something went wrong "+error });
        
    }

}




// ********************UPDATE TOUR**********************************
export const UpdateTour = async (req: Request<{Id:string}>, res: Response) => {
    console.log("Called UpdateTour")

    try {

        //const { id } = req.params.Id;
        // const { Name,Tdestination, Tdescription, Tprice  } = req.body;
        // const pool = await mssql.connect(sqlConfig);

        // const result = await pool.request()
        //   .input('Id', mssql.VarChar, id)
        //   .execute('getTourById');

        // const tour = result.recordset[0] as Tour;
        const { error } = TourSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message })

        }
       // 51819570-d994-418b-8675-2f6be985b413
         const tour=( await dbInstance.exec("getTourTest",{Id:req.params.Id})).recordset[0] as Tour
        // const tour=( await dbInstance.query(`SELECT * FROM TourTables WHERE Id =${req.params.Id}`)).recordset[0] as Tour
       

        console.log("ID: ",req.params.Id)
        console.log('Tour',tour);
        if (tour){
            return res.status(200).json(tour);
        }

        // if (tour && tour.Id) {
        //     const { Name, Tdestination, Tdescription, Tprice } = req.body
        //     await dbInstance.exec("updateTour", { Id: tour.Id, Name, Tdestination, Tdescription, Tprice })
        //     return res.status(200).json({ message: "Tour updated successfully" })

        // }

    }
    catch (error: any) {
      return  res.status(500).json({ error: error.message });
    }

};

// ********************DELETE TOUR**********************************

export const DeleteTour: RequestHandler = async (req: Request, res: Response) => {
    try {
        //   const { id } = req.params;
        //   const pool = await mssql.connect(sqlConfig);
        //   const result = await pool.request()
        //    .input('Id', mssql.VarChar, id)
        //    .execute('getTourById');
        //    const tour = result.recordset[0] as Tour;
        const tour = (await dbInstance.exec("getTour", { Id: req.params.Id })).recordset[0] as Tour
        if (tour && tour.Id) {
            await dbInstance.exec("deleteTour", { Id: req.params.Id })

            res.status(200).json({ message: 'Tour deleted successfully' });
        } else {
            res.status(404).json({ message: 'Tour not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

