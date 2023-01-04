<template>
    <div class="items">
        <div class="container">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>상품 사진 경로</th>
                        <th>상품설명</th>
                        <th>상품코드</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, idx1) in state.items" :key="idx1">
                        <td>{{ state.items.length - idx1 }}</td>
                        <td>{{ i.name }}</td>
                        <td>{{ i.price }}</td>
                        <td>{{ i.imgPath }}</td>
                        <td>{{ i.imgDes }}</td>
                        <td>{{ i.itemCode }}</td>
                        <td>
                            <div v-for="(i, idx2) in o.items" :key="idx2">{{ i.name }}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios'

export default {
    name: "Itemlist",
    props: {
        items : Object,
    },
    setup() {
        const state = reactive({
            items: [],
        })

        axios.get("/api/v1/items").then(({ data }) => {
            state.items = [];

            for (let d of data) {
                if (d.items) {
                    d.items = JSON.parse(d.items);
                }
                state.items.push(d);
            }
        })
        return { state };
    }
}
</script>

<style scoped>

</style>