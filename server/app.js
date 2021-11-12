const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.use(express.json())
 



// app.set('view engine', 'ejs')

//app.use(bodyParser.urlencoded({extended: true}));
// app.set('views', path.join(__dirname, '../client/'));

const foodRoutes = require('./controllers/foods');
app.use('/foods', foodRoutes);

app.get('/', (req, res) => {
    res.send('Hello there!');
});

app.get('/:id', (req, res) => {
    res.send(foodRoutes)
})

app.post('/', (req, res) => {
    res.status(405).send('Not allowed!');
});

module.exports = app;

