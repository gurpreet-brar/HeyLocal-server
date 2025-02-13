# HeyLocal

## Overview

**HeyLocal** is Local events community app that allows users to create, discover, and engage in local community-driven events like dance class, coding workshop, book club etc.

It allows users to strengthen their bonds in their community allowing them to connect and collaborate with local people.

### Problem Space

- The Event management apps that exist mostly cater to big events and lacks in providing dedicated platform for local communities.

- There is a need of a platform that is only for local communities and allows locals to collaborate on that platform building stronger community relations.

### User Profile

- **Target Audience** - People looking for different activities in their town or organizers that want to organize a small event at a common place or their home.
- **Using the App**
  - Users can create free events as per their interests or requirement.
  - Attendees can join the events they want to attend
  - Attendees can collaborate on chat before the event enabling collaboration

### Features

**Create Events**

- Includes adding title, description of the event,images related to event, time, location, duration on the event.

**Search and Filter Events**

- Users can search for events based on their areas of interest like music, yoga etc

**Google Maps Integration**

- To show location of events

**Event Pods**

- Allows attendees to collaborate via chat on whatsapp group for the event happening.

**Images Gallery**

- Showcase images of events that have happened in the past

## Implementation

### Tech Stack

| **Component** | **Technology** |

| ------------- | ------------------------------------ |

| Frontend | HTML, Sass, React.js |

| Backend | Node.js, Express.js |

| Database | MySQL (using Knex.js) |

| APIs | Google Maps API |

| Image Storage | Cloudinary |

| Hosting | Netlify (Frontend), Heroku (Backend) |

### APIs

- **Google Maps API** - For displaying events based on location.
- **Cloudinary**- For image uploads and storage
- **Custom API**- For creating events

### Sitemap

- **Home Page** - Displays trending events and past event images

- **Events Page** - Allows users to look up events and filter them

- **Event Details Page**- Displays details of event and gives option to users to join chat pod for the event

- **Create Event Page**- Organizers can create and manage the events

### Mockups

![Screenshot of Main page ](./assets/images/Main%20Page.png)

![Screenshot of Events page ](./assets/images/Events%20Page.png)

![Screenshot of Event Details page ](./assets/images/Event%20details%20Page.png)

![Screenshot of Create Event page ](./assets/images/Create%20Event%20Page.png)

### Data

![Screenshot of entity relationship diagram for tables in database](./assets/images/Screenshot%202025-02-13%20at%201.14.47%E2%80%AFAM.png)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

- GET `/events`

Output - `[ { "id": 1, "title": "Yoga Class", "location": "City Park", "date": "2024-02-20","Total spots": 20,"images" : [link1,link2,link3]} ]`

- GET `/events/:id`

Output - `{ "id": 1, "title": "Yoga Class", "description": "A relaxing morning session", "event-pod_link": "https://chat.whatsapp.com/xyz" }`

- POST `/events/create`

Output - `{ "message": "Event created successfully", "eventId": 1,"title":"Yoga Class" }`

- POST `/events/:id/join`

Output -`{ "message": "You have joined the event", "eventId": 1 ,"title":"Yoga Class"}`

## Roadmap

## Future Implementations

- **Notifications**- Real time notifications for new events in the area
- **Event Recommendations** - Recommendations to users based on past acitivity
- **User Authentication** - Allows users or organizers to sign up and select their role
