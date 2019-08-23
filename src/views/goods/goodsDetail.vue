<template>
  <div class="container">
    <div class="shop-item-path">
      <div class="shop-nav-container">
        <Breadcrumb>
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
          <BreadcrumbItem to="/goodsList">手机壳</BreadcrumbItem>
          <BreadcrumbItem>手机保护套</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
    <!-- 商品信息展示 -->
    <showGoods></showGoods>
    <!-- 商品详细展示 -->
    <showGoodsDetail></showGoodsDetail>
    <Spin size="large" fix v-if="isLoading"></Spin>
  </div>
</template>

<script>
import search from 'components/content/search'
import showGoods from './goodsDetail/showGoods';
import showGoodsDetail from './goodsDetail/showGoodsDetail';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'goodsDetail',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
    this.loadGoodsInfo();
  },
  data () {
    return {
      tagsColor: [ 'blue', 'green', 'red', 'yellow' ]
    };
  },
  methods: {
    ...mapActions(['loadGoodsInfo'])
  },
  computed: {
    ...mapState(['goodsInfo', 'isLoading'])
  },
  components: {
    search,
    showGoods,
    showGoodsDetail
  },
};
</script>

<style lang="scss"  >
.shop-item-path {
  height: 38px;
  background-color: rgb(236, 235, 235);
  line-height: 38px;
  color: #2c2c2c;
}
.shop-nav-container {
  padding: 0 20px;
  a:hover {
    color: red
  }
}
</style>
