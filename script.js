import mongoose from "mongoose";

// MongoDB connection
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/airline', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected...');
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1); // Exit process with failure
    }
  };
  
  export default connectDB;

// public/js/script.js

// Example function to handle search input
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-button');
  
    searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      const city = document.querySelector('.search_input_2[placeholder="city"]').value;
      const departure = document.querySelector('.search_input_2[placeholder="Departure"]').value;
      const arrival = document.querySelector('.search_input_2[placeholder="Arrival"]').value;
      const budget = document.querySelector('.search_input_2[placeholder="Budget"]').value;
  
      // Here, you can add logic to handle the search,
      // such as sending a request to the server or filtering destinations.
  
      console.log(`Searching for trips to ${city} from ${departure} to ${arrival} under $${budget}`);
    });
  });
  