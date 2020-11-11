const express = require('express')
const app = express()
const port = 4000 // loacalhost:4000
const cors = require('cors'); // import for cors
const bodyParser = require('body-parser'); // import for body parser

app.use(cors());

app.use(function(req, res, next) {  // allows us to be able to use the post, put etc.
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api/movies', (req, res) => {
  
  const myMovies = [ //array of movies
    {
      "Title":"Avengers: Infinity War",
      "Year":"2018",
      "imdbID":"tt4154756",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
      },
      {
      "Title":"Captain America: Civil War",
      "Year":"2016",
      "imdbID":"tt3498820",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
      },
      {
      "Title":"World War Z",
      "Year":"2013",
      "imdbID":"tt0816711",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
      "Title":"War of the Worlds",
      "Year":"2005",
      "imdbID":"tt0407304",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    }

  ]

  app.post('/api/movies', (req, res) => {
      console.log('Movie Recieved'); // lets us know when a movie has been recieved
      console.log(req.body.title);
      console.log(req.body.year);
      console.log(req.body.poster);
  })
  
  res.status(200).json({
    message: "Everything is okay", // status code 200 telling us eeverything is ok
    movies:myMovies
  });
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})