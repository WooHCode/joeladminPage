<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu></SidebarMenu>
      <main class="col-lg-10 col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="mopen col-lg-10 col-md-10 col-sm-12" v-if="modal">
          <Itemmodal @modalHide="modal = false, load()"></Itemmodal>
        </div>
        <div class="mopen align-items-center" v-if="umodal">
          <Itmeumodal @modalHide="umodal = false, load()" :sendname="changeitemname"></Itmeumodal>
        </div>
        <h1 class="h2 d-flex justify-content-center">상품정보</h1>
        <div
          class="d-flex col-lg-12 justify-content-center flex-wrap flex-md-nowrap align-items-center pt-6 pb-6 mb-6 border-bottom">
          <div class="album py-5 bg-light">
            <div class="d-flex justify-content-end me-5 mb-2">
              <a>{{ currentPageNum + 1 }}page</a>
            </div>
            <div class="d-flex justify-content-end mb-1 me-3">
              <input type="text" placeholder="상품명으로 검색하세요" v-model="searchingItemName"
                @keydown.enter="searchingResult(searchingItemName)">
              <button class="fa fa-undo ms-2" v-if="searchSuccess == true"
                @click="searchSuccess = false, searchingItemName = '', currentPageNum = 0"></button>
            </div>
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
                <div class="items table-responsive">
                  <table class="table align-middle table-bordered">
                    <thead class="table-light">
                      <tr class="align-middle">
                        <th>상품명</th>
                        <th>가격</th>
                        <th>상품이미지</th>
                        <th>상품설명</th>
                        <th>상품코드</th>
                        <th>상품삭제</th>
                      </tr>
                    </thead>
                    <tbody v-if="searchSuccess == true">
                      <tr class="align-middle" v-for="(i, idx2) in searchingItem" :key="idx2">
                        <td class="nameHover align-middle">
                          <a @click="update(i.name)">{{ i.name }}</a>
                        </td>
                        <td>{{ i.price }}원</td>
                        <td><img class="itemImages" :src="i.imgPath" alt="실패" /></td>
                        <td>{{ i.itemDes }}</td>
                        <td>{{ i.itemCode }}</td>
                        <td><button class="fa fa-trash" @click="warnRemove(), remove(i.id)"></button></td>
                      </tr>
                    </tbody>
                    <tbody v-if="searchSuccess == false">
                      <tr class="align-middle" v-for="(i, idx1) in state.items" :key="idx1">
                        <td class="nameHover align-middle"><a @click="update(i.name)">{{ i.name }}</a></td>
                        <td>{{ lib.getNumerFormatted(i.price) }}원</td>
                        <td><img class="itemImages" :src="i.image" alt="실패" /></td>
                        <td>{{ i.description }}</td>
                        <td>{{ i.itemCode }}</td>
                        <td><button class="fa fa-trash" @click="warnRemove(), remove(i.id)"></button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
              </div>
            </div>
            <div class="d-flex justify-content-center mb-4">
              <button class="submit btn btn-primary btn-lg" @click="modal = true">상품추가</button>
            </div>
            <div class="d-flex justify-content-end me-5">
              <h5 class="total-itemCount" v-if="searchSuccess">검색된 상품 개수: {{ totalItemCount }}건</h5>
              <h5 class="total-itemCount" v-else>총 상품 개수: {{ state.pageCounts[1] }}건</h5>
            </div>
            <div aria-label="Page navigation example mt-5" v-if="searchSuccess == false">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" @click="prevPage(currentPageNum)">Previous</a>
                </li>
                <li class="page-item" v-for="(pageNumbers, pageIndex) in pagedNumbers" :key="pageIndex">
                  <ul>
                    <li class="page-item" v-for="(pageNumber, pageNumberIndex) in pageNumbers" :key="pageNumberIndex">
                      <a class="page-link" href="#" @click="movePage(pageNumber)">{{ pageNumber }}</a>
                    </li>
                  </ul>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" @click="nextPage(currentPageNum)">Next</a>
                </li>
              </ul>
            </div>
            <div aria-label="Page navigation example mt-5" v-if="searchSuccess == true">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <!--TODO 5페이지만 보여주고 NEXT누르면 6~10 이렇게 구현-->
                  <a class="page-link" href="#" @click="searchPrevPage(currentPageNum)">Previous</a>
                </li>
                <li class="page-item" v-for="(i, idx) in totalPageCount" :key="idx">
                  <a class="page-link" href="#" @click="searchMovePage(i)">{{ i }}</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" @click="searchNextPage(currentPageNum)">Next</a>
                </li>
              </ul>
            </div>
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
import lib from '@/scripts/lib'

export default {

  name: "Items",

  methods: {
    update(itemName) {
      this.umodal = true;
      this.changeitemname = itemName;
    },
    remove(itemId) {
      if (this.reallyRemove == true) {
        axios.delete(`/api/v1/items/${itemId}`,).then(() => {
          alert("상품이 1건 삭제되었습니다.")
          this.load();
        })
      }

    },
    searchingResult(searchingItemName) {
      const pname = JSON.parse(JSON.stringify(searchingItemName))
      axios.get("/api/v3/search",
        {
          params: {
            likeName: pname,
            page: 0,
            size: 5
          }
        }
      ).then(({ data }) => {
        if (data[0].content == '') {
          alert("상품을 조회하지 못하였습니다.");
        } else {
          this.searchingItem = data[0].content;
          this.currentPageNum = 0;
          this.totalItemCount = data[1];
          this.searchSuccess = true;
          this.totalPageCount = data[2];
          this.searchingItemName = pname;
        }

      })
        .catch(function (error) {
          console.log(error);
          alert(error + "\n" + "상품을 조회하지 못하였습니다.");
        })
    },
    searchPrevPage(pageNum) {
      var pageNumber = pageNum - 1;
      if (pageNumber < 0) {
        alert("첫번째 페이지입니다.")
      } else {
        axios.get("/api/v3/search",
          {
            params: {
              likeName: this.searchingItemName,
              page: pageNumber,
              size: 5
            }
          }
        ).then(({ data }) => {
          if (data[0].content == '') {
            alert("상품을 조회하지 못하였습니다.");
          } else {
            this.searchingItem = data[0].content;
            this.currentPageNum = pageNumber;
            this.totalItemCount = data[1];
            this.searchSuccess = true;
            this.totalPageCount = data[2];
          }

        })
          .catch(function (error) {
            console.log(error);
            alert(error + "\n" + "상품을 조회하지 못하였습니다.");
          })
      }
    },
    searchMovePage(pageNum) {
      var pageNumber = pageNum - 1;
      axios.get("/api/v3/search",
        {
          params: {
            likeName: this.searchingItemName,
            page: pageNumber,
            size: 5
          }
        }
      ).then(({ data }) => {
        if (data[0].content == '') {
          alert("상품을 조회하지 못하였습니다.");
        } else {
          this.searchingItem = data[0].content;
          this.currentPageNum = pageNumber;
          this.totalItemCount = data[1];
          this.searchSuccess = true;
          this.totalPageCount = data[2];
        }

      })
        .catch(function (error) {
          console.log(error);
          alert(error + "\n" + "상품을 조회하지 못하였습니다.");
        })

    },
    searchNextPage(pageNum) {
      var pageNumber = pageNum + 1;
      if (pageNumber >= this.totalPageCount) {
        alert("마지막 페이지입니다.")
      } else {
        axios.get("/api/v3/search",
          {
            params: {
              likeName: this.searchingItemName,
              page: pageNumber,
              size: 5
            }
          }
        ).then(({ data }) => {
          if (data[0].content == '') {
            alert("상품을 조회하지 못하였습니다.");
          } else {
            this.searchingItem = data[0].content;
            this.currentPageNum = pageNumber;
            this.totalItemCount = data[1];
            this.searchSuccess = true;
            this.totalPageCount = data[2];
          }

        })
          .catch(function (error) {
            console.log(error);
            alert(error + "\n" + "상품을 조회하지 못하였습니다.");
          })
      }
    },
    undo() {
      this.load();
    },
    warnRemove() {
      var retrunValue = confirm("상품 1건을 삭제하시겠습니까?");
      this.reallyRemove = retrunValue;
    },
    movePage(pNum) {
      axios.get(`/api/v3/items`, {
        params: {
          page: pNum - 1,
          size: 5
        }
      }).then(({ data }) => {
        this.state.items = data.data;
        this.currentPageNum = pNum - 1;
      })
    },
    prevPage(currentPNum) {
      var nextPNum = currentPNum - 1;
      if (nextPNum < 0) {
        alert("첫번째 페이지 입니다.")
        nextPNum = 0;
      }
      else {
        axios.get(`/api/v3/items`, {
          params: {
            page: nextPNum,
            size: 5
          }
        }).then(({ data }) => {
          this.state.items = data.data;
          this.currentPageNum = nextPNum;
        })
      }
    },
    nextPage(currentPNum) {
      var nextPNum = currentPNum + 1;
      if (nextPNum >= this.state.pageCounts[0]) {
        alert("마지막 페이지입니다.");
      } else {
        axios.get(`/api/v3/items`, {
          params: {
            page: nextPNum,
            size: 5
          }
        }).then(({ data }) => {
          this.state.items = data.data;
          this.currentPageNum = nextPNum;
        })
      }
    }
  },

  components: { SidebarMenu, Itemmodal, Itmeumodal },

  data() {
    return {
      searchingItem: [],
      searchingItemName: '',
      modal: false,
      umodal: false,
      changeitemid: '',
      searchSuccess: false,
      reallyRemove: false,
      currentPageNum: 0,
      totalItemCount: 0,
      totalPageCount: 0,
    }
  },
  computed: {
    pagedNumbers() {
      const pageCount = Math.ceil(this.state.pageCounts[0] / 5);
      const currentPage = Math.ceil(this.currentPageNum + 1 / 5);
      const pages = [];
      for (let i = 0; i < pageCount; i++) {
        const pageNumbers = [];
        for (let j = i * 5 + 1; j <= (i + 1) * 5; j++) {
          if (j > this.state.pageCounts[0]) break;
          pageNumbers.push(j);
        }
        pages.push(pageNumbers);
      }
      return pages[currentPage - 1];
    }
  },

  setup() {
    const state = reactive({
      items: [],
      pageCounts: [],
    })

    const load = () => {
      axios.get("/api/v3/items/count", {
        params: {
          size: 5
        }
      }).then((res) => {
        state.pageCounts = res.data
      })

      axios.get("/api/v3/items", {
        params: {
          page: 0,
          size: 5
        }
      }).then(({ data }) => {
        state.items = data.data;
      })
    }
    load();
    return { state, load, lib };
  }
}
</script>
  
<style scoped>
.total-itemCount {
  font-size: 15px;
}

.container {
  word-break: break-word;
  overflow-y: auto;
}

.nameHover {
  cursor: pointer;
  color: blue;
}

.itemImages {
  width: 50px;
  height: 50px;
}

.mopen {
  top: 5%;
  left: 20%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  padding: 10px;

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