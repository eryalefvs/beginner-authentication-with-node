import express, {Request, Response} from "express";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/ping", (req: Request, res: Response) => {
    return res.send("pong")
});

export { app };