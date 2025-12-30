let { people } = require("../data.js");

const addPerson = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
  }
};

const getPeople = (req, res) => {
  res.json(people);
};

const getPerson = (req, res) => {
  const idToFind = parseInt(req.params.personID);
  const person = people.find((p) => p.id === idToFind);
  if (!person) {
    return res.status(404).send("That person was not found.");
  } else {
    res.json(person);
  }
};

const deletePerson = (req, res) => {
  const idToFind = parseInt(req.params.personID);
  const person = people.find((p) => p.id === idToFind);
  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: `No person with id ${idToFind}` });
  } else {
    let people = people.filter((p) => p.id !== idToFind);
    res.status(200).json({ success: true, data: people });
  }
};

const updatePerson = (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  }
  const idToFind = parseInt(req.params.personID);
  const person = people.find((p) => p.id === idToFind);

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: `No person with id ${idToFind}` });
  } else {
    people[idToFind] = req.body.name;
    res.status(200).json({ success: true, data: people });
  }
};

module.exports = {
  addPerson,
  getPeople,
  getPerson,
  deletePerson,
  updatePerson,
};
