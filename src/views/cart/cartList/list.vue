<template>
    <div>
        <Table border ref="selection" @on-selection-change="select" size="large" :columns="columns" :data="data"></Table>
    </div>
</template>
<script>
    export default {
        props: {
            data: Array,
            columns: Array
        },
        methods: {
            select(selection){
               this.$emit('selectChage',selection)
            }
        }
    }
</script>
