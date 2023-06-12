const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRouter = require("./routes/auth")
<<<<<<< HEAD
const prismRouter = require("./routes/prism")
=======
const prismController = require("./routes/prism")
>>>>>>> d6d05572d1e1835b143dd7332551fb9c27cc0033

const app = express()

app.use(express.json())
app.use(cors())

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@historicalrelicmanageme.in6vouf.mongodb.net/HistoricalRelic?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

app.use("/api/auth", authRouter)
app.use("/api/prism", prismRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT)
})