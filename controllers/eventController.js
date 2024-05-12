const eventModel = require('../models/eventModel');
const { generateConfirmationNumber } = require('./utils');

const eventController = {
    getAllEvents: (req, res) => {
        const events = eventModel.getAllEvents();
        res.render('events', { events: events });
    },

    getEventById: (req, res) => {
        const eventId = parseInt(req.params.eventId);
        const event = eventModel.getEventById(eventId);
        if (!event) {
            res.status(404).send('Event not found');
        } else {
            res.render('eventDetails', { event: event });
        }
    },

    bookEvent: (req, res) => {
        const eventId = parseInt(req.params.eventId);
        const { name, surname, phone } = req.body;
        const seats = parseInt(req.body.seats);
        const event = eventModel.getEventById(eventId);
        if (!event) {
            res.status(404).send('Event not found');
        } else if (seats > event.seats || seats <= 0) {
            res.status(400).send('Invalid number of seats');
        } else {
            eventModel.bookEvent(eventId, seats);
            const confirmationNumber = generateConfirmationNumber();
            res.render('confirmation', {
                seats: seats,
                eventName: event.name,
                name: name,
                surname: surname,
                phone: phone,
                confirmationNumber: confirmationNumber
            });
        }
    },
   
    getBookEventPage: (req, res) => {
        const eventId = parseInt(req.params.eventId);
        res.render('bookingForm', { eventId: eventId });
    },

    getBookingForm: (req, res) => {
        const eventId = req.params.eventId;
        res.render('bookingForm', { eventId: eventId });
    }, 
    
    getReturnToMainPage: (req, res) => {
        res.redirect('/');
    },

    confirmBooking: (req, res) => {
        const eventId = parseInt(req.params.eventId);
        const { name, surname, phone, seats } = req.body;
        const event = eventModel.getEventById(eventId);
        if (!event) {
            res.status(404).send('Event not found');
        } else if (seats > event.seats || seats <= 0) {
            res.status(400).send('Invalid number of seats');
        } else {
            eventModel.bookEvent(eventId, seats);
            res.render('bookingConfirmation', { seats: seats, eventName: event.name, name: name, surname: surname, phone: phone });
        }
    }
};

module.exports = eventController;
