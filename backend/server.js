import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';

// app config

const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://thatz98:3yjfYZPHB6mRd92l@cluster0.hghoa.mongodb.net/db_winder?retryWrites=true&w=majority`;

// middlewares

// DB config

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// API endpoint

app.get('/', (req, res) => res.status(200).send('Hello word!!!'));
app.post('/winder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else{
            res.status(201).send(data);
        }
    })
})


app.get('/winder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else{
            res.status(200).send(data);
        }
    })
})

// listner

app.listen(port, () =>  console.log(`listening on local host: ${port}`));