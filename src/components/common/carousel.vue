<template>
  <div class="banner m-auto">
    <Carousel
            v-model="value3"
            :autoplay="setting.autoplay"
            :autoplay-speed="setting.autoplaySpeed"
            :dots="setting.dots"
            :radius-dot="setting.radiusDot"
            :trigger="setting.trigger"
            :arrow="setting.arrow">
      <CarouselItem v-for="(item, index) in banner" :key="index">
        <div class="demo-carousel">
          <img :src="item.url "/>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
  export default {
    props: {
      banner: Array,
    },
    data() {
      return {
        value3: 0,
        setting: {
          autoplay: true,
          autoplaySpeed: 3000,
          dots: 'inside',
          radiusDot: true,
          trigger: 'hover',
          arrow: 'hover'
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .banner {
    img {
      width: 100%;
      height: auto;
      border-radius: 6px;
    }
  }

</style>
