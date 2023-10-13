const ImagetoText = require("../model/ImageModel");
const UserSchema = require("../model/user");
const { formatUser, formatImage } = require("../utils/helper");




exports.AllUsers = async (req,res) => {
    const user = await UserSchema.find({})
        .sort({ createdAt: -1 })
    const profiles=user.map((user)=>formatUser(user))
    res.json({ profiles });
}

exports.getAllImage = async (req, res) => {
    const { userId } = req.body;
    const images = await ImagetoText.find({ userId })
    // const profiles=
    res.json({ images });
}

// url, public_id, isVerified,
exports.ChangeVerfication = async (req, res) => {
    const { userId, image } = req.body;
    // console.log(userId)
    try {
        const newUser = await ImagetoText.deleteOne({ userId });
        const model = new ImagetoText({ userId });
        console.log(model)
        model.image = image;
        
        console.log(model)
        await model.save();
        // await newUser.save();
        res.json({ model });
        
    }
    catch (err) {
        res.send(err)
    }
}