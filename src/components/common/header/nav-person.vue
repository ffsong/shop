<template>
    <Dropdown>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <a class="user-name" href="javascript:void(0)">
            周星星
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>我的订单</DropdownItem>
            <DropdownItem>我的收藏</DropdownItem>
            <DropdownItem>收货地址</DropdownItem>
            <DropdownItem>退出</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>
<style lang="scss" scoped>
    .user-name {
        color: #ffffff;
        margin-left: 4px;
    }
</style>
<script>
    export default {
    }
</script>