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
    <showGoods :goods-info="goodsInfo"></showGoods>
    <!-- 商品详细展示 -->
    <showGoodsDetail :goods-info="goodsInfo"></showGoodsDetail>
    <!--<Spin size="large" fix v-if="isLoading"></Spin>-->
  </div>
</template>

<script>
  import search from 'components/content/search'
  import showGoods from './goodsDetail/showGoods';
  import showGoodsDetail from './goodsDetail/showGoodsDetail';

  export default {
    name: 'goodsDetail',
    beforeRouteEnter(to, from, next) {
      window.scrollTo(0, 0);
      next();
    },
    data() {
      return {
        goodsInfo: {}
      }
    },
    created() {
      this.loadGoodsInfo();
    },
    data() {
      return {
        tagsColor: ['blue', 'green', 'red', 'yellow']
      };
    },
    methods: {
      loadGoodsInfo() {
        this.goodsInfo = {
          goodsImg: [
            'http://img10.360buyimg.com/n1/s450x450_jfs/t23386/9/1066712099/277967/615ccafb/5b4f0e3aN262237fc.jpg',
            'http://img10.360buyimg.com/n1/s450x450_jfs/t21874/265/2260336304/117739/fe939687/5b4f0e3fN16cd9222.jpg',
            'http://img10.360buyimg.com/n1/s450x450_jfs/t23713/65/1080346155/66979/c8ba712a/5b4f0e49Ne4322ae9.jpg',
            'http://img10.360buyimg.com/n1/s450x450_jfs/t21874/265/2260336304/117739/fe939687/5b4f0e3fN16cd9222.jpg',

          ],
          title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
          tags: ['满69-20元', '关注产品★送钢化膜', 'BIT配次日达'],
          discount: ['满148减10', '满218减20', '满288减30'],
          promotion: ['跨店满减', '多买优惠'],
          remarksNum: 6000,
          setMeal: [
            [
              {
                img: '/assets/img/goodsDetail/pack/1.jpg',
                intro: '4.7英寸-深邃蓝',
                price: 28.0
              },
              {
                img: '/assets/img/goodsDetail/pack/2.jpg',
                intro: '4.7英寸-星空黑',
                price: 29.0
              },
              {
                img: '/assets/img/goodsDetail/pack/3.jpg',
                intro: '5.5英寸-香槟金',
                price: 28.5
              }
            ],
            [
              {
                img: '/assets/img/goodsDetail/pack/4.jpg',
                intro: '5.5英寸-玫瑰金',
                price: 32.0
              },
              {
                img: '/assets/img/goodsDetail/pack/5.jpg',
                intro: '5.5英寸-深邃蓝',
                price: 32.0
              },
              {
                img: '/assets/img/goodsDetail/pack/6.jpg',
                intro: '5.5英寸-星空黑',
                price: 35.0
              }
            ],
            [
              {
                img: '/assets/img/goodsDetail/pack/7.jpg',
                intro: '4.7英寸-香槟金',
                price: 26.0
              },
              {
                img: '/assets/img/goodsDetail/pack/8.jpg',
                intro: '4.7英寸-玫瑰金',
                price: 25.0
              },
              {
                img: '/assets/img/goodsDetail/pack/9.jpg',
                intro: '4.7英寸-中国红',
                price: 28.0
              }
            ]
          ],
          hot: [
            {
              img: 'http://img10.360buyimg.com/n1/s160x160_jfs/t9085/22/907696059/71305/93f88c62/59b85847N20776d8e.jpg',
              price: 28.0,
              sale: 165076
            },
            {
              img: 'http://img13.360buyimg.com/n1/s160x160_jfs/t1/1468/11/3377/138213/5b997bf3Eda5b24a4/0ace3ed19582dbe6.jpg',
              price: 36.0,
              sale: 135078
            },

            {
              img: 'http://img10.360buyimg.com/n1/s160x160_jfs/t11716/359/1448323655/44110/9fd6ba9f/5a04058eNa25ecfee.jpg',
              price: 39.0,
              sale: 95079
            },
            {
              img: 'http://img14.360buyimg.com/n1/s160x160_jfs/t1/14537/35/11667/309807/5c91f244E2c9d0881/80cfcf2a2e7778ee.jpg',
              price: 25.0,
              sale: 5077
            },
            {
              img: 'http://img10.360buyimg.com/n1/s160x160_jfs/t1/68886/6/7410/17229/5d5514caEaf49e735/aec6c49d00892140.jpg',
              price: 20.0,
              sale: 3077
            }
          ],
          goodsDetail: [
            'https://img11.360buyimg.com/cms/jfs/t29689/168/287401247/104423/c65e1143/5bee7fa4N7edaddfd.jpg',
            'http://img11.360buyimg.com/cms/jfs/t1/71363/36/5512/195605/5d3a9e7aE839c0a14/f24477a389882690.jpg',
            'https://img10.360buyimg.com/imgzone/jfs/t14806/305/2415058157/62063/21ed8aa1/5a9f7227N71792474.jpg',
            'http://img12.360buyimg.com/cms/jfs/t21604/321/2235821603/176266/61a2954a/5b4ee9a3Nfa7ef2fb.jpg'
          ],
          param: [
            {
              title: '商品名称',
              content: 'iPhone 7手机壳'
            },
            {
              title: '商品编号',
              content: '10435663237'
            },
            {
              title: '店铺',
              content: 'Gavin Shop'
            },
            {
              title: '商品毛重',
              content: '100.00g'
            },
            {
              title: '商品产地',
              content: '中国大陆'
            },
            {
              title: '机型',
              content: 'iPhone 7'
            },
            {
              title: '材质',
              content: 'PC/塑料'
            },
            {
              title: '款式',
              content: '软壳'
            },
            {
              title: '适用人群',
              content: '通用'
            }
          ],
          remarks: {
            goodAnalyse: 90,
            remarksTags: ['颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖'],
            remarksNumDetail: [2000, 3000, 900, 1],
            detail: [
              {
                username: 'p****1',
                values: 3,
                content: '颜色很好看，质量也不错！，还送了个指环，想不到哦！',
                goods: '4.7英寸-深邃蓝',
                create_at: '2018-05-15 09:20'
              },
              {
                username: '13****1',
                values: 5,
                content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
                goods: '5.5英寸-玫瑰金',
                create_at: '2018-05-13 15:23'
              },
              {
                username: '3****z',
                values: 4.5,
                content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
                goods: '4.7英寸-玫瑰金',
                create_at: '2018-05-05 12:25'
              },
              {
                username: 'gd****c',
                values: 3.5,
                content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
                goods: '4.7英寸-中国红',
                create_at: '2018-04-06 16:23'
              },
              {
                username: 'r****b',
                values: 4.5,
                content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
                goods: '4.7英寸-中国红',
                create_at: '2018-03-15 19:24'
              },
              {
                username: 'd****e',
                values: 5,
                content: '磨砂的，相当漂亮，尺寸非常合适！精工细作！',
                goods: '5.5英寸-星空黑',
                create_at: '2018-03-10 10:13'
              }
            ]
          }
        }
      }
    },
    computed: {
    },
    components: {
      search,
      showGoods,
      showGoodsDetail
    },
  };
</script>

<style lang="scss">
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
