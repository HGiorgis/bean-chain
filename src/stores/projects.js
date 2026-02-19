import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [
      {
        id: 1,
        title: "Ethiopia Yirgacheffe",
        origin: "Sidama, Ethiopia",
        description:
          "A washed Grade 1 coffee with notes of jasmine, bergamot, and stone fruits. Single farm lot from the Gedeo zone.",
        image:
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["Grade 1", "Washed", "Organic", "Heirloom"],
        bid: 2.5,
        progress: 78,
        liveUrl: "#",
        githubUrl: "#",
        category: "africa",
        farmer: "Tesfaye Bekele",
        altitude: "1900-2100m",
        harvest: "Nov 2023",
        roast: "Light",
      },
      {
        id: 2,
        title: "Colombia Geisha",
        origin: "Huila, Colombia",
        description:
          "Rare Geisha variety grown at high altitude. Natural processed with intense floral and tropical fruit notes.",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["Geisha", "Natural", "Limited", "Single Origin"],
        bid: 3.8,
        progress: 92,
        liveUrl: "#",
        githubUrl: "#",
        category: "south-america",
        farmer: "Maria Gonzalez",
        altitude: "1700-1950m",
        harvest: "Dec 2023",
        roast: "Medium",
      },
      {
        id: 3,
        title: "Guatemala Antigua",
        origin: "Antigua, Guatemala",
        description:
          "Volcanic soil grown Bourbon and Caturra varieties. Rich chocolate body with bright citrus acidity.",
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["Volcanic", "SHB", "Estate", "Rainforest"],
        bid: 1.9,
        progress: 45,
        liveUrl: "#",
        githubUrl: "#",
        category: "central-america",
        farmer: "Diego Ramirez",
        altitude: "1500-1700m",
        harvest: "Oct 2023",
        roast: "Medium-Dark",
      },
      {
        id: 4,
        title: "Kenya AA",
        origin: "Nyeri, Kenya",
        description:
          "Classic Kenya AA with complex blackcurrant, tomato, and winey characteristics. Twice-washed process.",
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["AA Grade", "Washed", "SL28", "SL34"],
        bid: 3.2,
        progress: 67,
        liveUrl: "#",
        githubUrl: "#",
        category: "africa",
        farmer: "Kamau Karanja",
        altitude: "1600-1800m",
        harvest: "Jan 2024",
        roast: "Light",
      },
      {
        id: 5,
        title: "Costa Rica Tarrazú",
        origin: "Tarrazú, Costa Rica",
        description:
          "Honey-processed coffee from the famous Tarrazú region. Sweet, clean cup with honey and stone fruit notes.",
        image:
          "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["Honey", "SHB", "Caturra", "Catuai"],
        bid: 2.1,
        progress: 34,
        liveUrl: "#",
        githubUrl: "#",
        category: "central-america",
        farmer: "Carlos Mendez",
        altitude: "1600-1900m",
        harvest: "Feb 2024",
        roast: "Medium",
      },
      {
        id: 6,
        title: "Sumatra Mandheling",
        origin: "Aceh, Sumatra",
        description:
          "Traditional wet-hulled Sumatra with heavy body, low acidity, and earthy, herbal complexity.",
        image:
          "https://images.unsplash.com/photo-1559525839-b184a4e6982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["Wet-Hulled", "Organic", "Fair Trade", "Heirloom"],
        bid: 1.6,
        progress: 23,
        liveUrl: "#",
        githubUrl: "#",
        category: "asia",
        farmer: "Budi Santoso",
        altitude: "1200-1500m",
        harvest: "Mar 2024",
        roast: "Dark",
      },
    ],
    skills: [
      { name: "Ethereum", level: "Mainnet", icon: "⬡", rating: 5 },
      { name: "Polygon", level: "Sidechain", icon: "🔷", rating: 5 },
      { name: "IPFS", level: "Storage", icon: "📡", rating: 4 },
      { name: "Chainlink", level: "Oracles", icon: "🔗", rating: 4 },
      { name: "The Graph", level: "Indexing", icon: "📊", rating: 4 },
      { name: "OpenZeppelin", level: "Contracts", icon: "⚙️", rating: 5 },
      { name: "WalletConnect", level: "Web3", icon: "🔌", rating: 4 },
      { name: "Solidity", level: "Language", icon: "⚡", rating: 5 },
    ],
    networkStats: {
      totalVolume: 2400000,
      activeFarmers: 1234,
      totalBeans: 8942,
      averageAPY: 8.5,
    },
  }),

  getters: {
    getAllProjects: (state) => state.projects,
    getProjectsByCategory: (state) => (category) => {
      return state.projects.filter((project) => project.category === category);
    },
    getTotalStaked: (state) => {
      return state.projects
        .reduce(
          (acc, project) => acc + project.progress * 0.01 * project.bid,
          0,
        )
        .toFixed(2);
    },
  },

  actions: {
    addProject(project) {
      this.projects.push({
        id: this.projects.length + 1,
        ...project,
      });
    },
  },
});
