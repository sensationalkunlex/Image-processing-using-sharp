import express from 'express';
import newResizeImage  from '../../utilities/image-transfomer';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import path from 'path';
import validateQuery from '../../utilities/validators';
const routes = express.Router();

routes.get("/image", async (req:express.Request, res: express.Response)=>{
  const errorMsg = "Invalid parameter at "; 
  const errorMissFile = "Image is not found";
  try 
    {
      const filename: string = req.query.filename  as string;
      const heightStr : string = req.query.height as string;
      const widthStr : string = req.query.width as string;
      const  queryParams: unknown = req.query;
      const checkValidate= validateQuery(queryParams);
      if(!checkValidate){
      return res.status(400).send(errorMsg);
      }
      if(Number.isNaN(Number(heightStr))){
      return res.status(400).send(errorMsg+" height");
      }
      else if(Number.isNaN(Number(widthStr))){
        return res.status(400).send(errorMsg+" width");
      }
      const height: number = parseInt(heightStr);
      const width: number = parseInt(widthStr);
      const imagePath = `images/resized/${filename}${height}x${width}.jpg`;
    
      if (!fs.existsSync(imagePath)) {
      const newImageResolved = await newResizeImage(filename, height, width, errorMissFile);
      await fsPromises.writeFile(imagePath, newImageResolved);
    }
    return res.sendFile(path.resolve(imagePath));
  } catch (error) 
  {
    return res.status(400).send(`errors message: ${error}`);
  }

})

routes.get('/',(req:express.Request, res:express.Response)=>{
  res.status(200);
  })


export default routes;