const InventoryItem = require('./inventoryItem');

// Controller functions
exports.createItem = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const item = new InventoryItem({ name, quantity });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await InventoryItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await InventoryItem.findById(req.query.id);
    if (item == null) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    await InventoryItem.findByIdAndUpdate(req.query.id, { name, quantity });
    res.json({ message: 'Item updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await InventoryItem.findById(req.query.id);
    if (item == null) {
      return res.status(404).json({ message: 'Item not found' });
    }
    await InventoryItem.findByIdAndDelete(req.query.id);
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
