import { chitwan, kathmandu, pokhara, everest } from "./asset/logic";

export const activities = [
  {
    name: "Trekking",
  },
  {
    name: "Rafting",
  },
  {
    name: "Paragliding",
  },
  {
    name: "Mountain Climbing",
  },
  {
    name: "Safari",
  },
];

export const searchData = ["trek", "raffle", "paraglide"];

export const stories = [
  {
    id: 1,
    title: "Exploring the Cultural Treasures of Kathmandu Valley",
    location: "Kathmandu",
    description:
      "The Kathmandu Valley is a cultural hub and home to several UNESCO World Heritage Sites, including Kathmandu Durbar Square, Patan Durbar Square, and Bhaktapur Durbar Square. Visitors can explore ancient temples, palaces, and bustling marketplaces, immersing themselves in the rich history and architecture of the region.",
    image: kathmandu,
    date: "2023-08-15",
  },
  {
    id: 2,
    title:
      "Journey to the Roof of the World: Trekking to Mount Everest Base Camp",
    location: "Solukhumbu District",
    description:
      "Mount Everest, the highest peak in the world, attracts adventurers and climbers from around the globe. While summiting Everest is a challenging feat reserved for experienced mountaineers, trekking to Everest Base Camp offers a memorable journey through the stunning Himalayan landscape.",
    image: everest,
    date: "2023-09-20",
  },
  {
    id: 3,
    title: "Discovering Paradise: Exploring Pokhara's Natural Wonders",
    location: "Gandaki Province",
    description:
      "Pokhara is known for its breathtaking natural beauty, with stunning views of the Annapurna and Dhaulagiri mountain ranges reflected in the serene waters of Phewa Lake. Visitors can enjoy boating on the lake, exploring caves, and hiking to nearby viewpoints for panoramic vistas.",
    image: pokhara,
    date: "2023-10-10",
  },
  {
    id: 4,
    title:
      "Wildlife Safari in Chitwan National Park: A Journey into the Heart of Nature",
    location: "Chitwan District",
    description:
      "Chitwan National Park is a haven for wildlife enthusiasts, home to a diverse range of flora and fauna, including endangered species such as the Bengal tiger and one-horned rhinoceros. Visitors can enjoy jungle safaris, birdwatching, and cultural experiences with the indigenous Tharu community.",
    image: chitwan,
    date: "2023-11-05",
  },
];
