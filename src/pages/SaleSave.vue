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
                                v-model="selectedItemCode" @change="viewSubmit = true">
                                <option value="null" selected disabled>상품코드를 선택해주세요</option>
                                <option v-for="i in itemCode" :key="i">{{ i }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row row-assign">
                        <div class="col-md-5 col-lg-5 mb-3">
                            <div class="item-group" v-for="(i, idx) in submitData" :key="idx">
                                <label>{{ i.itemName }}</label>
                                <input type="number" class="saleCount" id="saleCount" placeholder="판매수량을 입력" required
                                    v-model="i.itemCount">
                            </div>

                        </div>
                        <div class="col-md-1 col-lg-1 mb-3">
                            <i class="bi bi-caret-right-square" @click="countCheck()" v-if="viewSubmit"></i>
                        </div>
                        <div class="rige col-md-6 col-lg-6 mb-3" v-if="viewSubmit">
                            <p v-for="(i, idx) in showSaleItemName" :key="idx">{{ '상품명: ' + i + ' ' + '수량: ' +
                                showSaleItemValue[idx] + "\n" }}</p> <br>
                            <button type="button" class="btn btn-primary" @click="submit()" v-if="buttonView">전송하기</button>
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
import api from '@/scripts/api'
import lib from '@/scripts/lib';

export default {
    name: "SaleSave",
    methods: {
        backPage() {
            this.$router.go(-1);
        },
        countCheck() {
            this.showSaleItemName = [];
            this.showSaleItemValue = [];
            this.buttonView = true;
            this.viewSubmit = true;
            const newArray = Object.values(this.submitData);
            newArray.forEach((i) => {
                this.showSaleItemName.push(i.itemName);
                this.showSaleItemValue.push(i.itemCount);
            });
        },
        submit() {
            if (confirm('정말로 전송하시겠습니까?') == true) {
                const sendData = this.submitData;

                api.post('/api/v1/sales', sendData).then(() => {
                    alert("매출등록이 완료되었습니다.");
                    this.showSaleItemName = [];
                    this.showSaleItemValue = [];
                    this.buttonView = false;
                }).catch((err) => {
                    console.log(err);
                })

            } else {
                alert('상품명과 판매수량을 확인해주세요');
            }
        },
    },
    data() {
        return {
            selectedItemCode: '',
            selectedItem: '',
            selectedItemCount: [],
            submitData: [],
            date: lib.getNowDate(),
            sItemCode: false,
            viewSubmit: false,
            buttonView: false,
            showSaleItemName: [],
            showSaleItemValue: [],

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
                    saleDate: this.date,
                    itemCount: 0
                }))
            }
        }
    },
    created() {
        let items = [];
        api.get("/api/v1/saleItems").then((res) => {
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
.rige {
    border: ridge 10px;
}

.row-assign {}

.item-group {
    display: flex;
    align-items: center;
}

.item-group label {
    display: inline-block;
    width: 150px;
    margin-right: 5px;
}

.saleCount {
    width: 50px;
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