<template>
    <div class="modal">
        <div class="py-5 text-center">
        </div>
        <div class="row g-5 h-50">
            <div class="col-md-10 col-lg-12">
                <h4 class="mb-3">상품 정보</h4>
                <div class="needs-validation" novalidate="">
                    <div class="row g-3">
                        <div class="col-12"><label for="itemName" class="form-label"></label>
                            <input type="text" class="form-control" id="itemName" placeholder="상품명"
                                v-model="state.form.name">
                        </div>
                        <div class="col-12"><label for="address" class="form-label"></label>
                            <input type="number" class="form-control" id="address" placeholder="상품 가격"
                                v-model="state.form.address">
                        </div>
                    </div>
                    <hr class="my-4">
                    <h4 class="mb-3">상품상세정보</h4>
                    <hr class="my-4">
                    <div class="my-3">
                        <label for="cc-name" class="form-label">상품 코드</label>
                        <div class="form-check">
                            <input id="itemCode" name="paymentMethod" type="checkbox" class="form-check-input"
                                value="itemCode" v-model="state.form.payment">
                            <label class="form-check-label" for="itemCode">MILK</label>
                        </div>
                        <div class="form-check">
                            <input id="itemCode" name="paymentMethod" type="checkbox" class="form-check-input"
                                value="itemCode" v-model="state.form.payment">
                            <label class="form-check-label" for="itemCode">MILK</label>
                        </div>
                    </div>
                    <label for="cc-name" class="form-label">상품 설명</label>
                    <input type="text" class="form-control" id="cc-name" v-model="state.form.cardNumber">
                    <hr class="my-4">
                    <button class="w-50 btn btn-primary btn-lg" @click="submit()">상품 추가하기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { reactive } from '@vue/reactivity';
export default {
    name: "Itemmodal",

    setup() {
        const state = reactive({
            items: [],
            form: {
                name: '',
                price: '',
                imgPath: '',
                itemCode: '',
                itemDesc: '',
            }
        })

        const submit = () => {
            const args = JSON.parse(JSON.stringify(state.form));
            args.items = JSON.stringify(state.items);

            axios.post("/api/v1/items", args).then(() => {
                alert("주문 완료하였습니다.");
            })
        }
        return { state, submit };
    },
}
</script>

<style scoped>
#form-contorl {
    margin-left: 50px;
}

.modal {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: white;
}
</style>