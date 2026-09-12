import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Pages here rely on on-demand revalidation (the Sanity webhook hitting
  // /api/revalidate) rather than pure time-based ISR. Sanity's CDN can lag
  // a write by several seconds, so a page regenerated right as the webhook
  // fires can bake in stale data and then sit cached until the next trigger.
  // Reading straight from the API avoids that race.
  useCdn: false,
});
