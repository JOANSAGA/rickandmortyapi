<template>
  <div class="overflow-hidden border-2 border-grayBase rounded-md h-28">
    <div class="md:flex">
      <div
        class="bg-center bg-no-repeat bg-fill md:flex-shrink-0 w-1/3 relative"
      >
        <img :src="content.image" alt="" srcset="" class="w-full" />
        <div
          class="
            absolute
            bottom-2
            right-2
            rounded-full
            w-6
            h-6
            flex
            items-center
            justify-center
            bg-grayBase
          "
        >
          <button type="button" class="text-yellow-400" v-on:click="fav">
            <i class="fa-star" v-bind:class="[status ? 'fas' : 'far']"></i>
          </button>
        </div>
      </div>
      <div class="w-full px-4 pt-2">
        <div class="text-xs text-gray-500">
          <span v-if="content.status == 'Alive'" class="text-green-600">
            <i class="fas fa-circle"></i>
          </span>
          <span v-else-if="content.status == 'unknown'" class="text-yellow-400">
            <i class="fas fa-circle"></i>
          </span>
          <span v-else class="text-red-600">
            <i class="fas fa-circle"></i>
          </span>
          {{ content.status }} -
          {{ content.species }}
        </div>
        <button
          type="button"
          class="text-sm hover:underline"
          v-on:click="modal"
        >
          {{ content.name }}
        </button>
        <div>
          <div class="text-xs text-gray-500">Origin</div>
          <span class="text-sm">{{ content.origin.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["content", "status"],
  mounted() {},
  methods: {
    fav() {
      this.status = !this.status;
      this.$emit("click");
    },
    modal() {
      this.$emit("ver");
    },
  },
};
</script>
