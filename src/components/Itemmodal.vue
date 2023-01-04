<template>
    <div class="py-5 text-center">
        <h2>상품추가하기</h2>
    </div>
    <div class="row g-5">
        <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">상품 정보</h4>
            <div class="needs-validation" novalidate="">
                <div class="row g-3">
                    <div class="col-12"><label for="itemName" class="form-label"></label>
                        <input type="text" class="form-control" id="itemName" placeholder="상품명"
                            v-model="state.form.name">
                    </div>
                    <div class="col-12"><label for="address" class="form-label"></label>
                        <input type="number" class="form-control" id="address" placeholder="상품 가격" v-model="state.form.address">
                    </div>
                </div>
                <hr class="my-4">
                <h4 class="mb-3">결제수단</h4>
                <div class="my-3">
                    <div class="form-check"><input id="card" name="paymentMethod" type="radio" class="form-check-input"
                            value="card" v-model="state.form.payment"><label class="form-check-label"
                            for="card">신용카드</label></div>
                    <div class="form-check"><input id="bank" name="paymentMethod" type="radio" class="form-check-input"
                            value="bank" v-model="state.form.payment">
                        <label class="form-check-label" for="bank">무통장입금</label>
                    </div>
                </div>
                <label for="cc-name" class="form-label">카드 번호</label>
                <input type="text" class="form-control" id="cc-name" v-model="state.form.cardNumber">
                <hr class="my-4">
                <button class="w-100 btn btn-primary btn-lg" @click="submit()">결제하기</button>
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

<style>

</style>