const User = require("../Models/User");
const bcrypt = require("bcrypt");
const sayhello = (req, res) => {
  res.send("Hello from userController!");
  return res.status(200);
};

  const registerUser = async (req, res) => {
  // res.send("register route");
  // return res.status(200)
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User Created",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to register user: ${error.message}` });
  }
};

const loginUser = async (req,res)=>{
  try {
    const{email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const testHash = await bcrypt.hash(password,salt);
    const user = await User.findOne({email})
    if(!user){
      return res.status(401).json({message:"Invalid User"})
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(401).json({message:"Wrong password"})
    }
    res.status(200).json({
      message : 'loging Successfull',
      user:{
        id:user_id,
        username:user.username,
        email: user.email,
        ProfilePicture: user.profilePicture
      }
    })
  } catch (error) {
    res.status(500).json({error:`unable to login: ${error.message}`})
    
  }

}

const updateUser = async (req,res)=>{
  const {id} = req.params;
  const {username, email, password, profilePicture} = req.body;
  try {
    const user = await User.findById(id);
    if(!user){
      return res.status(404).json({message:"user not found"})
    }
    if(username && username !== user.username){
      const existingUserName = await user.findOne({username})
    }
    if(existingUser){
      return res.status(400).json({message:`username already taken`})
    }
    if(email && email !== user.email){
      const existingEmail = await User.findOne({email})
    }
    
  } catch (error) {
    
  }
}

module.exports = { sayhello, registerUser, loginUser };
