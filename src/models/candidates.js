const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    applyfor: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
        // unique:true,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    portfolio: {
        type: String
    },
    resume: {
        type: String,  
        required: true,
    },
});

const Candidate = new mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;