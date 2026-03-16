const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  SKU_ID: { type: String, required: true, unique: true },
  Item_Cost: { type: Number, required: true },
  Item_Count: { type: Number, required: true },
  Total_Cost: { type: Number, required: true },
  Lead_Time: { type: Number, required: true },
  Shelf_Life: { type: Number, required: true },
  EOQ: { type: Number, required: true },
  Lead_Time_Var: { type: Number, required: true },
  Seasonality: { type: String, required: true, enum: ['Low', 'Medium', 'High', 'None'] },
  WarehouseLoc: { type: String, required: true },
  Customer_Reviews: { type: Number, required: true, min: 0, max: 5 },
  Historical_Sales_Data: { type: Number, required: true },
  Demand_Fluct: { type: String, required: true, enum: ['Stable', 'Volatile', 'Predictable'] },
  ABC_Classification: { type: String, required: true, enum: ['A', 'B', 'C'] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
