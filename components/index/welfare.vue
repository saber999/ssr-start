<template>
  <section class="g-section new-welfare g-space">
    <a href="/privilege/welfareV2?chn=h5index" data-track="index_newbenifits_new">
      <img src="https://sslstatic.xiaoyusan.com/index/img/new-welfate.4384ce5352580260.png" class="welfare-img">
    </a>
  </section>
</template>
<script>
export default {
  props: {
    isNew:{
      type: Number,
      default: null
    }
  }
}
</script>
<style lang="sass" scoped>
  @import '@/assets/css/index/welfare.scss';
</style>

