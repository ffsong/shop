<style lang="scss" scoped>

  .ivu-layout-header, .ivu-menu-dark {
    background-color: #e3e4e5;
  }

  .ivu-layout-header, .ivu-menu-horizontal {
    height: 50px;
    line-height: 50px;
  }

  .layout-logo {
    top: 5px;
  }
</style>
<template>
  <Header>
    <Menu class="container" mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">
        <router-link to="/">
          <img class="logo" src="~img/logo.png"/>

        </router-link>
      </div>
      <div class="layout-nav">
        <MenuItem name="1">
          <router-link name="1" to="/signUp">
            注册
          </router-link>
        </MenuItem>
        <MenuItem name="2">
          <router-link :to="{ name: 'login' }">
            登陆
          </router-link>
        </MenuItem>
        <MenuItem name="1" class="cart">
          <router-link :to="{ name: 'cart' }">
            <Icon type="md-cart" size="26"/>
          </router-link>

        </MenuItem>
        <MenuItem name="5">
          <nav-person></nav-person>
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>
<script>
  import navPerson from '../common/header/nav-person'

  export default {
    name: 'headerNav',
    components: {
      navPerson
    }
  }
</script>