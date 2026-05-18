// "The Divide" — data for the /the-divide scrollytelling experience.
//
// Numbers here are draft values grounded in the team's research (water price
// ratios, commute share of income, etc.). Anyone can adjust by editing the
// objects below — no other code needs to change.

export type Setting = "formal" | "informal";

export type ServiceCategory =
  | "framing"
  | "water"
  | "sanitation"
  | "transit"
  | "electricity"
  | "cooking"
  | "waste";

export type Character = {
  name: string;
  age: number;
  occupation: string;
  neighborhood: string;
  setting: Setting;
  bio: string;
};

export type Moment = {
  /** Minutes spent on this activity because of how the service is delivered. */
  minutes: number;
  /** Pesos spent on the service during this beat (negative = lost income). */
  cost: number;
  /** Meters walked because of this beat. */
  distance: number;
  /** 1–2 sentence in-world description of what the character does. */
  description: string;
};

export type Beat = {
  id: string;
  /** Time of day, "HH:MM" 24h. */
  time: string;
  service: ServiceCategory;
  /** Short label, e.g. "Morning water". */
  headline: string;
  /** Optional longer prose for hover/expand state — typically the "why this matters". */
  detail?: string;
  maria: Moment;
  clara: Moment;
  source: { label: string; href: string };
};

export const maria: Character = {
  name: "Maria",
  age: 28,
  occupation: "Junior accountant",
  neighborhood: "Quezon City",
  setting: "formal",
  bio: "Lives in a mid-rise condo. Municipal water, grid power, MRT to the office in BGC.",
};

export const clara: Character = {
  name: "Clara",
  age: 28,
  occupation: "Sari-sari store helper, part-time laundry",
  neighborhood: "Tondo",
  setting: "informal",
  bio: "Lives with family in a wooden house. Water from a vendor truck, intermittent line-tapped power, a chain of jeepneys and an LRT to Divisoria.",
};

export const beats: Beat[] = [
  {
    id: "wake-up",
    time: "06:00",
    service: "framing",
    headline: "Wake up",
    maria: {
      minutes: 0,
      cost: 0,
      distance: 0,
      description: "Phone alarm at 06:00. The AC hums; the building is quiet.",
    },
    clara: {
      minutes: 45,
      cost: 0,
      distance: 0,
      description:
        "05:15. Roosters. Clara is up before the sun so she can beat the queue at the vendor truck.",
    },
    source: { label: "Gozun & De Castro (2026)", href: "/papers" },
    detail:
      "Reliability — not just access — drives household water satisfaction. When water flows for only a few hours a day, families adapt by losing sleep.",
  },
  {
    id: "morning-water",
    time: "06:30",
    service: "water",
    headline: "Water for the day",
    maria: {
      minutes: 0.5,
      cost: 0,
      distance: 0,
      description: "She turns the tap. Water comes. She fills the kettle for coffee.",
    },
    clara: {
      minutes: 35,
      cost: 60,
      distance: 800,
      description:
        "Walks 400m to the vendor truck on Calle Recto, fills two 20L jerry cans, walks back.",
    },
    source: { label: "Williams et al. (2024)", href: "/papers" },
    detail:
      "Vendor water in informal settlements typically costs 5–10× the municipal rate per liter. The time cost compounds the cash gap.",
  },
  {
    id: "shower",
    time: "07:00",
    service: "sanitation",
    headline: "Shower",
    maria: {
      minutes: 10,
      cost: 2,
      distance: 0,
      description: "Ten-minute shower. Pressure is steady.",
    },
    clara: {
      minutes: 7,
      cost: 0,
      distance: 0,
      description:
        "Bucket bath using stored water. Careful with every liter — she already paid for it.",
    },
    source: { label: "Zhang et al. (2023)", href: "/papers" },
    detail:
      "Sanitation access in informal settlements correlates strongly with rates of waterborne illness and lost workdays.",
  },
  {
    id: "breakfast",
    time: "07:30",
    service: "cooking",
    headline: "Breakfast",
    maria: {
      minutes: 15,
      cost: 8,
      distance: 0,
      description: "Eggs on the gas range, coffee in the electric kettle.",
    },
    clara: {
      minutes: 25,
      cost: 5,
      distance: 0,
      description:
        "Charcoal stove on the patio. The smoke clings to her shirt; the rice takes longer.",
    },
    source: { label: "Imran et al. (2024)", href: "/papers" },
    detail:
      "Cooking fuel choice cascades into health, time, and emissions costs that don't show up on the receipt.",
  },
  {
    id: "commute-am",
    time: "08:30",
    service: "transit",
    headline: "Commute to work",
    maria: {
      minutes: 30,
      cost: 25,
      distance: 400,
      description: "Five minutes to the MRT. Thirty minutes to the office.",
    },
    clara: {
      minutes: 80,
      cost: 40,
      distance: 1200,
      description:
        "Walks to the main road. Jeepney to LRT, LRT, jeepney to Divisoria. An hour and twenty.",
    },
    source: { label: "Almeida et al. (2023)", href: "/papers" },
    detail:
      "Low-income workers commonly spend ~30% of their income on commuting. The cost is doubled by the loss of compounding time.",
  },
  {
    id: "lunch-water",
    time: "12:30",
    service: "water",
    headline: "Drinking water",
    maria: {
      minutes: 0,
      cost: 0,
      distance: 0,
      description: "Refills her bottle from the office dispenser. Free.",
    },
    clara: {
      minutes: 0,
      cost: 5,
      distance: 0,
      description: "Buys a sachet from a vendor near the stall. ₱5.",
    },
    source: { label: "Williams et al. (2024)", href: "/papers" },
  },
  {
    id: "brownout",
    time: "14:00",
    service: "electricity",
    headline: "Brownout",
    maria: {
      minutes: 0,
      cost: 0,
      distance: 0,
      description: "Office power doesn't flicker.",
    },
    clara: {
      minutes: 60,
      cost: -60,
      distance: 0,
      description: "The store closes for an hour during the outage. Clara loses the wage.",
    },
    source: { label: "Bibri & Krogstie (2024)", href: "/papers" },
    detail:
      "Power reliability is a hidden tax on the informal economy. Every minute of downtime is a minute of lost livelihood for businesses without backup.",
  },
  {
    id: "commute-pm",
    time: "17:30",
    service: "transit",
    headline: "Commute home",
    maria: {
      minutes: 35,
      cost: 25,
      distance: 400,
      description: "MRT, ten minutes' walk, home. Errand on the way.",
    },
    clara: {
      minutes: 90,
      cost: 40,
      distance: 1200,
      description: "Jeepneys are slower in the evening. Ninety minutes.",
    },
    source: { label: "Almeida et al. (2023)", href: "/papers" },
  },
  {
    id: "evening-water",
    time: "18:30",
    service: "water",
    headline: "More water",
    maria: {
      minutes: 0,
      cost: 0,
      distance: 0,
      description: "Turns the tap to start dinner.",
    },
    clara: {
      minutes: 25,
      cost: 40,
      distance: 600,
      description: "Back to the vendor for another jerry can. Cooking, dishes, the kids' bath.",
    },
    source: { label: "Williams et al. (2024)", href: "/papers" },
  },
  {
    id: "dinner",
    time: "19:30",
    service: "cooking",
    headline: "Dinner",
    maria: {
      minutes: 5,
      cost: 8,
      distance: 0,
      description: "Gas range. Dishwasher. Fifty minutes start to finish.",
    },
    clara: {
      minutes: 8,
      cost: 5,
      distance: 0,
      description: "Charcoal again. Hand-washes the dishes outside.",
    },
    source: { label: "Imran et al. (2024)", href: "/papers" },
  },
  {
    id: "garbage",
    time: "21:00",
    service: "waste",
    headline: "Garbage",
    maria: {
      minutes: 1,
      cost: 0,
      distance: 0,
      description: "Building chute. One minute.",
    },
    clara: {
      minutes: 5,
      cost: 0,
      distance: 100,
      description:
        "Walks the bag to the community pickup. Sometimes it gets collected. Sometimes not.",
    },
    source: { label: "Imran et al. (2024)", href: "/papers" },
    detail:
      "Irregular waste collection in informal areas pushes households toward open burning or dumping — turning a public-health liability into a chronic local cost.",
  },
  {
    id: "night",
    time: "22:00",
    service: "electricity",
    headline: "Night",
    maria: {
      minutes: 0,
      cost: 25,
      distance: 0,
      description: "Brushes teeth. AC on low. Sleeps.",
    },
    clara: {
      minutes: 5,
      cost: 5,
      distance: 0,
      description: "Brushes teeth with stored water. The power is out again. Candle, then sleep.",
    },
    source: { label: "Bibri & Krogstie (2024)", href: "/papers" },
  },
];

/** Format a "HH:MM" 24-hour string as a 12-hour string with AM/PM. */
export function formatTime(time24: string): string {
  const [hStr, mStr] = time24.split(":");
  const hour24 = Number(hStr);
  const minute = Number(mStr);
  const period = hour24 >= 12 ? "PM" : "AM";
  let hour12 = hour24 % 12;
  if (hour12 === 0) hour12 = 12;
  const mm = String(minute).padStart(2, "0");
  return `${hour12}:${mm} ${period}`;
}

/** Sum the moments for one character across an array of beats. */
export function totalsFor(beats: Beat[], side: "maria" | "clara") {
  return beats.reduce(
    (acc, b) => ({
      minutes: acc.minutes + b[side].minutes,
      cost: acc.cost + b[side].cost,
      distance: acc.distance + b[side].distance,
    }),
    { minutes: 0, cost: 0, distance: 0 },
  );
}

export const dayTotals = {
  maria: totalsFor(beats, "maria"),
  clara: totalsFor(beats, "clara"),
};
