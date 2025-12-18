const { people } = require("./data");

const addPerson = (req, res) => {
  if (!req.body) {
    res.status(400).json({ success: false, message: "Please provide a name" });
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
  const person = people.filter((p) => p.id !== idToFind);
  res.json(person);
};

module.exports = { addPerson, getPeople, getPerson, deletePerson };
