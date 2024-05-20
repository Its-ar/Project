import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import proyectRoute from "./routes/proyectRoute.js";
import dimensiRoute from "./routes/dimensiRoute.js";
import kesiapanRoute from "./routes/kesiapanRoute.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(proyectRoute);
app.use(dimensiRoute);
app.use(kesiapanRoute);

app.listen(5000, () => console.log("server up and running.."));
