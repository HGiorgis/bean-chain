<template>
  <div class="relative overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 -z-10">
      <div
        class="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100"
      ></div>
      <!-- Animated Coffee Beans -->
      <div class="absolute inset-0 opacity-10">
        <div
          v-for="i in 20"
          :key="i"
          class="absolute animate-float"
          :style="{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 10 + 's',
            animationDuration: 15 + Math.random() * 10 + 's',
          }"
        >
          🫘
        </div>
      </div>
    </div>

    <!-- Hero Section - Modern Parallax -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- 3D Cube Background Effect -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl animate-pulse-slow"
        ></div>
        <div
          class="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-amber-300/20 to-transparent rounded-full blur-3xl animate-pulse-slower"
        ></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-left space-y-8" data-aos="fade-right">
            <div
              class="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200 shadow-lg"
            >
              <span
                class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              ></span>
              <span class="text-sm font-mono text-amber-700"
                >BeanChain Mainnet · Live</span
              >
            </div>

            <h1 class="text-6xl md:text-7xl font-black leading-tight">
              <span
                class="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 bg-clip-text text-transparent"
              >
                Brewing the
              </span>
              <br />
              <span class="relative">
                Future of Coffee
                <svg
                  class="absolute -right-12 top-0 w-16 h-16 text-amber-400 animate-bounce-slow"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </span>
            </h1>

            <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
              The first decentralized marketplace connecting coffee farmers
              directly with roasters.
              <span class="text-amber-600 font-semibold">BeanChain</span> brings
              transparency, fairness, and exceptional coffee to the blockchain.
            </p>

            <div class="flex flex-wrap gap-4">
              <button
                class="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-2xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span class="relative z-10 flex items-center space-x-2">
                  <span>Explore Marketplace</span>
                  <svg
                    class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div
                  class="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity"
                ></div>
              </button>

              <button
                class="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-amber-200 text-amber-700 rounded-2xl font-bold hover:bg-white hover:border-amber-300 transition-all duration-300 hover:shadow-xl flex items-center space-x-2"
              >
                <span
                  class="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center"
                  >🎥</span
                >
                <span>Watch Demo</span>
              </button>
            </div>

            <!-- Live Stats -->
            <div class="flex items-center space-x-8 pt-8">
              <div class="text-center">
                <div class="text-3xl font-black text-amber-600">₿2.4M</div>
                <div class="text-sm text-gray-500">Total Volume</div>
              </div>
              <div class="w-px h-12 bg-amber-200"></div>
              <div class="text-center">
                <div class="text-3xl font-black text-amber-600">1,234</div>
                <div class="text-sm text-gray-500">Farmers</div>
              </div>
              <div class="w-px h-12 bg-amber-200"></div>
              <div class="text-center">
                <div class="text-3xl font-black text-amber-600">89</div>
                <div class="text-sm text-gray-500">Countries</div>
              </div>
            </div>
          </div>

          <!-- Right Content - 3D Card -->
          <div class="relative" data-aos="fade-left">
            <div
              class="relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-2xl"
            >
              <!-- NFT Card -->
              <div class="relative group cursor-pointer">
                <div
                  class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                ></div>
                <div
                  class="relative bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-6 overflow-hidden"
                >
                  <!-- Coffee Steam Animation -->
                  <div class="absolute top-10 left-1/2 -translate-x-1/2">
                    <div class="coffee-steam">
                      <span></span><span></span><span></span>
                    </div>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Ethiopian Coffee"
                    class="w-full h-64 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-700"
                  />

                  <div class="flex justify-between items-start mb-4">
                    <div>
                      <h3 class="text-white font-bold text-xl">
                        Ethiopia Yirgacheffe
                      </h3>
                      <p class="text-amber-200 text-sm">NFT #2394 · Grade 1</p>
                    </div>
                    <div
                      class="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                    >
                      2.5 ETH
                    </div>
                  </div>

                  <!-- Progress Bar -->
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm text-amber-200">
                      <span>Funded: 78%</span>
                      <span>78/100 ETH</span>
                    </div>
                    <div
                      class="h-2 bg-amber-900/50 rounded-full overflow-hidden"
                    >
                      <div
                        class="h-full w-3/4 bg-gradient-to-r from-amber-400 to-amber-300 rounded-full animate-pulse"
                      ></div>
                    </div>
                  </div>

                  <!-- Stats -->
                  <div class="grid grid-cols-3 gap-4 mt-6">
                    <div class="text-center">
                      <div class="text-amber-200 text-xs">ROI</div>
                      <div class="text-white font-bold">+24%</div>
                    </div>
                    <div class="text-center border-x border-amber-700">
                      <div class="text-amber-200 text-xs">Holders</div>
                      <div class="text-white font-bold">342</div>
                    </div>
                    <div class="text-center">
                      <div class="text-amber-200 text-xs">Days Left</div>
                      <div class="text-white font-bold">12</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Badges -->
              <div
                class="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce-slow"
              >
                🔥 HOT SALE
              </div>
              <div
                class="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center space-x-1"
              >
                <span
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></span>
                <span>Verified Farmer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div
          class="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center"
        >
          <div
            class="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-scroll"
          ></div>
        </div>
      </div>
    </section>

    <!-- Featured Projects - Coffee Marketplace -->
    <section class="py-32 relative overflow-hidden">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span class="text-amber-600 font-mono text-sm tracking-widest"
            >// FEATURED COFFEES</span
          >
          <h2 class="text-4xl md:text-5xl font-black mt-4 mb-6">
            Single Origin
            <span
              class="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"
              >NFTs</span
            >
          </h2>
          <p class="text-gray-600 text-lg">
            Each coffee batch is tokenized as an NFT, representing real,
            traceable beans from farm to cup.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            class="group"
            :data-aos="
              index === 0 ? 'fade-right' : index === 2 ? 'fade-left' : 'fade-up'
            "
            :data-aos-delay="index * 100"
          >
            <div
              class="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
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
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                ></div>

                <!-- Overlay Info -->
                <div
                  class="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  <div class="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                    <div class="flex justify-between items-center">
                      <span class="text-sm font-mono">Current Bid</span>
                      <span class="text-lg font-bold text-amber-600"
                        >{{ project.bid }} ETH</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h3 class="text-xl font-bold">{{ project.title }}</h3>
                    <p class="text-sm text-gray-500">{{ project.origin }}</p>
                  </div>
                  <div class="flex -space-x-2">
                    <img
                      v-for="n in 3"
                      :key="n"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80"
                      class="w-8 h-8 rounded-full border-2 border-white"
                      :class="{ 'opacity-60': n === 3 }"
                      alt="Avatar"
                    />
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Progress -->
                <div class="space-y-2 mb-4">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600">Funding</span>
                    <span class="font-mono text-amber-600"
                      >{{ project.progress }}%</span
                    >
                  </div>
                  <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      class="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                      :style="{ width: project.progress + '%' }"
                    ></div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-2">
                  <button
                    class="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Buy Now
                  </button>
                  <button
                    class="px-4 py-2 border-2 border-amber-200 text-amber-700 rounded-xl hover:bg-amber-50 transition-colors"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-16" data-aos="fade-up">
          <button
            class="group inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-700 transition-colors duration-300 hover:shadow-2xl"
          >
            <span>View All Beans</span>
            <svg
              class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Skills Section - Blockchain Stats -->
    <section class="py-32 relative">
      <div
        class="absolute inset-0 bg-gradient-to-br from-amber-900 to-amber-800 transform skew-y-3"
      ></div>
      <div class="container-custom relative z-10">
        <div class="text-center text-white mb-16" data-aos="fade-up">
          <span class="font-mono text-amber-300 text-sm">// ECOSYSTEM</span>
          <h2 class="text-4xl md:text-5xl font-black mt-4 mb-6">
            Powered by Blockchain
          </h2>
          <p class="text-amber-100 text-lg max-w-2xl mx-auto">
            Every bean is tracked, every transaction is transparent, every
            farmer is verified.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(skill, index) in skills"
            :key="skill.name"
            class="group text-center"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <div class="relative">
              <div
                class="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:bg-white/20 transition-all"
              ></div>
              <div
                class="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div class="text-5xl mb-4 filter drop-shadow-lg">
                  {{ skill.icon }}
                </div>
                <h4 class="text-white font-bold mb-2">{{ skill.name }}</h4>
                <div class="flex items-center justify-center space-x-1">
                  <span class="text-amber-300 text-sm">{{ skill.level }}</span>
                  <div class="flex">
                    <span
                      v-for="n in 5"
                      :key="n"
                      class="text-xs"
                      :class="
                        n <= skill.rating ? 'text-amber-400' : 'text-gray-500'
                      "
                    >
                      ★
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section - Mint Your Bean -->
    <section class="py-32">
      <div class="container-custom">
        <div
          class="relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-3xl overflow-hidden shadow-2xl"
        >
          <!-- Animated Background -->
          <div class="absolute inset-0 opacity-20">
            <div
              class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow"
            ></div>
            <div
              class="absolute bottom-0 right-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl animate-pulse-slower"
            ></div>
          </div>

          <div class="relative p-16 text-center">
            <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Brew Your First NFT?
            </h2>
            <p class="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
              Join 10,000+ coffee lovers and investors in the first
              decentralized coffee marketplace.
            </p>

            <div class="flex flex-wrap justify-center gap-4">
              <button
                class="group bg-white text-amber-700 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Mint Your Bean NFT</span>
                <svg
                  class="w-6 h-6 group-hover:rotate-90 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>

              <button
                class="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn About Staking
              </button>
            </div>

            <!-- Mint Stats -->
            <div class="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div class="text-center">
                <div class="text-3xl font-black text-white">₿1.2M</div>
                <div class="text-amber-200 text-sm">Total Staked</div>
              </div>
              <div class="text-center border-x border-amber-400">
                <div class="text-3xl font-black text-white">8.5%</div>
                <div class="text-amber-200 text-sm">APY</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-black text-white">3,421</div>
                <div class="text-amber-200 text-sm">Bean Holders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useProjectsStore } from "@/stores/projects";

export default {
  name: "HomeView",
  setup() {
    const projectsStore = useProjectsStore();

    // Enhanced coffee-themed projects
    const featuredProjects = [
      {
        id: 1,
        title: "Ethiopia Yirgacheffe",
        origin: "Sidama, Ethiopia",
        image:
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["Grade 1", "Washed", "Organic"],
        bid: "2.5",
        progress: 78,
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Colombia Geisha",
        origin: "Huila, Colombia",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["Geisha", "Natural", "Limited"],
        bid: "3.8",
        progress: 92,
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        id: 3,
        title: "Guatemala Antigua",
        origin: "Antigua, Guatemala",
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: ["Volcanic", "SHB", "Estate"],
        bid: "1.9",
        progress: 45,
        liveUrl: "#",
        githubUrl: "#",
      },
    ];

    // Enhanced skills with blockchain focus
    const skills = [
      { name: "Ethereum", level: "Mainnet", icon: "⬡", rating: 5 },
      { name: "Polygon", level: "Sidechain", icon: "🔷", rating: 5 },
      { name: "IPFS", level: "Storage", icon: "📡", rating: 4 },
      { name: "Chainlink", level: "Oracles", icon: "🔗", rating: 4 },
      { name: "The Graph", level: "Indexing", icon: "📊", rating: 4 },
      { name: "OpenZeppelin", level: "Contracts", icon: "⚙️", rating: 5 },
      { name: "WalletConnect", level: "Web3", icon: "🔌", rating: 4 },
      { name: "Solidity", level: "Language", icon: "⚡", rating: 5 },
    ];

    return {
      featuredProjects,
      skills,
    };
  },
};
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes pulse-slower {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}

.animate-float {
  animation: float 15s infinite ease-in-out;
}

.animate-pulse-slow {
  animation: pulse-slow 4s infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 6s infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

.animate-scroll {
  animation: scroll 1.5s infinite;
}

.coffee-steam {
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.coffee-steam span {
  width: 4px;
  height: 40px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  animation: steam 2s infinite ease-in-out;
}

.coffee-steam span:nth-child(2) {
  animation-delay: 0.3s;
  height: 50px;
}

.coffee-steam span:nth-child(3) {
  animation-delay: 0.6s;
  height: 30px;
}

@keyframes steam {
  0% {
    transform: translateY(0) scaleY(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) scaleY(1.5);
    opacity: 0.3;
  }
  100% {
    transform: translateY(-40px) scaleY(1);
    opacity: 0;
  }
}
</style>
