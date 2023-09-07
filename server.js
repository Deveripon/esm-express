//dependencies
import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import path from "path";
//env configuration
dotenv.config();
const PORT = process.env.PORT || 6060;

//initialize express app
const app = express();
//use express functions
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//make routes

//=== Home ===
app.get("/", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
});
app.get("/home", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
});

//=== Blog ===
app.get("/blog", (req, res) => {
    res.sendFile(path.resolve("public", "archive.html"));
});

//=== gallery ===
app.get("/gallery", (req, res) => {
    res.sendFile(path.resolve("public", "gallery.html"));
});

//=== Location ===
app.get("/location", (req, res) => {
    res.sendFile(path.resolve("public", "location.html"));
});

//=== menu ===
app.get("/menu", (req, res) => {
    res.sendFile(path.resolve("public", "menu.html"));
});

//=== news ===
app.get("/news", (req, res) => {
    res.sendFile(path.resolve("public", "news.html"));
});

//===  staff ===
app.get("/staff", (req, res) => {
    res.sendFile(path.resolve("public", "staff.html"));
});

//===reservation ===
app.get("/reservation", (req, res) => {
    res.sendFile(path.resolve("public", "reservation.html"));
});

//Send POST request on Reservation
app.post("/reservation", (req, res) => {
    res.send(req.body);
});

//===Form ===
app.get("/form", (req, res) => {
    res.sendFile(path.resolve("public", "form.html"));
});

//Send POST request on Form
app.post("/form", (req, res) => {
    res.send(req.body);
});

//=== 404 not found ===
app.get("*", (req, res) => {
    res.sendFile(path.resolve("public", "404.html"));
});

//listen server on port
app.listen(PORT, () => {
    console.log(` Server listening on ${PORT} `.bgGreen.blue.bold);
});
