<style lang="scss" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        .logo{
            width: 40px;
        }
    }
    .layout-nav{
        display: flex;
        display: -webkit-flex;
        justify-content: flex-end;
        margin: 0 auto;
        margin-right: 20px;
        a{
            color: #ffffff;
        }
        .cart{
            padding: 0;
        }
    }
    .layout-footer-center{
        text-align: center;
    }

    .header-wrap{
        width: 1200px;
        padding: 0 20px;
        display: flex;
        display: -webkit-flex;
        margin: 0 auto;
        margin-bottom: 50px;
        .header-category{
            flex: 1;
        }
        .search{
           flex: 2;
        }
    }

</style>
<template>
    <div class="layout">
        <Layout>

            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <router-link to="/">
                            <img class="logo" src="~img/logo.png"/>

                        </router-link>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <router-link name="1" to="">
                                注册
                            </router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <router-link to="">
                                登陆
                            </router-link>
                        </MenuItem>
                        <MenuItem name="1" class="cart">
                            <router-link to="">
                                <Icon type="md-cart" size="26"/>
                            </router-link>

                        </MenuItem>
                        <MenuItem name="5">
                            <nav-person></nav-person>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>

            <Content :style="{padding: '0 50px'}">

                <div class="header-wrap">
                    <div class="header-category">
                        <Icon type="md-menu" size="26" />分类
                    </div>
                    <div class="search">
                        <Input  search enter-button size="large" placeholder="Apple" />
                    </div>
                </div>

                <Card>
                    <div style="min-height: 200px;">
                        Content
                    </div>
                </Card>
            </Content>

            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>

        </Layout>
    </div>
</template>
<script>
    import navPerson from './header/nav-person'
    export default {
        name: 'headerNav',
        components: {
            navPerson
        }
    }
</script>