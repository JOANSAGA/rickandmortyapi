<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    v-bind:class="[status ? '' : 'hidden']"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block
        sm:p-0
      "
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8
          sm:align-middle
          sm:max-w-xl
          sm:w-full
        "
      >
        <div class="bg-white">
          <div class="h-36 relative">
            <img src="/img/bgModal.png" alt="" srcset="" />
            <div class="absolute top-0 right-2 text-lg">
              <button type="button" @click="handleClick">
                <i class="fas fa-times-circle text-white"></i>
              </button>
            </div>
          </div>
          <div
            class="
              h-36
              bg-gray-300
              flex flex-col
              justify-center
              items-center
              relative
            "
          >
            <div
              class="
                h-28
                w-28
                bg-gray-300
                absolute
                rounded-full
                overflow-hidden
                border-2 border-white
              "
              style="top: -3.5rem"
              v-if="results != 0"
            >
              <img :src="results[0].image" alt="" srcset="" />
            </div>
            <div
              class="mb-3 absolute bottom-0 flex flex-col items-center text-sm"
              v-if="results != 0"
            >
              <span>{{ results[0].status }}</span>
              <span class="text-lg">{{ results[0].name }}</span>
              <span>{{ results[0].species }}</span>
            </div>
          </div>
          <div class="mx-4">
            <div
              class="mt-3 text-center sm:mt-0 sm:text-left"
              v-if="results != 0"
            >
              <div class="mt-2 capitalize text-xl font-bold">información</div>
              <div class="mt-2 grid gap-x-4 grid-cols-3 w-full">
                <div
                  class="
                    flex flex-col
                    border-2 border-gray-800
                    rounded-lg
                    px-3
                    py-2
                  "
                >
                  <span class="capitalize text-sm text-gray-600">gender:</span>
                  <span class="capitalize">
                    {{ results[0].gender }}
                  </span>
                </div>
                <div
                  class="
                    flex flex-col
                    border-2 border-gray-800
                    rounded-lg
                    px-3
                    py-2
                  "
                >
                  <span class="capitalize text-sm text-gray-600">origin:</span>
                  <span class="capitalize">
                    {{ results[0].origin.name }}
                  </span>
                </div>
                <div
                  class="
                    flex flex-col
                    border-2 border-gray-800
                    rounded-lg
                    px-3
                    py-2
                  "
                >
                  <span class="capitalize text-sm text-gray-600">type:</span>
                  <span class="capitalize">
                    {{ results[0].species }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-4">
            <div
              class="mt-3 text-center sm:mt-0 sm:text-left"
              v-if="results != 0"
            >
              <div class="mt-2 capitalize text-xl font-bold">
                Personajes interesantes
              </div>
              <div class="mt-2 grid gap-x-8 gap-y-4 grid-cols-2 w-full">
                <cards-component
                  :content="results[1]"
                  v-on:click="$emit('newfav', results[1])"
                  v-on:ver="$emit('viewmodal', results[1].id)"
                />
                <cards-component
                  :content="results[2]"
                  v-on:click="$emit('newfav', results[2])"
                  v-on:ver="$emit('viewmodal', results[2].id)"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 mx-4 my-5 sm:flex sm:flex-row-reverse">
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
            compartir personaje
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "https://rickandmortyapi.com/api/character/",
      results: [],
    };
  },
  components: {
    "cards-component": () => import("./cards.vue"),
  },
  props: ["status", "id"],
  computed: {},
  watch: {
    id: function () {
      let id = [];
      id[0] = this.id;
      for (let i = 0; i < 2; i++) {
        let random = Math.floor(Math.random() * 671) + 1;
        if (id[0] != random) {
          id.push(random);
        } else {
          i--;
        }
      }
      this.loadCharacter(id);
    },
    status: function () {
      if (this.status) {
        this.results = [];
      }
    },
  },
  methods: {
    handleClick() {
      this.$emit("closemodal");
      this.results = [];
    },
    loadCharacter: async function (id) {
      let url = this.url + id;
      axios
        .get(url)
        .then((response) => {
          this.results = response.data;
          //console.log(this.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function () {},
};
</script>
