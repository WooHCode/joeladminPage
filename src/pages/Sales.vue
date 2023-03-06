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
              <button type="button" class="btn btn-sm btn-outline-secondary" @click="showWeekChart()">일매출현황</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" @click="showMonthChart()">월매출현황</button>
            </div>
            <div class="dropdown">
              <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" @click="dropdown = true">
                <span data-feather="calendar" class="align-text-bottom"></span>
                상품별
              </button>
              <div class="dropdown-content" v-if="dropdown == true">
                <a href="#" @click="showCroffle()">CROFFLE</a>
                <a href="#" @click="showToast()">TOAST</a>
                <a href="#" @click="showScone()">SCONE</a>
                <a href="#" @click="showBasak()">BASAK</a>
                <a href="#" @click="showCoffee()">COFFEE</a>
                <a href="#" @click="showLatte()">LATTE</a>
                <a href="#" @click="showNCoffee()">NON_COFFEE</a>
                <a href="#" @click="showOneLitter()">ONE_LITER</a>
                <a href="#" @click="showSmoothie()">SMOOTHIE</a>
                <a href="#" @click="showBTea()">B_TEA</a>
                <a href="#" @click="showAde()">ADE</a>
                <a href="#" @click="showTea()">TEA</a>
              </div>
            </div>
          </div>
        </div>
        <div class="Chart">
          <Bar id="my-chart-id" :options="startOptions" :data="startChart" v-if="startData == true"></Bar>
          <Line id="my-chart-id" :options="chartOptions" :data="chartDataW" v-if="weekData == true" />
          <Line id="my-chart-id" :options="chartOptions" :data="chartDataM" v-if="monthData == true" />
          <Line id="my-chart-id" :options="chartOptions" :data="chartDataCroffle" v-if="croffleData == true" />
        </div>
        <div class="d-flex justify-content-center mt-5">
          <button class="saleSubmit btn btn-success" @click="saleStart()">금일매출등록</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/SidebarMenu.vue"
import { Line } from 'vue-chartjs'
import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import axios from 'axios'
import lib from '@/scripts/lib'


ChartJS.register(CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend)

export default {
  methods: {
    saleStart() {
      this.submitS = true;
    },

    showWeekChart() {
      axios.get("/api/v1/sales").then(({ data }) => {
        var sortData = lib.sortDataByDate(data);
        this.chartDataW.labels = Object.keys(sortData);
        this.chartDataW.datasets[0].data = Object.values(sortData);
      })

      this.startData = false;
      this.weekData = true;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;


    },

    showMonthChart() {
      this.startData = false;
      this.weekData = false;
      this.monthData = true;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;

      axios.get(`/api/v2/sales/`).then(({ data }) => {
        var sortData = lib.sortDataByDate(data);
        this.chartDataM.labels = Object.keys(sortData);
        this.chartDataM.datasets[0].data = Object.values(sortData);
      })
    },


    showCroffle() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = true;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;
    },
    showToast() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = true;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;
    },
    showScone() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = true;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;
    },
    showBasak() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = true;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;
    },
    showCoffee() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = true;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;
    },
    showLatte() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = true;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;
    },
    showNCoffee() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = true;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;
    },
    showOneLitter() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = true;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;
    },
    showSmoothie() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = true;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = false;
    },
    showBTea() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = true;
      this.adeData = false;
      this.teaData = false;
    },
    showAde() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = true;
      this.teaData = false;
    },
    showTea() {
      this.startData = false;
      this.weekData = false;
      this.monthData = false;
      this.croffleData = false;
      this.toastData = false;
      this.sconeData = false;
      this.basakData = false;
      this.coffeeData = false;
      this.latteData = false;
      this.nCoffeeData = false;
      this.oneLitterData = false;
      this.smoothieData = false;
      this.bTeaData = false;
      this.adeData = false;
      this.teaData = true;
    }
  },

  data() {
    return {
      submitS: false,
      dropdown: false,

      startData: true,
      weekData: false,
      monthData: false,
      croffleData: false,
      toastData: false,
      sconeData: false,
      basakData: false,
      coffeeData: false,
      latteData: false,
      nCoffeeData: false,
      oneLitterData: false,
      smoothieData: false,
      bTeaData: false,
      adeData: false,
      teaData: false,


      startChart: {
        labels: ['크로플', '토스트', '스콘', '바삭이', '커피', '라떼', 'Non커피', '1리터', '스무디', '버블티', '에이드', '티'],
        datasets: [{
          label: '카테고리 별 상품 수',
          backgroundColor: '#f87979',
          data: [8, 5, 5, 2, 2, 13, 10, 9, 12, 4, 8, 11]
        }]
      },
      startOptions: {
        responsive: true,
        maintainAspectRatio: false
      },

      chartDataW: {
        labels: [],
        datasets: [{
          label: '요일별 매출',
          backgroundColor: '#f87979',
          data: [],
        }]
      },
      chartDataM: {
        labels: [],
        datasets: [{
          label: '월별 매출',
          backgroundColor: '#f87979',
          data: []
        }]
      },
      chartDataCroffle: {
        labels: ['오리지널', '애플잼', '로투스', '누텔라', '카야잼'],
        datasets: [{
          label: '월별 매출',
          backgroundColor: '#f87979',
          data: [300000, 300000, 400000, 600000, 100000]

        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,

      }
    }
  },
  components: { SidebarMenu, Line, Bar },

}


</script>

<style scoped>
.Chart {
  width: auto;
  height: 50vh;
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