import express from 'express'
import cors from 'cors'
import './config/instrument.js'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'

// Initialize express
const app = express()

//Middleware
app.use(cors())
app.use(express.json())

//connect to DB
await connectDB()

//Routes
app.get('/', (req, res)=>res.send("API is working fine..."))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  }); 
app.post('/webhooks', clerkWebhooks)


//port
const PORT = process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
