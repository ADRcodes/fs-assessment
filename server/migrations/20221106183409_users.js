const { v4: uuidv4 } = require("uuid")

exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("id").defaultTo(uuidv4()).primary
    table.string("first_name").notNullable()
    table.string("last_name").notNullable()
    table.string("email").notNullable()
    table.timestamp("created_at").defaultTo(knex.fn.now())
    table.timestamp("updated_at").defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("users")
}
