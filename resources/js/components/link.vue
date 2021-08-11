<template>
  <a
    v-bind:href="url"
    class="
      bg-primary
      text-white
      capitalize
      px-5
      py-3
      rounded-full
      hover:bg-action
      active:bg-action
    "
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  props: {
    url: String,
  },
  mounted() {
  },
};
</script>
