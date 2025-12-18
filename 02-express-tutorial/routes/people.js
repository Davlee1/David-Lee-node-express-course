const express = require("express");
const router  = express.Router();
const { addPerson, getPeople, getPerson, deletePerson } = require("../controllers/people.js");

router.get("/", getPeople);

router.get("/:personID", getPerson);
router.delete("/:personID", deletePerson);

router.post("/", addPerson);

module.exports = router 