import * as taskService from './tasks.service.js'

export const createTask = async (req, res) => {
  const task = await taskService.createTask(req.body)
  res.status(201).json(task)
}

export const getTasks = async (req, res) => {
  const tasks = await taskService.getTasks(req.user)
  res.json(tasks)
}

export const updateTaskStatus = async (req, res) => {
  const task = await taskService.updateTaskStatus(
    req.params.id,
    req.body.status,
    req.user
  )
  res.json(task)
}
