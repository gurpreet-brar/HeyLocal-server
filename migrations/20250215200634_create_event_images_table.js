export function up(knex) {
  return knex.schema.createTable("event_images", (table) => {
    table.increments("id").primary();
    table
      .integer("event_id")
      .unsigned()
      .references("events.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("image_url").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

export function down(knex) {
  return knex.schema.dropTable("event_images");
}
