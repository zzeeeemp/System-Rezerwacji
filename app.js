const express = require('express');
const bodyParser = require('body-parser');
const eventController = require('./controllers/eventController');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.redirect('/events');
});
app.get('/events', eventController.getAllEvents);
app.get('/events/:eventId', eventController.getEventById);
app.get('/events/:eventId/book', eventController.getBookEventPage);
app.post('/events/:eventId/book', eventController.bookEvent);
app.post('/events/:eventId/book', eventController.confirmBooking);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
