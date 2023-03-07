<template>
    <div class="container">
        <div class="input-form-backgroud row">
            <div class="input-form col-md-12 mx-auto ">
                <div class="d-flex justify-content-end">
                    <a class="btnback bi bi-arrow-left-circle me-5" @click="backPage()"></a>
                </div>
                <div class="d-flex justify-content-end">
                    <a class="btnback bi bi-arrow-left-circle me-5" @click="test()"></a>
                </div>
                <h4 class="mb-3 d-flex justify-content-center">매출등록</h4>
                <form class="validation-form" novalidate>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="name">상품코드</label>
                            <select class="form-control" id="age" placeholder="나이를 선택해주세요" required>
                                <option value="null" selected disabled>상품코드를 선택하세요</option>
                                <option v-for="i in itemCode" :key="i">{{ i }}</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="age">나이(세)</label>
                            <select class="form-control" id="age" placeholder="나이를 선택해주세요" required v-model="submititem">
                                <option value="null" selected disabled>나이를 선택하세요</option>
                                <option v-for="i in itemNamePrice" :key="i">{{ i.itemName }}</option>
                            </select>
                            <div class="invalid-feedback">
                                나이을 입력해주세요.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="count">판매수량</label>
                            <input type="number" class="form-control" id="phone" placeholder="판매수량을 입력해주세요" required>
                            <div class="invalid-feedback">
                                전화번호를 입력해주세요.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-6">
                            <label for="phone">전화번호</label>
                            <input type="tel" class="form-control" id="phone" placeholder="" required>
                            <div class="invalid-feedback">
                                전화번호를 입력해주세요.
                            </div>
                        </div>
                        <div class="col-md-6 mb-6">
                            <label for="pay">월급(원)</label>&nbsp;<i class="info fa fa-info-circle" aria-hidden="true">
                                <small class="infoText"> 최초의 월급을 지정할수있습니다.</small></i><br />
                            <input type="number" class="form-control" id="code" placeholder="" required>
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
                        <label for="workDate">입사일</label><br />
                        <input type="date" class="form-control" id="workDate" placeholder="" required>

                    </div>
                    <div class="mb-3">
                        <label for="description">비고<span class="text-muted">&nbsp;(필수 아님)</span></label>
                        <input type="text" class="form-control" id="description" placeholder="비고를 입력해주세요.">
                    </div>
                    <hr class="mb-4">
                    <div class="mb-4 "></div>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary btn-lg btn-block" type="button">추가하기</button>
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

export default {
    name: "SaleSave",
    methods: {
        backPage() {
            this.$router.go(-1);
        },
        test() {
            alert(this.submititem);
        },
    },
    data() {
        return {
            itemNamePrice: [],
            itemCode: [],
            submititem: [],
        }
    },

    created() {
        let items = [];
        axios.get("/api/v1/saleItems").then((res) => {
            items = res.data;
            // JSON 데이터 파싱하여 배열에 저장
            items.forEach(item => {
                if (!this.itemNamePrice.find(i => i.itemName === item.itemName && i.itemPrice === item.itemPrice)) {
                    this.itemNamePrice.push({ itemName: item.itemName, itemPrice: item.itemPrice });
                }
                if (!this.itemCode.includes(item.itemCode)) {
                    this.itemCode.push(item.itemCode);
                }
            });
        })
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