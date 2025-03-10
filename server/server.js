import express from 'express'
import cors from 'cors'
import './config/instrument.js'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {clerkMiddleware} from '@clerk/express'

// Initialize express
const app = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())
//connect to DB
await connectDB()
await connectCloudinary()

//console.log(process.env.CLOUDINARY_API_KEY)

//Routes
app.get('/', (req, res)=>res.send("API is working fine..."))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
}); 
  
app.post('/webhooks', clerkWebhooks)
app.use('/api/company', companyRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/users', userRoutes)

//port
const PORT = process.env.PORT || 5000
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
