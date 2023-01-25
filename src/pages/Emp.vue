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
                            <tr class="" v-for="(i, idx) in state.emp" :key="idx">
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

  },
  components: { SidebarMenu },
  data() {
    return {
      isModalViewed: false,
    };
  },
  setup() {
    const state = reactive({
      emp: [],
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
  border-left: 1px dashed black;
  margin-left: 2px;
}
.tb-context {
  text-align: center;
}
</style>