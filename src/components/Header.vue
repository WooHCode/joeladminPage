<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-10 shadow">
    <button class="navbar-toggler position-static d-md-none collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="topcontent d-flex justify-content-between align-items-center w-100">
      <div class="text-center">
        <router-link to="/" class="navbar-brand left col-md-3 col-lg-2 me-0 px-3 fs-10">Joel's coffee &
          milk</router-link>
      </div>
      <div class="text-right">
        <div class="nav-item text-nowrap">
          <router-link to="/myPage" class="text-white me-3" v-if="$store.state.account.id != 0">마이페이지</router-link>
          <router-link to="/login" class="text-white me-3" v-if="$store.state.account.id == 0">로그인</router-link>
          <a to="/login" class="logout text-white me-3" @click="logout()" v-else>로그아웃</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import store from '@/scripts/store';
import api from '@/scripts/api'
import router from '@/scripts/router';
export default {
  name: "Header",
  setup() {
    const logout = () => {
      api.post("/api/account/logout").then(() => {
        store.commit('setAccount', 0);
        router.push({ path: "/login" });
      })
    }

    return { logout };
  }
}
</script>

<style scoped>
.topcontent {
  z-index: 8000;
}

.logout {
  cursor: pointer;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  /* 모바일 환경에서는 가운데 정렬 */
}

.nav-item {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  align-items: center;
  font-size: 17px;
  font-style: oblique;
}

/* 화면이 768px 이상인 웹 환경에서만 적용되는 스타일 */
@media (min-width: 768px) {
  .navbar-nav {
    justify-content: flex-end;
    /* 요소를 오른쪽으로 정렬 */
  }

  .text-md-center {
    flex: 1;
    /* 로고 요소를 중앙 정렬 */
    text-align: center;
  }

  .text-right {
    margin-left: auto;
    /* 로그인/로그아웃 버튼 등을 오른쪽으로 정렬 */
  }
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