import { app } from "./app";

app.listen(process.env.SERVER_PORT, () =>
  console.log("Server running at port: " + process.env.SERVER_PORT + ".")
);
