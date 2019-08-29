<template>
  <div>
    <div class="category">
      <h2 class="channel-title fl">手机</h2>
      <ul class="channel-nav fl">
        <li class="left">
          <a href="/list-75" target="_blank"
             onclick="pushFoolChildrenMsg('1','\u624B\u673A','\u8363\u8000','/list-75')">荣耀</a></li>
        <li class="left">
          <a href="/list-285" target="_blank"
             onclick="pushFoolChildrenMsg('1','\u624B\u673A','HUAWEI\x20P\u7CFB\u5217','/list-285')">HUAWEI P系列</a></li>
        <li class="left">
          <a href="/list-76" target="_blank"
             onclick="pushFoolChildrenMsg('1','\u624B\u673A','HUAWEI\x20Mate\u7CFB\u5217','/list-76')">HUAWEI Mate系列</a>
        </li>
        <li class="left"><a href="/list-77" target="_blank"
                            onclick="pushFoolChildrenMsg('1','\u624B\u673A','\u8363\u8000\u7545\u73A9\u7CFB\u5217','/list-77')">荣耀畅玩系列</a>
        </li>
        <li class="left"><a href="/list-277" target="_blank"
                            onclick="pushFoolChildrenMsg('1','\u624B\u673A','HUAWEI\x20nova\u7CFB\u5217','/list-277')">HUAWEI
          nova系列</a></li>
        <li class="left"><a href="/list-275" target="_blank"
                            onclick="pushFoolChildrenMsg('1','\u624B\u673A','\u534E\u4E3A\u7545\u4EAB\u7CFB\u5217','/list-275')">华为畅享系列</a>
        </li>
        <li class="left"><a href="/list-81" target="_blank"
                            onclick="pushFoolChildrenMsg('1','\u624B\u673A','HUAWEI\x20\u9EA6\u8292\u7CFB\u5217','/list-81')">HUAWEI
          麦芒系列</a></li>
        <li class="left"><a href="/list-38" target="_blank"
                            onclick="pushFoolChildrenMsg('1','\u624B\u673A','\u79FB\u52A84G\x2B\u4E13\u533A','/list-38')">移动4G+专区</a>
        </li>
      </ul>
      <div class="channel-more fr"><span></span><span></span><span></span>
        <a href="/list-36" target="_blank">查看更多 > </a>
      </div>
    </div>
    <ul class="goods">
      <li class="goods_item">
        <router-link :to="{ name: 'product', params: { id: 123 }}">
          <div class="item_img_box">
            <img src="http://img13.360buyimg.com/jdcms/s150x150_jfs/t1/754/14/3745/138660/5b997c07E8d03b05b/4ebe1e55d2917e09.jpg.webp"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li class="goods_item">
        <a href="#">
          <div class="item_img_box">
            <img src="https://res2.vmallres.com/pimages//product/6901443265206/428_428_1539243364035mp.png"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="goods_item">
        <a href="#">
          <div class="item_img_box">
            <img src="https://res2.vmallres.com/pimages//product/6901443204526/428_428_1542765833879mp.png"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="goods_item">
        <a href="#">
          <div class="item_img_box">
            <img src="https://res3.vmallres.com/pimages//frontLocation/content/5491596/1540545226946.png"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="goods_item">
        <a href="#">
          <div class="item_img_box">
            <img src="http://img13.360buyimg.com/jdcms/s150x150_jfs/t1/754/14/3745/138660/5b997c07E8d03b05b/4ebe1e55d2917e09.jpg.webp"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="goods_item">
        <a href="#">
          <div class="item_img_box">
            <img src="http://img14.360buyimg.com/jdcms/s150x150_jfs/t1/67601/12/7838/189382/5d5a7310Ebae69232/40b0147598ac0637.jpg.webp"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="goods_item">
        <a href="#">
          <div class="item_img_box">
            <img src="http://img13.360buyimg.com/jdcms/s150x150_jfs/t1/754/14/3745/138660/5b997c07E8d03b05b/4ebe1e55d2917e09.jpg.webp"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="goods_item">
        <a href="#">
          <div class="item_img_box">
            <img src="http://img13.360buyimg.com/jdcms/s150x150_jfs/t1/754/14/3745/138660/5b997c07E8d03b05b/4ebe1e55d2917e09.jpg.webp"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="goods_item">
        <a href="#">
          <div class="item_img_box">
            <img src="http://img14.360buyimg.com/jdcms/s150x150_jfs/t1/67601/12/7838/189382/5d5a7310Ebae69232/40b0147598ac0637.jpg.webp"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li class="goods_item">
        <a href="#">
          <div class="item_img_box">
            <img src="http://img13.360buyimg.com/jdcms/s150x150_jfs/t1/754/14/3745/138660/5b997c07E8d03b05b/4ebe1e55d2917e09.jpg.webp"/>
          </div>
          <div>
            <div>
              <p class="item_title">标题</p>
            </div>
            <div class="item_info">
              <div>
                <span class="item_price"><i>¥</i> 60.00 </span>
              </div>
              <div class="item_discount">
                <span> 满减 </span>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "goodsList",
  }
</script>

<style lang="scss" scoped>
  .category {
    display: flex;
    display: -webkit-flex; /* Safari */
    margin: 40px 10px 20px;
    line-height: 20px;
    .channel-title {
      flex: 1;
      font-size: 20px;
      font-weight: 400;
    }
    .channel-nav {
      flex: 14;
      display: inline-block;
      margin-left: -25px;
      li {
        margin-right: 20px;
        a {
          color: #999;
          &:hover {
            color: red;
          }
        }
      }
    }
    .channel-more {
      flex: 1;
      text-align: right;
    }
  }

  .goods {
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-wrap: wrap;
    .goods_item {
      flex: 1;
      background-color: #ffffff;
      padding: 20px 20px;
      margin: 0 6px 10px;
      border-radius: 3px;
      .item_img_box {
        width: 150px;
        height: 150px;
        margin: 30px auto 40px;
        img {
          width: 100%;
        }
      }
    }
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      &:hover {
        color: #666;
      }
      .item_info {
        display: flex;
        div {
          flex: 1;
          color: red;
        }
        .item_price {
          font-size: 20px;
          font-weight: 700;
          font-family: arial, sans-serif;
        }
        .item_discount {
          text-align: right;
          span {
            padding: 1px 2px;
            border: 1px solid red;
          }
        }
      }
    }

    .item_title {
      height: 48px;
      font-size: 14px;
      line-height: 24px;
      text-align: left;
      -webkit-transition: color .2s ease;
      transition: color .2s ease;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
</style>