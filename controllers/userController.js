const { User } = require("../models/index");
const userController = {};
const bcrypt = require('bcrypt');

userController.newUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const user = {
      name: name,
      email: email,
      phone: phone,
      password: encryptedPassword,
      role_id: 1
    };
    const users = await User.create(user);
    return res.json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

userController.getAllUser = async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
};


userController.updateUser = async (req, res) => {
  try {
      const { name, phone, email, password } = req.body;
      const userId = req.userId

      const encryptedPassword = bcrypt.hashSync(password, 10);

      const updateUser = await User.update(
          {
              name, 
              phone, 
              email, 
              password: encryptedPassword,
          },
          {
              where: {
                  id: userId
              }
          }
      );

      if (!updateUser) {
          return res.send({
              success: false,
              message: "Can't update user profile",
              error_message: error.message
          })
      }

      return res.send({
          success: true,
          message: "Updated user profile successfully",
          updateUser: updateUser
      })
  } catch (error) {
      return res.status(500).json(
          {
              success: false,
              message: "Somenthing went wrong",
              error_message: error.message
          }
      )
  }
}
userController.updateUserAsAdmin = async (req, res) => {
    try {
        const { name, phone, role_id } = req.body;
        const userId = req.params.id
  

  
        const updateUser = await User.update(
            {
                name, 
                phone, 
                role_id,
            },
            {
                where: {
                    id: userId
                }
            }
        );
  
        if (!updateUser) {
            return res.send({
                success: false,
                message: "No se ha podido actualizar",
                error_message: error.message
            })
        }
  
        return res.send({
            success: true,
            message: "Actualizado correctamente",
            updateUser: updateUser
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
  }

userController.findAllUsersMechanic = async (req, res) => {
  try {
      const user = await User.findAll(
          {
              attributes: {
                  exclude: ["password"]
              }
          }
      )
      return res.json(
          {
              success: true,
              message: "Done:",
              usuarios: user
          }
      );
  } catch (error) {
      return res.status(500).json(
          {
              success: false,
              message: "Somenthing went wrong",
              error_message: error.message
          }
      )
  }
}

userController.getUserbyId= async(req, res)=> {
  try {
      const userId = req.params.id;
      const roleuser = await User.findByPk(userId, {
          include: {all: true}
      }); 
      return res.json(roleuser);
  } catch (error) {
      return res.status(500).json({
          success: false,
          message: "Something went wrong",
          error: error.message
      })
  }
}

userController.getMyUser = async(req,res) => {
  try {
      const user = await User.findByPk(req.userId);
      return res.json(
          {
              success: true,
              message: "User succesfully retrieved",
              data: user
          }
      )
  } catch (error) {
      return res.status(500).json(
          {
              success: false,
              message: "Something went wrong",
              error: error.message
          }
      );
  }
}

module.exports = userController;