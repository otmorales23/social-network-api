const router = require('express').Router();
const {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends').post(addFriend).delete(removeFriend);


module.exports = router;
