const db = require("./../models");

const userController = {};

userController.post = (req,res) => {
    console.log(req.body)
    const {
        name,
        email,
        telephone
    } = req.body;
    
    /*
    const user = new db.UserSchema({
        name,
        email,
        password
    })

    user.save().then((newUser)=>{
        res.status(200).json({
            success: true,
            data: newUser
        });
    }).catch((err)=>{
        res.status(500).json({
            message: err
        })
    })
    */
}

userController.get = (req,res) => {
    db.UserSchema
        .find({})
        .then((users)=>{
            console.log(users)
            return res.status(200).json({
                success: true,
                data: users
            })
        })
        .catch((err)=>{
            return res.status(500).json({
                message: err
            })
        })
}

// export default userController
module.exports = userController