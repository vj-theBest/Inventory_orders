const express = require('express');
const connectDB = require('./db.js');
const orderRoutes = require('./src/services/order-services/routes.js');
const inventoryRoutes = require('./src/services/inventory-services/routes.js');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/',(req,res)=>{
    res.send("Welcome to Inventory - Orders Microservices Project");
});
app.use('/api/orders', orderRoutes);
app.use('/api/inventory', inventoryRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
