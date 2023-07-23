const express=require('express')
const router=express.Router()
const{getAllJops,updateJob,deleteJob,createJob,getJob}=require('../controllers/jobs')
router.route('/').post(createJob).get(getAllJops)
router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob)
module.exports=router