import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    isOpen: false,
    walletConnected: false,
    walletAddress: "0x7F...3aB2",
    ethBalance: 12.5,
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: (state) =>
      state.items.reduce((sum, item) => sum + item.bid * item.quantity, 0),
    formattedSubtotal: (state) =>
      state.items
        .reduce((sum, item) => sum + item.bid * item.quantity, 0)
        .toFixed(2),
  },

  actions: {
    addToCart(project) {
      const existingItem = this.items.find((item) => item.id === project.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({
          id: project.id,
          title: project.title,
          origin: project.origin,
          bid: project.bid,
          image: project.image,
          quantity: 1,
        });
      }
    },

    removeFromItem(itemId) {
      const index = this.items.findIndex((item) => item.id === itemId);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },

    updateQuantity(itemId, quantity) {
      const item = this.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },

    toggleCart() {
      this.isOpen = !this.isOpen;
    },

    closeCart() {
      this.isOpen = false;
    },

    clearCart() {
      this.items = [];
    },
  },
});
