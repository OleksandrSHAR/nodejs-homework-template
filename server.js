import mongoose from "mongoose";

import app from "./app.js";
const { DB_HOST, PORT = 3000 } = process.env;
console.log(DB_HOST);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console, log(error.messege);
    process.exit(1);
  });
