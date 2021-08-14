const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById, addOrderToUserHistory } = require("../controllers/user");
const { decreaseQuantity } = require("../controllers/product")
const { create , listOrders, getStatusValues} = require("../controllers/order") 

router.post(
  "/order/create/:userId",
  requireSignin,
  isAuth,
  addOrderToUserHistory,
  decreaseQuantity,
  create
);

router.get('/orders/list/:userId', requireSignin, isAuth, isAdmin, listOrders)
router.get('/orders/status-values/:userId', requireSignin, isAuth, isAdmin, getStatusValues)

router.param("userId", userById);

module.exports = router;
