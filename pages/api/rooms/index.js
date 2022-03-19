import nc from "next-connect";
import dbConnect from "../../../config/dbConnection";
import { getRooms, createRoom } from "../../../controllers/roomController";

const handler = nc();

dbConnect();

handler.get(getRooms);
handler.post(createRoom);

export default handler;
