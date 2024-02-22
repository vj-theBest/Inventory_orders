const mongoose = require('mongoose');

const inventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('InventoryItem', inventoryItemSchema);
