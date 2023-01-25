<template>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu></SidebarMenu>
      <main class="col-lg-10 col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <h1 class="h2 d-flex justify-content-center">정보</h1>
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
                      <h4 class="card-title">Striped Table with Hover</h4>
                      <p class="card-category">Here is a subtitle for this table</p>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-hover table-striped">
                          <thead>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Country</th>
                            <th>City</th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Dakota Rice</td>
                              <td>$36.738</td>
                              <td>Niger</td>
                              <td>Oud-Turnhout</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Minerva Hooper</td>
                              <td>$23,789</td>
                              <td>Curaçao</td>
                              <td>Sinaai-Waas</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Sage Rodriguez</td>
                              <td>$56,142</td>
                              <td>Netherlands</td>
                              <td>Baileux</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Philip Chaney</td>
                              <td>$38,735</td>
                              <td>Korea, South</td>
                              <td>Overland Park</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Doris Greene</td>
                              <td>$63,542</td>
                              <td>Malawi</td>
                              <td>Feldkirchen in Kärnten</td>
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
export default {
  components: { SidebarMenu },
  data() {
    return {
      isModalViewed: false,
    };
  },
};
</script>