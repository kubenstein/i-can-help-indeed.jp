import path from "path";
import express from "express";
import redirectToHttpsAndWww from "./utils/redirectToHttpsAndWww";

const port = process.env.PORT || 3001;

const app = express();
app.use(redirectToHttpsAndWww);
app.use(express.static(path.resolve(`${__dirname}/../frontend/`)));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Starting server: http://localhost:${port}`));
