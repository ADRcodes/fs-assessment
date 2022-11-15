const userService = require("../services/userService")

module.exports = userController = {
  getAll: async (_req, res, next) => {
    try {
      const users = await userService.getAll()
      res.json(users)
    } catch (error) {
      next(error)
    }
  },
  getById: async (req, res, next) => {
    try {
      console.log(req.params.id)
      const user = await userService.getById(req.params.id)
      res.json(user)
    } catch (error) {
      next(error)
    }
  },
  create: async (req, res, next) => {
    try {
      console.log("User controller:")
      console.log(req.body.first_name)
      await console.log(req.body)
      const user = await userService.create(req.body)
      res.json(user)
    } catch (error) {
      next(error)
    }
  },
  update: async (req, res, next) => {
    try {
      const user = await userService.update(req.params.id, req.body)
      res.json(user)
    } catch (error) {
      next(error)
    }
  },
  delete: async (req, res, next) => {
    try {
      const user = await userService.delete(req.params.id)
      res.json(user)
    } catch (error) {
      next(error)
    }
  },
}
