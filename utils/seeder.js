const Room = require('../models/room')
const mongoose = require('mongoose')
const rooms = require('../data/rooms')

mongoose.connect('mongodb+srv://bookit_db_admin:C2pdpClREsuRNfaQ@cluster0.ytmz5.mongodb.net/BookItDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(con => console.log(`Successfully Connected to Database`))

const seedRooms = async () => {
    try {
        await Room.deleteMany();
        console.log('Rooms are deleted')

        await Room.insertMany(rooms)
        console.log('All rooms are added')

        process.exit()
    } catch(error) {
        console.log(error.message)
        process.exit()
    }
}

seedRooms()