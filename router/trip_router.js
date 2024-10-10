import express from 'express';
import Trip from '../models/trip_models.js';

const router = express.Router();

// Route to create a new trip
router.post('/', async (req, res) => {
  try {
    const { city, departure, arrival, budget } = req.body;

    // Create a new trip
    const newTrip = new Trip({
      city,
      departure,
      arrival,
      budget,
    });

    // Save the trip to the database
    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (err) {
    res.status(500).json({ message: 'Error creating trip', error: err.message });
  }
});

// Route to get all trips
router.get('/', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving trips', error: err.message });
  }
});

// Route to get a single trip by ID
router.get('/:id', async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving trip', error: err.message });
  }
});

// Route to update a trip by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTrip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json(updatedTrip);
  } catch (err) {
    res.status(500).json({ message: 'Error updating trip', error: err.message });
  }
});

// Route to delete a trip by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
    if (!deletedTrip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json({ message: 'Trip deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting trip', error: err.message });
  }
});

export default router;
