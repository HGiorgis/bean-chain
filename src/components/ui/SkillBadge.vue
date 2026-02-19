<template>
  <div
    class="flex items-center gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
  >
    <div class="text-3xl">{{ skill.icon }}</div>
    <div>
      <h4 class="font-semibold">{{ skill.name }}</h4>
      <p class="text-sm text-gray-600">{{ skill.level }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillBadge",
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
};
</script>
