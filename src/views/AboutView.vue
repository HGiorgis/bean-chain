<template>
  <div class="pt-24 pb-20">
    <div class="container-custom">
      <!-- Hero -->
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
        <div
          class="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6"
        >
          <i data-lucide="coffee" class="w-4 h-4 text-amber-600"></i>
          <span class="text-sm font-mono text-amber-700">THE ROASTERY</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-black mb-6">
          From Farm to
          <span
            class="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"
            >Blockchain</span
          >
        </h1>
        <p class="text-gray-600 text-lg">
          We're on a mission to revolutionize the coffee industry through
          blockchain technology, bringing transparency and fair value to every
          cup.
        </p>
      </div>

      <!-- Story Section -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Coffee Farm"
            class="rounded-3xl shadow-2xl"
          />
        </div>
        <div data-aos="fade-left">
          <h2 class="text-3xl font-bold mb-6">Our Story</h2>
          <div class="space-y-4 text-gray-600">
            <p>
              BeanChain started in 2022 when our founder, a third-generation
              coffee farmer, realized that blockchain could solve the
              transparency issues plaguing the coffee industry.
            </p>
            <p>
              Today, we've connected over 1,200 farmers directly with roasters,
              eliminating middlemen and ensuring farmers receive fair
              compensation for their premium beans.
            </p>
            <p>
              Every bag of coffee on BeanChain is tokenized as an NFT, providing
              complete traceability from farm to cup. You can scan any bag and
              see exactly where, when, and how your coffee was grown.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-6 mt-8">
            <div class="text-center">
              <div class="text-3xl font-black text-amber-600">1,200+</div>
              <div class="text-sm text-gray-500">Farmers</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-black text-amber-600">89</div>
              <div class="text-sm text-gray-500">Countries</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-black text-amber-600">50K+</div>
              <div class="text-sm text-gray-500">Happy Brewers</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Values -->
      <h2 class="text-3xl font-bold text-center mb-12">Our Values</h2>
      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <div
          v-for="value in values"
          :key="value.title"
          class="bg-white rounded-2xl p-8 text-center border border-amber-200 hover:shadow-xl transition-all"
          data-aos="fade-up"
        >
          <div
            class="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <i :data-lucide="value.icon" class="w-8 h-8 text-amber-600"></i>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ value.title }}</h3>
          <p class="text-gray-600">{{ value.description }}</p>
        </div>
      </div>

      <!-- Team -->
      <h2 class="text-3xl font-bold text-center mb-12">Meet the Roasters</h2>
      <div class="grid md:grid-cols-4 gap-8 mb-20">
        <div
          v-for="member in team"
          :key="member.name"
          class="text-center group"
          data-aos="fade-up"
          :data-aos-delay="member.delay"
        >
          <div class="relative mb-4 inline-block">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-32 h-32 rounded-full object-cover border-4 border-amber-200 group-hover:border-amber-400 transition-all"
            />
            <div
              class="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white"
            >
              <i :data-lucide="member.icon" class="w-4 h-4"></i>
            </div>
          </div>
          <h3 class="font-bold">{{ member.name }}</h3>
          <p class="text-amber-600 text-sm">{{ member.role }}</p>
          <p class="text-gray-500 text-sm mt-2">{{ member.bio }}</p>
        </div>
      </div>

      <!-- Partners -->
      <div
        class="bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-3xl p-12"
        data-aos="fade-up"
      >
        <h3 class="text-2xl font-bold text-center mb-8">Trusted By</h3>
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50"
        >
          <div
            v-for="partner in partners"
            :key="partner"
            class="text-center text-2xl font-bold text-gray-400"
          >
            {{ partner }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  setup() {
    const values = [
      {
        icon: "shield",
        title: "Transparency",
        description:
          "Every transaction and bean is tracked on-chain, ensuring complete visibility from farm to cup.",
      },
      {
        icon: "scale",
        title: "Fair Value",
        description:
          "Farmers receive 85% of the sale price, compared to the industry average of 10-15%.",
      },
      {
        icon: "leaf",
        title: "Sustainability",
        description:
          "We support organic farming practices and carbon-neutral shipping for all orders.",
      },
    ];

    const team = [
      {
        name: "Elena Rodriguez",
        role: "Founder & Head Roaster",
        bio: "Third-generation coffee farmer from Colombia",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        icon: "bean",
        delay: 0,
      },
      {
        name: "Marcus Chen",
        role: "Blockchain Architect",
        bio: "Ex-Ethereum Foundation, coffee enthusiast",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        icon: "code",
        delay: 100,
      },
      {
        name: "Sarah Kim",
        role: "Master Q Grader",
        bio: "Certified coffee taster, 10+ years experience",
        image:
          "https://images.unsplash.com/photo-1494790108777-296ef5a186f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        icon: "cup-soda",
        delay: 200,
      },
      {
        name: "Juan Martinez",
        role: "Farmer Relations",
        bio: "Connecting farmers across Latin America",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        icon: "handshake",
        delay: 300,
      },
    ];

    const partners = ["Starbucks", "Blue Bottle", "Intelligentsia", "Lavazza"];

    return {
      values,
      team,
      partners,
    };
  },
};
</script>
