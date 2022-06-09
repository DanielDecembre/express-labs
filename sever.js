const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const ( request ) = require("http");
const app = express();

app.get('/', (req, res) => {
    console.log('Express is listening for requests from the browser on port 3000');
    res.send('Hello World');
});

app.get('/greeting', (req, res) => {
console.log('Express is listening for requests from the browser on port 3000');
res.send('Hello World');
});

app.get('/greeting/:name', (req, res) =>{
    console.log(req.params.name);
    res.send(`WOW! Hello There, ${req.params.name}`)
});

// Tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = (req.params.tipPercentage / 100) * req.params.total;
    res.send(`${tip}`);
});


// magic 8 ball
const answers = 
["It is certain", 
"It is decidedly so",
 "Without a doubt", 
 "Yes definitely",
 "You may rely on it", 
 "As I see it yes", 
 "Most likely", 
 "Outlook good",
 "Yes", 
 "Signs point to yes", 
 "Reply hazy try again", 
 "Ask again later",
 "Better not tell you now", 
 "Cannot predict now", 
 "Concentrate and ask again",
 "Don't count on it", 
 "My reply is no", 
 "My sources say no",
 "Outlook not so good", 
 "Very doubtful"]

app.get("/magic/:anything", (req, res) =>
    {
        // ask question // go into random array and gave a random string
        let magic = answer[Math.floor(Math.random()*answers.length)];
        res.send(`${req.params.anything + magic}`)
    });
    <h1>${magicAnswer}</h1>


    app.listen(3000,() => {
        console.log('Express is listening for requests from the browser on port 3000');
    });