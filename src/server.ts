import { app } from "./app";

const port = process.env.PORT || 6060;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);