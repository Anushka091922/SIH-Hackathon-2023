const Service = require('../models/serviceModel')
const mongoose = require('mongoose')

// get all services
const getServices = async (req, res) => {
    const city = req.query.city
    // console.log(state);

    const filter = {}
    if(city) {
        filter.city = city
    }

    const services = await Service.find(filter)

    res.status(200).json(services)
}

// create new service
const createService = async (req, res) => {
    const { state, city, courts } = req.body 

    // add doc to db
    try {
        const service = await Service.create({state, city, courts})
        res.status(200).json(service)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a service
const deleteService = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such service'})
    }

    const service = await Service.findOneAndDelete({_id: id})

    if (!service) {
        return res.status(400).json({error: 'No such service'})
    }

    res.status(200).json(service)
}


module.exports = {
    createService,
    getServices,
    deleteService
}