<template>
    <div class="modal  col-lg-10 col-md-10 col-sm-10">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 col-lg-12">
                <div class="d-flex justify-content-end me-2 mt-5"><button class="fa fa-times"
                        @click="modalHide($emit, modalHide)"></button></div>
                <h4 class="mb-3 d-flex justify-content-center">상품 정보</h4>
                <div class="needs-validation" novalidate="">
                    <div class="row g-3">
                        <div class="col-lg-12 col-sm-4">
                            <input type="text" class="form-control" id="itemName" placeholder="상품명"
                                v-model="state.form.name">
                        </div>
                        <div class="col-lg-12 col-sm-4">
                            <input type="number" class="form-control" id="itemPrice" placeholder="상품 가격"
                                v-model="state.form.price">
                        </div>
                        <div class="col-lg-12 col-sm-4">
                            <input type="text" class="form-control" id="imgPath" placeholder="이미지 경로"
                                v-model="state.form.imgPath">
                        </div>
                    </div>
                    <hr class="my-4">
                    <h4 class="mb-3">상품상세정보</h4>
                    <hr class="my-4">
                    <label for="cc-name" class="form-label">상품 코드</label>
                    <div class="my-3">
                        <select name="itemCode" required v-model="state.form.itemCode">
                            <option value="" disabled selected>상품선택</option>
                            <option value="CROFFLE">CROFFLE</option>
                            <option value="TOAST">TOAST</option>
                            <option value="SCONE">SCONE</option>
                            <option value="BASAK">BASAK</option>
                            <option value="COFFEE">COFFEE</option>
                            <option value="LATTE">LATTE</option>
                            <option value="NON_COFFEE">NON_COFFEE</option>
                            <option value="ONE_LITER">ONE_LITER</option>
                            <option value="B_TEA">B_TEA</option>
                            <option value="ADE">ADE</option>
                            <option value="TEA">TEA</option>
                        </select>
                    </div>
                    <label for="itemDes" class="form-label">상품 설명</label>
                    <input type="text" class="form-control" id="itemDes" v-model="state.form.itemDes">
                    <hr class="my-4">
                    <div class="d-flex justify-content-center">
                        <button class="w-50 btn btn-primary btn-lg" @click="[submit(), modalHide($emit, modalHide)]">상품
                            추가하기</button>
                    </div>
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
    methods: {
        modalHide() {
            this.$emit('modalHide');
        }
    },
    setup() {
        const state = reactive({
            items: [],
            form: {
                name: '',
                price: '',
                imgPath: '',
                itemCode: '',
                itemDes: '',
            }
        })
        const submit = () => {
            if (state.form.name === '' || state.form.price === '' || state.form.imgPath === '' || state.form.itemCode === '') {
                alert("상품정보를 모두 입력해주세요")
            } else {
                const args = JSON.parse(JSON.stringify(state.form));
                args.items = JSON.stringify(state.items);

                axios.post("/api/v1/items", args).then(() => {
                    alert("상품이 추가되었습니다.");
                })
                    .catch(function (error) {
                        alert(error + "\n" + "상품을 다시 입력해주세요");
                    })
            }
        }
        return { state, submit, };
    },
}
</script>

<style scoped>
select option[value=""][disabled] {
    display: none;
}

#form-contorl {
    margin-left: 50px;
}

.modal {
    position: relative;
    display: flex;
    width: 50%;
    height: 90%;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    background-color: white;
}
</style>