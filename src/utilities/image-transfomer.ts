import sharp from 'sharp';
import path from 'path';

function newResizeImage  (
  filename: string,
  height: number,
  width: number, errorMsg="Image is not found"
): Promise<Buffer>  {
   try{
  return imageResizing();
}
catch(err){
  console.log("Testing error",err)
    return new Promise(function() {
    throw new Error(errorMsg);
  });
}
  async function imageResizing(): Promise<Buffer> {
    return  sharp(path.resolve(`images/${filename}.jpg`))
      .resize({
        width: width,
        height: height,
        fit: sharp.fit.cover
      })
      .toBuffer();
  }
}



export default newResizeImage ;