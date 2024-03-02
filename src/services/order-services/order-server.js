const express = require('express');
const connectDB = require('D:/microservices_project/Inventory_orders/db.js');
const orderRoutes = require('./routes.js');


// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/',(req,res)=>{
    res.send("Welcome to Orders Microservices Project");
});
app.use('/api/orders', orderRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
