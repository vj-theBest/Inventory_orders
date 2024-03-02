const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
// const connectDB = require('./db.js');
// const orderRoutes = require('./src/services/order-services/routes.js');
// const inventoryRoutes = require('./src/services/inventory-services/routes.js');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
//connectDB();

// Middleware
app.use(cors());
app.use(express.json());
//microservies called via proxy 
app.use('/api/inventory', proxy('http://localhost:5002'))
app.use('/api/orders', proxy('http://localhost:5001'))
// Routes
app.use('/',(req,res)=>{
    res.send("Welcome to Inventory - Orders Microservices Project");
});
// app.use('/api/orders', orderRoutes);
// app.use('/api/orders', inventoryRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
