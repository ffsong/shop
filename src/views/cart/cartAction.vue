<template>
  <div class="container">

    <div class="order-product">
      <Table border size="large" :columns="columns" :data="data"></Table>
    </div>
    <div class="clear"></div>
    <div class="cart-floatbar">
      <div class="order-info">
        <div class="line">
          <div class="line-label">收货地址：</div>
          <div class="line-value">400000 天津市市辖区和平区重庆市渝北区金贸时代 马云 18226988787</div>
        </div>
        <div class="line">
          <div class="line-label"> 订单备注：</div>
          <div class="line-value"> -</div>
        </div>
        <div class="line">
          <div class="line-label"> 订单编号：</div>
          <div class="line-value">20190826123411555436</div>
        </div>
      </div>
      <div class="order-summary text-right ">
        <div class="total-amount">
          <div class="total-amount-label">总价：</div>
          <span class="total-amount-value value">¥ {{ totalaMount }} </span>
        </div>
        <div class="discount-amount">
          <div class="discount-amount-label">优惠：</div>
          <span class="discount-amount-value value">-¥ 100.00</span>
        </div>

        <div class="discount-amount">
          <div class="discount-amount-label">订单状态：</div>
          <span class="discount-amount-value value">未支付</span>
        </div>

        <div class="btn-area">
          <div class="btu-pay">
            <router-link :to="{ name: 'pay' }" class="btn-wx"> 微信支付</router-link>
          </div>
          <div class="btu-pay">
            <router-link :to="{ name: 'pay' }" class="btn-alipay"> 支付宝支付</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs">
      <Tabs value="name1">
        <TabPane label="猜你喜欢" name="name1">
          <goods-recommend/>

        </TabPane>
        <TabPane label="热门推荐" name="name2">

          <goods-recommend/>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import goodsRecommend from 'components/common/goodsRecommend'

  export default {
    name: "cartAction",
    data() {
      return {
        goodsCheckList: [],
        productSum: 0,
        columns: [
          {
            title: '商品信息',
            key: 'name',
            width: 450,
            render: (h, params) => {
              return h('div', {
                style: {
                  height: '100%',
                  padding: '14px 0px'
                }
              }, [
                h('div', {
                  style: {
                    display: 'inline-block',
                    float: 'left',
                    padding: '0 10 0 0px',
                    width: '80px',
                  }
                }, [
                  h('img', {
                    attrs: {
                      src: 'https://res0.vmallres.com/pimages//product/6901443320394/428_428_1563504284133mp.png',
                      // src: params.row.package.img,
                      style: "width: 100%"
                    }
                  })
                ]),
                h('div', {
                  style: {
                    width: '230px',
                    display: 'inline-block',
                    float: 'left',
                    fontSize: '12px',
                    color: '#333'
                  }
                }, [
                  'Apple iPhone XR (A2108) 64GB 蓝色 移动联通电信4G手机 双卡双待'
                ]),
                h('div', {
                  style: {
                    width: '80px',
                    fontSize: '12px',
                    marginLeft: '20px',
                    display: 'inline-block',
                    float: 'left',
                  }
                }, '4.7英寸-深邃蓝'),

                // 循环
                // ['span',
                //     params.row.product.map(v => { // 遍历后台params.row.product
                //         return h('div',
                //             {
                //                 domProps: {
                //                     innerHTML: v.name
                //                 }
                //             })
                //     })
                // ]

              ])
            },
          },
          {
            title: '单价',
            render: (h, params) => {
              return h('span', {//一个包含模板相关属性的数据对象
                domProps: {
                  innerHTML: params.row.package.price
                }
              })
            },
            align: 'center'
          },
          {
            title: '数量',
            key: 'count',
            align: 'center'
          },
          {
            title: '小计',
            width: 160,
            align: 'center',
            render: (h, params) => {
              return h('span', {//一个包含模板相关属性的数据对象
                domProps: {
                  innerHTML: params.row.package.price * params.row.count
                }
              })
            },
          }
        ],
        data: [
          {
            goods_id: 1566527548155,
            title: "苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳",
            count: 7,
            package: {
              img: "http://img10.360buyimg.com/cms/s80x80_jfs/t10780/74/3185981652/158732/dfb86c01/5ce4c39bN9cc91097.jpg",
              price: 28
            }
          },
          {
            goods_id: 1566527548155,
            title: "苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳",
            count: 2,
            package: {
              img: "http://img10.360buyimg.com/cms/s80x80_jfs/t10780/74/3185981652/158732/dfb86c01/5ce4c39bN9cc91097.jpg",
              price: 50
            }
          }
        ]
      }
    },
    computed: {
      totalaMount() {
        let arr = this.data.map(item => {
          return item.count * item.package.price
        })
        return eval(arr.join("+"));
      }
    },
    methods: {},
    components: {
      goodsRecommend
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 990px;
    .order-product {
      margin-top: 40px;
    }
    .cart-floatbar {
      height: 150px;
      line-height: 20px;
      font-size: 12px;
      display: flex;
      padding: 10px 0px;
      color: #999999;
      background-color: #FFFFFF;
      .order-info {
        width: 50%;
        height: 100%;
        color: #212529;
        flex: 1;
        border-right: 1px solid #ddd;
        .line {
          display: flex;
          flex-direction: row;
          .line-label {
            width: 80px;
            text-align: right;
          }
          .line-value {
            flex-shrink: 100;
          }
        ;
        }
      }
      .order-summary {
        width: 50%;
        color: #212529;
        flex: 1;
        font-family: Verdana, Tahoma, Helvetica, Arial;
        .value {
          display: inline-block;
          width: 150px;
          padding-right: 20px;
        }
        .total-amount, .discount-amount {

          div {
            display: inline-block;
          }
          .total-amount-value {
            font-size: 16px;
            color: #E2231A;
            font-weight: 700;
          }
        }
        .btn-area {
          margin-top: 20px;
          padding-right: 20px;
          display: inline-block;
          .btu-pay {
            float: right;
            text-align: center;
            a {
              width: 80px;
              padding: 6px;
              display: inline-block;
              color: #fff;
              border-radius: 3px;
            }
            .btn-wx {
              background-color: #42c02e;
              border-color: #42c02e;
            }
            .btn-alipay {
              margin-right: 20px;
              background-color: #3490dc;
              border-color: #3490dc;
            }
          }

        }
      }
    }
  }
</style>