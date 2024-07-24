import express from 'express'
import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModel.js'
import generateToken from '../utils/generateToken.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()
console.log("Currently in adminRoutes")
router.post(
  '/',
  asyncHandler(async (req, res) => {
    console.log("Currently in adminRoutes+ '/'")
    // const students = await Student.find({})
    const { email, password } = req.body
    console.log("Password Entered:",typeof(password))
    const user = await Admin.findOne({ email })
    console.log("User:",user)

    if (user && (await user.matchPassword(password))) {
      console.log("Correct details of admin")
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  })
)

//get logged in user's profile
//may be this route is for fetching information from the token
//stored in the local storge in our browser which is chrome in my case

router.get(
  '/user',
  protect,
  asyncHandler(async (req, res) => {
    console.log("Currently in adminRoutes+ '/user'")
    const user = await Admin.findById(req.user._id)
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
)

export default router
