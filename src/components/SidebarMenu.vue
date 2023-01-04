<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3 sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/Sales" class="align-text-bottom">
                매출관리
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Items" class="align-text-bottom">
                상품관리
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Emp" class="align-text-bottom">
                직원관리
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Client" class="align-text-bottom">
                고객관리
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Store" class="align-text-bottom">
                매장관리
              </router-link>
            </li>
          </ul>

          <h6
            class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
            <span>바로가기</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle" class="align-text-bottom"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item-1">
              <a class="nav-link" href="https://www.instagram.com/joel_coffee_n_milk/">
                <span data-feather="file-text" class="align-text-bottom"></span>
                Instagram
              </a>
            </li>
            <li class="nav-item-1">
              <a class="nav-link" href="#">
                <span data-feather="file-text" class="align-text-bottom"></span>
                네이버 지도관리
              </a>
            </li>
            <li class="nav-item-1">
              <a class="nav-link" href="#">
                <span data-feather="file-text" class="align-text-bottom"></span>
                배달의 민족
              </a>
            </li>
            <li class="nav-item-1">
              <a class="nav-link" href="#">
                <span data-feather="file-text" class="align-text-bottom"></span>
                추가
              </a>
            </li>
          </ul>
        </div>
      </nav>
</template>

<script>
export default {
    name: "SidebarMenu"

}
</script>

<style scoped>
.nav-item {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  align-items: center;
  font-size: 17px;
  font-style: oblique;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

</style>