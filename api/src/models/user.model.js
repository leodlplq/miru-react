const sql = require("../database");

const User = function (user) {
  this.username = user.username;
  this.mail = user.mail;
  this.password = user.password;
};

/**
 * Get all users
 */
User.getAll = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
      return;
    }

    console.log("Users : ", res);
    result(null, res);
  });
};

/**
 * Get an user by its id
 */
User.findById = (id, result) => {
  sql.query("SELECT * FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    result({ type: `not_found`, message: `User ${id} not found` }, null);
  });
};

/**
 * Create an user
 */
User.create = (newUser, result) => {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");

  newUser = { ...newUser, updatedAt: date, createdAt: date };
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
      return;
    }

    console.log("User created !");
    result(null, { id: res.insertId, ...newUser });
  });
};

/**
 * Update an user by id
 */
User.updateById = (id, user, result) => {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");

  sql.query(
    "UPDATE users SET username = ?, mail = ?, password = ?, updatedAt = ? WHERE id = ?",
    [user.username, user.mail, user.password, date, id],
    (err, res) => {
      if (err) {
        console.error(err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        result({ type: `not_found`, message: `User ${id} not found` }, null);
        return;
      }

      console.log("Updated user", {
        id,
        ...user,
        updatedAt: date,
      });
      result(null, { id, ...user, createdAt: date, updatedAt: date });
    }
  );
};

/**
 * Remove user by id
 */
User.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.error(err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      result({ type: `not_found`, message: `User ${id} not found` }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

module.exports = User;
