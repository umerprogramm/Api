import express from 'express';
import OpenAI from 'openai-api';
import 'dotenv/config'


const app = express()
const port = 3000
const OPENAI_API_KEY = process.env.OPENAI_API_KY;

const openai = new OpenAI(OPENAI_API_KEY);

app.get('/answer/:question', async (req,res) =>{

    const gptResponse = await openai.answers({
      "documents": ["2356", "546546"],
      "question": `${req.params.question}`,
      "search_model": "ada",
      "model": "curie",
      "examples_context": "In 2017, U.S. life expectancy was 78.6 years.",
      "examples": [["What is human life expectancy in the United States?", "78 years."]],
      "max_tokens": 5,
      "stop": ["\n", "<|endoftext|>"],
    });



        res.send(gptResponse.data.answers)
    });





app.listen(port, () => console.log(`App listening at http://localhost:${port}`))