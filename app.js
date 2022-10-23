import express from "express";
import morgan from "morgan";
import helmet from "helmet";

import { config } from "./config/config.js";
import { apiRouter } from "./routes/index.js";


const app = new express();

//app.use(morgan('tiny'));
app.use(helmet());
apiRouter(app);

app.listen(config.port, ()=> {
    console.log("Server listo en port: ", config.port);
});