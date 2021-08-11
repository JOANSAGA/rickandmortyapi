<template>
  <button
    class="
      w-28
      h-14
      items-center
      flex
      justify-center
      capitalize
      border-transparent
      hover:border-secondary
      border-b-2
    "
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: ["text"],
  methods: {
    handleClick() {
      this.$emit("click", this.text);
    },
  },
};
</script>
