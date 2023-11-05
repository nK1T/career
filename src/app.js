const express = require("express");
const fs = require('fs');
const path = require("path");
const connectToDB = require("./db/conn");
const app = express();

const Candidate = require("./models/candidates");

const PORT = process.env.PORT || 3001;
const static_path = path.join(__dirname, "../public");


//multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Store uploaded files in the 'uploads' directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Rename the file
    },
  });
  
  const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/apply", upload.single('resume'), async (req, res) => {
  try {
    const registerCandidate = new Candidate({
        applyfor: req.body.applyfor,
        fullname: req.body.fullname,
        dob: req.body.dob,
        gender: req.body.gender,
        contact: req.body.contact,
        email: req.body.email,
        city: req.body.city,
        country: req.body.country,
        linkedin: req.body.linkedin,
        education: req.body.education,
        experience: req.body.experience,
        skills: req.body.skills,
        portfolio: req.body.portfolio,
        // resume: {
        //   data: req.file.buffer, // The uploaded file data is stored as a Buffer
        //   contentType: req.file.mimetype, // Get the file's content type
        // },
        resume: req.file.path
    });

     const registered = await registerCandidate.save();
     res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});
connectToDB();

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
