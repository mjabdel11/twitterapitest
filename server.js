const express = require('express');
const Twitter = require('twit');
const cors = require('cors');



const app = express();
app.use(cors());

const api_client = new Twitter({
    consumer_key: 'A7n9Gbxi6sZmj7O94DHEc0VR8',
    consumer_secret: 'wKT32B0oh0bvpuYGmoXVp1MHXtg7uy6RQKXjrSRatuhnghvY5b',
    access_token: '1534478373606543360-wX6INfSki9aOtO3jgkmVeJnGqcuo3w',
    access_token_secret: 'SLj1SsZYXyZRrxKt9wyAMYNSJrjvlwGmCaZrwcZj0LX92'
});


app.get('/followers', (req, res) => {
    const params = { };

    api_client
        .get(`https://api.twitter.com/2/users/1248733389777252359/following`, params)
        .then(timeline => {
            res.send(timeline);
        })
        .catch(error => {
            res.send(error);
        });
});

app.listen(3000, () => console.log('Server running'))