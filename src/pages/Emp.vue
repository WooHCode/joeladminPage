<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu></SidebarMenu>
      <main class="col-lg-10 col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex col-lg-12 justify-content-center flex-wrap flex-md-nowrap align-items-center pt-6 pb-6 mb-6 border-bottom">
          <div class="album py-5 bg-light">
            <div class="d-flex justify-content-end mb-1 me-3">
            </div>
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h1 class="card-title d-flex justify-content-center">직원 리스트</h1>
                      <p class="card-category d-flex justify-content-center">권한이 있는 사람만 볼수있습니다.</p>
                    </div>
                    <div class="d-flex justify-content-end me-3 mt-3">
                      <input type="text" class="tx-serch" title="이름 또는 성별로 검색해주세요" placeholder="직원검색"
                        v-model="searchingData" @keydown.enter="searchingEmp(searchingData)">
                      <button class="fa fa-undo ms-2" v-if="searchSuccess == true"
                        @click="searchSuccess = false, searchingData = '', currentPageNum = 0"></button>
                    </div>
                    <div class="card-body">
                      <caption class="d-flex justify-content-end">{{ currentPageNum + 1}} page</caption>
                      <div class="table-responsive">
                        <table class="table table-hover table-striped">

                          <thead>
                            <th class="tb-title">이름</th>
                            <th class="tb-title">나이</th>
                            <th class="tb-title">성별</th>
                            <th class="tb-title">출근횟수</th>
                            <th class="tb-title">월급</th>
                            <th class="tb-title">상세설명</th>
                          </thead>
                          <tbody v-if="searchSuccess == false">
                            <tr class="" v-for="(i, idx) in state.emp" :key="idx" @click="fixEmp()">
                              <td class="tb-context">{{ i.empName }}</td>
                              <td class="tb-context">{{ i.empAge }}세</td>
                              <td class="tb-context">{{ lib.getGenderFormatted(i.empGender) }}</td>
                              <td class="tb-context">{{ i.empWorkCount }}일</td>
                              <td class="tb-context">{{ lib.getNumerFormatted(i.empPay) }}원</td>
                              <td class="tb-context"><button @click="empDetail(i.empName)">상세페이지</button></td>
                            </tr>
                          </tbody>
                          <tbody v-if="searchSuccess">
                            <tr class="" v-for="(i, idx) in searchResult" :key="idx" @click="fixEmp()">
                              <td class="tb-context">{{ i.empName }}</td>
                              <td class="tb-context">{{ i.empAge }}세</td>
                              <td class="tb-context">{{ lib.getGenderFormatted(i.empGender) }}</td>
                              <td class="tb-context">{{ i.empWorkCount }}일</td>
                              <td class="tb-context">{{ lib.getNumerFormatted(i.empPay) }}원</td>
                              <td class="tb-context"><button @click="empDetail(i.empName)">상세페이지</button></td>
                            </tr>
                          </tbody>
                          <tbody v-if="searchSuccess">
                            <tr class="" v-for="(i, idx) in searchResult" :key="idx" @click="fixEmp()">
                              <td class="tb-context">{{ i.empName }}</td>
                              <td class="tb-context">{{ i.empAge }}세</td>
                              <td class="tb-context">{{ lib.getGenderFormatted(i.empGender) }}</td>
                              <td class="tb-context">{{ i.empWorkCount }}일</td>
                              <td class="tb-context">{{ lib.getNumerFormatted(i.empPay) }}원</td>
                              <td class="tb-context"><button>상세페이지</button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="d-flex justify-content-end me-4 fs-12 fw-light" v-if="searchSuccess == false">
                        <a>총원 : {{ state.count[1] }}명</a>
                      </div>
                      <div class="d-flex justify-content-end me-4 fs-12 fw-light" v-if="searchSuccess">
                        <a>총원 : {{ searchingTotalElements }}명</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-label="Page navigation example" v-if="searchSuccess == false">
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <a class="page-link" href="#" @click="prevPage(currentPageNum)">Previous</a>
                    </li>
                    <li class="page-item" v-for="(i, idx) in state.count[0]" :key="idx"><a class="page-link" href="#"
                        @click="changePages(i)">{{ i }}</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" @click="nextPage(currentPageNum)">Next</a>
                    </li>
                  </ul>
                </div>
                <div aria-label="Page navigation example" v-if="searchSuccess">
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <a class="page-link" href="#" @click="searchPrevPage(currentPageNum)">Previous</a>
                    </li>
                    <li class="page-item" v-for="(i, idx) in searchingMaxPage" :key="idx"><a class="page-link" href="#"
                        @click="searchChangePages(i)">{{ i }}</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" @click="searchNextPage(currentPageNum)">Next</a>
                    </li>
                  </ul>
                </div>
                <div aria-label="Page navigation example" v-if="searchSuccess">
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <a class="page-link" href="#" @click="searchPrevPage(currentPageNum)">Previous</a>
                    </li>
                    <li class="page-item" v-for="(i, idx) in searchingMaxPage" :key="idx"><a class="page-link" href="#"
                        @click="searchChangePages(i)">{{ i }}</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" @click="searchNextPage(currentPageNum)">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue';
import axios from 'axios';
import { reactive } from '@vue/reactivity';
import lib from '@/scripts/lib'
export default {
  methods: {
    searchingEmp(empData) {
      let searchData = lib.getSearchEmpData(empData);
      if (searchData != 'M' && searchData != 'W') {
        axios.get(`api/v2/emp/search`, {
          params: {
            empName: searchData,
            page: 0,
            size: 5
          }
        }).then(({ data }) => {
          this.currentPageNum = 0;
          this.searchSuccess = true;
          this.searchResult = data.content;
          this.searchingName = searchData;
          this.searchingMaxPage = data.totalPages;
          this.searchingTotalElements = data.totalElements;
        }).catch(function (err) {
          alert("이름 혹은 성별로 검색해주세요!");
          console.log(err)
        })
      } else {
        axios.get(`/api/v1/emp/search`, {
          params: {
            empGender: searchData,
            page: 0,
            size: 5
          }
        }).then(({ data }) => {
          this.currentPageNum = 0;
          this.searchSuccess = true;
          this.searchResult = data.content;
          this.searchingName = searchData;
          this.searchingMaxPage = data.totalPages;
          this.searchingTotalElements = data.totalElements;
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    searchPrevPage(pageNum) {
      let searchPageNum = pageNum - 1;
      let searchingName = lib.getSearchEmpData(this.searchingName);

      if (searchPageNum <= 0) {
        alert("첫번째 페이지입니다.")
      } else {
        if (searchingName != 'M' && searchingName != 'W') {
          axios.get(`/api/v2/emp/search`, {
            params: {
              empName: searchingName,
              page: searchPageNum,
              size: 5
            }
          }).then(({ data }) => {
            this.currentPageNum = searchPageNum;
            this.searchSuccess = true;
            this.searchResult = data.content;
            this.searchingName = searchingName;
          }).catch(function (err) {
            alert("이름 혹은 성별로 검색해주세요!");
            console.log(err)
          })
        } else {
          axios.get(`/api/v1/emp/search`, {
            params: {
              empGender: searchingName,
              page: searchPageNum,
              size: 5
            }
          }).then(({ data }) => {
            this.currentPageNum = searchPageNum;
            this.searchSuccess = true;
            this.searchResult = data.content;
            this.searchingName = searchingName;
          }).catch(function (err) {
            alert("이름 혹은 성별로 검색해주세요!");
            console.log(err)
          })
        }
      }
    },
    searchChangePages() {

    },
    searchNextPage() {

    },
    fixEmp() {

    },
    changePages(pageNum) {
      axios.get(`/api/v3/emp`, {
        params: {
          page: pageNum - 1,
          size: 5
        }
      }).then(({ data }) => {
        this.state.emp = data;
        this.currentPageNum = pageNum - 1;
      })
    },
    nextPage(num) {
      var nextPNum = num + 1;
      axios.get(`/api/v3/emp`, {
        params: {
          page: nextPNum,
          size: 5
        }
      }).then(({ data }) => {
        this.state.emp = data;
        this.currentPageNum = nextPNum;
      })
      if (this.state.count[0] < nextPNum + 1) {
        alert("마지막 페이지입니다.")
        this.prevPage(this.state.count[0])
      }
    },
    prevPage(num) {
      var nextPNum = num - 1;
      if (nextPNum < 0) {
        alert("첫번째 페이지입니다.")
        nextPNum = 0;
      } else {
        axios.get(`/api/v3/emp`, {
          params: {
            page: nextPNum,
            size: 5
          }
        }).then(({ data }) => {
          this.state.emp = data;
          this.currentPageNum = nextPNum;
        })
      }
    },
  },
  components: { SidebarMenu },
  data() {
    return {
      isModalViewed: false,
      pageCount: 0,
      empList: [],
      currentPageNum: 0,
      searchingData: '',
      searchingMaxPage: 0,
      searchingTotalElements: 0,
      searchSuccess: false,
      searchResult:[],
    };
  },
  setup() {
    const state = reactive({
      emp: [],
      count: [],
    })
    const load = () => {
      axios.get("/api/v3/emp/total", {
        params: {
          size: 5
        }
      }).then((res) => {
        state.count = res.data
      })

      axios.get(`/api/v3/emp`, {
        params: {
          page: 0,
          size: 5
        }
      }).then(({ data }) => {
        state.emp = data;
      })
    }
    load();
    return { state, lib, load }
  },
};
</script>
<style scoped>
.tx-serch {
  border-radius: 8px;
  border-color: lightgray;
  box-shadow: 1px;
}

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
</style>