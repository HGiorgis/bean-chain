<template>
  <footer
    class="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white overflow-hidden"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse-slower"
      ></div>
    </div>

    <!-- Coffee Bean Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute inset-0"
        style="
          background-image: repeating-linear-gradient(
            45deg,
            #fff 0px,
            #fff 2px,
            transparent 2px,
            transparent 10px
          );
        "
      ></div>
    </div>

    <div class="container-custom relative z-10 py-16">
      <!-- Main Footer Content -->
      <div class="grid lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand Section -->
        <div class="space-y-6">
          <div class="flex items-center space-x-2">
            <span class="text-4xl filter drop-shadow-lg">🫘</span>
            <div>
              <span
                class="text-2xl font-black bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent"
              >
                Bean<span class="text-white">Chain</span>
              </span>
              <span class="block text-xs font-mono text-amber-300"
                >.crypto ☕</span
              >
            </div>
          </div>

          <p class="text-amber-200/80 leading-relaxed">
            The first decentralized coffee marketplace connecting farmers
            directly with roasters through blockchain technology.
          </p>

          <!-- Live Network Status -->
          <div
            class="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-amber-500/20"
          >
            <div class="relative">
              <div
                class="w-3 h-3 bg-green-400 rounded-full animate-pulse"
              ></div>
              <div
                class="absolute -inset-1 bg-green-400 rounded-full animate-ping opacity-50"
              ></div>
            </div>
            <div class="flex-1">
              <div class="text-sm font-mono">BeanChain Mainnet</div>
              <div class="text-xs text-amber-300">Block #4,329,023</div>
            </div>
            <div class="text-xs bg-amber-500/20 px-2 py-1 rounded-full">
              Live
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-6 flex items-center">
            <span class="w-1 h-6 bg-amber-400 rounded-full mr-3"></span>
            Quick Links
          </h4>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link
                :to="link.path"
                class="group flex items-center text-amber-200/80 hover:text-white transition-all duration-300"
              >
                <span
                  class="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-300"
                ></span>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Network Stats -->
        <div>
          <h4 class="text-lg font-bold mb-6 flex items-center">
            <span class="w-1 h-6 bg-amber-400 rounded-full mr-3"></span>
            Network Stats
          </h4>
          <div class="space-y-4">
            <div
              v-for="stat in networkStats"
              :key="stat.label"
              class="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all"
            >
              <span class="text-amber-200/80">{{ stat.label }}</span>
              <span class="font-mono font-bold">{{ stat.value }}</span>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-lg font-bold mb-6 flex items-center">
            <span class="w-1 h-6 bg-amber-400 rounded-full mr-3"></span>
            Bean Updates
          </h4>
          <p class="text-amber-200/80 mb-4 text-sm">
            Get fresh beans and blockchain updates directly in your inbox.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="space-y-3">
            <div class="relative">
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-xl text-white placeholder-amber-300/50 focus:outline-none focus:border-amber-400 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Subscribe</span>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </form>
          <p
            v-if="subscribed"
            class="text-green-400 text-sm mt-3 animate-fade-in"
          >
            ✅ Thanks for subscribing! Check your inbox.
          </p>
        </div>
      </div>

      <!-- Social Links & Copyright -->
      <div class="pt-8 mt-8 border-t border-amber-500/20">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative"
            >
              <div
                class="absolute inset-0 bg-amber-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"
              ></div>
              <div
                class="relative w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-amber-500/20 group-hover:border-amber-400 group-hover:bg-white/10 transition-all"
              >
                <svg
                  class="w-5 h-5 text-amber-200 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path :d="social.icon" />
                </svg>
              </div>
            </a>
          </div>

          <!-- Copyright -->
          <div class="text-center text-amber-200/60 text-sm">
            <p>
              © {{ new Date().getFullYear() }} BeanChain. All rights reserved.
            </p>
            <p class="text-xs mt-1 font-mono">v2.3.1 · Built on Ethereum</p>
          </div>

          <!-- Block Height -->
          <div
            class="flex items-center space-x-2 text-sm font-mono text-amber-300/60"
          >
            <span
              class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
            ></span>
            <span>Block #4,329,023</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email: "",
      subscribed: false,
      quickLinks: [
        { name: "Marketplace", path: "/projects" },
        { name: "Roastery", path: "/about" },
        { name: "Staking", path: "/staking" },
        { name: "DAO", path: "/dao" },
        { name: "Docs", path: "/docs" },
      ],
      networkStats: [
        { label: "Total Value Locked", value: "$2.4M" },
        { label: "Active Farmers", value: "1,234" },
        { label: "Total Beans Minted", value: "8,942" },
        { label: "Avg. APY", value: "8.5%" },
      ],
      socialLinks: [
        {
          name: "GitHub",
          url: "https://github.com",
          icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        },
        {
          name: "Discord",
          url: "https://discord.com",
          icon: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515c-.21.38-.463.89-.634 1.3a18.45 18.45 0 0 0-5.596 0 12.66 12.66 0 0 0-.635-1.3A19.736 19.736 0 0 0 3.68 4.37C1.77 7.02 1.157 9.6 1.46 12.13a19.79 19.79 0 0 0 6.008 2.484c.486-.66 1.045-1.44 1.414-2.134a12.62 12.62 0 0 1-2.217-1.086c.186-.138.368-.283.544-.44a14.28 14.28 0 0 0 12.382 0c.176.157.358.302.544.44a12.66 12.66 0 0 1-2.217 1.086c.37.694.928 1.474 1.414 2.134a19.73 19.73 0 0 0 6.008-2.484c.346-2.987-.524-5.532-2.125-7.76zM8.02 10.46c-.73 0-1.324-.677-1.324-1.504 0-.827.57-1.505 1.324-1.505.754 0 1.347.678 1.324 1.505 0 .827-.57 1.504-1.324 1.504zm6.96 0c-.73 0-1.324-.677-1.324-1.504 0-.827.57-1.505 1.324-1.505.754 0 1.347.678 1.324 1.505 0 .827-.57 1.504-1.324 1.504z",
        },
        {
          name: "Twitter",
          url: "https://twitter.com",
          icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
        },
        {
          name: "OpenSea",
          url: "https://opensea.io",
          icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.61 11.71l-4.47 4.47c-.63.63-1.65.63-2.28 0l-4.47-4.47c-.63-.63-.63-1.65 0-2.28l4.47-4.47c.63-.63 1.65-.63 2.28 0l4.47 4.47c.63.63.63 1.65 0 2.28z",
        },
      ],
    };
  },
  methods: {
    subscribeNewsletter() {
      // Simulate subscription
      this.subscribed = true;
      this.email = "";
      setTimeout(() => {
        this.subscribed = false;
      }, 5000);
    },
  },
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>
