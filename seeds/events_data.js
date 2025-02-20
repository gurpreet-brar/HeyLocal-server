export async function seed(knex) {
  await knex("events").del();
  await knex("events").insert([
    {
      title: "Sunrise Yoga Class",
      description:
        "Start your day with a peaceful morning yoga session surrounded by nature. This class will guide you through gentle stretches, mindful breathing, and relaxation techniques to improve flexibility and reduce stress. Expect a serene atmosphere with a mix of beginners and experienced practitioners.\n\n**What to Expect:**\n- Guided warm-up and stretching\n- Breathing exercises for relaxation\n- Basic and intermediate yoga poses\n- Cool down meditation session\n\n**Prerequisites:**\n- No prior yoga experience needed\n- Bring a yoga mat and water bottle\n- Wear comfortable, breathable clothing",

      location: "Green Park, Toronto",
      category: "Wellness",
      date: "2025-03-15",
      time: "07:00",
      duration: 60,
      total_spots: 15,
      organizer_id: 2,
      chat_link: "https://chat.whatsapp.com/example1",
    },
    {
      title: "Beginner Dance Class",
      description:
        "Join us for a fun and energetic salsa dance class designed for absolute beginners. Whether you're looking to pick up a new skill, meet new people, or simply have fun, this class is the perfect introduction to salsa.\n\n**What to Expect:**\n- Learn basic salsa footwork and partner moves\n- Improve your rhythm and coordination\n- No partner needed, we rotate partners\n- Light refreshments provided\n\n**Prerequisites:**\n- No prior dance experience required\n- Wear comfortable clothing and shoes with a smooth sole",
      location: "Downtown Dance Studio, Vancouver",
      category: "Dance",
      date: "2025-04-02",
      time: "18:30",
      duration: 90,
      total_spots: 20,
      organizer_id: 1,
      chat_link: "https://www.facebook.com/groups/example2",
    },
    {
      title: "Piano Basics for Adults",
      description:
        "Ever wanted to play the piano? This beginner-friendly class is perfect for adults who want to start their musical journey. You will learn basic music theory, finger placement, and simple songs to build confidence at the keys.\n\n**What to Expect:**\n- Introduction to piano keys and notes\n- Basic chords and scales\n- Learn to play simple melodies\n- Small group setting with individual guidance\n\n**Prerequisites:**\n- No prior music knowledge required\n- A notebook for music notes recommended",

      location: "Music Academy, Scarborough",
      category: "Music & Arts",
      date: "2025-03-20",
      time: "19:00",
      duration: 120,
      total_spots: 10,
      organizer_id: 5,
      chat_link: "https://chat.whatsapp.com/example3",
    },
    {
      title: "Acoustic Music Night",
      description:
        "Enjoy a cozy and intimate evening filled with live acoustic performances from talented local artists. Whether you're a music lover or just looking for a relaxed night out, this event promises a warm atmosphere with great tunes and good company.\n\n**What to Expect:**\n- Live performances from various acoustic artists\n- Comfortable and intimate setting\n- Optional open mic segment for attendees\n- Light snacks and drinks available\n\n**Prerequisites:**\n- No registration required, just bring a good vibe!",
      location: "Cozy Cafe, Toronto",
      category: "Entertainment",
      date: "2025-05-10",
      time: "20:00",
      duration: 180,
      total_spots: 25,
      organizer_id: 9,
      chat_link: "https://www.facebook.com/groups/example4",
    },
    {
      title: "Crochet and Coffee Meetup",
      description:
        "Unwind with a warm cup of coffee and a relaxing crochet session in a friendly environment. Whether you are an experienced crocheter or a complete beginner, come join us for an evening of crafting and conversation.\n\n**What to Expect:**\n- Guided instruction for beginners\n- Bring your own project or start a new one\n- Meet and chat with other crafters\n- Enjoy a cozy atmosphere with coffee and tea provided\n\n**Prerequisites:**\n- No prior crochet experience needed\n- Bring your own yarn and crochet hooks (limited supplies available)\n- A love for crafts and community spirit",
      location: "Art Cafe, Edmonton",
      category: "Crafts & Hobbies",
      date: "2025-04-18",
      time: "17:30",
      duration: 90,
      total_spots: 12,
      organizer_id: 7,
      chat_link: "https://chat.whatsapp.com/example5",
    },
  ]);
}
