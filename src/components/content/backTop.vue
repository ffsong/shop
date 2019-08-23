<template>
    <BackTop :height="1000" :bottom="200">
        <div class="top">顶部</div>
    </BackTop>
</template>

<script>
    export default {
        name: "backTop"
    }
</script>

<style lang="scss" scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>