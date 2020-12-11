// This file will handle connection logic to the MongoDB database
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch(e => {
        console.log('Error while attempting to connect to MongoDB');
        console.log(e);
    })

// To prevent deprecation warnings (from MongoDB Native Driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
