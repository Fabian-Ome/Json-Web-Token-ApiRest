import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';
import role from '../models/role';

export const singUp = async (req, res) => {
    const { username, email, password, roles } = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });

    if (roles) {
        const foundRoles = await role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map(role => role._id);
    } else {
        const rol = await role.findOne({ name: "user" });
        newUser.roles = [rol._id];
    }

    const savedUser = await newUser.save();
    console.log(savedUser);

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400 //24hrs 
    })
    res.status(200).json({ token });
}
export const singIn = async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email }).populate('roles');
    console.log(userFound)

    if (!userFound) return res.status(400).json({ message: "User not found" })

    await User.comparePassword(req.body.password, userFound.password)

    console.log(userFound)
    res.json({ token: "" })
}
