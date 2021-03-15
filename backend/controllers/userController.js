import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

const authUser = asyncHandler(async (req, res) => {
  const { email, passowrd } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(passowrd))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }

})

const getUserProfile = asyncHandler(async (req, res) => {
  res.send('Sucess')

})

export {
  authUser,
  getUserProfile
}