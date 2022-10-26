const User = require("../models/user.model");

const getAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error while retrieving user data",
      });
    } else {
      res.send(data);
    }
  });
};

const findOne = (req, res) => {
  const { id } = req.params;
  User.findById(id, (err, data) => {
    if (err) {
      if (err.type === "not_found") {
        res.status(404).send({
          message: err.message || "Error while retrieving user data",
        });
      } else {
        res.status(500).send({
          message: err.message || "Error while retrieving user data",
        });
      }
    } else {
      res.send(data);
    }
  });
};

const create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "User object cannot be empty",
    });
  }

  const { username, mail, password } = req.body;
  const user = new User({ username, mail, password });

  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error while creating user",
      });
    } else {
      res.send(data);
    }
  });
};
const update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "User object cannot be empty",
    });
  }
  const { id } = req.params;
  const { username, mail, password } = req.body;
  const user = new User({ username, mail, password });

  User.updateById(id, user, (err, data) => {
    if (err) {
      if (err.type === "not_found") {
        res.status(404).send({
          message: err.message || "Error while retrieving user data",
        });
      } else {
        res.status(500).send({
          message: err.message || "Error while retrieving user data",
        });
      }
    } else {
      res.send(data);
    }
  });
};
const deleteById = (req, res) => {
  const { id } = req.params;
  User.remove(id, (err, data) => {
    if (err) {
      if (err.type === "not_found") {
        res.status(404).send({
          message: err.message || `Cannot find user with id:${id}`,
        });
      } else {
        res.status(500).send({
          message: err.message || `Could not delete user with id:${id}`,
        });
      }
    } else {
      res.send({ message: `User with id:${id} has been deleted` });
    }
  });
};

module.exports = {
  getAll,
  findOne,
  update,
  deleteById,
  create,
};
