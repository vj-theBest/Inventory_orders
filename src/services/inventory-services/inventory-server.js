const express = require('express');
const connectDB = require('D:/microservices_project/Inventory_orders/db.js');
const inventoryRoutes = require('./routes.js');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5002;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/', inventoryRoutes);
// app.use('/',(req,res)=>{
//     res.send("Welcome to Inventory Microservice");
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
