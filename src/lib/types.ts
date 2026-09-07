export type ProgramCategory =
  | "Youth Development"
  | "Social Impact"
  | "Community"
  | "Education"
  | "Creative";

export interface Program {
  slug: string;
  title: string;
  category: ProgramCategory;
  description: string;
  content: string[];
  coverColor: string;
  location: string;
  date: string;
  featured: boolean;
}

export type EventStatus =
  | "registration-open"
  | "registration-closed"
  | "completed";

export interface EventItem {
  slug: string;
  title: string;
  category: string;
  coverColor: string;
  description: string;
  about: string[];
  agenda: { time: string; item: string }[];
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  status: EventStatus;
  registrationUrl: string;
  organizer: string;
  featured: boolean;
}

export type StoryCategory = "News" | "People" | "Impact" | "Ideas";

export interface Story {
  slug: string;
  title: string;
  category: StoryCategory;
  excerpt: string;
  content: string[];
  author: string;
  publishDate: string;
  readingTime: number;
  coverColor: string;
  tags: string[];
  featured: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  event: string;
  date: string;
  category: string;
  size: "large" | "small" | "wide" | "tall";
  color: string;
  featured: boolean;
}

export interface ImpactMetric {
  label: string;
  value: number;
  suffix: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}

export interface VolunteerOpportunity {
  slug: string;
  title: string;
  slots: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
  location: string;
  deadline: string;
}
