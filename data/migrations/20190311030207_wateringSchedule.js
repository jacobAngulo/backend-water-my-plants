exports.up = function(knex, Promise) {
  return knex.schema.createTable("watering", table => {
    table.increments();
    table
      .integer("plantId")
      .references("id")
      .inTable("plants");
    table.datetime("wateringTime").notNullable();
    table.boolean("smsDelivered").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("watering");
};
