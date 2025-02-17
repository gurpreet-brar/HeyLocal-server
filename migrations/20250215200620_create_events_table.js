export function up(knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description", "longtext").notNullable();
    table.string("location").notNullable();
    table.date("date").notNullable();
    table.time("time").notNullable();
    table.integer("duration").notNullable();
    table.integer("total_spots").notNullable();
    table
      .integer("organizer_id")
      .unsigned()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("chat_link");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

export function down(knex) {
  return knex.schema.dropTable("events");
}
