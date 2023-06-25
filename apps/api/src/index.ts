import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import media from "./data/media.json";

// Store in memory as if this was using an actual database
const store = media;

const app = express();

app
  .disable("x-powered-by")
  .use(morgan("dev"))
  .use(urlencoded({ extended: true }))
  .use(json())
  .use(cors())
  .get("/media/all", (req, res) => {
    res.send(store);
  })
  .post("/media/add", (req, res) => {
    const newMedia = req.body;
    store.push(newMedia);
    res.send(store);
  })
  .post("/media/edit", (req, res) => {
    const updatedMedia = req.body;
    const index = store.findIndex((m) => m.id === updatedMedia.id);
    store[index] = updatedMedia;
    res.send(store);
  })
  .post("/media/delete", (req, res) => {
    const deletedMedia = req.body;
    const index = store.findIndex((m) => m.id === deletedMedia.id);
    store.splice(index, 1);
    res.send(store);
  });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`api running on ${port}`);
});
