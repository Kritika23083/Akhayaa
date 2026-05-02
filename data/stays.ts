export type Stay = {
  name: string;
  location: string;
  vibe: string;
  price: string;
  rating: string;
  imageTone: string;
  tags: string[];
};

export const stays: Stay[] = [
  {
    name: "The Vrindavan Courtyard",
    location: "Vrindavan",
    vibe: "A peaceful haveli-inspired stay close to temples and quiet lanes.",
    price: "₹8,900",
    rating: "4.9",
    imageTone: "from-[#efe0bf] via-[#d4b27d] to-[#795a3a]",
    tags: ["Spiritual", "Courtyard", "Family"],
  },
  {
    name: "Boho Villa Retreat",
    location: "Jaipur",
    vibe: "Sunlit arches, handcrafted corners and slow evenings by the pool.",
    price: "₹14,500",
    rating: "4.8",
    imageTone: "from-[#f0c9ad] via-[#c97f62] to-[#5d372f]",
    tags: ["Boho", "Pool", "Celebration"],
  },
  {
    name: "Riverside Calm Stay",
    location: "Rishikesh",
    vibe: "Mist, river breeze and soft mountain mornings for deep reset trips.",
    price: "₹11,200",
    rating: "4.9",
    imageTone: "from-[#dfe9d6] via-[#8ca083] to-[#445544]",
    tags: ["River", "Yoga", "Nature"],
  },
  {
    name: "Heritage Haveli Escape",
    location: "Mathura",
    vibe: "Restored details, warm hospitality and meaningful cultural proximity.",
    price: "₹10,800",
    rating: "4.7",
    imageTone: "from-[#f3dec0] via-[#bd8a5f] to-[#573a2c]",
    tags: ["Heritage", "Darshan", "Verified"],
  },
  {
    name: "Poolside Weekend Villa",
    location: "Delhi NCR Outskirts",
    vibe: "A private weekend address for birthdays, friends and golden-hour dips.",
    price: "₹18,000",
    rating: "4.8",
    imageTone: "from-[#d9e8dc] via-[#9bb39d] to-[#36463a]",
    tags: ["Villa", "Poolside", "Groups"],
  },
  {
    name: "Earthwood Retreat",
    location: "Manali",
    vibe: "Wood, stone, pine views and fireplace evenings above the valley.",
    price: "₹13,600",
    rating: "4.9",
    imageTone: "from-[#e5d5bd] via-[#90775f] to-[#3a332b]",
    tags: ["Mountain", "Slow Travel", "Couples"],
  },
];
