import express from "express";
import { dbconnection } from "./config/db.js";
import router from "./router/trip_router.js";





dbconnection();

const app=express();

app.listen(7000, ()=>
    console.log ("server is running on port 7000")
);


