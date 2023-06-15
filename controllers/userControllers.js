// const { User } = require('../models')
// const userSchema = require('../models/User')

// const getUser = async (req, res) => {
//   const user = await User.find({})
//   res.json(user)
// }

// const getUserById = async (req, res) => {
//   try {
//     const { id } = req.params
//     const user = await User.findById(id)
//     if(!user) throw Error('user not found')
//     res.json(user)
//   } catch (e){
//     console.log(e)
//     res.send('user not found')
//   }
// }

// const createUser = async (req, res) => {
//   try {
//       const user = await new User(req.body)
//       await user.save()
//       return res.status(201).json({
//           user,
//       });
//   } catch (error) {
//       return res.status(500).json({ error: error.message })
//   }
// }

// const updateUserById = async (req, res) => {
//   try {
//       const { id } = req.params;
//       const user = await User.findByIdAndUpdate(id, req.body, { new: true })
//           // if (error) {
//           //     res.status(500).send(error);
//           // }
//           if (!user) {
//               res.status(500).send('User not found!');
//           }
//           return res.status(200).json(user);
//   } catch (error) {
//       return res.status(500).send(error.message);
//   }
// }

// const deleteUserById = async (req, res) => {
//   try {
//     const { id } = req.params
//     const user = await User.findByIdAndDelete(id)
//     if(!user) throw Error(`User not found`)
//     res.json('User not found')
// } catch (e){
//     console.log(e)
//     res.send(`User not deleted`)
// }
// }

// module.exports = {
//   getUser,
//   getUserById,
//   createUser,
//   updateUserById,
//   deleteUserById,
// }