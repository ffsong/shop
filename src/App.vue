<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <header-nav></header-nav>
        <div>
          <router-view/>
        </div>
        <Footer/>
      </Layout>
    </div>
  </div>
</template>

<script>
  import headerNav from 'components/content/headerNav'
  import Footer from 'components/content/footer'

  export default {
    name: 'app',
    components: {
      headerNav,
      Footer
    }
  }
</script>

<style lang="scss">
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f5f5;
    position: relative;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    float: left;
    position: relative;
    top: 15px;
    .logo {
      width: 40px;
    }
  }

  .layout-nav {
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    margin: 0 auto;
    .ivu-menu-item {
      padding: 0 0px 0 20px !important;
    }
    a {
      color: #999999;
    }
    .cart {
      padding: 0;
    }
  }

  .layout-footer-center {
    text-align: center;
  }
</style>
