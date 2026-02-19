<template>
  <div class="pt-24 pb-20">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
        <div
          class="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6"
        >
          <i data-lucide="bean" class="w-4 h-4 text-amber-600"></i>
          <span class="text-sm font-mono text-amber-700"
            >BEANCHAIN MARKETPLACE</span
          >
        </div>
        <h1 class="text-4xl md:text-5xl font-black mb-6">
          Single Origin
          <span
            class="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"
            >NFTs</span
          >
        </h1>
        <p class="text-gray-600 text-lg">
          Browse and bid on premium coffee lots directly from farmers. Each NFT
          represents real, traceable beans.
        </p>
      </div>

      <!-- Filters -->
      <div
        class="flex flex-wrap items-center justify-between gap-4 mb-8"
        data-aos="fade-up"
      >
        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
            :class="[
              selectedCategory === category
                ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-200'
                : 'bg-white text-gray-700 hover:bg-amber-50 border border-amber-200',
            ]"
          >
            <i :data-lucide="categoryIcons[category]" class="w-4 h-4"></i>
            <span>{{ category }}</span>
          </button>
        </div>

        <div class="flex items-center space-x-4">
          <select
            v-model="sortBy"
            class="px-4 py-2 bg-white border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="progress">Funding Progress</option>
          </select>

          <button
            class="p-2 bg-white border border-amber-200 rounded-lg hover:bg-amber-50"
          >
            <i
              data-lucide="sliders-horizontal"
              class="w-5 h-5 text-gray-600"
            ></i>
          </button>
        </div>
      </div>

      <!-- Active Filters -->
      <div
        v-if="selectedCategory !== 'All Beans' || searchQuery"
        class="flex items-center space-x-2 mb-6"
      >
        <span class="text-sm text-gray-500">Active filters:</span>
        <span
          v-if="selectedCategory !== 'All Beans'"
          class="inline-flex items-center space-x-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm"
        >
          <i :data-lucide="categoryIcons[selectedCategory]" class="w-3 h-3"></i>
          <span>{{ selectedCategory }}</span>
          <button
            @click="selectedCategory = 'All Beans'"
            class="ml-1 hover:text-amber-900"
          >
            <i data-lucide="x" class="w-3 h-3"></i>
          </button>
        </span>
      </div>

      <!-- Projects Grid -->
      <div
        v-if="filteredProjects.length > 0"
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="group"
          :data-aos="
            index % 3 === 0
              ? 'fade-right'
              : index % 3 === 2
                ? 'fade-left'
                : 'fade-up'
          "
          :data-aos-delay="index * 50"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-20">
        <i
          data-lucide="coffee"
          class="w-20 h-20 mx-auto text-gray-300 mb-4"
        ></i>
        <h3 class="text-2xl font-bold text-gray-700 mb-2">No beans found</h3>
        <p class="text-gray-500">
          Try adjusting your filters or check back later for new harvests.
        </p>
      </div>

      <!-- Load More -->
      <div class="text-center mt-12">
        <button
          class="inline-flex items-center space-x-2 bg-white border-2 border-amber-200 text-amber-700 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
        >
          <span>Load More Beans</span>
          <i data-lucide="chevron-down" class="w-5 h-5"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useProjectsStore } from "@/stores/projects";
import ProjectCard from "@/components/ui/ProjectCard.vue";

export default {
  name: "ProjectsView",
  components: {
    ProjectCard,
  },
  setup() {
    const projectsStore = useProjectsStore();
    const selectedCategory = ref("All Beans");
    const sortBy = ref("newest");
    const searchQuery = ref("");

    const categories = [
      "All Beans",
      "Africa",
      "South America",
      "Central America",
      "Asia",
    ];

    const categoryIcons = {
      "All Beans": "coffee",
      Africa: "compass",
      "South America": "map-pin",
      "Central America": "map",
      Asia: "globe",
    };

    const filteredProjects = computed(() => {
      let filtered = [...projectsStore.projects];

      // Filter by category
      if (selectedCategory.value !== "All Beans") {
        filtered = filtered.filter(
          (p) =>
            p.category ===
            selectedCategory.value.toLowerCase().replace(" ", "-"),
        );
      }

      // Sort
      switch (sortBy.value) {
        case "price-low":
          filtered.sort((a, b) => a.bid - b.bid);
          break;
        case "price-high":
          filtered.sort((a, b) => b.bid - a.bid);
          break;
        case "progress":
          filtered.sort((a, b) => b.progress - a.progress);
          break;
        default:
          // Newest first (by id for demo)
          filtered.sort((a, b) => b.id - a.id);
      }

      return filtered;
    });

    // Reinitialize icons on filter change
    watch([selectedCategory, sortBy], () => {
      setTimeout(() => {
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }, 100);
    });

    return {
      selectedCategory,
      sortBy,
      searchQuery,
      categories,
      categoryIcons,
      filteredProjects,
    };
  },
};
</script>
