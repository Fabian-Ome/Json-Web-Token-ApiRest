import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';

export const singUp = async (req, res) => {
    const { username, email, password, roles } = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400 //24hrs 
    })
    res.json(token);
}
export const singIn = async (req, res) => { }
