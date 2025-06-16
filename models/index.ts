export interface User {
  id: string;
  username: string;
  email: string;
  profile: Profile;
  authenticityBadge: boolean;
}

export interface Post {
  id: string;
  imageUrl: string;
  caption: string;
  date: string; // ISO 8601 format
}

export interface Writing {
  id: string;
  title: string;
  content: string;
  headerImageUrl?: string;
  createdAt: string;
}

export interface Profile {
  name: string;
  avatarUrl: string;
  bio: string;
  postsCount: number;
  inspiresCount: number;
  inspiredByCount: number;
  passions: string[];
  hobbies: string[];
  dreams: string[];
  posts: Post[];
  writings: Writing[];
  lifeTimeline: LifeEvent[];
  inspirations: Inspiration[];
  visualInspirations: VisualInspiration[];
  reflections: Reflection[];
}

export interface LifeEvent {
  id: string;
  date: string; // ISO 8601 format
  title: string;
  description: string;
  media?: {
    type: 'image' | 'audio';
    url: string;
  };
}

export interface Inspiration {
  id: string;
  type: 'quote' | 'book' | 'hero';
  content: string;
  author?: string;
}

export interface VisualInspiration {
  id: string;
  imageUrl: string;
  caption?: string;
}

export interface Reflection {
  id: string;
  date: string; // ISO 8601 format
  title: string;
  content: string;
  isPrivate: boolean;
}
