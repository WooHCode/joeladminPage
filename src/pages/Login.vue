<template>
  <div class="text-center mt-5">
    <div class="form-signin mt-5">
      <img class="mb-4" src="Joelfab.png" alt="" width="72" height="72">
      <div class="d-flex justify-content-center">
        <label for="inputId" class="sr-only">ID</label>
        <input type="text" id="inputId" class="form-control" placeholder="ID" required autofocus v-model="state.form.ide"
          @keyup.enter="submit()">
      </div>
      <div class="d-flex justify-content-center mt-1">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required
          v-model="state.form.password" @keyup.enter="submit()">
      </div>
      <br><br><button class="btn btn-lg btn-primary btn-block" @click="enter()">회원가입</button><br><br>
      <button class="btn btn-lg btn-primary btn-block" @click="submit()">로그인</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive } from '@vue/reactivity'
import store from '@/scripts/store'
import router from '@/scripts/router'
export default {
  setup() {
    const state = reactive({
      form: {
        ide: '',
        password: '',
      }
    })
    const enter = () => {
      router.push("/enterMember");
    }

    const submit = () => {
      axios.post("/api/account/login", state.form).then((res) => {
        console.log(res);
        const idData = Object.values(res.data[2]);
        const nameString = Object.values(res.data[1]);
        const memberCode = Object.values(res.data[3]);
        const memberName = nameString.join('');
        store.commit('setAccount', idData);
        store.commit('setMemberCode', memberCode);
        router.push({ path: "/" });
        alert("환영합니다. " + memberName + "님");
      }).catch(() => {
        alert("로그인 정보가 존재하지 않습니다.");
      });
    }

    return {
      state, submit, enter
    }
  },
}
</script>

<style scoped>
.form-control {
  width: 15rem
}
</style>