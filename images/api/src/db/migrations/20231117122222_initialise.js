/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    //make users table = api
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.uuid('uuid').defaultTo(knex.fn.uuid());
        table.string("username").notNullable();
        table.string("email").notNullable();
        table.string("passwoord").notNullable();

    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};