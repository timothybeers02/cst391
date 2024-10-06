import express, { Request, Response } from "express";
import mediaRouter from './media/media.routes';
import usersRouter from './users/user.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";

dotenv.config();

// // Define a handler for requests to the root path "/"
// app.get("/", (req: Request, res: Response) => {
//       // Send a response to the requester
//       res.send("Hello World from TypeScript!");
// });

const app = express();
const port = 3000;

// Parse JSON bodies
app.use(express.json());
// Parse URL encoded bodies
app.use(express.urlencoded({ extended: true }));
// enable all CORS request
app.use(cors());
// Security middleware
app.use(helmet());

app.use("/", [mediaRouter, usersRouter]);

app.listen(port, () => {
      console.log(`Example global var (should be local IP): ${process.env.MY_SQL_DB_HOST}`);
      console.log(`Example app listening at http://localhost:${port}`);
});

if(process.env.NODE_ENV == 'development') {
      app.use(logger);
      console.log(process.env.GREETING + ' in dev mode');
}
