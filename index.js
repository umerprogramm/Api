import  cheerio  from 'cheerio'
import request   from 'request'
import express from 'express'
const app = express()
app.use(express.json())



const pages=[
  {
    url : "https://davidwalsh.name/",
    class : "preview",
  },
  {
    url : "https://myprogrammingblog.com/",
    class : "entry-title-index",
  },
  {
    url : "https://erikbern.com/",
    class : "post-title",
  },
  {
    url : "https://css-tricks.com/",
    class : "article-publication-meta",
  },
    {
    url : "https://www.geeksforgeeks.org/category/guestblogs//",
    class : "head",
  },


]




const data = []
  pages.map(element => {

  request(element.url, function (error, response, body) {
    
    const $ = cheerio.load(body)
   $(`.${element.class}`).each(function(id){
      


      const title = $(this).text()
       const url = $(this).find('a').attr('href')
       
       data.push({
         title,
         url : url
        })
      
        
        
      })

        
        
      
    });
    
  });
  

    app.get('/', (req, res, next) => {
      res.send('Wellcome to my API plase go to  /data to grap the data 😊');
    });
    app.get('/data', (req, res, next) => {
      res.send(data);
    });


    app.post('/info', (req, res, next) => {
      console.log(req.body);
    });






app.listen(3000, () => console.log(`App listening at http://localhost:${3000}`))
