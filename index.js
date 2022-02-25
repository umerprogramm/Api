import  cheerio  from 'cheerio'
import request   from 'request'
import express from 'express'

const app = express()
const port = 3000




request('https://myprogrammingblog.com/', function (error, response, body) {
  
const $ =cheerio.load(body)
  console.log($('.entry-header-index').text())

});






app.listen(port, () => console.log(`App listening at http://localhost:${port}`))