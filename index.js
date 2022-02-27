import  cheerio  from 'cheerio'
import request   from 'request'
import express from 'express'
const app = express()
app.use(express.json())



const pages=[
  {
    url : "https://davidwalsh.name/",
    name : "davidwalsh",
    class : "preview"
  },
  {
    url : "https://myprogrammingblog.com/",
    name : "myprogrammingblog",
    class : "entry-title-index"
  },
]




const data = []
  pages.map(element => {

  request(element.url, function (error, response, body) {
    
    const $ = cheerio.load(body)
     console.log(element.class)
   $(`.${element.class}`).each(function(id){
      


      const title = $(this).text()
       const url = $(this).find('a').attr('href')
       
       data.push({
         title,
         url
        })
      
        
        
      })

        
        
      
    });
    
  });
  

    app.get('/', (req, res, next) => {
      res.send('Wellcome to my API plase go to  /data to grap the data 😊');
    });
    app.get('/data', (req, res, next) => {
      res.send(arr2);
    });


    app.post('/info', (req, res, next) => {
      console.log(req.body);
    });






app.listen(3000, () => console.log(`App listening at http://localhost:${3000}`))