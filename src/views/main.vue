<template>
  <div class="main">
    <div class="topbar bg-black color-white fs-16 px-15 flex ai-center">
      <img src="//game.gtimg.cn/images/yxzj/cp/a20161116tyf/logo.png" alt height="30" />
      <div class="flex flex-y pl-5 flex-1">
        <div class="title fs-13 pb-6">王者荣耀</div>
        <div class="slogon fs-8 color-grey">团队成就更多</div>
      </div>
      <div class="btn bg-primary p-5">立即下载</div>
    </div>
    <div class="navbar bg-primary flex jc-sa color-white fs-13">
      <div class="nav-item text-center py-12" :class="{active:activeTab===0}">
        <router-link tag="div" to="/" class="pb-4">首页</router-link>
      </div>
      <div class="nav-item text-center py-16" :class="{active:activeTab===1}">
        <router-link tag="div" to="/">攻略中心</router-link>
      </div>
      <div class="nav-item text-center py-16" :class="{active:activeTab===1}">
        <router-link tag="div" to="/">赛事中心</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 0
    }
  }
}
</script>
<style>
.swiper-pagination .swiper-pagination-bullet {
  background:#fff;
  opacity: 1;
  border-radius: 1px;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background:#4b67af;
  opacity: 1;
}
</style>
<style lang="scss" scoped>
.topbar {
  height: 45px;
}

.nav-item div {
  border-bottom: 3px solid transparent;
}
.nav-item.active div {
  border-bottom: 3px solid #fff;
}
</style>
