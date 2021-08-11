<template>
  <div
    class="
      flex
      bg-action
      px-4
      py-3
      rounded-md
      border-2 border-white
      backdrop-filter backdrop-opacity-70
    "
  >
    <img src="/img/lupa.svg" alt="" srcset="" />
    <input
      type="text"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      class="bg-action placeholder-white ml-3 focus:outline-none w-96"
      placeholder="Buscar personaje..."
    />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["value"],
};
</script>
