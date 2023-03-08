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
                            <label for="name">상품 카테고리</label><br>
                            <select class="form-control" id="code" placeholder="카테고리를 선택해주세요" required
                                v-model="selectedItemCode" @change="testSelect()">
                                <option value="null" selected disabled>상품코드를 선택해주세요</option>
                                <option v-for="i in itemCode" :key="i">{{ i }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-3">


                        </div>
                        <div class="col-md-4 mb-3">

                        </div>
                        <div v-for="(i, idx) in submitData" :key="idx">
                            <a>{{ i.itemName }}</a>
                            <input type="number" class="saleCount" id="saleCount" placeholder="판매수량을 입력" required
                                v-model="i.itemCount">
                        </div>
                        <div class="col-md-4 mb-3">
                            <a @click="testSelect()">테스트</a>
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
        testSelect() {
            console.log(this.submitData);
        }
    },
    data() {
        return {
            selectedItemCode: '',
            selectedItem: '',
            selectedItemCount: [],
            submitData: [],

            sItemCode: false,

            itemNamePrice: [],
            itemName: [],
            itemCode: [],
            submititem: [],
            totalItems: [],
            computedItems: [],
        }
    },

    computed: {
        itemNameOptions: function () {
            const selectedCode = this.selectedItemCode;
            const matchedOptions = this.totalItems.filter(item => item.itemCode === selectedCode);
            return matchedOptions;
        }

    },

    watch: {
        itemNameOptions: {
            deep: true,
            immediate: true, // 페이지 로드시 바로 실행
            handler(newVal) {
                this.submitData = newVal.map(item => ({
                    itemName: item.itemName,
                    itemPrice: item.itemPrice,
                    itemCode: item.itemCode,
                    itemCount: 0
                }))
            }
        }
    },
    created() {
        let items = [];
        axios.get("/api/v1/saleItems").then((res) => {
            items = res.data;
            this.totalItems = items;
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
.saleCount {
    margin-left: 50px;
    margin-bottom: 3px;
    padding: 3px;
    border-radius: 5px;

}

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