const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express();
app.use(cors({
    origin: '*'
}));

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true, //Auch unveränderte sessions dürfen gespeichert werden
    cookie: { maxAge: oneDay },
    resave: false //Durch parallele anfragen von einem client kann nichts überschrieben werden
}));
app.use(cookieParser());

let session;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})