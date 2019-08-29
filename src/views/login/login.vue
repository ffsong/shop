<template>
  <div>
    <Row class="container">
      <i-col span="13" offset="2" class="login-img-box">
        <img src="~img/sale.jpg" alt="">
      </i-col>
      <i-col span="7" class="login-box">
        <div class="login-container">
          <div class="login-header">
            <p>欢迎登录</p>
          </div>
          <div class="form-box">
            <Form ref="formInline" :model="formDate" :rules="ruleInline">
              <FormItem prop="username">
                <i-input type="text" v-model="formDate.username" clearable size="large" placeholder="用户名">
                  <Icon type="person" slot="prepend"></Icon>
                </i-input>
              </FormItem>
              <FormItem prop="password">
                <i-input type="password" v-model="formDate.password" clearable size="large" placeholder="密码">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>
              </FormItem>
              <FormItem>
                <Button type="error" size="large" @click="handleSubmit('formInline')" long>登录</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'login',
    data() {
      return {
        formDate: {
          username: '',
          password: ''
        },
        ruleInline: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      ...mapActions(['attemptLogin']), // 将 `this.attemptLogin()` 映射为 `this.$store.dispatch('attemptLogin')`

      async handleSubmit(name) {

        console.log(this.formDate.username);
        // iview 表单验证
        this.$refs[name].validate((valid) => {
          if (valid) {

            const { username, password } = this

            this.attemptLogin({ username, password }).then(result => {

              this.$Message.info('欢迎回来~')
              this.$router.push({ name: 'home' })
            }).catch(err => {
              if (err.status !== 422) {
                this.$Message.info('账号密码错误！')
              }
              this.$Message.info(err.data.errors)
            })
          } else {
            // this.$Message.info('请填写正确的用户名或密码');
          }
        });
      }
    },
  };
</script>

<style scoped>
  .container {
    margin-top: 30px;
    height: 485px;
    background-color: #fff;
  }

  .login-img-box {
    height: 485px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-img-box > img {
    width: 68%;
  }

  .login-box {
    height: 485px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-container {
    width: 80%;
    height: 280px;
    border: #ED3F14 solid 1px;
  }

  .login-header {
    height: 50px;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 5px;
    color: #fff;
    background-color: #ED3F14;
  }

  .form-box {
    width: 80%;
    margin: 30px auto;
  }
</style>
