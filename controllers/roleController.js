const { User, Role } = require("../models/index");
const bcrypt = require('bcrypt');
const role = require("../models/role");
const roleController = {};

roleController.newRole = async (req, res) => {
    try {
        const { role_id } = req.body;
        const userId = req.params.id
        const updateUser = await User.update(
        {
            role_id: role_id,
        },
        {
            where: {
            id: userId
            }
        }
        );
        if (!updateUser) {
        return res.send('User not updated')
        }
        return res.send('User updated')
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something were wrong",
            error: error.message
        })
    }
}
roleController.getAllRoles = async (req, res) => {
    const roles = await Role.findAll();
    return res.json(roles);
  };

module.exports = roleController;