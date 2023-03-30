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
                            <th class="tb-title"> # </th>
                            <th class="tb-title">이름</th>
                            <th class="tb-title">출근날짜</th>
                          </thead>
                          <tbody>
                            <tr class="" v-for="(i, idx) in emp" :key="i">
                              <td class="tb-context">{{ idx + 1 }}</td>
                              <td class="tb-context">{{ i.empName }}</td>
                              <td class="tb-context">{{ lib.formatDate(i.workDate) }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <button class="col-lg-2 col-md-3 col-sm-3 btn btn-success" @click="workStart()">출근하기</button>
                  <button class="col-lg-2 col-md-3 col-sm-3 btn btn-success" @click="workFinish()">퇴근하기</button>
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
import api from '@/scripts/api'
import lib from '@/scripts/lib'
import store from '@/scripts/store';
export default {
  methods: {
    workStart() {
      const empId = JSON.parse(JSON.stringify(sessionStorage.getItem("id")));
      api.post(`api/v3/emp/work/${empId}`).then((res) => {
        this.attId = res.data;
        console.log(this.attId);
        this.isWorked = true;
        const nowdate = lib.getNowDate();
        const now = lib.formatDate(nowdate);
        const memberName = store.state.name.name;
        alert(memberName + "님, " + now + "출근하셨습니다.");
        this.loading();
      }).catch((err) => {
        alert(err);
      })

    },
    workFinish() {
      const empId = JSON.parse(JSON.stringify(sessionStorage.getItem("id")));
      console.log(this.attId)
      api.patch(`api/v3/emp/work/${empId}`, {
        attId: this.attId,
      }).then(() => {
        this.isWorked = false;
        const nowdate = lib.getNowDate();
        const now = lib.formatDate(nowdate);
        const memberName = store.state.name.name;
        alert(memberName + "님, " + now + "퇴근하셨습니다.");
        this.loading();
      }).catch((err) => {
        alert(err);
      })
    },
    async loading() {
      const loginId = JSON.parse(JSON.stringify(sessionStorage.getItem("id")));
      const res = await api.get(`/api/v5/emp/${loginId}`);
      this.emp = res.data;
    },
  },
  components: { SidebarMenu },
  data() {
    return {
      isWorked: false,
      attId: 0,
      emp: [],
      workCount: 0,
    };
  },
  created() {
    const load = async () => {
      const myId = sessionStorage.getItem("id");
      const loginId = Number(myId);
      const res = await api.get(`/api/v5/emp/${loginId}`);
      this.emp = res.data;
    };
    load(); // load() 함수를 호출할 때 await를 사용해줍니다.
    return { load };
  },
  setup() {
    return { lib };
  }
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