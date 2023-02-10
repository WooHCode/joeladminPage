<template>
    <div class="container">
        <div class="input-form-backgroud row">
            <div class="input-form col-md-12 mx-auto ">
                <h4 class="mb-3 d-flex justify-content-center">직원상세정보</h4>
                <form class="validation-form" novalidate>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="name">이름</label>
                            <input type="text" class="form-control" id="name" placeholder="" v-model="updateEmp.name" required>
                            <div class="invalid-feedback">
                                이름을 입력해주세요.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="age">나이</label>
                            <select class="form-control" id="age" placeholder="나이를 선택해주세요" required v-model="updateEmp.age">
                            <option v-for="i in 100 " :key="i">{{ i }}</option>
                            </select>
                            <div class="invalid-feedback">
                                나이을 입력해주세요.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="nickname">성별</label>&nbsp;&nbsp;&nbsp;&nbsp;남성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여성
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" class="genderCheck" id="gender" name="empGenders" v-if="updateEmp.gender == 'M'" checked required>&nbsp;
                            <input type="radio" class="genderCheck" id="gender" name="empGenders" v-if="updateEmp.gender == 'W'" required>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" class="genderCheck" id="gender" name="empGenders" v-if="updateEmp.gender == 'M'" required>
                            <input type="radio" class="genderCheck" id="gender" name="empGenders" v-if="updateEmp.gender == 'W'" checked required>&nbsp; 
                            <div class="invalid-feedback">
                                성별을 체크해주세요.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="phone">전화번호</label>
                            <input type="tel" class="form-control" id="phone" placeholder="휴대폰번호를 입력해주세요" v-model="updateEmp.phone" required>
                            <div class="invalid-feedback">
                                전화번호를 입력해주세요.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="workDate">최근 출근일</label>
                            <input type="text" class="form-control" id="workDate" placeholder="" v-model="updateEmp.workDate" required readonly="true">
                            <div class="invalid-feedback">
                                전화번호를 입력해주세요.
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
                    <div class="mb-3">
                        <label for="email">이메일</label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com" required v-model="updateEmp.email">
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
                        <label for="description">비고<span class="text-muted">&nbsp;(필수 아님)</span></label>
                        <input type="text" class="form-control" id="description" v-model="updateEmp.empDesc" placeholder="비고를 입력해주세요.">
                    </div>
                    <hr class="mb-4">
                    <div class="mb-4 "></div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary btn-lg btn-block" type="submit">수정하기</button>
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
        test(val) {
          console.log(val);  
        },
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
.genderCheck {
    
}
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