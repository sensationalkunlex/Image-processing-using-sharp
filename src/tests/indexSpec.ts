
import index from '../index';
import supertest from 'supertest';
import newResizeImage  from '../utilities/image-transfomer';
import fs from 'fs';
const request = supertest(index);


//Image testing
describe('Testing the  image endpoint ',async() => {
  const fileName = 'santamonica';
  const width = '400';
  const height = '400';
  it('Testing API for resized image',   async () => {
  const response= await request.get(`/api/v1/image?filename=${fileName}&height=${height}&width=${width}`);
expect(response.statusCode).toEqual(200);     
  });
  

});
describe(' Test for missing image', async() => {
  it('Checking for the already existing image', async () => {
    await expectAsync(newResizeImage('fjord', 400, 400)).toBeResolved();
  });
});


