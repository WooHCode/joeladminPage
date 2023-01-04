<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-10 shadow">
      <button class="navbar-toggler position-static d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand positoin-static center col-md-3 col-lg-2 me-0 px-3 fs-10">Joel's coffee & milk</router-link>
      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
      <!--   <router-link to="/login" class="text-white" v-if="!$store.state.account.id">로그인</router-link>
                <a to="/login" class="text-white" @click="logout()" v-else>로그아웃</a>--> 
        </div>
      </div>
    </header>
</template>

<script>
export default {
    name: "Header"
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