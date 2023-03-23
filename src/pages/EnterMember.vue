<template>
    <div class="container">
        <div class="input-form-backgroud row">
            <div class="input-form col-md-12 mx-auto ">
                <div class="d-flex justify-content-end">
                    <a class="btnback bi bi-arrow-left-circle me-5" @click="backPage()"></a>
                </div>
                <h4 class="mb-3 d-flex justify-content-center">회원가입</h4>
                <form class="validation-form" novalidate>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="name">이름</label>
                            <input type="text" class="form-control" id="name" placeholder="이름을 입력해주세요"
                                v-model="postData.EmpDto.name" required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="loginId">아이디를 입력해주세요</label>
                            <input type="text" class="form-control" id="loginId" placeholder="010-0000-0000"
                                v-model="postData.LoginInfoDto.infoId" required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="loginPw">비밀번호를 입력해주세요</label>
                            <input type="password" class="form-control" id="loginPw" placeholder="비밀번호를 입력해주세요"
                                v-model="postData.LoginInfoDto.infoPw" required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="age">나이(세)</label>
                            <select class="form-control" id="age" placeholder="나이를 선택해주세요" v-model="postData.EmpDto.age"
                                required>
                                <option value="null" selected disabled>나이를 선택하세요</option>
                                <option v-for="i in 100" :key="i">{{ i }}</option>
                            </select>
                            <div class="invalid-feedback">
                                나이을 입력해주세요.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="nickname">성별</label>&nbsp;&nbsp;&nbsp;&nbsp;남성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;여성
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" class="genderCheck" id="genderM" name="empGenders" value="M"
                                v-model="postData.EmpDto.gender" required>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" class="genderCheck" id="genderW" name="empGenders" value="W"
                                v-model="postData.EmpDto.gender" required>
                            <div class="invalid-feedback">
                                성별을 체크해주세요.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-6">
                            <label for="phone">전화번호</label>
                            <input type="tel" class="form-control" id="phone" placeholder="휴대폰번호를 입력해주세요"
                                v-model="postData.EmpDto.phone" required>
                            <div class="invalid-feedback">
                                전화번호를 입력해주세요.
                            </div>
                        </div>
                        <div class="col-md-6 mb-6">
                            <label for="empCode">직원코드를 입력해주세요</label>&nbsp;<i class="info fa fa-info-circle"
                                aria-hidden="true" @mouseover="payInfo = true" @mouseleave="payInfo = false">
                                <small class="infoText" v-if="payInfo == true"> 0은 관리자, 1은 일반직원.</small></i><br />
                            <input type="number" class="form-control" id="code" placeholder=""
                                v-model="postData.LoginInfoDto.infoCode" required>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email">이메일</label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com"
                            v-model="postData.EmpDto.email" required>
                        <div class="invalid-feedback">
                            이메일을 입력해주세요.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="workDate">입사일</label><br />
                        <input type="date" class="form-control" id="workDate" placeholder=""
                            v-model="postData.EmpDto.enterDate" required>

                    </div>
                    <div class="mb-3">
                        <label for="description">비고<span class="text-muted">&nbsp;(필수 아님)</span></label>
                        <input type="text" class="form-control" id="description" placeholder="비고를 입력해주세요."
                            v-model="postData.EmpDto.empDesc">
                    </div>
                    <hr class="mb-4">
                    <div class="mb-4 "></div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary btn-lg btn-block" type="button" @click="submit()">추가하기</button>
                    </div>
                </form>
            </div>
        </div>
        <footer class="my-3 text-center text-small">
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/scripts/router';

export default {
    name: "EmpDetail",
    methods: {
        backPage() {
            this.$router.go(-1);
        },
        submit() {
            const empDto = this.postData.EmpDto;
            const loginInfoDto = this.postData.LoginInfoDto;
            axios.post(`/api/v2/emp/save`, {
                empDto: empDto,
                loginInfoDto: loginInfoDto
            }).then(() => {
                alert(this.postData.EmpDto.name + "님, 직원이 등록되었습니다.")
                router.push("/");
            }).catch(function (error) {
                alert(error + "\n" + "직원 정보를 다시 입력해주세요");
            })
        },
    },
    data() {
        return {
            postData: {
                EmpDto: {
                    name: '',
                    email: '',
                    phone: '',
                    enterDate: '',
                    gender: '',
                    pay: 0,
                    age: 0,
                    empDesc: '',
                },
                LoginInfoDto: {
                    infoId: '',
                    infoPw: '',
                    infoCode: 0,
                },
            },
            payInfo: false,
        }
    },
}
</script>

<style scoped>
.info {
    color: #92b5db;
}

.info:hover {
    color: #92b5db;
}

.infoText {
    color: #6B728E;
}

.btnback {
    font-size: 25px;
    color: #1d6e42;
    cursor: pointer;
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