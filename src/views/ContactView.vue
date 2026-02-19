<template>
  <div class="pt-24 pb-20">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
        <div
          class="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6"
        >
          <i data-lucide="message-circle" class="w-4 h-4 text-amber-600"></i>
          <span class="text-sm font-mono text-amber-700">LET'S CONNECT</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-black mb-6">
          Brew a Conversation with
          <span
            class="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"
            >BeanChain</span
          >
        </h1>
        <p class="text-gray-600 text-lg">
          Have questions about our beans, blockchain technology, or partnership
          opportunities? We'd love to hear from you. Our team typically responds
          within 24 hours.
        </p>
      </div>

      <!-- Contact Cards -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="(card, index) in contactCards"
          :key="card.title"
          class="bg-white rounded-2xl p-6 border border-amber-200 hover:shadow-xl transition-all group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div
            class="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-all"
          >
            <i
              :data-lucide="card.icon"
              class="w-7 h-7 text-amber-600 group-hover:text-white transition-all"
            ></i>
          </div>
          <h3 class="text-xl font-bold mb-2">{{ card.title }}</h3>
          <p class="text-gray-600 mb-4">{{ card.description }}</p>
          <a
            :href="card.link"
            class="text-amber-600 hover:text-amber-700 font-semibold flex items-center space-x-2 group/link"
          >
            <span>{{ card.action }}</span>
            <i
              data-lucide="arrow-right"
              class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            ></i>
          </a>
        </div>
      </div>

      <!-- Main Contact Area -->
      <div class="grid lg:grid-cols-2 gap-12 mb-20">
        <!-- Contact Form -->
        <div
          class="bg-white rounded-3xl p-8 shadow-xl border border-amber-200"
          data-aos="fade-right"
        >
          <h2 class="text-2xl font-bold mb-6 flex items-center">
            <i data-lucide="mail" class="w-6 h-6 mr-2 text-amber-600"></i>
            Send Us a Message
          </h2>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Your Name <span class="text-red-400">*</span>
              </label>
              <div class="relative">
                <i
                  data-lucide="user"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                ></i>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="John Bean Lover"
                />
              </div>
            </div>

            <!-- Email Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span class="text-red-400">*</span>
              </label>
              <div class="relative">
                <i
                  data-lucide="mail"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                ></i>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="hello@beanchain.crypto"
                />
              </div>
            </div>

            <!-- Subject Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Subject <span class="text-red-400">*</span>
              </label>
              <div class="relative">
                <i
                  data-lucide="tag"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                ></i>
                <select
                  v-model="form.subject"
                  required
                  class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="" disabled selected>Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="investment">Investment Question</option>
                  <option value="farmers">Farmer Registration</option>
                </select>
                <i
                  data-lucide="chevron-down"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                ></i>
              </div>
            </div>

            <!-- Message Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Message <span class="text-red-400">*</span>
              </label>
              <div class="relative">
                <i
                  data-lucide="message-square"
                  class="absolute left-4 top-6 w-5 h-5 text-gray-400"
                ></i>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your project or question..."
                ></textarea>
              </div>
            </div>

            <!-- Wallet Address (Optional) -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Wallet Address (Optional)
              </label>
              <div class="relative">
                <i
                  data-lucide="wallet"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                ></i>
                <input
                  v-model="form.wallet"
                  type="text"
                  class="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="0x..."
                />
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-xl font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <i
                data-lucide="send"
                class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              ></i>
              <span>Send Message</span>
            </button>

            <!-- Success Message -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div
                v-if="formSubmitted"
                class="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center space-x-2"
              >
                <i data-lucide="check-circle" class="w-5 h-5"></i>
                <span
                  >Message sent successfully! We'll brew a response soon.</span
                >
              </div>
            </transition>
          </form>
        </div>

        <!-- Contact Info & Map -->
        <div space-y-6 data-aos="fade-left">
          <!-- Live Chat Card -->
          <div
            class="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-white mb-6"
          >
            <div class="flex items-start justify-between mb-6">
              <div>
                <h3 class="text-2xl font-bold mb-2">Live Bean Chat</h3>
                <p class="text-amber-100">Chat with our community managers</p>
              </div>
              <div
                class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center"
              >
                <i data-lucide="message-circle" class="w-8 h-8"></i>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex -space-x-2">
                <img
                  v-for="n in 3"
                  :key="n"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80"
                  class="w-10 h-10 rounded-full border-2 border-white"
                  alt="Team member"
                />
              </div>
              <span class="text-sm">3 team members online</span>
              <button
                class="ml-auto bg-white text-amber-600 px-4 py-2 rounded-xl font-semibold hover:bg-amber-50 transition-colors"
              >
                Chat Now
              </button>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div
              class="bg-white rounded-2xl p-6 border border-amber-200 text-center"
            >
              <i
                data-lucide="clock"
                class="w-8 h-8 mx-auto text-amber-600 mb-2"
              ></i>
              <div class="text-2xl font-bold">&lt; 4h</div>
              <div class="text-sm text-gray-600">Avg Response</div>
            </div>
            <div
              class="bg-white rounded-2xl p-6 border border-amber-200 text-center"
            >
              <i
                data-lucide="users"
                class="w-8 h-8 mx-auto text-amber-600 mb-2"
              ></i>
              <div class="text-2xl font-bold">24/7</div>
              <div class="text-sm text-gray-600">Support Available</div>
            </div>
          </div>

          <!-- Contact Details -->
          <div class="bg-white rounded-3xl p-8 border border-amber-200">
            <h3 class="text-xl font-bold mb-6 flex items-center">
              <i data-lucide="map-pin" class="w-5 h-5 mr-2 text-amber-600"></i>
              Visit Our Roastery
            </h3>

            <div class="space-y-4 mb-8">
              <div class="flex items-start space-x-3">
                <i data-lucide="map" class="w-5 h-5 text-amber-600 mt-1"></i>
                <div>
                  <p class="font-medium">BeanChain HQ</p>
                  <p class="text-gray-600">
                    123 Blockchain Boulevard<br />San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <i data-lucide="phone" class="w-5 h-5 text-amber-600 mt-1"></i>
                <div>
                  <p class="font-medium">Phone</p>
                  <p class="text-gray-600">+1 (555) 420-BEAN</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <i data-lucide="mail" class="w-5 h-5 text-amber-600 mt-1"></i>
                <div>
                  <p class="font-medium">Email</p>
                  <p class="text-gray-600">hello@beanchain.crypto</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h4 class="text-sm font-medium text-gray-500 mb-4">FOLLOW US</h4>
              <div class="flex space-x-3">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.link"
                  class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all"
                  target="_blank"
                >
                  <i :data-lucide="social.icon" class="w-5 h-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-3xl mx-auto" data-aos="fade-up">
        <h2
          class="text-2xl font-bold text-center mb-8 flex items-center justify-center"
        >
          <i data-lucide="help-circle" class="w-6 h-6 mr-2 text-amber-600"></i>
          Frequently Asked Questions
        </h2>

        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white rounded-xl border border-amber-200 overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-amber-50 transition-colors"
            >
              <span class="font-semibold">{{ faq.question }}</span>
              <i
                :data-lucide="
                  openFaqs.includes(index) ? 'chevron-up' : 'chevron-down'
                "
                class="w-5 h-5 text-amber-600"
              ></i>
            </button>
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform -translate-y-4 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-4 opacity-0"
            >
              <div
                v-if="openFaqs.includes(index)"
                class="px-6 py-4 bg-amber-50 border-t border-amber-200"
              >
                <p class="text-gray-600">{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
        wallet: "",
      },
      formSubmitted: false,
      openFaqs: [],
      contactCards: [
        {
          title: "Partnership Inquiries",
          description:
            "Looking to collaborate? Let's brew something amazing together.",
          icon: "handshake",
          action: "partner@beanchain.crypto",
          link: "mailto:partner@beanchain.crypto",
        },
        {
          title: "Technical Support",
          description:
            "Having trouble with your beans? Our tech team is here to help.",
          icon: "cpu",
          action: "support@beanchain.crypto",
          link: "mailto:support@beanchain.crypto",
        },
        {
          title: "Farmer Relations",
          description:
            "Are you a coffee farmer? Join our decentralized network.",
          icon: "sprout",
          action: "farmers@beanchain.crypto",
          link: "mailto:farmers@beanchain.crypto",
        },
      ],
      socialLinks: [
        { name: "Twitter", icon: "twitter", link: "#" },
        { name: "Discord", icon: "message-circle", link: "#" },
        { name: "GitHub", icon: "github", link: "#" },
        { name: "LinkedIn", icon: "linkedin", link: "#" },
      ],
      faqs: [
        {
          question: "How do I purchase a Bean NFT?",
          answer:
            "You'll need an Ethereum wallet like MetaMask with some ETH for gas fees. Connect your wallet, browse our marketplace, and click 'Buy Now' on any Bean NFT you like.",
        },
        {
          question: "What makes BeanChain different?",
          answer:
            "We're the first platform that tokenizes actual coffee batches, providing full traceability from farm to cup. Each NFT represents real, verified coffee beans.",
        },
        {
          question: "How do I stake my Bean NFTs?",
          answer:
            "Navigate to the Staking page, connect your wallet, select the Bean NFTs you want to stake, and confirm the transaction. You'll start earning rewards immediately.",
        },
        {
          question: "Can I visit the farms?",
          answer:
            "Yes! Bean NFT holders get exclusive access to virtual and physical farm tours. Some tiers even include all-expenses-paid trips to origin countries.",
        },
      ],
    };
  },
  mounted() {
    this.initIcons();
  },
  updated() {
    this.initIcons();
  },
  methods: {
    handleSubmit() {
      // Simulate form submission
      this.formSubmitted = true;
      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);

      // Reset form
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
        wallet: "",
      };
    },
    toggleFaq(index) {
      if (this.openFaqs.includes(index)) {
        this.openFaqs = this.openFaqs.filter((i) => i !== index);
      } else {
        this.openFaqs.push(index);
      }
      this.initIcons();
    },
    initIcons() {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    },
  },
};
</script>
