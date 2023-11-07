import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
require("dotenv").config();

const app = express();

configViewEngine(app);
initWebRoutes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`\x1b[33m >>> JWT back-end is running on the port: ${PORT} \x1b[0m`)
})