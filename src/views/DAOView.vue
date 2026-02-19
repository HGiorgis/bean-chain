<template>
  <div class="pt-24 pb-20">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
        <div
          class="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6"
        >
          <i data-lucide="users" class="w-4 h-4 text-amber-600"></i>
          <span class="text-sm font-mono text-amber-700">BEANCHAIN DAO</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-black mb-6">
          Decentralized
          <span
            class="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"
            >Governance</span
          >
        </h1>
        <p class="text-gray-600 text-lg">
          Shape the future of coffee. Vote on proposals, suggest improvements,
          and earn governance rewards.
        </p>
      </div>

      <!-- DAO Stats -->
      <div class="grid md:grid-cols-4 gap-6 mb-12">
        <div
          v-for="stat in daoStats"
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
          </div>
          <h3 class="text-2xl font-black">{{ stat.value }}</h3>
          <p class="text-gray-600 text-sm">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Governance Power -->
      <div
        class="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-3xl p-8 mb-12 border border-amber-200"
        data-aos="fade-up"
      >
        <div class="flex flex-wrap items-center justify-between gap-6">
          <div class="flex items-center space-x-6">
            <div
              class="w-20 h-20 bg-white rounded-2xl flex items-center justify-center"
            >
              <i data-lucide="vote" class="w-10 h-10 text-amber-600"></i>
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-1">Your Voting Power</p>
              <p class="text-3xl font-mono font-bold">
                {{ authStore.isAuthenticated ? '2,342 BEAN' : '0 BEAN' }}
              </p>
              <p class="text-sm text-amber-600">
                {{ authStore.isAuthenticated ? '≈ 2.3% of total supply' : 'Login to see power' }}
              </p>

            </div>
          </div>
          <div class="flex space-x-4">
            <button
              class="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all flex items-center space-x-2"
            >
              <i data-lucide="plus" class="w-4 h-4"></i>
              <span>Delegate Votes</span>
            </button>
            <button
              class="px-6 py-3 bg-white border-2 border-amber-200 text-amber-700 rounded-xl font-semibold hover:bg-amber-50 transition-all"
            >
              View History
            </button>
          </div>
        </div>
      </div>

      <!-- Active Proposals -->
      <h2 class="text-3xl font-bold mb-8">Active Proposals</h2>
      <div class="space-y-6 mb-12">
        <div
          v-for="proposal in activeProposals"
          :key="proposal.id"
          class="bg-white rounded-2xl p-6 border border-amber-200 hover:shadow-xl transition-all"
          data-aos="fade-up"
        >
          <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div class="flex items-center space-x-3 mb-2">
                <span
                  class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-mono"
                  >PIP-{{ proposal.id }}</span
                >
                <span
                  class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs"
                  >Active</span
                >
              </div>
              <h3 class="text-xl font-bold">{{ proposal.title }}</h3>
              <p class="text-gray-600">{{ proposal.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-500">Ends in</p>
              <p class="text-lg font-mono text-amber-600">
                {{ proposal.timeLeft }}
              </p>
            </div>
          </div>

          <!-- Voting Progress -->
          <div class="space-y-4">
            <div class="flex justify-between text-sm">
              <span class="text-green-600">For: {{ proposal.for }}%</span>
              <span class="text-red-600">Against: {{ proposal.against }}%</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden flex">
              <div
                class="h-full bg-green-500"
                :style="{ width: proposal.for + '%' }"
              ></div>
              <div
                class="h-full bg-red-500"
                :style="{ width: proposal.against + '%' }"
              ></div>
            </div>

            <div class="flex space-x-4 pt-4">
              <button
                @click="handleVote(proposal.id, 'for')"
                :disabled="isVoting === proposal.id"
                class="flex-1 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <i v-if="isVoting !== proposal.id" data-lucide="thumbs-up" class="w-4 h-4"></i>
                <i v-else class="w-4 h-4 animate-spin" data-lucide="loader-2"></i>
                <span>{{ isVoting === proposal.id ? 'Voting...' : 'Vote For' }}</span>
              </button>
              <button
                @click="handleVote(proposal.id, 'against')"
                :disabled="isVoting === proposal.id"
                class="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <i v-if="isVoting !== proposal.id" data-lucide="thumbs-down" class="w-4 h-4"></i>
                <i v-else class="w-4 h-4 animate-spin" data-lucide="loader-2"></i>
                <span>{{ isVoting === proposal.id ? 'Voting...' : 'Vote Against' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Create Proposal -->
      <div
        class="bg-gradient-to-br from-amber-800 to-amber-900 rounded-3xl p-8 text-white"
        data-aos="fade-up"
      >
        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold mb-4">Have an idea for BeanChain?</h3>
            <p class="text-amber-200 mb-6">
              Create a proposal and let the community vote. All active stakers
              can submit proposals.
            </p>
            <button
              class="px-6 py-3 bg-white text-amber-700 rounded-xl font-semibold hover:bg-amber-50 transition-all flex items-center space-x-2"
            >
              <i data-lucide="file-text" class="w-4 h-4"></i>
              <span>Create Proposal</span>
            </button>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center">
              <div class="text-3xl font-mono font-bold text-amber-300">1K+</div>
              <div class="text-sm text-amber-200">Proposals</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-mono font-bold text-amber-300">85%</div>
              <div class="text-sm text-amber-200">Participation</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-mono font-bold text-amber-300">12</div>
              <div class="text-sm text-amber-200">Active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const isVoting = ref(null); // id of proposal being voted on

const daoStats = [
  { icon: "users", value: "3,421", label: "DAO Members", delay: 0 },
  { icon: "vote", value: "234", label: "Total Proposals", delay: 100 },
  { icon: "bean", value: "102K", label: "BEAN Supply", delay: 200 },
  { icon: "calendar", value: "12", label: "Active Proposals", delay: 300 },
];

const activeProposals = ref([
  {
    id: 42,
    title: "Increase Farmer Royalties to 5%",
    description: "Proposal to increase the royalty fee for farmers from 3% to 5% on secondary sales.",
    timeLeft: "2 days",
    for: 78,
    against: 22,
  },
  {
    id: 41,
    title: "Add Single Origin Ethiopia Collection",
    description: "Add 5 new Ethiopian coffee lots to the marketplace from the Yirgacheffe region.",
    timeLeft: "3 days",
    for: 92,
    against: 8,
  },
  {
    id: 40,
    title: "Treasury Allocation for Coffee Education",
    description: "Allocate 50 ETH from treasury to fund coffee education programs in origin countries.",
    timeLeft: "5 days",
    for: 64,
    against: 36,
  },
]);

const handleVote = async (proposalId, type) => {
  if (!authStore.isAuthenticated) {
    alert("Please login to vote in the DAO.");
    return;
  }
  isVoting.value = proposalId;
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const proposal = activeProposals.value.find(p => p.id === proposalId);
  if (proposal) {
    if (type === 'for') proposal.for += 1;
    else proposal.against += 1;
  }
  
  isVoting.value = null;
  alert(`Vote cast: ${type === 'for' ? 'For' : 'Against'} PIP-${proposalId}`);
};

const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

onMounted(initIcons);
</script>

