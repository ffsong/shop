<template>
    <div>
        <header-wrap :category="category" />

        <div class="container">
            <carousel :banner="banner" />
            <coupon/>
            <div class="clear">
            </div>
            <div>
                <goods-list />
            </div>
            <div>
                <goods-list />
            </div>
            <div>
                <goods-list />
            </div>
        </div>
        <div>
            <bock-top/>
        </div>
    </div>

</template>

<script>
    import headerWrap from 'components/content/headerWrap'
    import carousel from 'components/common/carousel'
    import goodsList from './goodsList'
    import coupon from './coupon'
    import bockTop from 'components/content/backTop'

    export default {
        name: 'index',
        data (){
            return {
                banner: [],
                category : [
                    {
                        title: '手机',
                        children: [
                            {id: '2', name: 'apple', url: 'http://www.baidu.com'},
                            {id: '3', name: '华为', url: 'http://www.baidu.com'},
                            {id: '4', name: 'vivo', url: 'http://www.baidu.com'},
                            {id: '5', name: '小米', url: 'http://www.baidu.com'},
                            {id: '6', name: '三星', url: 'http://www.baidu.com'},
                            {id: '2', name: 'apple', url: 'http://www.baidu.com'},
                            {id: '3', name: '华为', url: 'http://www.baidu.com'},
                            {id: '4', name: 'vivo', url: 'http://www.baidu.com'},
                            {id: '5', name: '小米', url: 'http://www.baidu.com'},
                            {id: '6', name: '三星', url: 'http://www.baidu.com'},
                        ]
                    },
                    {
                        title: '电脑',
                        children: [
                            {id: '2', name: 'apple', url: 'http://www.baidu.com'},
                            {id: '3', name: '华为', url: 'http://www.baidu.com'},
                            {id: '4', name: 'vivo', url: 'http://www.baidu.com'},
                            {id: '5', name: '小米', url: 'http://www.baidu.com'},
                            {id: '6', name: '三星', url: 'http://www.baidu.com'},
                        ]
                    },
                    {
                        title: '电脑',
                        children: [
                            {id: '2', name: 'apple', url: 'http://www.baidu.com'},
                            {id: '3', name: '华为', url: 'http://www.baidu.com'},
                            {id: '4', name: 'vivo', url: 'http://www.baidu.com'},
                            {id: '5', name: '小米', url: 'http://www.baidu.com'},
                            {id: '6', name: '三星', url: 'http://www.baidu.com'},
                        ]
                    },
                ],
            }
        },
        components: {
            headerWrap,
            carousel,
            goodsList,
            coupon,
            bockTop
        },
        mounted() {
            this.getBanner()
        },
        methods: {
            getBanner(){
                this.banner = [
                    {'id': 1, url: 'https://resource.smartisan.com/resource/9064cb9171d320afad68264eb3324456.jpg?x-oss-process=image/format,jpg/quality,Q_100'},
                    {'id': 2, url: 'https://resource.smartisan.com/resource/af0809384afb6e208438d9894367033f.jpg?x-oss-process=image/format,jpg/quality,Q_100'},
                ]
            }
        }

    }
</script>

<style>
    #app {

    }
</style>
