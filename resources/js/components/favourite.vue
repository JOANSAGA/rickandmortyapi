<template>
  <div class="container mx-auto w-4/5 pt-6">
    <button class="flex items-center" @click="handleClick">
      Mostar favoritos
      <span
        class="
          ml-3
          text-yellow-400
          rounded-full
          w-6
          h-6
          flex
          items-center
          justify-center
          bg-grayBase
        "
      >
        <i class="fa-star" v-bind:class="[status ? 'fas' : 'far']"></i>
      </span>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return { status: this.value };
  },
  props: ["value"],
  methods: {
    handleClick() {
      this.status = !this.status;
      this.$emit("favstatus", this.status);
    },
  },
};
</script>
