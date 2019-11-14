<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <swiper-slide>
        <img class="db" width="100%" src="//ossweb-img.qq.com/upload/adw/image/20191105/99e4c95cd02742b715dac6eab0c97cde.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="db" width="100%" src="//ossweb-img.qq.com/upload/adw/image/20191104/fd2f601e753cfad90c2d293844c6bcdf.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="db" width="100%" src="//ossweb-img.qq.com/upload/adw/image/20191104/ebacbddb9cd37c6d848a8ee20584e9ce.jpeg" alt="">
      </swiper-slide>

      <div class="swiper-pagination text-right pr-20" slot="pagination" ></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
    <div class="navicons">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        // autoplay: true,
        autoplay: {
          delay: 1500
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoHeight: true /* 不是以slide的最大高度为容器高度,而是根据当前slide 来auto高度 */
      }
    }
  },
  methods: {
    callback () {

    }
  }
}
</script>

<style>
</style>
