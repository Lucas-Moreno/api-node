const UserModel = require("../../models/user/user.model.js")

const {
  response201WithData,
  response500WithMessage
} = require("../../helpers/expressRes")

const getUser = async (req, res) => {

    try {
      const data = await UserModel.getUser()
      return response201WithData(res, data)
    }
    catch (e) {
      console.log(e)
      return response500WithMessage(res, "Oups failed ! T_T")
    }
  }
  


module.exports = { 
    getUser,
}