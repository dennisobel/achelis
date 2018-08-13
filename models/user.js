const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be 8 characters or more.'],
    }    
})

const UserSchema = mongoose.model("UserSchema", userSchema);
// export default UserSchema;
module.exports.UserSchema = UserSchema