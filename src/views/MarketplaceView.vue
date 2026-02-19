<template>
  <div class="pt-24 pb-20">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
        <div
          class="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6"
        >
          <i data-lucide="store" class="w-4 h-4 text-amber-600"></i>
          <span class="text-sm font-mono text-amber-700">BEAN MARKETPLACE</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-black mb-6">
          Freshly Roasted
          <span
            class="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"
            >NFT Batches</span
          >
        </h1>
        <p class="text-gray-600 text-lg">
          Each batch is a unique NFT representing real, traceable coffee beans.
          Bid, buy, and brew the finest single-origin coffees on the blockchain.
        </p>
      </div>

      <!-- Marketplace Stats -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        data-aos="fade-up"
      >
        <div
          v-for="(stat, index) in marketStats"
          :key="stat.label"
          class="bg-white rounded-2xl p-6 border border-amber-200 text-center hover:shadow-lg transition-all"
          :data-aos-delay="index * 50"
        >
          <i
            :data-lucide="stat.icon"
            class="w-8 h-8 mx-auto text-amber-600 mb-2"
          ></i>
          <div class="text-2xl font-bold text-amber-700">{{ stat.value }}</div>
          <div class="text-sm text-gray-600">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Filter Bar -->
      <div
        class="bg-white rounded-2xl p-6 mb-12 border border-amber-200 shadow-lg"
        data-aos="fade-up"
      >
        <div class="flex flex-col lg:flex-row lg:items-center gap-6">
          <!-- Search -->
          <div class="flex-1 relative">
            <i
              data-lucide="search"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            ></i>
            <input
              v-model="filters.search"
              type="text"
              placeholder="Search by origin, farm, or roast..."
              class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <!-- Filter Chips -->
          <div class="flex flex-wrap gap-3">
            <button
              v-for="filter in filterOptions"
              :key="filter.value"
              @click="filters.category = filter.value"
              class="px-4 py-2 rounded-xl text-sm font-medium transition-all"
              :class="[
                filters.category === filter.value
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100',
              ]"
            >
              <i
                :data-lucide="filter.icon"
                class="w-4 h-4 inline-block mr-1"
              ></i>
              {{ filter.label }}
            </button>
          </div>

          <!-- Sort -->
          <div class="relative min-w-[180px]">
            <select
              v-model="filters.sort"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none"
            >
              <option value="newest">Newest First</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
              <option value="ending">Ending Soon</option>
            </select>
            <i
              data-lucide="chevron-down"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            ></i>
          </div>
        </div>
      </div>

      <!-- Active Filters -->
      <div
        v-if="hasActiveFilters"
        class="flex items-center gap-3 mb-8"
        data-aos="fade-up"
      >
        <span class="text-sm text-gray-500">Active filters:</span>
        <div class="flex flex-wrap gap-2">
          <div
            v-if="filters.search"
            class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
          >
            <span>Search: "{{ filters.search }}"</span>
            <button @click="filters.search = ''">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>
          <div
            v-if="filters.category !== 'all'"
            class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
          >
            <span>Category: {{ getCategoryLabel(filters.category) }}</span>
            <button @click="filters.category = 'all'">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>
          <button
            @click="clearFilters"
            class="text-sm text-amber-600 hover:text-amber-700 underline"
          >
            Clear all
          </button>
        </div>
      </div>

      <!-- Marketplace Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(bean, index) in filteredBeans"
          :key="bean.id"
          class="group"
          data-aos="fade-up"
          :data-aos-delay="(index % 3) * 100"
        >
          <div
            class="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
          >
            <!-- Status Badges -->
            <div class="absolute top-4 left-4 z-10 flex gap-2">
              <div
                v-if="bean.featured"
                class="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
              >
                <i data-lucide="star" class="w-3 h-3"></i>
                <span>FEATURED</span>
              </div>
              <div
                v-if="bean.isNew"
                class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
              >
                <i data-lucide="sparkles" class="w-3 h-3"></i>
                <span>NEW</span>
              </div>
            </div>

            <!-- NFT Badge -->
            <div
              class="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-mono flex items-center space-x-1"
            >
              <span
                class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"
              ></span>
              <span>ERC-1155</span>
            </div>

            <!-- Image Container -->
            <div class="relative h-56 overflow-hidden">
              <img
                :src="bean.image"
                :alt="bean.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>

              <!-- Auction Timer -->
              <div
                v-if="bean.auction"
                class="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs">Auction ends in:</span>
                  <span class="font-mono text-sm">{{ bean.timeLeft }}</span>
                </div>
                <div class="w-full h-1 bg-white/20 rounded-full mt-2">
                  <div
                    class="h-full bg-amber-400 rounded-full"
                    :style="{ width: bean.timeProgress + '%' }"
                  ></div>
                </div>
              </div>

              <!-- Buy Now Overlay -->
              <div
                v-else
                class="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              >
                <div class="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-mono">Price</span>
                    <span class="text-lg font-bold text-amber-600"
                      >{{ bean.price }} ETH</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h3 class="text-xl font-bold">{{ bean.title }}</h3>
                  <p class="text-sm text-gray-500">{{ bean.origin }}</p>
                </div>
                <div class="flex -space-x-2">
                  <img
                    v-for="n in 3"
                    :key="n"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80"
                    class="w-8 h-8 rounded-full border-2 border-white"
                    :class="{ 'opacity-60': n === 3 }"
                    alt="Bidder"
                  />
                </div>
              </div>

              <!-- Rating -->
              <div class="flex items-center space-x-2 mb-4">
                <div class="flex">
                  <i
                    v-for="n in 5"
                    :key="n"
                    data-lucide="star"
                    class="w-4 h-4"
                    :class="
                      n <= bean.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-gray-300'
                    "
                  ></i>
                </div>
                <span class="text-sm text-gray-600">({{ bean.reviews }})</span>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in bean.tags"
                  :key="tech"
                  class="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Farmer Info -->
              <div
                class="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-xl"
              >
                <img
                  :src="bean.farmer.avatar"
                  :alt="bean.farmer.name"
                  class="w-10 h-10 rounded-full border-2 border-amber-200"
                />
                <div class="flex-1">
                  <div class="text-sm font-semibold">
                    {{ bean.farmer.name }}
                  </div>
                  <div class="flex items-center space-x-2">
                    <span
                      class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                    ></span>
                    <span class="text-xs text-gray-500">Verified Farmer</span>
                  </div>
                </div>
                <div class="text-xs text-amber-600 font-mono">
                  {{ bean.farmer.beans }} beans sold
                </div>
              </div>

              <!-- Bid/Price Info -->
              <div class="space-y-3 mb-4">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">Current bid</span>
                  <span class="font-mono font-bold text-amber-600"
                    >{{ bean.auction ? bean.currentBid : bean.price }} ETH</span
                  >
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">Total volume</span>
                  <span class="font-mono">{{ bean.volume }} ETH</span>
                </div>
              </div>

              <!-- Progress Bar for Auctions -->
              <div v-if="bean.auction" class="space-y-2 mb-4">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">Funding goal</span>
                  <span class="font-mono">{{ bean.progress }}%</span>
                </div>
                <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    class="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                    :style="{ width: bean.progress + '%' }"
                  ></div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-2">
                <button
                  @click="addToCart(bean)"
                  class="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                  <span>{{ bean.auction ? "Place Bid" : "Buy Now" }}</span>
                </button>
                <button
                  @click="toggleFavorite(bean)"
                  class="px-4 py-3 border-2 border-amber-200 text-amber-700 rounded-xl hover:bg-amber-50 transition-colors"
                  :class="{ 'bg-amber-100 border-amber-300': bean.isFavorite }"
                >
                  <i
                    data-lucide="heart"
                    class="w-5 h-5"
                    :class="{
                      'fill-amber-600 text-amber-600': bean.isFavorite,
                    }"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div class="text-center mt-16" data-aos="fade-up">
        <button
          @click="loadMore"
          class="group inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-700 transition-colors duration-300 hover:shadow-2xl"
          :disabled="isLoading"
        >
          <i
            data-lucide="loader-2"
            class="w-5 h-5 animate-spin"
            v-if="isLoading"
          ></i>
          <span v-else>Load More Beans</span>
          <i
            v-if="!isLoading"
            data-lucide="arrow-down"
            class="w-5 h-5 group-hover:translate-y-1 transition-transform"
          ></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useCartStore } from "@/stores/cart";

export default {
  name: "MarketplaceView",
  setup() {
    const cartStore = useCartStore();
    const isLoading = ref(false);
    const visibleCount = ref(6);

    // Market Statistics
    const marketStats = [
      { label: "Total Volume", value: "₿2.4M", icon: "bar-chart-2" },
      { label: "Active Beans", value: "1,234", icon: "bean" },
      { label: "Farmers", value: "89", icon: "users" },
      { label: "Avg. Price", value: "2.8 ETH", icon: "trending-up" },
    ];

    // Filter Options
    const filterOptions = [
      { label: "All Beans", value: "all", icon: "coffee" },
      { label: "Single Origin", value: "single", icon: "map-pin" },
      { label: "Auction", value: "auction", icon: "gavel" },
      { label: "Buy Now", value: "buynow", icon: "shopping-bag" },
      { label: "Limited", value: "limited", icon: "crown" },
    ];

    // Filters
    const filters = ref({
      search: "",
      category: "all",
      sort: "newest",
    });

    // Sample Bean Data
    const beans = ref([
      {
        id: 1,
        title: "Ethiopia Yirgacheffe",
        origin: "Sidama, Ethiopia",
        image:
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Grade 1", "Washed", "Organic", "Floral"],
        price: "2.5",
        currentBid: "2.5",
        volume: "124.5",
        rating: 5,
        reviews: 234,
        auction: false,
        featured: true,
        isNew: false,
        progress: 100,
        farmer: {
          name: "Tesfaye Gemechu",
          avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80",
          beans: 156,
        },
        isFavorite: false,
      },
      {
        id: 2,
        title: "Colombia Geisha",
        origin: "Huila, Colombia",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Geisha", "Natural", "Limited", "Competition"],
        price: "3.8",
        currentBid: "4.2",
        volume: "89.2",
        rating: 5,
        reviews: 189,
        auction: true,
        featured: true,
        isNew: true,
        timeLeft: "2h 34m",
        timeProgress: 65,
        progress: 92,
        farmer: {
          name: "Maria Valencia",
          avatar:
            "https://images.unsplash.com/photo-1494790108777-466d68a5c5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80",
          beans: 89,
        },
        isFavorite: false,
      },
      {
        id: 3,
        title: "Guatemala Antigua",
        origin: "Antigua, Guatemala",
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Volcanic", "SHB", "Estate", "Chocolate"],
        price: "1.9",
        currentBid: "1.9",
        volume: "67.3",
        rating: 4,
        reviews: 156,
        auction: false,
        featured: false,
        isNew: false,
        progress: 100,
        farmer: {
          name: "Diego Gonzalez",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80",
          beans: 203,
        },
        isFavorite: true,
      },
      {
        id: 4,
        title: "Kenya AA",
        origin: "Nyeri, Kenya",
        image:
          "https://images.unsplash.com/photo-1559525833-b9e8c9c7cf4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["AA", "SL28", "Blackcurrant", "Washed"],
        price: "3.2",
        currentBid: "3.5",
        volume: "234.1",
        rating: 5,
        reviews: 312,
        auction: true,
        featured: true,
        isNew: false,
        timeLeft: "5h 12m",
        timeProgress: 45,
        progress: 78,
        farmer: {
          name: "Njeri Wanjiku",
          avatar:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80",
          beans: 167,
        },
        isFavorite: false,
      },
      {
        id: 5,
        title: "Costa Rica Tarrazú",
        origin: "Tarrazú, Costa Rica",
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?lib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Honey", "SHB", "Micro-lot", "Citrus"],
        price: "2.8",
        currentBid: "2.8",
        volume: "145.8",
        rating: 4,
        reviews: 178,
        auction: false,
        featured: false,
        isNew: true,
        progress: 100,
        farmer: {
          name: "Carlos Rodriguez",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80",
          beans: 92,
        },
        isFavorite: false,
      },
      {
        id: 6,
        title: "Panama Geisha",
        origin: "Boquete, Panama",
        image:
          "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Geisha", "Natural", "Competition", "Limited"],
        price: "5.5",
        currentBid: "6.8",
        volume: "456.2",
        rating: 5,
        reviews: 423,
        auction: true,
        featured: true,
        isNew: true,
        timeLeft: "1d 3h",
        timeProgress: 82,
        progress: 95,
        farmer: {
          name: "Elena Santos",
          avatar:
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80",
          beans: 45,
        },
        isFavorite: false,
      },
    ]);

    // Filtered and Sorted Beans
    const filteredBeans = computed(() => {
      let filtered = beans.value;

      // Apply search filter
      if (filters.value.search) {
        const searchLower = filters.value.search.toLowerCase();
        filtered = filtered.filter(
          (bean) =>
            bean.title.toLowerCase().includes(searchLower) ||
            bean.origin.toLowerCase().includes(searchLower) ||
            bean.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
        );
      }

      // Apply category filter
      if (filters.value.category !== "all") {
        switch (filters.value.category) {
          case "single":
            filtered = filtered.filter((bean) => bean.tags.includes("Grade 1"));
            break;
          case "auction":
            filtered = filtered.filter((bean) => bean.auction);
            break;
          case "buynow":
            filtered = filtered.filter((bean) => !bean.auction);
            break;
          case "limited":
            filtered = filtered.filter((bean) => bean.tags.includes("Limited"));
            break;
        }
      }

      // Apply sorting
      switch (filters.value.sort) {
        case "price_low":
          filtered = [...filtered].sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price),
          );
          break;
        case "price_high":
          filtered = [...filtered].sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price),
          );
          break;
        case "popular":
          filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);
          break;
        case "ending":
          filtered = [...filtered].sort((a, b) => {
            if (!a.auction) return 1;
            if (!b.auction) return -1;
            return (a.timeProgress || 0) - (b.timeProgress || 0);
          });
          break;
        case "newest":
        default:
          filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0));
          break;
      }

      // Limit visible items
      return filtered.slice(0, visibleCount.value);
    });

    const hasActiveFilters = computed(() => {
      return filters.value.search !== "" || filters.value.category !== "all";
    });

    const getCategoryLabel = (value) => {
      const option = filterOptions.find((opt) => opt.value === value);
      return option ? option.label : value;
    };

    const clearFilters = () => {
      filters.value = {
        search: "",
        category: "all",
        sort: "newest",
      };
    };

    const loadMore = () => {
      isLoading.value = true;
      setTimeout(() => {
        visibleCount.value += 3;
        isLoading.value = false;
      }, 1000);
    };

    const addToCart = (bean) => {
      cartStore.addToCart({
        id: bean.id,
        title: bean.title,
        origin: bean.origin,
        image: bean.image,
        bid: bean.auction ? bean.currentBid : bean.price,
        quantity: 1,
      });
    };

    const toggleFavorite = (bean) => {
      bean.isFavorite = !bean.isFavorite;
    };

    onMounted(() => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });

    return {
      marketStats,
      filterOptions,
      filters,
      beans,
      filteredBeans,
      hasActiveFilters,
      getCategoryLabel,
      clearFilters,
      isLoading,
      loadMore,
      addToCart,
      toggleFavorite,
    };
  },
};
</script>

<style scoped>
/* Additional animations for marketplace */
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.5);
  }
  50% {
    box-shadow: 0 0 20px 5px rgba(245, 158, 11, 0.3);
  }
}

.featured-glow {
  animation: pulse-glow 2s infinite;
}
</style>
