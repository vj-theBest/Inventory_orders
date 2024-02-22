const express = require('express');
const router = express.Router();
const inventoryController = require('./controller');

// Define routes
router.post('/', inventoryController.createItem);
router.get('/', inventoryController.getAllItems);
router.get('/:itemId', inventoryController.getItemById);
router.put('/:itemId', inventoryController.updateItem);
router.delete('/:itemId', inventoryController.deleteItem);

module.exports = router;
