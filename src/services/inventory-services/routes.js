const express = require('express');
const router = express.Router();
const inventoryController = require('./controller');

// Define routes
router.post('/createItem', inventoryController.createItem);
router.get('/getAllItems', inventoryController.getAllItems);
router.get('/getItemById', inventoryController.getItemById);
router.put('/updateItem', inventoryController.updateItem);
router.delete('deleteItem', inventoryController.deleteItem);

module.exports = router;
