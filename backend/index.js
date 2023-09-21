const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const customError = require("./utils/customErrorHandler");
const connectDb = require("./database/db");
const createAccount = require("./routes/Auth");
const app = express();

dotenv.config({ path: ".env" });

app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/v1", createAccount);
app.all("*", (req, res, next) => {
  const err = new customError(
    `Can't Find http://localhost:3000${req.originalUrl} on the Server`,
    404
  );
  next(err);
});

// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);

const port = process.env.PORT;

// Start Server Only when the DB have connected
const start = async () => {
  try {
    await connectDb();
    app.listen(
      port,
      console.log(
        `Server Listening on Port ${port} and Database connected Successfully`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();
