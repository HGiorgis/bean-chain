<template>
  <div class="min-h-[80vh] top-24 flex items-center justify-center px-4 py-12 relative overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 -z-10">
      <div
        class="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100"
      ></div>
      <!-- Animated Coffee Beans -->
      <div class="absolute inset-0 opacity-10">
        <div
          v-for="i in 15"
          :key="i"
          class="absolute animate-float"
          :style="{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 10 + 's',
            animationDuration: 15 + Math.random() * 10 + 's',
          }"
        >
          <i data-lucide="bean" class="w-8 h-8 text-amber-900"></i>
        </div>
      </div>
    </div>

    <div class="max-w-md w-full space-y-8 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-amber-200 relative z-10" data-aos="fade-up">
      <!-- Decorative Elements -->
      <div class="absolute -top-4 -right-4 w-20 h-20 bg-amber-200 rounded-full blur-2xl opacity-60"></div>
      <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-amber-300 rounded-full blur-2xl opacity-60"></div>
      
      <!-- Steam Animation -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="coffee-steam">
          <span></span><span></span><span></span>
        </div>
      </div>

      <!-- Logo/Header -->
      <div class="text-center">
        <router-link to="/" class="inline-flex items-center space-x-2 group mb-4">
          <div class="relative">
            <i
              data-lucide="bean"
              class="w-10 h-10 text-amber-700 group-hover:animate-bounce"
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
          </div>
        </router-link>

        <h2 class="text-3xl font-black text-gray-900">
          Welcome back
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          New to BeanChain?
          <router-link
            to="/register"
            class="font-medium text-amber-600 hover:text-amber-500 transition-colors"
          >
            create an account
          </router-link>
        </p>
      </div>
      <!-- Form -->
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <!-- Email -->
          <div>
            <label for="email-address" class="block text-sm font-medium text-gray-700 mb-1">
              <i data-lucide="mail" class="w-4 h-4 inline-block mr-1 text-amber-600"></i>
              Email address
            </label>
            <div class="relative">
              <i
                data-lucide="mail"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400"
              ></i>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="email"
                class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="hello@beanchain.crypto"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
              <i data-lucide="lock" class="w-4 h-4 inline-block mr-1 text-amber-600"></i>
              Password
            </label>
            <div class="relative">
              <i
                data-lucide="lock"
                class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400"
              ></i>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                v-model="password"
                class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                v-model="rememberMe"
                class="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div class="text-sm">
              <a href="#" class="font-medium text-amber-600 hover:text-amber-500">
                Forgot password?
              </a>
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <div
          v-if="authStore.error"
          class="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center space-x-2"
        >
          <i data-lucide="alert-circle" class="w-5 h-5"></i>
          <span>{{ authStore.error }}</span>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            :disabled="authStore.loading"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="authStore.loading" class="flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </span>
            <span v-else class="flex items-center">
              Sign In
              <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
            </span>
          </button>
        </div>

      </form>

      <!-- Wallet Option -->
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-amber-200"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-3">
        <button
          type="button"
          @click="connectWallet"
          class="flex items-center justify-center space-x-2 py-3 px-4 border-2 border-amber-200 rounded-xl text-amber-700 hover:bg-amber-50 transition-all group"
        >
          <i data-lucide="wallet" class="w-5 h-5 group-hover:animate-bounce"></i>
          <span class="font-medium">Wallet</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleLogin = async () => {
  const success = await authStore.login(email.value, password.value);
  if (success) {
    router.push('/');
  }
};

const quickDemoLogin = async () => {
  email.value = 'demo@beanchain.crypto';
  password.value = 'demo123!';
  await handleLogin();
};

const connectWallet = () => {
  // Simulate wallet connection
  alert('Wallet connection would be initiated here');
};

onMounted(() => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
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

.animate-float {
  animation: float 15s infinite ease-in-out;
}

.coffee-steam {
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.coffee-steam span {
  width: 4px;
  height: 20px;
  background: rgba(180, 83, 9, 0.3);
  border-radius: 4px;
  animation: steam 2s infinite ease-in-out;
}

.coffee-steam span:nth-child(2) {
  animation-delay: 0.3s;
  height: 25px;
}

.coffee-steam span:nth-child(3) {
  animation-delay: 0.6s;
  height: 15px;
}

@keyframes steam {
  0% {
    transform: translateY(0) scaleY(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-10px) scaleY(1.5);
    opacity: 0.3;
  }
  100% {
    transform: translateY(-20px) scaleY(1);
    opacity: 0;
  }
}
</style>