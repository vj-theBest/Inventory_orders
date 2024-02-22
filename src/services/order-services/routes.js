const express = require('express');
const router = express.Router();
const orderController = require('./controller');

// Define routes
router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.get('/:orderId', orderController.getOrderById);
router.put('/:orderId', orderController.updateOrder);
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;
