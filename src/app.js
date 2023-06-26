import express, { json } from 'express';
import cors from 'cors';
const port = 5000;
const app = express();

app.use(json());
app.use(cors());

//global users and tweets
const userList = [];
const tweetList = [];

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;

    userList.push({ username, avatar });

    res.status(201).send('Ok');
});

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;

    if (userList.find((user) => user.username === username)) {
        res.status(201).send('Ok');
        tweetList.push({ username, tweet });
    } else {
        res.status(401).send('UNAUTHORIZED');
    }
});

app.get('/tweets', (req, res) => {
    res.send(
        tweetList.slice(-10).map((index) => ({
            username: index.username,
            avatar: userList.find((user) => user.username === index.username).avatar,
            tweet: index.tweet,
        }))
    );

    res.status(200).send('Ok');
});

app.listen(port, () => console.log(`Server is online, utilizing port: ${port}`));
