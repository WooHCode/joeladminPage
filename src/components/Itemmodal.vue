<template>
    <div class="modal">
        <div class="modal-content col-lg-10 col-md-10 col-sm-10">
            <div class="row justify-content-end">
                <div class="col-auto">
                    <span class="modal-close">
                        <li class="fa fa-times me-4" @click="modalHide($emit, modalHide)"></li>
                    </span>
                </div>
            </div>
            <h4 class="mb-3 d-flex justify-content-center">상품 정보</h4>
            <div class="needs-validation" novalidate="">
                <div class="row g-3">
                    <div class="col-lg-12 col-sm-4">
                        <input type="text" class="form-control" id="itemName" placeholder="상품명" v-model="state.form.name"
                            required>
                    </div>
                    <div class="col-lg-12 col-sm-4">
                        <input type="number" class="form-control" id="itemPrice" placeholder="상품 가격"
                            v-model="state.form.price" required>
                    </div>
                    <div class="col-lg-12 col-sm-4">
                        <input type="text" class="form-control" id="imgPath" placeholder="이미지 경로"
                            v-model="state.form.imgPath" required>
                    </div>
                </div>
                <hr class="my-4">
                <h4 class="mb-3">상품상세정보</h4>
                <hr class="my-4">
                <div class="form-group">
                    <label for="itemCode" class="form-label">상품 코드</label>
                    <select class="form-control" name="itemCode" required v-model="state.form.itemCode">
                        <option value="" disabled selected>상품선택</option>
                        <option value="CROFFLE">CROFFLE</option>
                        <option value="TOAST">TOAST</option>
                        <option value="SCONE">SCONE</option>
                        <option value="BASAK">BASAK</option>
                        <option value="COFFEE">COFFEE</option>
                        <option value="LATTE">LATTE</option>
                        <option value="NON_COFFEE">NON_COFFEE</option>
                        <option value="ONE_LITER">ONE_LITTER</option>
                        <option value="SMOOTHIE">SMOOTHIE</option>
                        <option value="B_TEA">B_TEA</option>
                        <option value="ADE">ADE</option>
                        <option value="TEA">TEA</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="itemDes" class="form-label">상품 설명</label>
                    <input type="text" class="form-control" id="itemDes" v-model="state.form.itemDes" required>
                </div>
                <hr class="my-4">
                <div class="d-flex justify-content-center">
                    <button class="w-50 btn btn-primary btn-lg" @click="[submit(), modalHide($emit, modalHide)]">상품
                        추가하기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/scripts/api'
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

                api.post("/api/v1/items", args).then(() => {
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
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(254, 254, 254);
}

.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
}

.modal-content {
    position: relative;
    width: 90%;
    max-width: 600px;
    height: auto;
    max-height: 90%;
    overflow: auto;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
}

.modal-close {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    top: 10px;
    right: 0;
    font-size: 1.5rem;
    color: #999;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
}

.modal-close li {
    margin-left: auto;
}

.modal-close:hover {
    color: #333;
}

@media (max-width: 767px) {
    .modal-content {
        width: 95%;
        max-width: none;
        max-height: 95%;
        z-index: 9999;
    }
}

@media (min-width: 992px) {
    .modal-content {
        z-index: 9999;
        height: 80vh;
        margin-top: 5vh;
    }
}
</style>
