<template>
    <div class="container">
        <Alert show-icon class="tips-box">
            您还没有登录！登录后购物车的商品将保存到您账号中 &nbsp;&nbsp;前往
            <router-link :to="{ name: 'login' }"> 登陆</router-link>
        </Alert>
        <div class="cart-list">
            <cart-list :data="data" :columns="columns" v-on:selectChage="select"/>
        </div>
        <div class="clear"></div>
        <div class="cart-floatbar">
            <div>
                <div class="btn-area"><a @click="">去结算</a></div>
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

        <div class="tabs">
            <Tabs value="name1">
                <TabPane label="猜你喜欢" name="name1">
                    <ul class="">
                        <goods/>
                    </ul>
                </TabPane>
                <TabPane label="标签二" name="name2">
                    <ul>
                        <goods/>
                    </ul>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
    import cartList from './cartList/list'
    import goods from 'components/common/goods'
    export default {
        name: "cartAction",
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
                            return h('span',{//一个包含模板相关属性的数据对象
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
                ]
            }
        },
        computed: {},
        methods: {
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
                console.log(id);
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
            }

        },
        components: {
            cartList,
            goods
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 990px;
        .tips-box {
            margin-top: 40px;
            margin-bottom: 20px;
            a {
                color: red;
                &:hover {
                    text-decoration: underline;
                }
            }
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
    }
</style>