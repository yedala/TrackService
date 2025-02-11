import "dotenv/config";
import express, { json } from "express";
import configDb from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import expenseRoutes from "./routes/expenseRoute.js";

const app = express();

app.use(json());
//my routes
app.use("/expenses", expenseRoutes);

//middleware
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
