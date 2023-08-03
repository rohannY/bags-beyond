const router = require("express").Router();

const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/user.controller");
const { protect } = require("../middleware/authHandler");

router.post("/reg", createUser); 
router.post("/login", loginUser);

router
  .route("/acc")
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);


module.exports = router;
