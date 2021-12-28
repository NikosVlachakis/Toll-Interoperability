const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  stationID: {
    type: String
  },
  stationProvider: {
    type: String
  },
  stationName: {
    type: String
  }
});

const Station = mongoose.model("Station", stationSchema);

module.exports = Station;
