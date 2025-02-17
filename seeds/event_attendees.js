export async function seed(knex) {
  await knex("event_attendees").del();
  await knex("event_attendees").insert([
    { id: 1, event_id: 1, user_id: 4 },
    { event_id: 1, user_id: 3 },
    { event_id: 1, user_id: 6 },
    { event_id: 1, user_id: 8 },
    { event_id: 1, user_id: 10 },
    { event_id: 2, user_id: 4 },
    { event_id: 2, user_id: 3 },
    { event_id: 2, user_id: 6 },
    { event_id: 2, user_id: 8 },
    { event_id: 2, user_id: 10 },
    { event_id: 3, user_id: 4 },
    { event_id: 3, user_id: 3 },
    { event_id: 3, user_id: 6 },
    { event_id: 3, user_id: 8 },
    { event_id: 3, user_id: 10 },
    { event_id: 4, user_id: 4 },
    { event_id: 4, user_id: 3 },
    { event_id: 4, user_id: 6 },
    { event_id: 4, user_id: 8 },
    { event_id: 4, user_id: 10 },
    { event_id: 5, user_id: 4 },
    { event_id: 5, user_id: 3 },
    { event_id: 5, user_id: 6 },
    { event_id: 5, user_id: 8 },
    { event_id: 5, user_id: 10 },
  ]);
}
