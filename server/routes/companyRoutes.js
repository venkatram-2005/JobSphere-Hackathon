import express from 'express'
import { ChangeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
const router = express.Router()
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

// Register a company
router.post('/register',upload.single("image"), registerCompany)

//Company Login
router.post('/login', loginCompany)

//Get Company Data
router.get('/company',protectCompany, getCompanyData)

//Post a Job
router.post('/post-job', protectCompany,postJob)

//Get Applicants Data of Company
router.get('/applicants',protectCompany, getCompanyJobApplicants)

//Get Company Job list
router.get('/list-jobs',protectCompany, getCompanyPostedJobs)

//Change Application status
router.post('/change-status',protectCompany, ChangeJobApplicationStatus)

//Change Application Visibility
router.post('/change-visibility',protectCompany, changeVisibility)

export default router
