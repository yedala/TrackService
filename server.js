import "dotenv/config";
import express, { json } from "express";
import configDb from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import expenseRoutes from "./routes/expenseRoute.js";
import rateLimit from "express-rate-limit";

const app = express();

app.use(json());
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message:
    "Too many authentication requests from this IP, please try again after 15 minutes",
});
//my routes
app.use("/expenses", authLimiter, expenseRoutes);

//middleware
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
