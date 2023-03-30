<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3 sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/Sales" class="align-text-bottom">
            <button class="sideButton">매출관리</button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Items" class="align-text-bottom">
            <button class="sideButton">상품관리</button>
          </router-link>
        </li>
        <li class="nav-item" v-if="sessionData === '0'">
          <router-link to="/emp" class="align-text-bottom">
            <button class="sideButton">직원관리</button>
          </router-link>
        </li>
        <li class="nav-item" v-if="sessionData === '1'">
          <router-link to="/EmpWork" class="align-text-bottom">
            <button class="sideButton">출근관리</button>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Client" class="align-text-bottom">
            <button class="sideButton">고객관리</button>
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/Store" class="align-text-bottom">
            <button class="sideButton">매장관리</button>
          </router-link>
        </li> -->
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
import Cookies from 'js-cookie';
export default {
  name: "SidebarMenu",
  computed: {
    cookieData() {
      return Number(Cookies.get('memberCode'));
    },
    sessionData() {
      return sessionStorage.getItem("code");
    }
  }
}
</script>

<style scoped>
.sideButton {
  background: #1AAB8A;
  border-radius: 15px;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  font-size: 1rem;
}

.sideButton:hover {
  background: #fff;
  color: #1AAB8A;
}

.sideButton:before,
.sideButton:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1AAB8A;
  transition: 400ms ease all;
}

.sideButton:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}

.sideButton:hover:before,
.sideButton:hover:after {
  width: 100%;
  transition: 800ms ease all;
}


.align-text-bottom {
  cursor: pointer
}

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