import * as customerService from './customers.service.js'

export const createCustomer = async (req, res) => {
  const customer = await customerService.createCustomer(req.body)
  res.status(201).json(customer)
}

export const getCustomers = async (req, res) => {
  const result = await customerService.getCustomers(req.query)
  res.json(result)
}

export const getCustomerById = async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.id)
  res.json(customer)
}

export const updateCustomer = async (req, res) => {
  const customer = await customerService.updateCustomer(req.params.id, req.body)
  res.json(customer)
}

export const deleteCustomer = async (req, res) => {
  await customerService.deleteCustomer(req.params.id)
  res.json({ message: 'Customer deleted successfully' })
}

