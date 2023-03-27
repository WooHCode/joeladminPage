<template>
  <div class="container-fluid">
    <!--TODO 직원 출근 페이지 개발-->
    <div class="row">
      <SidebarMenu></SidebarMenu>
      <div class="row">
        <h3>hello</h3>
      </div>
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
    addEmp() {
      this.$router.push("EmpSave");
    },
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
          alert("이름 혹은 성별로 검색해주세요!");
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
    searchChangePages(pageNum) {
      let searchPageNum = pageNum - 1;
      let searchingName = lib.getSearchEmpData(this.searchingName);

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
    },
    searchNextPage(pageNum) {
      let searchPageNum = pageNum + 1;
      let searchingName = lib.getSearchEmpData(this.searchingName);

      if (searchPageNum >= this.searchingMaxPage) {
        alert("마지막 페이지입니다.")
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
    empDetail(requestName) {
      this.$router.push({
        name: "EmpDetail",
        params: { name: requestName }
      })
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
      searchingName: '',
      searchingData: '',
      searchingMaxPage: 0,
      searchingTotalElements: 0,
      searchSuccess: false,
      searchResult: [],
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
        console.log(res);
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