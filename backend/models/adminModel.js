import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
console.log("adminModel is called....")
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)
adminSchema.methods.matchPassword = async function (enteredPassword) {
  console.log('reached here with password',enteredPassword)
  console.log(this.password)
  return (this.password===enteredPassword)
  //return await bcrypt.compare(enteredPassword, this.password)
}
const Admin = mongoose.model('Admin', adminSchema)
/* console.log('Adding Admin...........');
const me=new Admin({
  name:'Admin',
  email:'admin@test.com',
  image:'no image yet',
  password:'12345678',
  isAdmin:true
})
me.save()
.then(console.log('Admin Added')) */
export default Admin
