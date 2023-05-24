import express from 'express';
import images from './api/imageApi';


const routes = express.Router();




routes.use('/v1', images);

export default routes;