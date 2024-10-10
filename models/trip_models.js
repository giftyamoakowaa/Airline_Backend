import mongoose from 'mongoose';

// Define the trip schema
const tripSchema = new mongoose.Schema({
  city: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  budget: { type: Number, required: true },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the Trip model
const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
