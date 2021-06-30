const express = require("express");
const multer = require("multer");
const path = require("path");
const morgan = require("morgan");
let upload = multer({dest: "uploads/"});

app = express()
app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get("/api/fileanalyse", (req, res) => {
    res.json({message: "Hello there"})
})

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
    // console.log(req.file)
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })
})

app.listen(3000, () => console.log("Listening on port 3000..."))