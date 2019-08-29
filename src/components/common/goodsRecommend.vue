<template>
  <ul class="category">
    <li class="goods_item">
      <div class="item_img_box">
        <router-link :to="{name: 'product', params: { id: '123'} }">
          <img src="http://img13.360buyimg.com/jdcms/s150x150_jfs/t1/754/14/3745/138660/5b997c07E8d03b05b/4ebe1e55d2917e09.jpg.webp"/>
        </router-link>
      </div>
      <div>
        <div>
          <p class="item_title">
            <router-link :to="{name: 'product', params: { id: '123'} }">
              卡宾男装 2019春夏新款宽松圆领短袖T男棉印花字母简约街头青年H
            </router-link>
          </p>
        </div>
        <div class="item_info">
          <div>
            <span class="item_price"><i>¥</i> 60.00 </span>
          </div>
        </div>
        <div>
          <div class="cart" @click="addCart">
            <Icon type="ios-cart-outline" size="16"/>
            <span> 加入购物车</span>
          </div>
        </div>
      </div>
    </li>
    <li class="goods_item">
      <div class="item_img_box">
        <router-link :to="{name: 'product', params: { id: '123'} }">
          <img src="http://img13.360buyimg.com/jdcms/s150x150_jfs/t1/754/14/3745/138660/5b997c07E8d03b05b/4ebe1e55d2917e09.jpg.webp"/>
        </router-link>
      </div>
      <div>
        <div>
          <p class="item_title">
            <router-link :to="{name: 'product', params: { id: '123'} }">
              卡宾男装 2019春夏新款宽松圆领短袖T男棉印花字母简约街头青年H
            </router-link>
          </p>
        </div>
        <div class="item_info">
          <div>
            <span class="item_price"><i>¥</i> 60.00 </span>
          </div>
        </div>
        <div>
          <div class="cart" @click="addCart">
            <Icon type="ios-cart-outline" size="16"/>
            <span> 加入购物车</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "goodsRecommend",
    props: {
      list: Array,
    },
    methods: {
      addCart() {
        console.log('加入购物车');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .category {
    .goods_item {
      display: inline-block;
      max-width: 200px;
      background-color: #FFFFFF;
      padding: 10px;
      margin: 0 6px 10px;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      .item_title {
        a:hover {
          color: #666666;
        }
      }
      .item_info {
        font-size: 14px;
        color: #d91f20;
        margin: 6px 0px;
      }
      .cart {
        width: 100px;
        color: #666666;
        margin: 0 auto;
        padding: 4px;
        border: 1px solid #999;
        border-radius: 3px;
        &:hover {
          cursor: pointer;
          border: none;
          color: #FFFFFF;
          background-color: #d91f20;
          border: 1px solid #d91f20
        }
      }
    }
  }

</style>