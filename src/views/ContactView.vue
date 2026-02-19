<template>
  <div class="pt-16">
    <!-- Contact Header -->
    <section
      class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20"
    >
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p class="text-xl max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear about it. Let's start a
          conversation.
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form @submit.prevent="handleSubmit">
              <div class="mb-6">
                <label class="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="Your name"
                />
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 font-medium mb-2"
                  >Email</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="your@email.com"
                />
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 font-medium mb-2"
                  >Subject</label
                >
                <input
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="Project discussion"
                />
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 font-medium mb-2"
                  >Message</label
                >
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full btn-primary"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? "Sending..." : "Send Message" }}
              </button>

              <!-- Success Message -->
              <div
                v-if="showSuccess"
                class="mt-4 p-4 bg-green-100 text-green-700 rounded-lg"
              >
                Message sent successfully! We'll get back to you soon.
              </div>
            </form>
          </div>

          <!-- Contact Info -->
          <div>
            <h2 class="text-2xl font-bold mb-6">Contact Information</h2>

            <div class="space-y-6 mb-8">
              <div
                v-for="info in contactInfo"
                :key="info.title"
                class="flex items-start gap-4"
              >
                <div class="text-2xl text-primary-600">{{ info.icon }}</div>
                <div>
                  <h3 class="font-semibold">{{ info.title }}</h3>
                  <p class="text-gray-600">{{ info.details }}</p>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="bg-gray-200 rounded-lg h-64 mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.9851076845849!3d40.758896979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1644262073400!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                class="rounded-lg"
              ></iframe>
            </div>

            <!-- Business Hours -->
            <div class="bg-gray-50 rounded-lg p-6">
              <h3 class="font-semibold mb-4">Business Hours</h3>
              <div class="space-y-2">
                <div
                  v-for="hour in businessHours"
                  :key="hour.day"
                  class="flex justify-between"
                >
                  <span class="text-gray-600">{{ hour.day }}</span>
                  <span class="font-medium">{{ hour.hours }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ContactView",
  setup() {
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const isSubmitting = ref(false);
    const showSuccess = ref(false);

    const handleSubmit = async () => {
      isSubmitting.value = true;

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      form.value = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };

      showSuccess.value = true;
      isSubmitting.value = false;

      // Hide success message after 5 seconds
      setTimeout(() => {
        showSuccess.value = false;
      }, 5000);
    };

    const contactInfo = [
      {
        icon: "📍",
        title: "Address",
        details: "123 Business Ave, Suite 100, New York, NY 10001",
      },
      {
        icon: "📧",
        title: "Email",
        details: "hello@portfolioshowcase.com",
      },
      {
        icon: "📞",
        title: "Phone",
        details: "+1 (555) 123-4567",
      },
    ];

    const businessHours = [
      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ];

    return {
      form,
      isSubmitting,
      showSuccess,
      handleSubmit,
      contactInfo,
      businessHours,
    };
  },
};
</script>
