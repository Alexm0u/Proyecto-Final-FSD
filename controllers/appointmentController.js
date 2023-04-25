const { Appointment, Service, User, Mechanic } = require("../models")
const appointmentController = {};

appointmentController.newAppointment = async (req, res) => {
    try {
        const { service_id, user_id, mechanic_id, date } = req.body;
        const newAppointment = {
            service_id: service_id,
            user_id: req.userId,
            mechanic_id: mechanic_id,
            date: date,
        }
        const appointments = await Appointment.create(newAppointment)
        return res.json(appointments)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}

appointmentController.updateAppointment = async (req, res) => {
    try {
        const actualizar = req.body;
        const userId = req.userId
        const appointmentId = req.params.id;
        const appointmentupdated = await Appointment.update(
            { actualizar: actualizar},
            {
            where: {
                id: appointmentId, 
                user_id: userId
            },
            }
        );
        console.log(appointmentupdated) 
        res.json({
            message: "Updated succesfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        })
    }
}

appointmentController.showAppointmentasMechanicByUserid = async (req, res) => {
    try {
        req.params.id;
    let citasActivas = await Appointment.findAll({
        where: {
            user_id: req.params.id,
        },
        include: {
        model: User,
        attributes: ['name','role_id','phone'],
        },
        attributes: ['service_id', 'user_id', "mechanic_id", "date"]
        });
        res.json({
        message: `These are all the appointment of the userId: ${req.params.id}`,
        citasActivas,
        });
        } catch (error) {
            console.error(error);
            res.status(500).json({
            error: error.message,
            }
        )
    }
}


appointmentController.getAllAppointment = async (req, res) => {
    try {
        let citasActivas = await Appointment.findAll({
            include: {
            model: User,
            attributes: ['name','role_id','phone'],
            },
            attributes: ['service_id', 'user_id', "mechanic_id", "date"]
        });
            res.status(200).json({
            message: `These are all the appointment in the calendar`,
            citasActivas,
        });   
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Ups, something were wrong",
            error: error.message
        })
    }
}


appointmentController.showAppointmentasUser = async (req, res) => {
    try {
        const userCitas = await Appointment.findAll(
            {
                where: { 
                    user_id: req.userId 
                },
                include: [
                    Service,
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "role_id", "createdAt", "updatedAt"]
                        },
                    },
                ],
                attributes: {
                    exclude: ["user_id", "mechanic_id", "service_id"]
                }
            }
        )
        return res.json(userCitas)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Ups, something were wrong",
            error: error.message
        })
    }
}

appointmentController.deleteAllAppointment = async (req, res) => {
    try {
        const userCitas = await Appointment.destroy(
            {
                where: { 
                    user_id: req.userId 
                },
            }
        )
        return res.json(userCitas)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Ups, something were wrong",
            error: error.message
        })
    }
}

appointmentController.getMyAppointmentsAsMechanic = async (req, res) => {
    try {
        const mechanicId= req.userId;
        const appointments = await Appointment.findAll(
            {
                where: {
                    id: mechanicId
                },
            },
        );
        return res.json(
            {
            success: true,
            message: "Succesfully recovered my appointment as Mechanic",
            data: appointments
            });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Ups, something were wrong",
            error: error.message
        })
    }
}
    

module.exports = appointmentController;