<template>
    <div class="coupon ">
        <div class="coupon_head">
            <img src="http://gfs11.gomein.net.cn/T1K9ZvB5Kj1RCvBVdK.jpg"/>
        </div>
        <div class="coupon_body">
            <ul>
                <li>
                    <img src="http://gfs10.gomein.net.cn/T1cmDXB4Cv1RCvBVdK.jpg"/>
                </li>
                <li>
                    <img src="http://gfs10.gomein.net.cn/T1cmDXB4Cv1RCvBVdK.jpg"/>
                </li>
                <li>
                    <img src="http://gfs10.gomein.net.cn/T1cmDXB4Cv1RCvBVdK.jpg"/>
                </li>
                <li>
                    <img src="http://gfs10.gomein.net.cn/T1cmDXB4Cv1RCvBVdK.jpg"/>
                </li>
                <li>
                    <img src="http://gfs10.gomein.net.cn/T1cmDXB4Cv1RCvBVdK.jpg"/>
                </li>
            </ul>
        </div>
        <div class="coupon_more">
            <img src="http://gfs10.gomein.net.cn/T13MDvBjC_1RCvBVdK.jpg"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "coupon"
    }
</script>

<style lang="scss" scoped>
    .coupon {
        margin-top: 40px;
        div {
            display: inline-block;
        }

        .coupon_body{
            padding-top: 2px;
            ul li{
                display: inline-block;
                float: left;
                margin-left: -6px;
                img {
                    height: 10%;
                }
            }
        }

    }

</style>