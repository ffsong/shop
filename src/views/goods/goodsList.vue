<template>
  <div class="main">
    <div class="container">
      <goods-list-nav :count="count" :group="group"/>
      <div class="content">
        <div class="content-left">
          <goods-list-recommend/>
        </div>
        <div class="content-right">
          <goods-list-content/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import goodsListNav from './goodsList/goodsListNav'
  import goodsListRecommend from './goodsList/goodsListRecommend'
  import goodsListContent from './goodsList/goodsListContent'

  export default {
    name: "goodsList",
    data() {
      return {
        count: [],
        group: [
          {name: '机身内存ROM', list: ['256GB', '126GB', '64GB', '32GB']},
          {name: '运行内存RAM', list: ['16GB', '12GB', '8GB', '6GB', '4GB']},
          {name: '机身颜色', list: ['红色', '紫色', '粉色', '绿色']},
        ]
      }
    },
    methods: {},
    components: {
      goodsListNav,
      goodsListRecommend,
      goodsListContent
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    background-color: #FFFFFF;
    margin-bottom: -30px;
  }

  .container {
    padding-top: 40px;
    .content {
      display: flex;
      margin-top: 10px;
      .content-left {
        margin-right: 20px;
      }
      .content-right {
        flex: 1;
      }
    }
  }

</style>