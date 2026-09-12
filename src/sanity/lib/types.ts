import type { Image, PortableTextBlock } from "sanity";

export interface SanityProgram {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  content: PortableTextBlock[] | null;
  coverColor: string;
  coverImage: Image | null;
  location: string;
  date: string;
  featured: boolean;
}

export type SanityEventStatus =
  | "registration-open"
  | "registration-closed"
  | "completed";

export interface SanityEvent {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverColor: string;
  coverImage: Image | null;
  description: string;
  about: PortableTextBlock[] | null;
  agenda: { time: string; item: string }[] | null;
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  status: SanityEventStatus;
  registrationUrl: string;
  organizer: string;
  featured: boolean;
}

export interface SanityStory {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: PortableTextBlock[] | null;
  author: string;
  publishDate: string;
  readingTime: number;
  coverColor: string;
  coverImage: Image | null;
  tags: string[] | null;
  featured: boolean;
}

export interface SanityGalleryItem {
  _id: string;
  title: string;
  image: Image | null;
  caption: string;
  event: string;
  date: string;
  category: string;
  size: "large" | "small" | "wide" | "tall";
  color: string;
  featured: boolean;
}

export interface SanityImpactMetric {
  _id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface SanityLeadershipMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo: Image | null;
  initials: string;
  color: string;
}

export interface SanityPledge {
  _id: string;
  name: string;
  kecamatan: string | null;
  _createdAt: string;
}

export interface SanityPollOption {
  _key: string;
  label: string;
  votes: number;
}

export interface SanityPoll {
  _id: string;
  question: string;
  options: SanityPollOption[];
}
