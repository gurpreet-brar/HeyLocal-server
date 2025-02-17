export async function seed(knex) {
  await knex("event_images").del();
  await knex("event_images").insert([
    {
      event_id: 1,
      image_url:
        "https://res.cloudinary.com/dxtynrye0/image/upload/v1739681430/Yoga_l0x2rf.jpg",
    },
    {
      event_id: 2,
      image_url:
        "https://res.cloudinary.com/dxtynrye0/image/upload/v1739681737/Dance_nzehje.jpg",
    },
    {
      event_id: 3,
      image_url:
        "https://res.cloudinary.com/dxtynrye0/image/upload/v1739681830/Piano_pevirr.jpg",
    },
    {
      event_id: 4,
      image_url:
        "https://res.cloudinary.com/dxtynrye0/image/upload/v1739681916/Music_zu5mn9.jpg",
    },
    {
      event_id: 5,
      image_url:
        "https://res.cloudinary.com/dxtynrye0/image/upload/v1739682223/Crochet_fkfd0b.jpg",
    },
  ]);
}
