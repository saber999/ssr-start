<template>
  <section class="company">
    <h2 class="title g-section">合作保险公司</h2>
    <div class="company-list">
      <div class="company-wrap row">
        <div class="company-item" ref="companyList" v-for="(item,index) in imgArr" :key="index">
          <img :src="item">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BScroll from 'better-scroll';
import company1 from '@/assets/img/company/company1.png';
import company2 from '@/assets/img/company/company2.png';
import company3 from '@/assets/img/company/company3.png';
import company4 from '@/assets/img/company/company4.png';
import company5 from '@/assets/img/company/company5.png';
import company6 from '@/assets/img/company/company6.png';
import company7 from '@/assets/img/company/company7.png';
import company8 from '@/assets/img/company/company8.png';
import company9 from '@/assets/img/company/company9.png';
import company10 from '@/assets/img/company/company10.png';
import company11 from '@/assets/img/company/company11.png';
import company12 from '@/assets/img/company/company12.png';
export default {
  data(){
    return {
      imgArr:[company1,company2,company3,company4,company5,company6,company7,company8,company9,company10,company11,company12]
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.initCompany()
    })
  },
  methods:{
    initCompany () {
      let scroll = new BScroll('.company-list', {
        scrollX: true,
        dblclick: {
          delay: 300
        },
        preventDefaultException: {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/css/index/company.scss';
</style>
