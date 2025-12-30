const express = require("express");
const router  = express.Router();
const { addPerson, getPeople, getPerson, deletePerson, updatePerson} = require("../controllers/people.js");

router.get("/", getPeople);

router.get("/:personID", getPerson);
router.put("/:personID", updatePerson);
router.delete("/:personID", deletePerson);

router.post("/", addPerson);

module.exports = router 