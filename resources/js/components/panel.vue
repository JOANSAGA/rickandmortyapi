<template>
  <div>
    <div
      v-if="list == 'sinResultados'"
      class="
        container
        mx-auto
        w-4/5
        py-6
        flex
        items-center
        justify-center
        flex-col
        gap-4
      "
    >
      <span class="text-2xl"> Uh-oh! </span>
      <span class="text-gray-500"> ¡Pareces perdido en tu viaje! </span>
      <button
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
        v-on:click="$emit('clear')"
      >
        Eliminar filtros
      </button>
    </div>
    <div
      v-if="list.results == 0"
      class="
        container
        mx-auto
        w-4/5
        py-6
        flex
        items-center
        justify-center
        flex-col
        gap-4
      "
    >
      <span class="text-2xl"> Sin favoritos </span>
    </div>
    <div class="grid gap-x-8 gap-y-4 grid-cols-3 container mx-auto w-4/5 py-6">
      <div v-for="item in list.results" :key="item.id">
        <cards-component
          :content="item"
          v-on:click="$emit('newfav', item)"
          :status="item.fav"
          v-on:ver="$emit('viewmodal', item.id)"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataResult: {
        info: {},
        results: [],
      },
    };
  },
  components: {
    "cards-component": () => import("./cards.vue"),
  },
  props: ["list"],
  watch: {},
  methods: {
    handleClick() {
      this.$emit("click", this.text);
    },
  },
};
</script>
