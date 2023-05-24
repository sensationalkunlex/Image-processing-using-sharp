import express from "express";
import image from "./routes/index";

const app = express();
const port=3000;


app.use('/api',  image);

app.listen(port,()=>{
    console.log(`Server running at ${port}`);
} )


export default app;