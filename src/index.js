import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import routes from './routes.js';


const app = express();

// Setup database
try {
    await mongoose.connect('mongodb://localhost:27017', {
        // Name based on project.
        dbName: 'friendly-world',
    });

    console.log('Database connected successfully!');
} catch (err) {
    console.log('Cannot connect to database: ', err.message);
}

// Config handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    // Allowing handlebars to work with mongoose docs.
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
// Set/use handlebars - view bars engine.
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Add middleware.
app.use(express.static('src/public'));

// Body parser posibility to read html forms in req.body.
// Add body parser. 
app.use(express.urlencoded({ extended: false }));

// Add json parser.
// app.use(express.json());

// Using routes form routes.js/ Add routes.
app.use(routes);


app.listen(5000, () => console.log('Server is listening on http://localhost:5000.....'));
