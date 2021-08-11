require('./bootstrap');

import clipboard from 'clipboard';

import Vue from 'vue';

Vue.component('link-component', require('./components/link.vue').default);
Vue.component('search-component', require('./components/search.vue').default);
Vue.component('navigation-component', require('./components/navigation.vue').default);
Vue.component('favourite-component', require('./components/favourite.vue').default);
Vue.component('panel-component', require('./components/panel.vue').default);
Vue.component('modal-component', require('./components/modal.vue').default);

const app = new Vue({
    el: '#app',
    data: {
        search: "",
        selected: "all",
        show: false,
        list: {},
        favorites: {},
        url: "https://rickandmortyapi.com/api/character",
        fav: [],
        modalData: {
            status: false,
            id: null
        },
    },
    methods: {
        genderSelected: function (selected) {
            this.selected = selected;
            let url;
            if (this.selected == "all") {
                url = this.url;
            } else {
                url = this.url + "/?gender=" + this.selected;
            }
            //console.log(url);
            this.show = false;
            this.loadList(url);
        },
        showFavorites: function (status) {
            this.show = status;
            if (this.show) {
                this.list.info = {}
                this.list.results = this.fav;
                //console.log(this.fav);
            } else {
                this.genderSelected(this.selected);
            }
        },
        loadList: function (url) {
            axios
                .get(url)
                .then((response) => {
                    this.list = response.data;
                    this.loadFav();
                })
                .catch((error) => {
                    this.list = "sinResultados";
                    console.log(error);
                });
        },
        clear: function () {
            this.search = "";
            this.selected = "all";
        },
        addfav: function (data) {
            let idFav = this.fav.map(x => x.id);
            if (!idFav.includes(data.id)) {
                this.fav.push(data);
                //console.log(this.fav);
            }
            this.loadFav();
        },
        loadFav: function () {
            if (this.fav.length != 0) {
                let idFav = this.fav.map(x => x.id);
                this.list.results.map(
                    (x) => {
                        if (idFav.includes(x.id)) {
                            x.fav = true;
                        } else {
                            x.fav = false;
                        }
                    }
                );
            }
        },
        modal: function (data) {
            this.close();
            this.modalData.status = true;
            this.modalData.id = data;
        },
        close: function () {
            this.modalData.status = false;
            this.modalData.id = null
        },

    },
    watch: {
        search: function () {
            let url = this.url + "/?name=" + this.search.replace(/ /g, "%20");
            //console.log(url);
            this.loadList(url);
        }
    },
    created: function () {
        this.loadList(this.url);
    }
});
