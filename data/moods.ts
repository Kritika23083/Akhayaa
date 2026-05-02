export type Mood = {
  title: string;
  description: string;
  tone: string;
  accent: string;
};

export const heroMoods = [
  "Romantic Escape",
  "Birthday Stay",
  "Spiritual Retreat",
  "Friends Villa",
  "Family Weekend",
  "Workation",
  "Poolside Escape",
  "Pet-Friendly",
];

export const moods: Mood[] = [
  {
    title: "Romantic Escapes",
    description: "Candlelit courtyards, quiet pools, and stays made for unhurried togetherness.",
    tone: "Warm blush",
    accent: "from-[#f3c1ad] to-[#f8e5d7]",
  },
  {
    title: "Spiritual & Peaceful Stays",
    description: "Verified calm near temples, ghats, ashrams, and restorative natural settings.",
    tone: "Sacred calm",
    accent: "from-[#d8c7a7] to-[#f4ead9]",
  },
  {
    title: "Pool Villas",
    description: "Private water, garden decks, and weekend villas that photograph beautifully.",
    tone: "Sunlit leisure",
    accent: "from-[#b9cdb2] to-[#edf3e7]",
  },
  {
    title: "Boho Homestays",
    description: "Textured rooms, handmade corners, local hosts, and soulful slow mornings.",
    tone: "Artful stay",
    accent: "from-[#d99b7f] to-[#f8dfcf]",
  },
  {
    title: "Celebration Stays",
    description: "Birthday-ready homes with decoration support, meals, and room for everyone.",
    tone: "Golden evenings",
    accent: "from-[#d7b46f] to-[#f6ead0]",
  },
  {
    title: "Nature Retreats",
    description: "Forest cabins, riverside decks, mountain air, and verified off-grid comfort.",
    tone: "Earth quiet",
    accent: "from-[#8fa184] to-[#e2eadb]",
  },
  {
    title: "Creator-Friendly Stays",
    description: "Beautiful light, photogenic corners, Wi-Fi, and spaces ready for content days.",
    tone: "Editorial light",
    accent: "from-[#ead0b5] to-[#fff3e1]",
  },
  {
    title: "Luxury Under Budget",
    description: "The premium feel without guesswork, vetted for value, cleanliness, and vibe.",
    tone: "Smart luxury",
    accent: "from-[#cdbb94] to-[#f8ecd7]",
  },
];
