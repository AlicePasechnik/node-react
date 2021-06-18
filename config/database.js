const mongoose = require('mongoose');
// const DB_URI = `mongodb+srv://AlicePasechnik:QWERTY12345@cluster0.1mwhs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const DB_URI = `mongodb://0.0.0.0:27017`;

mongoose.connect(DB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('Successfully connected to MongoDB'));
mongoose.connection.on('error', error => console.error(error));

module.exports = mongoose;