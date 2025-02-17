export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "organizer",
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      role: "organizer",
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      role: "attendee",
    },
    {
      name: "Diana Lee",
      email: "diana.lee@example.com",
      role: "attendee",
    },
    {
      name: "Edward Wilson",
      email: "edward.wilson@example.com",
      role: "organizer",
    },
    {
      name: "Fiona White",
      email: "fiona.white@example.com",
      role: "attendee",
    },
    {
      name: "George Harris",
      email: "george.harris@example.com",
      role: "organizer",
    },
    {
      name: "Hannah Scott",
      email: "hannah.scott@example.com",
      role: "attendee",
    },
    {
      name: "Ian Mitchell",
      email: "ian.mitchell@example.com",
      role: "organizer",
    },
    {
      name: "Jessica Adams",
      email: "jessica.adams@example.com",
      role: "attendee",
    },
  ]);
}
