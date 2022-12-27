import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import initializeRoutes from "./routes/index.js";

const app = express();
const httpServer = createServer(app);

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initializeRoutes(app);

const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
  console.log(`Listening on *:${port}`);
});
