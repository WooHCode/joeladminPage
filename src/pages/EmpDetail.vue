<template>
    <div class="container">
        <div class="input-form-backgroud row">
            <div class="input-form col-md-12 mx-auto ">
                <h4 class="mb-3 d-flex justify-content-center">회원정보</h4>
                <form class="validation-form" novalidate>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="name">이름</label>
                            <input type="text" class="form-control" id="name" placeholder="" v-model="updateEmp.empName" required>
                            <div class="invalid-feedback">
                                이름을 입력해주세요.
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="nickname">별명</label>
                            <input type="text" class="form-control" id="nickname" placeholder="" value="" required>
                            <div class="invalid-feedback">
                                별명을 입력해주세요.
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email">이메일</label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
                        <div class="invalid-feedback">
                            이메일을 입력해주세요.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="address">주소</label>
                        <input type="text" class="form-control" id="address" placeholder="서울특별시 강남구" required>
                        <div class="invalid-feedback">
                            주소를 입력해주세요.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="address2">상세주소<span class="text-muted">&nbsp;(필수 아님)</span></label>
                        <input type="text" class="form-control" id="address2" placeholder="상세주소를 입력해주세요.">
                    </div>
                    <div class="row">
                        <div class="col-md-8 mb-3">
                            <label for="root">가입 경로</label>
                            <select class="custom-select d-block w-100" id="root">
                                <option value=""></option>
                                <option>검색</option>
                                <option>카페</option>
                            </select>
                            <div class="invalid-feedback">
                                가입 경로를 선택해주세요.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="code">추천인 코드</label>
                            <input type="text" class="form-control" id="code" placeholder="" required>
                            <div class="invalid-feedback">
                                추천인 코드를 입력해주세요.
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="aggrement" required>
                        <label class="custom-control-label" for="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
                    </div>
                    <div class="mb-4 "></div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary btn-lg btn-block" type="submit">가입 완료</button>
                    </div>
                </form>
            </div>
        </div>
        <footer class="my-3 text-center text-small">
        </footer>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios'
export default {
    name: "EmpDetail",
    methods: {

    },
    props: {
        name: {
            type: String,
            default: "",
        }
    },
    data() {
        return {
            searchingName: this.$props.name,
            updateEmp: [],
        }
    },
    created() {
        const state = reactive({
            emp: [],
        })
        let searchName = JSON.parse(JSON.stringify(this.searchingName));
        axios.get(`api/v1/emp/${searchName}`).then(({ data }) => {
            console.log(data);
            state.emp = data;
            this.updateEmp = state.emp
        })
        return { state };
    },

}
</script>

<style scoped>
.body {
    min-height: 100vh;

    background: -webkit-linear-gradient(bottom left, #92b5db 0%, #1d466c 100%);
    background: -moz-linear-gradient(bottom left, #92b5db 0%, #1d466c 100%);
    background: -o-linear-gradient(bottom left, #92b5db 0%, #1d466c 100%);
    background: linear-gradient(to top right, #92b5db 0%, #1d466c 100%);
}

.input-form {
    max-width: 680px;

    margin-top: 80px;
    padding: 32px;

    background: #fff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15)
}
</style>