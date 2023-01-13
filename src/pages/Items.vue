<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu></SidebarMenu>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h1 class="h2">상품정보</h1>
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-6 pb-6 mb-6 border-bottom">
          <div class="mopen" v-if="modal">
            <Itemmodal @modalHide="modal = false, load()"></Itemmodal>
          </div>
          <div class="mopen" v-if="umodal">
            <Itmeumodal @modalHide="umodal = false, load()" :sendid="changeitemid"></Itmeumodal>
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
                        <th>상품이미지</th>
                        <th>상품설명</th>
                        <th>상품코드</th>
                        <th>상품삭제</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(i, idx1) in state.items" :key="idx1">
                        <td class="nameHover"><a @click="update(i.id)">{{ i.name }}</a></td>
                        <td>{{ i.price }}원</td>
                        <td><img class="itemImages" :src="i.imgPath" alt="실패"/></td>
                        <td>{{ i.itemDes }}</td>
                        <td>{{ i.itemCode }}</td>
                        <td><button class="fa fa-trash" @click="remove(i.id)"></button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
              </div>
            </div>
            <button class="submit" @click="modal = true">상품추가</button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
  
<script>
import axios from "axios"
import { reactive } from '@vue/reactivity'
import SidebarMenu from "@/components/SidebarMenu.vue"
import Itemmodal from '@/components/Itemmodal.vue'
import Itmeumodal from '@/components/Itemumodal.vue'

export default {

  name: "Items",

  methods: {
      update(itemid) {
      this.umodal = true;
      this.changeitemid = itemid;
    }
  },

  components: { SidebarMenu, Itemmodal , Itmeumodal },

  data() {
    return {
      modal: false,
      umodal: false,
      changeitemid : 1,
    }

  },

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
      axios.delete(`/api/v1/items/${itemId}`,).then(() => {
        alert("상품이 1건 삭제되었습니다.")
        load();
      })
    }

    load();
    return { state, remove, load , };
  }
}
</script>
  
<style scoped>
.nameHover {
  cursor: pointer;
  color:blue;
}
.itemImages {
  width: 50px;
  height: 50px;
}

.mopen {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 80%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  position: relative;
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