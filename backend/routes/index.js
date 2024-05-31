const express = require('express');
const router = express.Router();
const userRoutes=require("../routes/userRoutes")

router.use('/user', userRoutes);
router.get('/', (req,res)=>{
    return res.json({message:"api routes"})
});
// Add other routes as needed...

module.exports = router;
