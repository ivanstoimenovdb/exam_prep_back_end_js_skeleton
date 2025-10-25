import express from 'express';
import routes from './routes.js';


const app = express();

// Add middleware.
app.use(express.static('src/public'));

// Body parser posibility to read html forms in req.body.
// Add body parser. 
app.use(express.urlencoded({extended: false}));

// Using routes form routes.js
app.use(routes);


app.listen(5000, () => console.log('Server is listening on http://localhost:5000.....'));
