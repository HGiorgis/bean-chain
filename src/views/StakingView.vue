<template>
  <div class="pt-24 pb-20">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
        <div
          class="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6"
        >
          <i data-lucide="trending-up" class="w-4 h-4 text-amber-600"></i>
          <span class="text-sm font-mono text-amber-700"
            >BEANCHAIN STAKING</span
          >
        </div>
        <h1 class="text-4xl md:text-5xl font-black mb-6">
          Stake Beans,
          <span
            class="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"
            >Earn Rewards</span
          >
        </h1>
        <p class="text-gray-600 text-lg">
          Stake your coffee NFTs to earn daily rewards and participate in farm
          governance.
        </p>
      </div>

      <!-- Stats Cards -->
      <div class="grid md:grid-cols-4 gap-6 mb-12">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white rounded-2xl p-6 shadow-lg border border-amber-100"
          data-aos="fade-up"
          :data-aos-delay="stat.delay"
        >
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center"
            >
              <i :data-lucide="stat.icon" class="w-6 h-6 text-amber-600"></i>
            </div>
            <span
              class="text-xs font-mono text-amber-600 bg-amber-50 px-2 py-1 rounded-full"
              >Live</span
            >
          </div>
          <h3 class="text-2xl font-black">{{ stat.value }}</h3>
          <p class="text-gray-600 text-sm">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Main Staking Area -->
      <div class="grid lg:grid-cols-3 gap-8 mb-12">
        <!-- Staking Form -->
        <div class="lg:col-span-2">
          <div
            class="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-200 shadow-xl"
            data-aos="fade-right"
          >
            <h2 class="text-2xl font-bold mb-6 flex items-center">
              <i data-lucide="wallet" class="w-6 h-6 mr-2 text-amber-600"></i>
              Your Staking Dashboard
            </h2>

            <!-- Balance Cards -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="bg-white rounded-xl p-4 border border-amber-200">
                <p class="text-sm text-gray-500 mb-1">Wallet Balance</p>
                <p class="text-2xl font-mono font-bold">12.5 ETH</p>
                <p class="text-xs text-gray-400">≈ $24,350</p>
              </div>
              <div class="bg-white rounded-xl p-4 border border-amber-200">
                <p class="text-sm text-gray-500 mb-1">Staked Beans</p>
                <p class="text-2xl font-mono font-bold">8 NFTs</p>
                <p class="text-xs text-amber-600">+2.3 ETH earned</p>
              </div>
            </div>

            <!-- Staking Input -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Select NFT to Stake</label
              >
              <div class="flex space-x-2">
                <select
                  class="flex-1 px-4 py-3 bg-white border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option>Ethiopia Yirgacheffe #2394</option>
                  <option>Colombia Geisha #1842</option>
                  <option>Guatemala Antigua #3721</option>
                </select>
                <button
                  class="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all flex items-center space-x-2"
                >
                  <i data-lucide="lock" class="w-4 h-4"></i>
                  <span>Stake</span>
                </button>
              </div>
            </div>

            <!-- Staking Options -->
            <div class="grid grid-cols-3 gap-3 mb-8">
              <button
                v-for="option in stakeOptions"
                :key="option.days"
                class="p-4 bg-white rounded-xl border-2 hover:border-amber-500 transition-all text-center group"
                :class="
                  selectedStakeOption === option.days
                    ? 'border-amber-500 bg-amber-50'
                    : 'border-amber-200'
                "
                @click="selectedStakeOption = option.days"
              >
                <p class="text-lg font-bold group-hover:text-amber-600">
                  {{ option.days }} Days
                </p>
                <p class="text-sm text-amber-600">{{ option.apy }}% APY</p>
              </button>
            </div>

            <!-- Staked NFTs List -->
            <div>
              <h3 class="font-semibold mb-4 flex items-center">
                <i data-lucide="list" class="w-4 h-4 mr-2 text-amber-600"></i>
                Your Staked Beans
              </h3>
              <div class="space-y-3">
                <div
                  v-for="nft in stakedNFTs"
                  :key="nft.id"
                  class="flex items-center justify-between p-3 bg-white rounded-xl border border-amber-200"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      :src="nft.image"
                      class="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p class="font-semibold">{{ nft.name }}</p>
                      <p class="text-xs text-gray-500">
                        Staked: {{ nft.stakedDays }} days
                      </p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-mono text-amber-600">{{ nft.earned }} ETH</p>
                    <p class="text-xs text-gray-500">earned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Rewards Sidebar -->
        <div>
          <div
            class="bg-gradient-to-br from-amber-800 to-amber-900 rounded-3xl p-8 text-white sticky top-24"
            data-aos="fade-left"
          >
            <h3 class="text-xl font-bold mb-6 flex items-center">
              <i data-lucide="gift" class="w-5 h-5 mr-2 text-amber-300"></i>
              Your Rewards
            </h3>

            <div class="space-y-6">
              <div
                class="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <p class="text-amber-300 text-sm mb-2">Available Rewards</p>
                <p class="text-4xl font-mono font-bold">0.85 ETH</p>
                <p class="text-amber-200 text-sm mt-2">≈ $1,657</p>
              </div>

              <div class="space-y-4">
                <button
                  class="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 rounded-xl font-semibold hover:from-amber-500 hover:to-amber-600 transition-all flex items-center justify-center space-x-2"
                >
                  <i data-lucide="download" class="w-4 h-4"></i>
                  <span>Claim Rewards</span>
                </button>

                <button
                  class="w-full py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
                >
                  <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                  <span>Compound</span>
                </button>
              </div>

              <!-- APY Chart -->
              <div class="mt-8">
                <p class="text-amber-300 text-sm mb-3">Rewards History</p>
                <div class="h-32 flex items-end space-x-2">
                  <div
                    v-for="(day, i) in [40, 65, 45, 80, 55, 70, 90]"
                    :key="i"
                    class="flex-1 bg-amber-400/30 rounded-t-lg relative group hover:bg-amber-400/50 transition-all"
                    :style="{ height: day + '%' }"
                  >
                    <div
                      class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    >
                      {{ day * 0.01 }} ETH
                    </div>
                  </div>
                </div>
                <div class="flex justify-between mt-2 text-xs text-amber-300">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Staking Pools -->
      <section class="mt-20">
        <h2 class="text-3xl font-bold mb-8">Staking Pools</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="pool in stakingPools"
            :key="pool.name"
            class="bg-white rounded-2xl p-6 border border-amber-200 hover:shadow-xl transition-all"
            data-aos="fade-up"
          >
            <div class="flex items-center space-x-3 mb-4">
              <div
                class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center"
              >
                <i :data-lucide="pool.icon" class="w-6 h-6 text-amber-600"></i>
              </div>
              <div>
                <h3 class="font-bold">{{ pool.name }}</h3>
                <p class="text-sm text-gray-500">{{ pool.tvl }} TVL</p>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">APY</span>
                <span class="font-mono text-amber-600">{{ pool.apy }}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Lock Period</span>
                <span>{{ pool.lockPeriod }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Min. Stake</span>
                <span class="font-mono">{{ pool.minStake }} ETH</span>
              </div>
            </div>
            <button
              class="w-full mt-4 py-2 border-2 border-amber-200 text-amber-700 rounded-xl hover:bg-amber-50 transition-colors"
            >
              Stake Now
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "StakingView",
  setup() {
    const selectedStakeOption = ref(30);

    const stats = [
      { icon: "coins", value: "$2.4M", label: "Total Value Locked", delay: 0 },
      { icon: "users", value: "1,234", label: "Active Stakers", delay: 100 },
      { icon: "bean", value: "8,942", label: "Beans Staked", delay: 200 },
      { icon: "trending-up", value: "8.5%", label: "Avg. APY", delay: 300 },
    ];

    const stakeOptions = [
      { days: 30, apy: 6.5 },
      { days: 60, apy: 7.8 },
      { days: 90, apy: 9.2 },
    ];

    const stakedNFTs = [
      {
        id: 1,
        name: "Ethiopia Yirgacheffe",
        image:
          "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80",
        stakedDays: 45,
        earned: 0.32,
      },
      {
        id: 2,
        name: "Colombia Geisha",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80",
        stakedDays: 23,
        earned: 0.18,
      },
    ];

    const stakingPools = [
      {
        name: "Single Bean Pool",
        icon: "bean",
        tvl: "$1.2M",
        apy: 6.5,
        lockPeriod: "Flexible",
        minStake: 0.1,
      },
      {
        name: "Farmers Pool",
        icon: "tractor",
        tvl: "$850K",
        apy: 8.2,
        lockPeriod: "60 days",
        minStake: 0.5,
      },
      {
        name: "Harvest Pool",
        icon: "grain",
        tvl: "$350K",
        apy: 12.5,
        lockPeriod: "90 days",
        minStake: 1.0,
      },
    ];

    return {
      selectedStakeOption,
      stats,
      stakeOptions,
      stakedNFTs,
      stakingPools,
    };
  },
};
</script>
