import express, { json } from 'express';
import cors from 'cors';
const port = 5000;
const app = express();

app.use(json());
app.use(cors());

//global users and tweets
const userList = [];
// const tweetList = [];

app.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;

    userList.push({ username, avatar });
    res.status(201).send('Ok');
})

app.listen(port, (() => console.log(`Server is online, utilizing port: ${port}`)));