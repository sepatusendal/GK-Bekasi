import { groq } from "next-sanity";

const programFields = groq`
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  content,
  coverColor,
  coverImage,
  location,
  date,
  featured
`;

export const PROGRAMS_QUERY = groq`*[_type == "program"] | order(_createdAt asc) { ${programFields} }`;
export const FEATURED_PROGRAMS_QUERY = groq`*[_type == "program" && featured == true] | order(_createdAt asc) { ${programFields} }`;
export const PROGRAM_SLUGS_QUERY = groq`*[_type == "program"].slug.current`;
export const PROGRAM_BY_SLUG_QUERY = groq`*[_type == "program" && slug.current == $slug][0] { ${programFields} }`;

const eventFields = groq`
  _id,
  title,
  "slug": slug.current,
  category,
  coverColor,
  coverImage,
  description,
  about,
  agenda,
  date,
  day,
  month,
  time,
  location,
  capacity,
  registered,
  status,
  registrationUrl,
  organizer,
  featured
`;

export const EVENTS_QUERY = groq`*[_type == "event"] | order(date asc) { ${eventFields} }`;
export const UPCOMING_EVENTS_QUERY = groq`*[_type == "event" && status != "completed"] | order(date asc) { ${eventFields} }`;
export const EVENT_SLUGS_QUERY = groq`*[_type == "event"].slug.current`;
export const EVENT_BY_SLUG_QUERY = groq`*[_type == "event" && slug.current == $slug][0] { ${eventFields} }`;

const storyFields = groq`
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  content,
  author,
  publishDate,
  readingTime,
  coverColor,
  coverImage,
  tags,
  featured
`;

export const STORIES_QUERY = groq`*[_type == "story"] | order(publishDate desc) { ${storyFields} }`;
export const FEATURED_STORIES_QUERY = groq`*[_type == "story" && featured == true] | order(publishDate desc) { ${storyFields} }`;
export const STORY_SLUGS_QUERY = groq`*[_type == "story"].slug.current`;
export const STORY_BY_SLUG_QUERY = groq`*[_type == "story" && slug.current == $slug][0] { ${storyFields} }`;

export const GALLERY_QUERY = groq`*[_type == "galleryItem"] | order(_createdAt desc) {
  _id,
  title,
  image,
  caption,
  event,
  date,
  category,
  size,
  color,
  featured
}`;

export const IMPACT_METRICS_QUERY = groq`*[_type == "impactMetric"] | order(coalesce(order, 999) asc) {
  _id,
  label,
  value,
  suffix
}`;

export const LEADERSHIP_QUERY = groq`*[_type == "leadershipMember"] | order(coalesce(order, 999) asc) {
  _id,
  name,
  role,
  bio,
  photo,
  initials,
  color
}`;
