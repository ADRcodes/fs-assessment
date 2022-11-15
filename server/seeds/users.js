const userData = require("../seed_data/usersCopy")

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert(userData)
    })
}
