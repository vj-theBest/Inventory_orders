const Order = require('../../models/order');

// Controller functions
exports.createOrder = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    const order = new Order({ product, quantity });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (order == null) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { product, quantity } = req.body;
    await Order.findByIdAndUpdate(req.params.orderId, { product, quantity });
    res.json({ message: 'Order updated successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.orderId);
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
