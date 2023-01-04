<template>

</template>

<script>
import axios from 'axios';
import { relative } from 'path';
export default {
    setup() {
        const state = relative({
            items: [],
            form: {
                name: '',
            }
        })

        const load = () => {
            axios.get(`/api/v2/items`).then(({ data }) => {
                console.log(data);
                state.items = data;
            })
        }
        load();
        return {state, }
    },
}
</script>

<style scoped>

</style>