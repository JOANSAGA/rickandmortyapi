<template>
  <div>
    <nav class="bg-blakBase">
      <div
        class="
          container
          mx-auto
          w-4/5
          flex
          justify-between
          text-center text-white
        "
      >
        <nav-link-component
          v-for="gender in genders"
          v-bind:key="gender.id"
          v-bind:text="gender.text"
          @click="genderSelected"
          v-bind:class="[selected == gender.text ? 'border-secondary' : '']"
        />
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      genders: [
        { id: 1, text: "all" },
        { id: 2, text: "unknown" },
        { id: 3, text: "female" },
        { id: 4, text: "male" },
        { id: 5, text: "genderless" },
      ],
      selected: "all",
    };
  },
  components: {
    "nav-link-component": () => import("./nav-link.vue"),
  },
  mounted() {
    this.$emit("gender", this.selected);
  },
  methods: {
    genderSelected: function (selected) {
      this.selected = selected;
      this.$emit("gender", this.selected);
      //alert(this.selected);
    },
  },
};
</script>
