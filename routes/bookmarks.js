const express = require('express');

const router = express.Router();

//grab controller functions
const { index, create, destroy } = require('../controllers/bookmarks');

//http://localhost:8080/bookmarks

//get all bookmarks
router.get("/", index)

// create a bookmark
router.post("/", create)

// delete a bookmark
router.delete("/:id", destroy)

module.exports = router