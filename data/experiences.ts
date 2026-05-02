import {
  Camera,
  Car,
  Flower2,
  HeartHandshake,
  Map,
  MoonStar,
  Soup,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Experience = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const experiences: Experience[] = [
  {
    title: "Private Dinner",
    description: "Candle-lit meals arranged at villas, terraces, and quiet courtyards.",
    icon: MoonStar,
  },
  {
    title: "Birthday Decoration",
    description: "Tasteful florals, lights, cakes, and small surprises handled end-to-end.",
    icon: Sparkles,
  },
  {
    title: "Temple / Darshan Assistance",
    description: "Local guidance for peaceful temple visits, timing, and nearby transfers.",
    icon: Flower2,
  },
  {
    title: "Local Guide",
    description: "Warm local experts for heritage walks, food trails, and hidden viewpoints.",
    icon: Map,
  },
  {
    title: "Cab Pickup",
    description: "Reliable station, airport, and intercity pickups with trip-aware support.",
    icon: Car,
  },
  {
    title: "Photoshoot",
    description: "Creator-friendly shoots with photographers who understand the property mood.",
    icon: Camera,
  },
  {
    title: "Satvik Meals",
    description: "Clean, comforting meals arranged for families and spiritual stays.",
    icon: Soup,
  },
  {
    title: "Yoga / Meditation",
    description: "Slow mornings, guided breathwork, and mindful sessions on request.",
    icon: HeartHandshake,
  },
];
