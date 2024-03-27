import express from "express";
const app = express();
const port = process.env.PORT || "3000";

// Listening the connection in the 3000 PORT
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
