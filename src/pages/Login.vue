<template>
  <div class="text-center">
    <div class="form-signin">
      <img class="mb-4" src="Joelfab.png" alt="" width="72" height="72">
      <div class="d-flex justify-content-center">
        <label for="inputId" class="sr-only">ID</label>
        <input type="text" id="inputId" class="form-control" placeholder="ID" required autofocus>
      </div>
      <div class="d-flex justify-content-center mt-1">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> 아이디 기억하기
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.form-control {
  width: 15rem
}

</style>