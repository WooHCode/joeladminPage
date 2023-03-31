<template>
  <div class="text-center mt-5">
    <div class="form-signin mt-5">
      <img class="mb-4" src="Joelfab.png" alt="" width="72" height="72">
      <div class="d-flex justify-content-center">
        <label for="inputId" class="sr-only">ID</label>
        <input type="text" id="inputId" class="form-control" placeholder="ID('-'는 빼고 입력해주세요)" required autofocus
          v-model="state.form.ide" @keyup.enter="submit()">
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
import { reactive } from '@vue/reactivity'
import store from '@/scripts/store'
import router from '@/scripts/router'
import api from '@/scripts/api'
import Cookies from 'js-cookie'
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
      api.post("/api/account/login", state.form).then((res) => {
        const idData = parseInt(res.data[2]);
        const nameString = Object.values(res.data[1]);
        const parseCode = res.data[3];
        const memberCode = parseInt(parseCode[0], 10);
        const memberName = nameString.join('');
        Cookies.set("id", idData);
        store.commit('setAccount', idData);
        sessionStorage.setItem("id", idData);
        sessionStorage.setItem("code", memberCode);
        store.commit('setMemberCode', memberCode);
        store.commit('setMemberName', memberName);
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