<template>
  <div aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#" @click="first()">1</a></li>
      <li class="page-item"><a class="page-link" href="#" @click="second()">2</a></li>
      <li class="page-item"><a class="page-link" href="#" @click="third()">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    first() {
      console.log("first")
    },
    second(){
      console.log("second")
    },
    third(){
      console.log("third")
    }
  }

}
</script>

<style>

</style>