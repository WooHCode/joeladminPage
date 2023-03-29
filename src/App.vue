<template>
  <Header></Header>
  <RouterView></RouterView>
</template>
  
<script>
import Header from './components/Header.vue'
import store from './scripts/store';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import router from './scripts/router';
import api from './scripts/api';
export default {
  name: 'App',
  components: {
    Header
  },
  setup() {
    const check = () => {
      api.get("/api/account/check").then(({ data }) => {
        store.commit("setAccount", data || 0);
      })
    };
    const route = useRoute();
    watch(route, () => {
      check();
    });
    window.addEventListener('unload', () => {
      api.post("/api/account/logout").then(() => {
        store.commit('setAccount', 0);
        store.commit('setMemberCode', 3);
        router.push({ path: "/login" });
      })
    });
  }
}
</script>
  
<style></style>