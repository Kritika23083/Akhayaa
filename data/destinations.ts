export type Destination = {
  name: string;
  region: string;
  description: string;
  palette: string;
};

export const destinations: Destination[] = [
  {
    name: "Mathura-Vrindavan",
    region: "Sacred Braj",
    description: "Temple mornings, quiet courtyards, and stays designed for peaceful family trips.",
    palette: "from-[#f4d9b5] via-[#e8b59f] to-[#9f704e]",
  },
  {
    name: "Jaipur",
    region: "Rajasthan",
    description: "Pink-city villas, haveli textures, rooftop dinners, and design-led weekends.",
    palette: "from-[#edc4aa] via-[#c98062] to-[#704839]",
  },
  {
    name: "Rishikesh",
    region: "Uttarakhand",
    description: "River air, yoga decks, mindful cafes, and restorative mountain stays.",
    palette: "from-[#d6e2cf] via-[#8ea288] to-[#4f674f]",
  },
  {
    name: "Agra",
    region: "Uttar Pradesh",
    description: "Heritage-inspired escapes with soft luxury and slow sunset itineraries.",
    palette: "from-[#f2dfc5] via-[#d1ac77] to-[#6f593c]",
  },
  {
    name: "Udaipur",
    region: "Rajasthan",
    description: "Lake-view terraces, candlelit dinners, and regal boutique hideaways.",
    palette: "from-[#e8e0c8] via-[#b7b982] to-[#5f6a4e]",
  },
  {
    name: "Goa",
    region: "West Coast",
    description: "Sun-washed villas, quiet beaches, and relaxed stays beyond the obvious.",
    palette: "from-[#f4e2b8] via-[#d5a35f] to-[#786544]",
  },
  {
    name: "Manali",
    region: "Himachal",
    description: "Wood cabins, apple orchards, and warm homes for mountain pauses.",
    palette: "from-[#dce3d6] via-[#94a184] to-[#46513f]",
  },
  {
    name: "Pondicherry",
    region: "Tamil Nadu",
    description: "French quarter charm, coastal breakfasts, and pastel heritage stays.",
    palette: "from-[#f6e4c7] via-[#ddb77a] to-[#7b5c4c]",
  },
];
