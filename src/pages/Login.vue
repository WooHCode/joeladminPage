<template>
  <div class="text-center mt-5">
    <div class="form-signin mt-5">
      <img class="mb-4" src="Joelfab.png" alt="" width="72" height="72">
      <div class="d-flex justify-content-center">
        <label for="inputId" class="sr-only">ID</label>
        <input type="text" id="inputId" class="form-control" placeholder="ID" required autofocus
          v-model="state.info.id">
      </div>
      <div class="d-flex justify-content-center mt-1">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
          v-model="state.info.password">
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> 로그인 상태 유지
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" @click="submit()">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive } from '@vue/reactivity'
export default {
  setup() {
    const state = reactive({
      info: {
        id: '',
        password: '',
      }
    })
    return {
      state
    }
  },
  methods: {
    submit() {

      axios.post(`/api/v1/login`, {
        params: {

        }
      }).then(({ res }) => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>
.form-control {
  width: 15rem
}
</style>