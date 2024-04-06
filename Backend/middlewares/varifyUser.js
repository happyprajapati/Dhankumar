const varifyUser = async(req,res)=>{
    const userId = req.body.userId
    if(userId != null) {
    return res.json({
        code: 200,
        msg: "User found.",
        success: false,
      });
    }
    return res.json({
        code: 500,
        msg: 'User not found.',
        success: false,
      });
}

module.exports = {varifyUser}