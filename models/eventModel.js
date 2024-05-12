let events = [
    { id: 1, name: 'Koncert AC/DC', description: 'Koncert rockowy zespołu AC/DC', location: 'Stadion Narodowy', date: '2024-05-10', seats: 1000, price: 150 },
    { id: 2, name: 'Teatr', description: 'Spektakl "Romeo i Julia"', location: 'Teatr ABC', date: '2024-05-15', seats: 50, price: 30 },
    { id: 3, name: 'Pokaz sztucznych ogni', description: 'Pokaz fajerwerków z okazji Dnia Niepodległości', location: 'Plac Centrum', date: '2024-05-20', seats: 200, price: 10 }
];
const eventModel = {
    getAllEvents: () => {
        return events;
    },

    getEventById: (eventId) => {
        return events.find(event => event.id === eventId);
    },

    bookEvent: (eventId, bookedSeats) => {
        const event = events.find(event => event.id === eventId);
        if (event) {
            event.seats -= bookedSeats;
        }
    }
};

module.exports = eventModel;
