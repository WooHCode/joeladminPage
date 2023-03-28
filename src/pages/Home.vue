<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar-menu></Sidebar-menu>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">매출현황</h1>
          <div class="btn-toolbar mb-2 mb-md-0">

          </div>
        </div>
        <div v-if="chartDataM.labels.length > 0">
          <Line class="myChart" id="my-chart-id" :options="chartOptions" :data="chartDataM" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue'
import axios from 'axios'
import { Line } from 'vue-chartjs'

export default {
  components: { SidebarMenu, Line },
  data() {
    return {
      chartDataM: {
        labels: [],
        datasets: [{
          label: '월별 매출',
          backgroundColor: '#f87979',
          data: []
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  methods: {
    async load() {
      const res = await axios.get(`/api/v2/sales`);
      this.chartDataM.labels = Object.keys(res.data);
      this.chartDataM.datasets[0].data = Object.values(res.data);
    },
  },
  async mounted() {
    await this.load();
  },
}
</script>


<style>
.myChart {
  height: 500px;
  max-height: 500px;
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