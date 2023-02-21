<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar-menu></Sidebar-menu>
      <main class="col-lg-10 col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">매출현황</h1>
          <div class="btn-toolbar mb-2 mb-md-0 me-5">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-secondary"
                @click="weekData = true, monthData = false">일매출현황</button>
              <button type="button" class="btn btn-sm btn-outline-secondary"
                @click="monthData = true, weekData = false">월매출현황</button>
            </div>
            <div class="dropdown">
              <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" @click="dropdown = true">
                <span data-feather="calendar" class="align-text-bottom"></span>
                상품별
              </button>
              <div class="dropdown-content" v-if="dropdown == true">
                <a href="#">CROFFLE</a>
                <a href="#">TOAST</a>
                <a href="#">SCONE</a>
                <a href="#">BASAK</a>
                <a href="#">COFFEE</a>
                <a href="#">LATTE</a>
                <a href="#">NON_COFFEE</a>
                <a href="#">ONE_LITER</a>
                <a href="#">B_TEA</a>
                <a href="#">ADE</a>
                <a href="#">TEA</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Line id="my-chart-id" :options="chartOptions" :data="chartDataW" v-if="weekData == true" />
          <Line id="my-chart-id" :options="chartOptions" :data="chartDataM" v-if="monthData == true" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/SidebarMenu.vue"
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend)

export default {
  data() {
    return {
      dropdown: false,
      weekData: true,
      monthData: false,
      chartDataW: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [{
          label: '요일별 매출',
          backgroundColor: '#f87979',
          data: []
        }]
      },
      chartDataM: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [{
          label: '월별 매출',
          backgroundColor: '#f87979',
          data: [300000, 300000, 400000, 600000, 100000, 200000, 600000, 400000, 600000, 100000, 300000]

        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,

      }
    }
  },
  components: { SidebarMenu, Line },
  created() {
    const mydata = [30000, 50000, 40000, 30000, 50000, 40000, 60000];
    this.chartDataW.datasets[0].data = mydata;
  },

}


</script>

<style scoped>
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

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:focus {
  background-color: #ddd;
}

@media(min-width:420px) {
  .dropdown:hover .dropdown-content {
    display: block;
  }
}

@media(max-width:419px) {
  .dropdown:hover .dropdown-content {
    display: block;
  }
}
</style>