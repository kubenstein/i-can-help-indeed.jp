import path from "path";
import express from "express";

const port = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(`${__dirname}/../frontend/`)));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Starting server: http://localhost:${port}`));
