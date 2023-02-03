<template>
    <h3>{{ name }}</h3>
</template>

<script>
export default {
    name: "EmpDetail",
    methods: {
        
    },
    props: {
        name: {
            type: String,
            default: "",
        }
    }
}
</script>

<style>

</style>