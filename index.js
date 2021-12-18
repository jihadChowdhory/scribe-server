const express = require("express");
const app = express();
const port = process.env.PORT || 9999;

app.get("/", (req, res) => {
  res.send(
    "<h1 style='color:#32cd32;'>Scribe server is running...</h1><p>Powered by - Jihad Chowdhory</p>"
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
