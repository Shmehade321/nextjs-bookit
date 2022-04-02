import nc from "next-connect";
import dbConnect from "../../../config/dbConnection";
import { getRooms, createRoom } from "../../../controllers/roomController";
import onError from '../../../middlewares/errors'

const handler = nc({onError});

dbConnect();

handler.get(getRooms);
handler.post(createRoom);

export default handler;
