<template>
    <div class="header-wrap">
        <div class="header-category">
            <div class="h-100 header-title-category">
                <span @mousemove="changeItem(true)" @mouseout="changeItem(false)">
                    <Icon type="md-menu" size="26" />分类
                </span>
            </div>
            <div class="header-content-category" :class="{ show: isShow}" @mousemove="changeItem(true)" @mouseout="changeItem(false)">
                <div class="content-item" v-for="(item, index) in category" :key="index">
                    <div>{{ item.title }}</div>
                    <ul>
                        <li class="header-category-item" v-for="(list, key) in item.children" :key="key">
                            <a rel="nofollow" target="_blank"
                               :href='list.url'>
                               {{ list.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="search">
            <Input  search enter-button size="large" placeholder="Apple" />
        </div>
        <div class="header-wrap-right">
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerWrap",
        props:{
            category: Array,
        },
        data() {
            return {
                isShow: false,
            }
        },
        methods: {
            changeItem(e){
                this.isShow = e
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header-wrap{
        width: 1190px;
        display: flex;
        display: -webkit-flex;
        margin: 30px auto;
        margin-bottom: 50px;
        padding-top: 10px;
        .header-category{
            flex: 1;
            .header-title-category{
                padding-top: 10px;
            }
            .show{
                display: flex !important;
            }
            .header-content-category{
                display: none;
                position: absolute;
                background: #fff;
                z-index: 9999;
                box-shadow: 0 0 20px 0 rgba(0,0,0,.05);
                border: 1px solid #E5E5E5;
                border-radius: 4px;
                min-height: 160px;
                .content-item{
                    flex: 1;
                    padding-top: 30px;
                    padding-left: 20px;
                    line-height: 24px;
                    padding-bottom: 30px;
                    border-right: 1px solid #EEE;
                }
            }

            .header-title-category span {
                display: inline-block;
                &:hover {
                    cursor: pointer;
                    .header-content-category {
                        background: red;
                    }
                }

            }
            .header-category-item{
                font-size: 12px;
                color: #666;
                display: inline-block;
                margin-right: 30px;
                line-height: 36px;
            }
        }
        .search{
            flex: 3
        }
        .header-wrap-right{
            flex: 1
        }
    }
</style>