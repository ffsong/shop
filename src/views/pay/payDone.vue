<template>
  <div>
    <div class="pay-done-box">
      <div class="content">
        <img src="~img/pay-success.png">
        <div class="btu-home">
          <Button @click="backToHome" type="primary">返回首页</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'payDone',
    methods: {
      backToHome() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .pay-done-box {
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btu-home {
    text-align: center;
  }
</style>
