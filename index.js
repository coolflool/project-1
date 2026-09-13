const express = require("express");
const cors = require("cors");

const app = express();

// Basic configuration
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

// Home page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Timestamp API
app.get("/api/:date?", function (req, res) {
  let date;

  // If no date is provided, use the current date/time
  if (!req.params.date) {
    date = new Date();
  } else {
    const dateString = req.params.date;

    // If the parameter is a number, treat it as a Unix timestamp
    if (/^\d+$/.test(dateString)) {
      date = new Date(Number(dateString));
    } else {
      date = new Date(dateString);
    }
  }

  // Check for invalid date
  if (isNaN(date.getTime())) {
    return res.json({
      error: "Invalid Date"
    });
  }

  // Return Unix timestamp and UTC string
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Timestamp Microservice running on port ${PORT}`);
});
