const knex = require("knex")(require("../knexfile.js").development)

module.exports = userService = {
  getAll: async () => {
    const users = await knex("users")
    return users
  },
  getById: async (id) => {
    const user = await knex("users").where("id", id)
    return user
  },
  create: async (user) => {
    console.log("User service:")
    await console.log(user)
    const users = await knex("users").insert(user)
    return users
  },
  update: async (id, user) => {
    const users = await knex("users").where("id", id).update({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    })
    return users
  },
  delete: async (id) => {
    const users = await knex("users").where("id", id).del()
    return users
  },
}
