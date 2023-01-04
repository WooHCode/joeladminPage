<template>

  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-10 shadow">
    <button class="navbar-toggler position-static d-md-none collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link to="/" class="navbar-brand positoin-static center col-md-3 col-lg-2 me-0 px-3 fs-10">Joel's coffee &
      milk</router-link>
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <!--   <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>
                <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>-->
      </div>
    </div>
  </header>

  <div class="container-fluid">
    <div class="row">
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

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-6 pb-6 mb-6 border-bottom">
          <h1 class="h2">상품정보</h1>
        </div>
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="items">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>상품명</th>
                      <th>가격</th>
                      <th>상품 사진 경로</th>
                      <th>상품설명</th>
                      <th>상품코드</th>
                      <th>상품삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i, idx1) in state.items" :key="idx1">
                      <td>{{ i.name }}</td>
                      <td>{{ i.price }}원</td>
                      <td>{{ i.imgPath }}</td>
                      <td>{{ i.itemDes }}</td>
                      <td>{{ i.itemCode }}</td>
                      <td><button class="fa fa-trash" @click="remove(i.id)"></button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button class="submit" @click="submit()">상품추가</button>
        </div>
      </main>
    </div>
  </div>
</template>
  
<script>
import axios from "axios"
import { reactive } from '@vue/reactivity'

export default {
  setup() {
    const state = reactive({
      items: [],
    })
    const load = () => {
      axios.get("/api/v1/items").then(({ data }) => {
        state.items = data;
      })
    }


    const remove = (itemId) => {
      axios.delete(`/api/v1/items/${itemId}`).then(() => {
        load();
      })
    }
    load();
    return { state, remove };
  }
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