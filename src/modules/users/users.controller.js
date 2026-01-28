import * as userService from './users.service.js'

export const getUsers = async (req, res) => {
  const users = await userService.getAllUsers()
  res.json(users)
}

export const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id)
  res.json(user)
}

export const updateUserRole = async (req, res) => {
  const user = await userService.updateUserRole(req.params.id, req.body.role)
  res.json(user)
}
