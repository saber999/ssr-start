<template>
  <section class="entries row g-space">
    <a href="/discovery/yanxuan?chn=h5index" class="entries-item col">
      <i class="icon icon-yanxuan"></i>
      <em>小雨伞严选</em>
    </a>
    <a href="/proposal/jingjing?chn=h5index" class="entries-item col">
      <i class="icon icon-jingjing"></i>
      <em>静静智能顾问</em>
    </a>
    <a href="/act/multiActive?chn=h5index" class="entries-item col">
      <i class="icon icon-activity"></i>
      <em>活动中心</em>
    </a>
    <a :href="adviser.link" class="entries-item col">
      <i class="icon icon-adviser"></i>
      <em>{{adviser.text}}</em>
    </a>
  </section>
</template>
<script>
export default {
  data(){
    return {}
  },
  props:{
    hasPaidConsult:{
      type: Number,
      default:null
    }
  },
  computed:{
    adviser(){
      return {
        text: this.hasPaidConsult ? '我的保险顾问' : '1v1专属顾问',
        link: this.hasPaidConsult ? 'pay/consult?id=1004&chn=h5index#/list' : 'pay/actPay?id=1004&chn=h5index'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
   @import '@/assets/css/index/entries.scss';
</style>
