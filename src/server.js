//Dependencies
import express from 'express';
import bodyParser from 'body-parser';

//Declarations
const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//get port
const port = process.env.PORT || 8080;

//get instance of express router
const router = express.Router();

//register routes
router.get('/home', (request, response) => {
    response.send('Hello world!');
});

// all routes will be prefixed with /api
app.use('/api', router);

//start server
app.listen(port);
console.log(`Magic happening on port ${port}`);
