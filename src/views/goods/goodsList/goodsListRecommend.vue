<template>
  <div class="recommend right">
    <div>
      <div class="head">
        <span class="head-title">商品推荐</span>
        <span class="head-ad right">广告</span>
      </div>
      <div class="body">
        <div class="item">
          <a href="">
            <div class="item-img-box">
              <img class="item-img"
                   src="https://img.alicdn.com/imgextra/i4/466930094/O1CN01ypdgVw1CZ5mEe9X2V_!!0-saturn_solar.jpg_270x270.jpg"/>
              <div class="item-title tt">
                加厚商务 5A 笔记本加厚商务 5A
              </div>
            </div>
            <div class="item-line">
              <span class="item-price"><em>¥</em>58.00</span>
              <span class="item-sell right">销量：<em>321</em></span>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="item-img-box">
              <img class="item-img"
                   src="https://img.alicdn.com/imgextra/i4/466930094/O1CN01ypdgVw1CZ5mEe9X2V_!!0-saturn_solar.jpg_270x270.jpg"/>
              <div class="item-title tt">
                加厚商务 5A 笔记本加厚商务 5A
              </div>
            </div>
            <div class="item-line">
              <span class="item-price"><em>¥</em>58.00</span>
              <span class="item-sell right">销量：<em>321</em></span>
            </div>
          </a>
        </div>

        <div class="item">
          <a href="">
            <div class="item-img-box">
              <img class="item-img"
                   src="https://img.alicdn.com/imgextra/i4/466930094/O1CN01ypdgVw1CZ5mEe9X2V_!!0-saturn_solar.jpg_270x270.jpg"/>
              <div class="item-title tt">
                加厚商务 5A 笔记本加厚商务 5A
              </div>
            </div>
            <div class="item-line">
              <span class="item-price"><em>¥</em>58.00</span>
              <span class="item-sell right">销量：<em>321</em></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsListRecommend"
  }
</script>

<style lang="scss" scoped>
  .recommend {
    width: 200px;
    display: inline-block;
    .head {
      padding-top: 9px;

      border-bottom: 1px solid #E8E8E8;
      margin-bottom: 13px;
      padding-bottom: 6px;
      font-size: 16px;
      .head-title {
        color: #666666;
      }
      .head-ad {
        display: inline-block;
        color: #999999;
        font-size: 12px;
      }
    }
    .body {
      .item {
        border: 1px solid #e5e5e5;
        margin-bottom: 10px;
        .item-img-box {
          position: relative;
          .item-img {
            width: 100%;
          }
          .item-title {
            display: none;
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            font-weight: 600;
            text-align: center;
            position: absolute;
            bottom: 0px;
            color: #666666;
            background-color: #FFFFFF;
            opacity: 0.9;
            z-index: 9999;
          }
        }
        &:hover {
          .tt {
            display: block;
          }
        }
        .item-line {
          padding: 4px 4px;
          .item-price {
            font-size: 14px;
            color: #e4393c;
          }
          .item-sell {
            display: inline-block;
            color: #999999;
            em {
              font-size: 12px;
              color: #666666;
            }
          }
        }
      }
    }
  }
</style>