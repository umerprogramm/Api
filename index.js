import  cheerio  from 'cheerio'
import request   from 'request'
import express from 'express'
const app = express()
const port = 3000









const arr = []
  request('https://myprogrammingblog.com/', function (error, response, body) {
    
    const $ =cheerio.load(body)
    $('.entry-title-index').each(function(index){
      

      const text = $(this).text()
       const url = $(this).find('a').attr('href')
       
       arr.push({
         index,
         title : text,
         url
        })
      
        
        
      })
    });
    app.get('/', (req, res, next) => {
      res.send('Wellcome to my API plase go to  /data to grap the data 😊');
    });
    app.get('/data', (req, res, next) => {
      res.send(arr);
    });


    
    




app.listen(port, () => console.log(`App listening at http://localhost:${port}`))