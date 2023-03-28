<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu></SidebarMenu>
      <main class="col-lg-10 col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex col-lg-12 justify-content-center flex-wrap flex-md-nowrap align-items-center pt-6 pb-6 mb-6 border-bottom">
          <div class="py-5 bg-light">
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
                <div class="tableBox col-12">
                  <div class="card">
                    <div class="card-header">
                      <h1 class="card-title d-flex justify-content-center">출근현황</h1>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-hover table-striped">
                          <thead>
                            <th class="tb-title">이름</th>
                            <th class="tb-title">월급</th>
                            <th class="tb-title">이번달 출근횟수</th>
                            <th class="tb-title">출근날짜</th>
                          </thead>
                          <tbody>
                            <tr class="">
                              <td class="tb-context"></td>
                              <td class="tb-context"></td>
                              <td class="tb-context"></td>
                              <td class="tb-context"></td>
                              <td class="tb-context"></td>
                              <td class="tb-context"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button class="col-lg-2 col-md-3 col-sm-3 btn btn-success" @click="addEmp()">출근하기</button>
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
    addEmp() {
      this.$router.push("EmpSave");
    },
  },
  components: { SidebarMenu },
  data() {
    return {

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