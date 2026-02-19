import { defineStore } from "pinia";
import { mockApi } from "@/services/mockApi";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [],
    loading: false,
    error: null,
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
    async fetchProjects() {
      this.loading = true;
      try {
        this.projects = await mockApi.getProjects();
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    addProject(project) {
      this.projects.push({
        id: this.projects.length + 1,
        ...project,
      });
    },
  },
});

