<template>
  <nav
    class="fixed w-full z-50 transition-all duration-500"
    :class="[
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
        : 'bg-transparent py-4',
    ]"
  >
    <div class="container-custom">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div class="relative">
            <i
              data-lucide="bean"
              class="w-8 h-8 text-amber-700 group-hover:animate-bounce"
            ></i>
            <span
              class="absolute -top-1 -right-1 text-xs bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center animate-pulse"
              >3</span
            >
          </div>
          <div class="flex flex-col">
            <span
              class="text-2xl font-black bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent"
            >
              Bean<span class="text-gray-900">Chain</span>
            </span>
            <span class="text-[10px] font-mono text-gray-500 -mt-1"
              >.crypto</span
            >
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="relative px-4 py-2 text-sm font-medium group"
            :class="[
              $route.path === item.path
                ? 'text-amber-600'
                : 'text-gray-700 hover:text-amber-600',
            ]"
          >
            <i :data-lucide="item.icon" class="w-4 h-4 inline-block mr-1"></i>
            {{ item.name }}
            <span
              class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"
            ></span>
            <span
              class="absolute bottom-0 right-1/2 w-0 h-0.5 bg-amber-500 group-hover:w-1/2 group-hover:right-1/4 transition-all duration-300"
            ></span>
          </router-link>
        </div>

        <!-- Right Side Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Wallet Connect Button -->
          <button @click="toggleWallet" class="relative group">
            <div
              class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"
            ></div>
            <div
              class="relative px-4 py-2 bg-black rounded-lg flex items-center space-x-2"
            >
              <span
                class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              ></span>
              <span class="text-white text-sm font-mono">{{
                cartStore.walletAddress
              }}</span>
              <span class="text-amber-400 text-xs ml-2"
                >{{ cartStore.ethBalance }} ETH</span
              >
            </div>
          </button>

          <!-- Cart with Dropdown -->
          <div class="relative">
            <button
              @click="cartStore.toggleCart"
              class="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <i data-lucide="shopping-cart" class="w-6 h-6"></i>
              <span
                v-if="cartStore.totalItems > 0"
                class="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse"
              >
                {{ cartStore.totalItems }}
              </span>
            </button>

            <!-- Cart Dropdown -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div
                v-if="cartStore.isOpen"
                class="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-amber-100 overflow-hidden z-50"
              >
                <div
                  class="p-4 bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-200"
                >
                  <div class="flex items-center justify-between">
                    <h3 class="font-bold flex items-center">
                      <i
                        data-lucide="shopping-bag"
                        class="w-5 h-5 mr-2 text-amber-600"
                      ></i>
                      Your Beans ({{ cartStore.totalItems }})
                    </h3>
                    <button
                      @click="cartStore.closeCart"
                      class="text-gray-500 hover:text-gray-700"
                    >
                      <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                  </div>
                </div>

                <div class="max-h-96 overflow-y-auto">
                  <div
                    v-if="cartStore.items.length === 0"
                    class="p-8 text-center"
                  >
                    <i
                      data-lucide="coffee"
                      class="w-16 h-16 mx-auto text-gray-300 mb-4"
                    ></i>
                    <p class="text-gray-500">Your cart is empty</p>
                    <p class="text-sm text-gray-400 mt-2">
                      Time to brew some NFTs!
                    </p>
                  </div>

                  <div v-else class="divide-y divide-amber-100">
                    <div
                      v-for="item in cartStore.items"
                      :key="item.id"
                      class="p-4 hover:bg-amber-50 transition-colors"
                    >
                      <div class="flex space-x-4">
                        <img
                          :src="item.image"
                          :alt="item.title"
                          class="w-16 h-16 object-cover rounded-lg"
                        />
                        <div class="flex-1">
                          <h4 class="font-semibold">{{ item.title }}</h4>
                          <p class="text-sm text-gray-500">{{ item.origin }}</p>
                          <div class="flex items-center justify-between mt-2">
                            <div class="flex items-center space-x-2">
                              <button
                                @click="
                                  cartStore.updateQuantity(
                                    item.id,
                                    item.quantity - 1,
                                  )
                                "
                                class="p-1 hover:bg-amber-200 rounded"
                              >
                                <i data-lucide="minus" class="w-4 h-4"></i>
                              </button>
                              <span class="w-8 text-center">{{
                                item.quantity
                              }}</span>
                              <button
                                @click="
                                  cartStore.updateQuantity(
                                    item.id,
                                    item.quantity + 1,
                                  )
                                "
                                class="p-1 hover:bg-amber-200 rounded"
                              >
                                <i data-lucide="plus" class="w-4 h-4"></i>
                              </button>
                            </div>
                            <div class="flex items-center space-x-2">
                              <span class="font-mono text-amber-600"
                                >{{
                                  (item.bid * item.quantity).toFixed(2)
                                }}
                                ETH</span
                              >
                              <button
                                @click="cartStore.removeFromItem(item.id)"
                                class="text-red-400 hover:text-red-600"
                              >
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-if="cartStore.items.length > 0"
                  class="p-4 bg-gray-50 border-t border-amber-200"
                >
                  <div class="flex justify-between mb-4">
                    <span class="font-semibold">Subtotal</span>
                    <span class="font-mono font-bold text-amber-600"
                      >{{ cartStore.formattedSubtotal }} ETH</span
                    >
                  </div>
                  <div class="flex space-x-2">
                    <button
                      @click="cartStore.clearCart"
                      class="flex-1 px-4 py-2 border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      Clear
                    </button>
                    <button
                      class="flex-1 px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <i data-lucide="shield" class="w-4 h-4"></i>
                      <span>Checkout</span>
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden relative w-10 h-10 focus:outline-none"
          :class="{ active: isMobileMenuOpen }"
        >
          <span class="sr-only">Toggle menu</span>
          <span
            class="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out"
            :class="{
              'rotate-45 translate-y-1.5': isMobileMenuOpen,
              '-translate-y-2': !isMobileMenuOpen,
            }"
          ></span>
          <span
            class="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out"
            :class="{ 'opacity-0': isMobileMenuOpen }"
          ></span>
          <span
            class="block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out"
            :class="{
              '-rotate-45 -translate-y-1.5': isMobileMenuOpen,
              'translate-y-2': !isMobileMenuOpen,
            }"
          ></span>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div
          v-show="isMobileMenuOpen"
          class="md:hidden mt-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-amber-100"
        >
          <div class="space-y-1">
            <router-link
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-xl transition-all duration-300"
              :class="{
                'bg-amber-50 text-amber-600': $route.path === item.path,
              }"
              @click="isMobileMenuOpen = false"
            >
              <i :data-lucide="item.icon" class="w-5 h-5"></i>
              <span>{{ item.name }}</span>
            </router-link>
          </div>

          <!-- Mobile Wallet & Cart -->
          <div class="mt-4 pt-4 border-t border-amber-100 space-y-3">
            <div
              class="flex items-center justify-between p-3 bg-black/5 rounded-xl"
            >
              <div class="flex items-center space-x-2">
                <span
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></span>
                <span class="font-mono text-sm">{{
                  cartStore.walletAddress
                }}</span>
              </div>
              <span class="text-amber-600 font-mono text-sm"
                >{{ cartStore.ethBalance }} ETH</span
              >
            </div>

            <div
              class="flex items-center justify-between p-3 bg-amber-50 rounded-xl"
            >
              <div class="flex items-center space-x-2">
                <i
                  data-lucide="shopping-cart"
                  class="w-5 h-5 text-amber-600"
                ></i>
                <span class="font-medium">Cart</span>
              </div>
              <span
                class="bg-amber-600 text-white px-2 py-1 rounded-full text-xs"
                >{{ cartStore.totalItems }} items</span
              >
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from "@/stores/cart";
import { mapState } from "pinia";

export default {
  name: "Navbar",
  data() {
    return {
      isMobileMenuOpen: false,
      scrolled: false,
      menuItems: [
        { name: "Home", path: "/", icon: "home" },
        { name: "Marketplace", path: "/marketplace", icon: "store" },
        { name: "Roastery", path: "/about", icon: "coffee" },
        { name: "Staking", path: "/staking", icon: "trending-up" },
        { name: "DAO", path: "/dao", icon: "users" },
        { name: "Contact", path: "/contact", icon: "mail" },
      ],
    };
  },
  computed: {
    ...mapState(useCartStore, ["totalItems"]),
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.initIcons();
  },
  updated() {
    this.initIcons();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    toggleWallet() {
      // Simulate wallet connection toggle
      const cartStore = useCartStore();
      cartStore.walletConnected = !cartStore.walletConnected;
    },
    initIcons() {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    },
  },
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
};
</script>
