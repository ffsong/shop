<template>
  <div class="container">
    <div class="goods-list-container">
      <Alert show-icon class="tips-box">
        您还没有登录！登录后购物车的商品将保存到您账号中 &nbsp;&nbsp;前往
        <router-link :to="{ name: 'login' }"> 登陆</router-link>
      </Alert>
      <div class="cart-list">
        <cart-list :data="data" :columns="columns" v-on:selectChage="select"/>
      </div>
      <div class="clear"></div>
      <div class="address-container">
        <h3>收货人信息</h3>
        <div class="address-box">
          <div class="address-check">
            <div class="address-check-name">
              <span><Icon type="ios-checkmark-outline"></Icon> {{checkAddress.name}}</span>
            </div>
            <div class="address-detail">
              <p>{{checkAddress.address}}</p>
            </div>
          </div>
          <Collapse>
            <Panel>
              选择地址
              <p slot="content">
                <RadioGroup vertical size="large" @on-change="changeAddress">
                  <Radio :label="item.addressId" v-for="(item, index) in address" :key="index">
                    <span>{{item.name}} {{item.province}} {{item.city}} {{item.address}} {{item.phone}} {{item.postalcode}}</span>
                  </Radio>
                </RadioGroup>
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div class="remarks-container">
        <h3>备注</h3>
        <i-input v-model="remarks" size="large" placeholder="在这里填写备注信息" class="remarks-input"></i-input>
      </div>
      <div class="invoices-container">
        <h3>发票信息</h3>
        <p>该商品不支持开发票</p>
      </div>
      <div class="cart-floatbar">
        <div>
          <div class="btn-area"><a @click="submitOrder">提交订单</a></div>
          <div class="price-sum">
            <div class="total-amount">
              总价：<span>¥ {{ totalaMount }} </span>
            </div>
            <div class="discount-amount">
              优惠：-¥ 100.00
            </div>
          </div>
          <div class="amount-sum">已选择商品 <span>{{ productSum }}</span> 件商品</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import cartList from './cartList/list'

  export default {
    name: 'cart',
    beforeRouteEnter(to, from, next) {
      window.scrollTo(0, 0);
      next();
    },
    created() {
      this.loadAddress();
    },
    data() {
      return {
        goodsCheckList: [],
        totalaMount: 0,
        productSum: 0,
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '商品',
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
            title: '操作',
            width: 160,
            render: (h, params) => {
              return h('div', [
                h('a', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '移除  '),
                h('a', {
                  props: {
                    type: 'info',
                    size: 'small'
                  },
                  style: {
                    marginLeft: '5px'
                  },
                  on: {
                    click: () => {
                      this.collection(params.index)
                    }
                  }
                }, '  加入收藏'),
              ]);
            }
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
        ],
        address: [],
        checkAddress: {
          name: '未选择',
          address: '请选择地址'
        },
        remarks: ''
      };
    },
    computed: {
      totalPrice() {
        let price = 0;
        this.goodsCheckList.forEach(item => {
          price += item.price * item.count;
        });
        return price;
      }
    },
    methods: {
      // 请求地址
      loadAddress() {
       this.address  = [
          {
            addressId: '123456',
            name: 'Gavin',
            province: '广东省',
            city: '广州市',
            area: '天河区',
            address: '燕岭路633号',
            phone: '152****0609',
            postalcode: '510000'
          },
          {
            addressId: '123458',
            name: 'Kevin',
            province: '上海市',
            city: '上海市',
            area: '浦东新区',
            address: '沙新镇',
            phone: '158****0888',
            postalcode: '200120'
          }
        ]
      },

      select(selection, row) {
        console.log(selection);
        this.goodsCheckList = selection;
      },

      select(selection) {
        this.goodsCheckList = selection
        let price = 0
        let sum = 0
        selection.forEach(item => {
          price += item.package.price * item.count;
          sum += item.count;
        });
        this.totalaMount = price
        this.productSum = sum
      },
      remove(id) {
        this.$Modal.info({
          title: id,
          content: `点击了移除按钮`
        })
      },
      collection(id) {
        this.$Modal.info({
          title: id,
          content: `加入收藏`
        })
      },
      changeAddress(data) {
        const father = this;
        this.address.forEach(item => {
          if (item.addressId === data) {
            father.checkAddress.name = item.name;
            father.checkAddress.address = `${item.name} ${item.province} ${item.city} ${item.address} ${item.phone} ${item.postalcode}`;
          }
        });
      },
      setCart(data) {

      },
      submitOrder() {
        // 提交订单
        this.$router.push({name: 'cart.action'})
      }
    },
    mounted() {

      // 购物车列表
      if (this.$store.state.isLogin) {
        // 已登录
      } else {
        let cart = localStorage.getItem('myCat') || '[]'
        this.setCart(JSON.parse(cart));
      }

    },
    components: {
      cartList
    },
  };
</script>

<style lang="scss" scoped>
  .goods-list-container {
    img {
      width: 100%;
    }
  }

  .tips-box {
    margin-bottom: 15px;
    margin-top: 40px;
  }

  .address-container {
    margin-top: 15px;
  }

  .address-box {
    margin-top: 15px;
    padding: 15px;
    border: 1px #ccc dotted;
  }

  .address-check {
    margin: 15px 0px;
    height: 36px;
    display: flex;
    align-items: center;
  }

  .address-check-name {
    width: 120px;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #ccc;
  }

  .address-check-name span {
    width: 120px;
    height: 36px;
    font-size: 14px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    background-color: #f90013;
  }

  .address-detail {
    padding-left: 15px;
    font-size: 14px;
    color: #999999;
  }

  .remarks-container {
    margin: 15px 0px;
  }

  .remarks-input {
    margin-top: 15px;
  }

  .invoices-container p {
    font-size: 12px;
    line-height: 30px;
    color: #999;
  }

  .pay-container {
    margin: 15px;
    display: flex;
    justify-content: flex-end;
  }

  .pay-box {
    font-size: 18px;
    font-weight: bolder;
    color: #495060;
  }

  .money {
    font-size: 26px;
    color: #f90013;
  }

  .pay-btn {
    margin: 15px 0px;
    display: flex;
    justify-content: flex-end;
  }

  .cart-floatbar {
    background-color: #FFFFFF;
    color: #999999;
    height: 60px;
    font-size: 12px;
    div {
      display: inline-block;
      float: right;
    }
    .price-sum {
      width: 170px;
      margin-right: 10px;
      padding-top: 10px;
      div {
        width: 100%;
        text-align: right;
      }
      .total-amount {
        span {
          font-size: 16px;
          color: #E2231A;
          font-weight: 700;
        }
      }
      .discount-amount {
        padding-top: 10px;
      }
    }
    .amount-sum {
      padding-top: 10px;
      span {
        color: #E2231A;
        font-weight: 700;
      }
    }
    .btn-area a {
      display: block;
      position: relative;
      width: 94px;
      line-height: 60px;
      color: #fff;
      text-align: center;
      font-size: 18px;
      font-family: "Microsoft YaHei";
      background: #e54346;
      overflow: hidden;
    }
  }
</style>
