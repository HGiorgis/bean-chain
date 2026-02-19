import { defineStore } from "pinia";
import { mockApi } from "@/services/mockApi";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || null,
        loading: false,
        error: null,
    }),

    getters: {
        isAuthenticated: (state) => !!state.user,
    },

    actions: {
        async login(email, password) {
            this.loading = true;
            this.error = null;
            try {
                const response = await mockApi.login(email, password);
                this.user = response.user;
                this.token = response.token;
                localStorage.setItem("user", JSON.stringify(this.user));
                localStorage.setItem("token", this.token);
                return true;
            } catch (err) {
                this.error = err.message;
                return false;
            } finally {
                this.loading = false;
            }
        },

        async register(userData) {
            this.loading = true;
            this.error = null;
            try {
                const response = await mockApi.register(userData);
                this.user = response.user;
                this.token = response.token;
                localStorage.setItem("user", JSON.stringify(this.user));
                localStorage.setItem("token", this.token);
                return true;
            } catch (err) {
                this.error = err.message;
                return false;
            } finally {
                this.loading = false;
            }
        },

        logout() {
            this.user = null;
            this.token = null;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        },
    },
});
