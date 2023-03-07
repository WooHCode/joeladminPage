<template>
    <div class="container">
        <div class="input-form-backgroud row">
            <div class="input-form col-md-12 mx-auto ">
                <div class="d-flex justify-content-end">
                    <a class="btnback bi bi-arrow-left-circle me-5" @click="backPage()"></a>
                </div>
                <h4 class="mb-3 d-flex justify-content-center">매출등록</h4>
                <form class="validation-form" novalidate>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="name">상품코드</label><br>
                            <select class="form-control" id="age" placeholder="상품코드를 선택해주세요" required
                                v-model="selectItemCode">
                                <option value="null" selected disabled>상품코드를 선택해주세요</option>
                                <option v-for="i in itemCode" :key="i">{{ i }}</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="age">상품명</label>
                            <select class="form-control" id="age" placeholder="상품명을 선택해주세요" required>
                                <option value="null" selected disabled>상품명을 선택해주세요</option>
                                <option v-for="i in itemName" :key="i">{{ i }}</option>
                            </select>
                            <div class="invalid-feedback">
                                나이을 입력해주세요.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="count">판매수량</label>
                            <input type="number" class="form-control" id="phone" placeholder="판매수량을 입력해주세요" required>
                        </div>
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
        selectItemCode(itemCode) {
            alert(itemCode);
        },
    },
    data() {
        return {
            selectedItemCode: '',
            selectedItem: '',

            itemNamePrice: [],
            itemName: [],
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
                if (!this.itemName.includes(item.itemName)) {
                    this.itemName.push(item.itemName);
                }
            });

        })
    },
}
</script>

<style scoped>
.btn-code {
    margin-left: 5px;
}

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