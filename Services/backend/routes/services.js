// API Endpoints

// GET: /services
// GET: /services/:state
// POST: /services
// DELETE: /services/:state

const express = require('express')

const {
    createService,
    getServices,
    deleteService
} = require('../controllers/serviceController')

const router = express.Router()

// GET all services
router.get('/', getServices)

// // GET all services
// router.get('/:state', getService)

// ADD a new service
router.post('/', createService)

// DELETE a service
router.delete('/:state', deleteService)

module.exports = router