// Bang Wira - github.com/sepatusendal

export type FormType = "join" | "contact";

const FORM_ENDPOINTS: Record<FormType, string> = {
  join: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScU0bUbhUhh3OW8Zeb0QwReizJtbEC_FE3nESV8mwnDhod_pg/formResponse",
  contact:
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfjKENpF8JM-UXI-srPryZ9d9mZix55ItTDawzMqOMuSs3vpg/formResponse",
};

const ENTRY_MAPS: Record<FormType, Record<string, string>> = {
  join: {
    name: "entry.1859625480",
    email: "entry.619145259",
    whatsapp: "entry.1189615151",
    kecamatan: "entry.993324701",
    interests: "entry.1801819154",
    skill: "entry.28119181",
    instagram: "entry.1036553137",
    reason: "entry.763275185",
  },
  contact: {
    name: "entry.1339776433",
    email: "entry.613397144",
    message: "entry.2010402493",
  },
};

export async function submitToGoogleForm(
  type: FormType,
  data: Record<string, unknown>,
): Promise<{ success: boolean }> {
  const entryMap = ENTRY_MAPS[type];
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(data)) {
    const entry = entryMap[key];
    if (!entry) continue;

    if (Array.isArray(value)) {
      value.forEach((item) => params.append(entry, String(item)));
    } else if (value !== undefined && value !== null && value !== "") {
      params.append(entry, String(value));
    }
  }

  // Google Forms' formResponse endpoint doesn't send CORS headers, so the
  // response is opaque under no-cors — a resolved fetch is the only signal
  // we get back, and that's the best available proxy for delivery.
  await fetch(FORM_ENDPOINTS[type], {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  return { success: true };
}
