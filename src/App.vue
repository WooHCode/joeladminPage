<template>
  <Header></Header>
  <RouterView></RouterView>
</template>
  
<script>
import axios from 'axios';
import Header from './components/Header.vue'
import store from './scripts/store';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import router from './scripts/router';
export default {
  name: 'App',
  components: {
    Header
  },
  setup() {
    const check = () => {
      axios.get("/api/account/check").then(({ data }) => {
        store.commit("setAccount", data || 0);
      })
    };
    const route = useRoute();
    watch(route, () => {
      check();
    });
    window.addEventListener('unload', () => {
      axios.post("/api/account/logout").then(() => {
        store.commit('setAccount', 0);
        router.push({ path: "/login" });
      })
    });
  }
}
</script>
  
<style></style>