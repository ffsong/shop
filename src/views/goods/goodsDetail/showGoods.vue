<template>
  <div>
    <div class="item-detail-show">
      <div class="item-detail-left">
        <div class="item-detail-big-img">
          <img :src="goodsInfo.goodsImg[imgIndex]" alt="">
        </div>
        <div class="item-detail-img-row">
          <div class="item-detail-img-small" v-for="(item, index) in goodsInfo.goodsImg" :key="index"
               @mouseover="showBigImg(index)">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>
            {{goodsInfo.title}}
          </p>
        </div>
        <div class="item-detail-tag">
          <p>
            <span v-for="(item,index) in goodsInfo.tags" :key="index">【{{item}}】</span>
          </p>
        </div>
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                <span class="item-price">￥{{price.toFixed(2)}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">折&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;扣</span>
                <span class="item-price-full-cut" v-for="(item,index) in goodsInfo.discount"
                      :key="index">{{item}}</span>
              </p>
            </div>
          </div>
          <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>累计评价</p>
              <p>
                <span class="item-remarks-num">{{goodsInfo.remarksNum}} 条</span>
              </p>
            </div>
          </div>
        </div>
        <!-- 选择颜色 -->
        <div class="item-select">
          <div class="item-select-title">
            <p>选择颜色</p>
          </div>
          <div class="item-select-column">
            <div class="item-select-row" v-for="(items, index) in goodsInfo.setMeal" :key="index">
              <div class="item-select-box" v-for="(item, index1) in items" :key="index1" @click="select(index, index1)"
                   :class="{'item-select-box-active': ((index * 3) + index1) === selectBoxIndex}">
                <div class="item-select-img">
                  <img :src="item.img" alt="">
                </div>
                <div class="item-select-intro">
                  <p>{{item.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br>
        <div class="add-buy-car-box">
          <div class="add-buy-car">
            <InputNumber :min="1" v-model="count" size="large"></InputNumber>
            <Button type="error" class="add-cart" size="large" @click="addShoppingCartBtn()">加入购物车</Button>
            <Button type="primary" icon="md-heart" size="large" @click="addCollection">收藏</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'showGoods',
    props: {
      goodsInfo: Object
    },
    data() {
      return {
        price: 0,
        count: 1,
        selectBoxIndex: 0,
        imgIndex: 0
      };
    },
    computed: {
    },
    methods: {
      select(index1, index2) {
        this.selectBoxIndex = index1 * 3 + index2;
        this.price = this.goodsInfo.setMeal[index1][index2].price;
      },
      showBigImg(index) {
        this.imgIndex = index;
      },
      addShoppingCartBtn() {
        const index1 = parseInt(this.selectBoxIndex / 3);
        const index2 = this.selectBoxIndex % 3;
        const date = new Date();
        const goodsId = date.getTime();
        let a = {
          goods_id: goodsId,
          title: this.goodsInfo.title,
          count: this.count,
          package: this.goodsInfo.setMeal[index1][index2]
        };
        // data.push(a)

        if (this.$store.state.token === '11') {
          //已登录

        } else {
          //  未登录，添加到 localstorage
          // 1、查询本地购物车
          let cart = false

          let carts = localStorage.getItem("myCat") || '[]';
          console.log(carts);
          carts = JSON.parse(carts);

          if (carts.length) {
            cart = carts.find(c => c.goods_id === goodsId);
          }

          // 2、判断是否存在
          if (cart) {
            // 3、存在，改数量
            cart.count += 2;
          } else {
            // 4、不存在，新增
            carts.push(a);
          }

          localStorage.setItem('myCat', JSON.stringify(carts));
        }
        console.log(JSON.parse(localStorage.getItem('myCat')));
        this.$router.push({name: 'addToCart'})
        return;
      },
      addCollection() {
        console.log('收藏商品');
      }

    },
    mounted() {
      const father = this;
      // setTimeout(() => {
      //   father.price = father.goodsInfo.setMeal[0][0].price || 0;
      // }, 300);
    },
  };
</script>

<style lang="scss" scoped>
  .item-detail-show {
    margin: 15px auto;
    padding: 20px;
    display: flex;
    flex-direction: row;
    background-color: #fff;
  }

  .item-detail-left {
    width: 450px;
    margin-right: 30px;
  }

  .item-detail-big-img {
    height: 450px;
    box-shadow: 0px 0px 8px #ccc;
    cursor: pointer;
  }

  .item-detail-big-img img {
    width: 100%;
  }

  .item-detail-img-row {
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
  }

  .item-detail-img-small {

    width: 68px;
    height: 68px;
    display: inline-block;
    float: left;
    margin: 0 9px;
    box-shadow: 0px 0px 8px #ccc;
    cursor: pointer;
  }

  .item-detail-img-small img {
    width: 100%;
  }

  .item-detail-right {
    display: flex;
    flex-direction: column;
  }

  .item-detail-title p {
    color: #666;
    font-size: 20px;
    padding-bottom: 10px;
  }

  .item-detail-express {
    font-size: 14px;
    padding: 2px 3px;
    border-radius: 3px;
    background-color: #e4393c;
    color: #fff;
  }

  /*商品标签*/
  .item-detail-tag {
    font-size: 12px;
    color: #e4393c;
    padding-bottom: 10px;
  }

  .item-detail-price-row {
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f3f3f3;
  }

  .item-price-left {
    display: flex;
    flex-direction: column;
    padding-left: 6px;
  }

  .item-price-right {
    padding-right: 6px;
  }

  .item-price-title {
    color: #999999;
    font-size: 14px;
    margin-right: 15px;
  }

  .item-price-row {
    margin: 5px 0px;
  }

  .item-price {
    color: #e4393c;
    font-size: 23px;
    cursor: pointer;
  }

  .item-price-full-cut {
    margin-right: 5px;
    padding: 3px;
    color: #e4393c;
    font-size: 12px;
    background-color: #ffdedf;
    border: 1px dotted #e4393c;
    cursor: pointer;
  }

  .item-remarks-sum {
    padding-left: 8px;
    border-left: 1px solid #ccc;
  }

  .item-remarks-sum p {
    color: #999999;
    font-size: 12px;
    line-height: 10px;
    text-align: center;
  }

  .item-remarks-num {
    line-height: 18px;
    color: #005eb7;
  }

  .item-select {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
  }

  .item-select-title {
    color: #999999;
    font-size: 14px;
    margin-right: 15px;
  }

  .item-select-column {
    display: flex;
    flex-direction: column;
  }

  .item-select-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
  }

  .item-select-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .item-select-img {
    width: 36px;
  }

  .item-select-box {
    padding: 5px;
    margin-right: 8px;
    background-color: #f7f7f7;
    border: 0.5px solid #ccc;
    cursor: pointer;
  }

  .item-select-box:hover {
    border: 0.5px solid #e3393c;
  }

  .item-select-box-active {
    border: 0.5px solid #e3393c;
  }

  .item-select-img img {
    width: 100%;
  }

  .item-select-intro p {
    margin: 0px;
    padding: 5px;
  }

  .item-select-class {
    padding: 5px;
    margin-right: 8px;
    background-color: #f7f7f7;
    border: 0.5px solid #ccc;
    cursor: pointer;
  }

  .item-select-class:hover {
    border: 0.5px solid #e3393c;
  }

  .add-buy-car-box {
    width: 100%;
    margin-top: 15px;
    border-top: 1px dotted #ccc;
  }

  .add-buy-car {
    margin-top: 15px;
    button {
      margin-left: 10px
    }
  }

  .add-cart {
    background-color: #e4393c;
    color: #fff;
    border: 1px solid #e4393c;
  }

</style>
