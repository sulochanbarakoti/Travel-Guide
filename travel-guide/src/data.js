import { chitwan, kathmandu, pokhara, everest, lumbini } from "./asset/logic";

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

export const Trip = [
  {
    tripId: 1,
    tripName: "Buddhist Tour In Nepal",
    image: lumbini,
    days: 8,
    tripDetails: {
      accomodation: "Hotel/Lodge",
      arrivalCity: "Kathmandu",
      bestSeason: "Spring and Autumn",
      guide: "Guided Tour",
      maximumAltitude: "2,195 meters (7,201 feet)",
      meals: "BLD",
      transportation: "Private/Public Vehicle",
      wifi: "Available",
    },
    overview:
      "Nepal being the birthplace of Gautam Buddha, is very revered among Buddhists. It houses a myriad number of Buddhist pilgrimage sites. If you are to visit Nepal, you cannot miss visiting these significant sites. They are scattered around various geographical regions of Nepal. We at Great Adventure Treks have several packages aimed at Buddhist pilgrimage tours. On this package of Buddhist tour in Nepal, we propose a tour in and around Kathmandu valley along with a tour to Lumbini. It will be an 8-day long trip around major Buddhist attraction sites. We will kick off our tour from Kathmandu by visiting the attraction sites within the valley. After that, we then head towards Pharping and its vicinity to visit its pilgrimages. We also have places like Patan, Bhaktapur, and the famous Manjushree Park as our destinations. On one of the days of the tour, our overnight stop will be Nagarkot. We will visit Namobuddha and Panauti on the outskirts of town. They are a must-visit site among significant Buddhist attraction sites. After that, we will head to the birthplace of Buddha, Lumbini. A short tour of pilgrimage sites in Lumbini, and then we return to Kathmandu and mark the end of the trip. The trip will be brief and very suitable for a short family gateway. You need not put much physical effort or plan your itineraries as we do it for you. Just book your package and enjoy the cultural and religious adventure that this tour has in store for you",
    itinerary: {
      day1: "Visit Swayambhunath, Kathmandu Durbar Square, and nearby Buddhist viharas",
      day2: "Baudhanath & Bajrayogini (Sankhu)",
      day3: "Pharping, Yangleshor, Asura cave, Bajrayogini",
      day4: "Bhaktapur or Patan, Manjushree cave Overnight Nagarkot",
      day5: "Namobuddha, Panauti",
      day6: "Kathmandu to Lumbini",
      day7: "Lumbini / Kapilvastu / Taulihawa / Ram Gram",
      day8: "Lumbini to Kathmandu",
    },
  },
];
