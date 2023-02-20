<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar-menu></Sidebar-menu>
      <main class="col-lg-10 col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">매출현황</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-secondary">일별매출현황</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">월별매출현황</button>
            </div>
            <div class="dropdown">
              <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" @click="dropdown = true">
                <span data-feather="calendar" class="align-text-bottom"></span>
                상품별
              </button>
              <div class="dropdown-content" v-if="dropdown == true">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/SidebarMenu.vue"
export default {
  data() {
    return {
      dropdown: false,
    }
  },
  components: { SidebarMenu }
}
</script>

<style scoped>
.container {
  font-size: clamp(0.8rem, 1.1vw, 1rem);
}

.card-body {
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
  padding-top: 0%;
}

.tb-title {
  text-align: center;
  border-left: 0.1px dotted black;
}

.tb-context {
  text-align: center;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:focus {
  background-color: #ddd;
}

@media(min-width:420px) {
  .dropdown:hover .dropdown-content {
    display: block;
  }
}

@media(max-width:419px) {
  .dropdown:hover .dropdown-content {
    display: block;
  }
}
</style>