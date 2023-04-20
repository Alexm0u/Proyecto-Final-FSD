const jwt = require('jsonwebtoken');
const mechanic = require('../models/mechanic');

const isStaff = (req, res, next) => {
    try {
        if (req.roleId !== 2){
            return res.send('You are not a Mechanic')
        }
        next();
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = isStaff;