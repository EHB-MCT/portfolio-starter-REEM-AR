/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.uuid('uuid').defaultTo(knex.fn.uuid());
        table.string("username").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
    }).then(() => {
        return knex.schema.createTable("favorite_roses", (table) => {
            table.increments("id").primary();
            table.integer("user_id").unsigned().references("users.id").onDelete('CASCADE');
            table.string("rose_name").notNullable();
            table.string("color").notNullable();
            table.boolean("scent").defaultTo(false); // default = no scent
        });
    }).then(() => {
        return knex.schema.createTable("favorite_colors", (table) => {
            table.increments("id").primary();
            table.integer("user_id").unsigned().references("users.id").onDelete('CASCADE');
            table.string("color").notNullable();
        });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("favorite_colors")
        .then(() => {
            return knex.schema.dropTableIfExists("favorite_roses");
        })
        .then(() => {
            return knex.schema.dropTableIfExists("users");
        });
};
