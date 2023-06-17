const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRouter = require("./routes/auth")
const prismRouter = require("./routes/prism")
const cylinderRouter = require("./routes/cylinder")
const bodyComplexRouter = require("./routes/body_complex")
const damageReportRouter = require("./routes/damage_report")

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

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.use("/api/auth", authRouter)
app.use("/api/prism", prismRouter)
app.use("/api/cylinder", cylinderRouter)
app.use("/api/bodyComplex", bodyComplexRouter)
app.use("/api/damageReport", damageReportRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT)
})

module.exports = app