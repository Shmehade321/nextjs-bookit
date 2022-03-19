import Room from "../models/room";

// Get All Rooms => GET /api/rooms
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({ success: true, rooms });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Create new room => POST /api/rooms
const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Get Signle Room => GET /api/rooms/:id
const getRoom = async(req, res) => {
  try {
    const room = await Room.findById(req.query.id)
    if(!room) {
      res.status(400).json({
        success: false,
        error: 'Room not found with provided ID',
      });
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch(error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
}

export { getRooms, createRoom, getRoom };
