module.exports = {
  MONGO_URL: (process.env.MONGO_URL || process.env.MONGOLAB_URI || "mongodb://localhost/WMtest"),
  PORT: (process.env.PORT || 3000)
}
