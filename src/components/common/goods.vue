<template>
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
</template>

<script>
    export default {
        name: "goods",
    }
</script>

<style lang="scss" scoped>
.category {
    display: flex;
    display: -webkit-flex; /* Safari */
    margin: 0 6px 10px;
    .channel-title {
        flex: 1;
    }
    .channel-nav{
        flex: 14;
        display: inline-block;
        margin-left: -25px;
        li {
            margin-right: 20px;
            a {
                color: #999;
                &:hover{
                    color: red;
                }
            }
        }
    }
    .channel-more{
        flex: 1;
        text-align: right;
    }
}

</style>