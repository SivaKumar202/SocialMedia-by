
const sayhello = (req, res) => {
    res.send("Hello from userController!");
    return res.status(200)
};

const user = (req,res)=>{
    res.send("this is userContrllor")
    return res.status(200)
}

module.exports = { sayhello, user};
