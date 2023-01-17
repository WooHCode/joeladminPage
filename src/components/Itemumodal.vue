<template>
    <div class="modal">
        <div class="py-5 text-center">
        </div>
        <div class="row g-5 h-50">
            <div class="col-md-10 col-lg-12">
                <div class="d-flex justify-content-end me-2 mt-5"><button class="fa fa-times" @click="modalHide($emit, modalHide)"></button></div>
                <h4 class="mb-3">상품 정보</h4>
                <div class="needs-validation" novalidate="">
                    <div class="row g-3">
                        <div class="col-12">
                            <label for="OitemName" class="form-label-data">기존이름 : {{ upitems.name }}</label>
                            <input type="text" class="form-control" id="itemName" placeholder="상품명"
                                v-model="state.form.iname">
                        </div>
                        <div class="col-12">
                            <label for="OitemPrice" class="form-label-data">기존가격 : {{ upitems.price }}원</label>
                            <input type="number" class="form-control" id="itemPrice" placeholder="상품 가격"
                                v-model="state.form.price">
                        </div>
                        <div class="col-12">
                            <label for="OimgPath" class="form-label-data">기존이미지경로 : {{ upitems.imgPath }}</label>
                            <input type="text" class="form-control" id="imgPath" placeholder="이미지 경로"
                                v-model="state.form.imgPath">
                        </div>
                    </div>
                    <hr class="my-4">
                    <h4 class="mb-3">상품상세정보</h4>
                    <hr class="my-4">
                    <label for="cc-name" class="form-label">상품 코드</label>
                    <br />
                    <label for="OitemCode" class="form-label-data">기존상품 코드 : {{ upitems.itemCode }}</label>
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
                    <button class="w-50 btn btn-primary btn-lg"
                        @click="[submit(upitems.id), modalHide($emit, modalHide)]">상품
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
            const args = JSON.parse(JSON.stringify(form));

            axios.post(`/api/v1/items/${pathId}`, args,).then(() => {
                alert("상품이 수정되었습니다.");
            })
                .catch(function (error) {
                    alert(error + "\n" + "상품을 다시 입력해주세요");
                })
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
.form-label-data {
    opacity: 0.7;
    color: blue;
}

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