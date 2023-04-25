const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');
const isStaff = require('../middlewares/isStaff');
const router = require('express').Router();

router.post('/appointment',verifyToken, appointmentController.newAppointment);
router.get('/appointmentuser',verifyToken, appointmentController.showAppointmentasUser);  
router.put('/appointment/update/:id',verifyToken, appointmentController.updateAppointment);
router.get('/appointment/:id',verifyToken,isStaff, appointmentController.showAppointmentasMechanicByUserid);
router.get('/appointments',verifyToken,isAdmin, appointmentController.getAllAppointment);
router.delete('/appointment/deleteall',verifyToken,appointmentController.deleteAllAppointment);  
router.get('/appointmentAsMechanic', verifyToken, isStaff, appointmentController.getMyAppointmentsAsMechanic);

module.exports = router;