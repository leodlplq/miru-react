const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");

router.get("/", userController.getAll);
router.get("/:id", userController.findOne);

router.post("/", userController.create);

router.put("/:id", userController.update);

router.delete("/:id", userController.deleteById);

module.exports = router;
