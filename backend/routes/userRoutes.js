const express = require('express');
const user = require('../models/user');
const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        let newUser = await user.create(req.body)
        if (newUser) {
            return res.status(201).json({ message: "User Created", user: newUser })
        }
    } catch (error) {
        return res.status(500).json({ message: "Some Error ...", error: error })
    }
});
router.get('/userList', async (req, res) => {
    try {
        let userList = await user.find()
        if (userList) {
            return res.status(200).json({ message: "User Created", users: userList })
        }
    } catch (error) {
        return res.status(500).json({ message: "Some Error ...", error: error })
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const userById = await user.findById(id);
        if (userById) {
            return res.status(200).json({ message: "User Details Fetched", user: userById })
        }
    } catch (error) {
        return res.status(500).json({ message: "Some Error ...", error: error })
    }
});
router.post('/update/:id', async (req, res) => {
    const { id } = req.params

    try {
        const userById = await user.findByIdAndUpdate(id, {
            $set: {
                ...req.body
            }
        });
        if (userById) {
            return res.status(200).json({ message: "User Updated ", user: userById })
        }
    } catch (error) {
        return res.status(500).json({ message: "Some Error ...", error: error })
    }
});
// Add other routes as needed...

module.exports = router;
