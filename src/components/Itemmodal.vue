<template>
    <div class="modal">
        <div class="py-5 text-center">
        </div>
        <div class="row g-5 h-50">
            <div class="col-md-10 col-lg-12">
                <h4 class="mb-3">상품 정보</h4>
                <div class="needs-validation" novalidate="">
                    <div class="row g-3">
                        <div class="col-12">
                            <input type="text" class="form-control" id="itemName" placeholder="상품명"
                                v-model="state.form.name">
                        </div>
                        <div class="col-12">
                            <input type="number" class="form-control" id="itemPrice" placeholder="상품 가격"
                                v-model="state.form.price">
                        </div>
                        <div class="col-12">
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
                            <option value="MILK">MILK</option>
                            <option value="WHITE">WHITE</option>
                            <option value="BLACK">BLACK</option>
                            <option value="ADE">ADE</option>
                            <option value="TEA">TEA</option>
                            <option value="B_TEA">B_TEA</option>
                        </select>
                    </div>
                    <label for="itemDes" class="form-label">상품 설명</label>
                    <input type="text" class="form-control" id="itemDes" v-model="state.form.itemDes">
                    <hr class="my-4">
                    <button class="w-50 btn btn-primary btn-lg" @click="[submit(), modalHide($emit, modalHide)]">상품
                        추가하기</button>
                    <button @click="modalHide($emit, modalHide)">닫기</button>
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
            const args = JSON.parse(JSON.stringify(state.form));
            args.items = JSON.stringify(state.items);

            axios.post("/api/v1/items", args).then(() => {
                alert("상품이 추가되었습니다.");
            })
                .catch(function (error) {
                    alert(error+"\n"+ "상품을 다시 입력해주세요");
                })
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
    position: absolute;
    display: flex;
    width: 45%;
    height: 80%;
    align-items: center;
    justify-content: center;
    background-color: white;
}
</style>