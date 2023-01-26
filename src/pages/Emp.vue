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
                      <h4 class="card-title d-flex justify-content-center">Striped Table with Hover</h4>
                      <p class="card-category d-flex justify-content-center">Here is a subtitle for this table</p>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-hover table-striped">
                          <thead>
                            <th class="tb-title">번호</th>
                            <th class="tb-title">이름</th>
                            <th class="tb-title">나이</th>
                            <th class="tb-title">성별</th>
                            <th class="tb-title">출근횟수</th>
                            <th class="tb-title">월급</th>
                            <th class="tb-title">상세설명</th>
                          </thead>
                          <tbody>
                            <tr class="" v-for="(i, idx) in state.emp" :key="idx" @click="fixEmp()">
                              <td class="tb-context">{{ idx + 1 }}</td>
                              <td class="tb-context">{{ i.empName }}</td>
                              <td class="tb-context">{{ i.empAge }}</td>
                              <td class="tb-context">{{ i.empGender }}</td>
                              <td class="tb-context">{{ i.empWorkCount }}</td>
                              <td class="tb-context">{{ i.empPay }}원</td>
                              <td class="tb-context">{{ i.empDescription }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item" v-for="(i,idx) in state.count" :key="idx"><a class="page-link" href="#" >{{ i }}</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
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
export default {
  methods: {
    fixEmp() {
      console.log("hello")
    },
    callPageNum() {
   
    }
  },
  components: { SidebarMenu },
  data() {
    return {
      isModalViewed: false,
      pageCount: 0,
    };
  },
  setup() {
    const state = reactive({
      emp: [],
      count: 0,
    })

    axios.get("/api/v3/emp/total", {
      params: {
        size: 5
      }
    }).then(( res ) => {
      state.count = res.data
    })

    axios.get(`/api/v1/emp`).then(({ data }) => {
      state.emp = data;
      console.log(state.emp)
    })
    return { state }
  },
};
</script>
<style scoped>
.tb-title {
  text-align: center;
  border-left: 0.1px dotted black;
}

.tb-context {
  text-align: center;
}
</style>