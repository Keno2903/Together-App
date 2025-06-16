import { User } from '@/models';

export const sampleUser: User = {
  id: 'u1',
  username: 'alex_storyteller',
  email: 'alex.storyteller@example.com',
  authenticityBadge: true,
  profile: {
    name: 'Alex Taylor',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    bio: 'Just a human trying to find the authentic connections in a digital world. Lover of rainy days, good books, and deep conversations.',
    postsCount: 3,
    inspiresCount: 142,
    inspiredByCount: 89,
    passions: ['Creative Writing', 'Indie Music', 'Philosophy'],
    hobbies: ['Photography', 'Hiking', 'Playing the guitar'],
    dreams: ['Write a novel', 'Travel to Japan', 'Start a podcast'],
    posts: [
      {
        id: 'p1',
        imageUrl:
          'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1935&auto=format&fit=crop',
        caption: 'The view from my hike today. #nature #peaceful',
        date: '2024-06-15T14:00:00Z',
      },
      {
        id: 'p2',
        imageUrl:
          'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
        caption: 'My happy place. #writing #coffee',
        date: '2024-06-14T09:30:00Z',
      },
      {
        id: 'p3',
        imageUrl:
          'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
        caption: 'New song in the works! 🎸',
        date: '2024-06-12T20:00:00Z',
      },
    ],
    lifeTimeline: [
      {
        id: 'le1',
        date: '2022-08-15T10:00:00Z',
        title: 'Graduated University',
        description:
          'Finished my degree in Literature. A bittersweet day filled with pride and uncertainty.',
        media: {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      },
      {
        id: 'le2',
        date: '2023-01-20T18:30:00Z',
        title: 'Adopted My Dog, Rusty',
        description:
          'Brought home this little ball of fur. My life has been infinitely better since.',
        media: {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1556866261-8763a7692b58?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      },
    ],
    inspirations: [
      {
        id: 'i1',
        type: 'quote',
        content: 'The only true wisdom is in knowing you know nothing.',
        author: 'Socrates',
      },
      {
        id: 'i2',
        type: 'book',
        content: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
      },
    ],
    visualInspirations: [
      {
        id: 'vi1',
        imageUrl:
          'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
        caption: 'Aesthetic for focus.',
      },
      {
        id: 'vi2',
        imageUrl:
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop',
        caption: 'A beautiful sunset.',
      },
    ],
    writings: [
      {
        id: 'w1',
        title: 'My Journey into Mindfulness',
        content:
          "It all started a few years ago... I was feeling lost, disconnected from myself and the world around me. My mind was a whirlwind of thoughts, anxieties, and what-ifs. I stumbled upon a book about mindfulness, and it was a revelation. The practice of being present, of observing my thoughts without judgment, was transformative. It wasn't easy at first. My mind would wander constantly. But with patience and daily practice, I started to find moments of stillness. In that stillness, I found clarity. I learned to appreciate the simple things: the warmth of the sun, the taste of my morning coffee, the sound of rain. Mindfulness didn't erase my problems, but it changed my relationship with them. It gave me the tools to navigate life's challenges with a sense of calm and resilience. It's a journey, not a destination, and it's one I'm grateful to be on.",
        createdAt: '2023-09-15',
        headerImageUrl:
          'https://images.unsplash.com/photo-1474418397713-7e15e4d5e154?q=80&w=2070&auto=format&fit=crop',
      },
      {
        id: 'w2',
        title: 'The Power of Authentic Connection',
        content:
          "In a world of digital noise, true connection has become a rare commodity. We collect friends and followers, but how many of them do we truly know? How many know the real us? I've been actively seeking more authentic connections in my life. It means being vulnerable, sharing my fears and my dreams, and listening with my whole heart when others do the same. It's about quality over quantity. It's about creating a safe space where we can be ourselves, imperfections and all. These connections are the bedrock of a happy life. They nourish our souls and remind us that we are not alone.",
        createdAt: '2023-08-22',
      },
    ],
    reflections: [
      {
        id: 'r1',
        date: '2024-05-10T22:00:00Z',
        title: 'On Vulnerability',
        content:
          "Realized today that being vulnerable isn't a weakness, but a prerequisite for connection. It's scary, but necessary.",
        isPrivate: true,
      },
    ],
  },
};
