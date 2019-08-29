<template>
  <div class="itmes-box">
    <div class="sort-row">
      <span class="line-lable" @click="orderBy(0)" :class="{ 'active': isAction[0]}">价格<Icon type="md-arrow-up"/></span>
      <span class="line-lable" @click="orderBy(1)" :class="{ 'active': isAction[1]}">销量<Icon
              type="md-arrow-down"/></span>
      <div class="right">
        <Checkbox class="in-stock" v-model="inStock">仅显示有货</Checkbox>
      </div>
    </div>
    <div class="goods-list">
      <ul class="goods-list-box">
        <li class="item">
          <div class="itme-img">
            <router-link :to="{ name: 'product', params: { id: '123' } }">
              <img src="http://img13.360buyimg.com/n7/jfs/t1/16446/33/13283/339849/5c9eca5bE06fce1b2/500f99a976998161.jpg"
                   alt="">
            </router-link>
          </div>
          <div class="line">
            <span class="line-price"><em>¥</em>2999.00</span>
            <span class="line-comment"> 已有 <em>16+</em>评论 </span>
          </div>
          <div class="title">
            <a href="">
              一加 OnePlus 7 骁龙855旗舰性能 4800万超清双摄 8GB+256GB 曜岩灰 全面屏拍照智能游戏手机
            </a>
          </div>
        </li>
        <li class="item">
          <div class="itme-img">
            <router-link :to="{ name: 'product', params: { id: '123' } }">
              <img src="http://img13.360buyimg.com/n7/jfs/t1/16446/33/13283/339849/5c9eca5bE06fce1b2/500f99a976998161.jpg"
                   alt="">
            </router-link>
          </div>
          <div class="line">
            <span class="line-price"><em>¥</em>2999.00</span>
            <span class="line-comment"> 已有 <em>16+</em>评论 </span>
          </div>
          <div class="title">
            <a href="">
              一加 OnePlus 7 骁龙855旗舰性能 4800万超清双摄 8GB+256GB 曜岩灰 全面屏拍照智能游戏手机
            </a>
          </div>
        </li>
        <li class="item">
          <div class="itme-img">
            <router-link :to="{ name: 'product', params: { id: '123' } }">
              <img src="http://img13.360buyimg.com/n7/jfs/t1/16446/33/13283/339849/5c9eca5bE06fce1b2/500f99a976998161.jpg"
                   alt="">
            </router-link>
          </div>
          <div class="line">
            <span class="line-price"><em>¥</em>2999.00</span>
            <span class="line-comment"> 已有 <em>16+</em>评论 </span>
          </div>
          <div class="title">
            <a href="">
              一加 OnePlus 7 骁龙855旗舰性能 4800万超清双摄 8GB+256GB 曜岩灰 全面屏拍照智能游戏手机
            </a>
          </div>
        </li>
        <li class="item">
          <div class="itme-img">
            <router-link :to="{ name: 'product', params: { id: '123' } }">
              <img src="http://img13.360buyimg.com/n7/jfs/t1/16446/33/13283/339849/5c9eca5bE06fce1b2/500f99a976998161.jpg"
                   alt="">
            </router-link>
          </div>
          <div class="line">
            <span class="line-price"><em>¥</em>2999.00</span>
            <span class="line-comment"> 已有 <em>16+</em>评论 </span>
          </div>
          <div class="title">
            <a href="">
              一加 OnePlus 7 骁龙855旗舰性能 4800万超清双摄 8GB+256GB 曜岩灰 全面屏拍照智能游戏手机
            </a>
          </div>
        </li>
        <li class="item">
          <div class="itme-img">
            <router-link :to="{ name: 'product', params: { id: '123' } }">
              <img src="http://img13.360buyimg.com/n7/jfs/t1/16446/33/13283/339849/5c9eca5bE06fce1b2/500f99a976998161.jpg"
                   alt="">
            </router-link>
          </div>
          <div class="line">
            <span class="line-price"><em>¥</em>2999.00</span>
            <span class="line-comment"> 已有 <em>16+</em>评论 </span>
          </div>
          <div class="title">
            <a href="">
              一加 OnePlus 7 骁龙855旗舰性能 4800万超清双摄 8GB+256GB 曜岩灰 全面屏拍照智能游戏手机
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="page">
      <Page :total="40" @on-change="onChage" class-name="page-item" show-elevator show-sizer/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsListContent",
    data() {
      return {
        inStock: true,
        isAction: [true, false],
      }
    },
    methods: {
      orderBy(e) {
        this.isAction = [false, false]
        this.isAction[e] = true
      },
      onChage(e) {
        console.log('页码改变');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .itmes-box {
    .sort-row {
      width: 100%;
      height: 36px;
      line-height: 36px;
      background-color: #f5f5f5;
      border: solid 1px #e8e8e8;
      .active {
        background-color: #ffffff;
      }
      .line-lable {
        width: 70px;
        height: 33px;
        display: inline-block;
        text-align: center;
        font-size: 12px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .goods-list {
      .goods-list-box {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        font-size: 12px;
        .item {
          width: 240px;
          margin: 20px 1px;
          .itme-img {
            width: 220px;
            margin: 0 auto;
            img {
              width: 100%;
            }
          }
          .line {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 6px 0;
            padding: 0 8px;
            .line-price {
              margin-right: 10px;
              color: #e4393c;
              font-size: 20px;
            }
            .line-comment {
              color: #a7a7a7;
              font-weight: 400;
              em {
                color: #646fb0;
                font-family: verdana;
                font-weight: 700;
              }
            }
          }
          .title {
            color: #a7a7a7;
            font-weight: 400;
            padding: 0 8px;
          }
        }
      }
    }
    .page {
      text-align: right;
      margin: 30px 0px;
    }
  }
</style>