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
                        <label for="itemName" class="form-label-data">기존이름 : {{ upitems.name }}</label>
                        <input type="text" class="form-control" id="itemName" placeholder="상품명" v-model="state.form.name"
                            required>
                    </div>
                    <div class="col-lg-12 col-sm-4">
                        <label for="itemPrice" class="form-label-data">기존가격 : {{ upitems.price }}원</label>
                        <input type="number" class="form-control" id="itemPrice" placeholder="상품 가격"
                            v-model="state.form.price">
                    </div>
                    <div class="col-lg-12 col-sm-4">
                        <label for="imgPath" class="form-label-data">기존이미지경로 : {{ upitems.imgPath }}</label>
                        <input type="text" class="form-control" id="imgPath" placeholder="이미지 경로"
                            v-model="state.form.imgPath">
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
                        변경하기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { reactive } from '@vue/reactivity';
export default {
    name: "Itemumodal",
    methods: {
        modalHide() {
            this.$emit('modalHide');
        },
        submit(pathId) {
            const form = {
                itemName: this.state.form.iname,
                price: this.state.form.price,
                imgPath: this.state.form.imgPath,
                itemCode: this.state.form.itemCode,
                itemDes: this.state.form.itemDes
            };
            if (form.itemName === '' || form.imgPath === '' || form.price === '' || form.itemCode === '') {
                alert("상품정보를 전부 입력해주세요.")
            } else {
                const args = JSON.parse(JSON.stringify(form));


                axios.post(`/api/v1/items/${pathId}`, args,).then(() => {
                    alert("상품이 수정되었습니다.");
                })
                    .catch(function (error) {
                        alert(error + "\n" + "상품을 다시 입력해주세요");
                    })
            }
        },
    },
    data() {
        return {
            itemName: this.sendname,
            upitems: [],
        }
    },

    props: {
        sendname: String,
    },

    setup() {
        const state = reactive({
            items: [],
            form: {
                iname: '',
                price: '',
                imgPath: '',
                itemCode: '',
                itemDes: '',
            },
        })

        return { state, };
    },
    created() {
        const ustate = reactive({
            uitems: [],
        })
        axios.get(`/api/v2/items/${this.itemName}`).then(({ data }) => {
            ustate.uitems = data;
            this.upitems = ustate.uitems;
            console.log(ustate.uitems);
        })
        return { ustate };
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
    z-index: 10000;
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
    }
}

@media (min-width: 992px) {
    .modal-content {
        z-index: 10000;
        height: 80vh;
        margin-top: 5vh;
    }
}
</style>