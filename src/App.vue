<template>
  <Header></Header>
  <RouterView></RouterView>
</template>
  
<script>
import Header from './components/Header.vue'
import store from './scripts/store';
export default {
  name: 'App',
  components: {
    Header
  },
  setup() {
    const id = sessionStorage.getItem("id");

    if (id) {
      store.commit("setAccount", id);
    }
  }
}
</script>
  
<style></style>