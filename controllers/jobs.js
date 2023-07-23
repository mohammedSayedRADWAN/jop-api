const getAllJops=(req,res)=>{
    res.send('get all jops')
}
const getJob=(req,res)=>{
    res.send('getJob')
}
const updateJob=(req,res)=>{
    res.send('updateJob')
}
const createJob=(req,res)=>{
    res.send('createJob')
}
const deleteJob=(req,res)=>{
    res.send('deleteJob')
}
module.exports={
    getAllJops,
    createJob,
    deleteJob,
    updateJob,
    getJob
}