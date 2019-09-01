
<template>
  <section class="banner">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerData" :key="index" >
          <img :src="item.pic" />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </section>
</template>
 
<script>
  export default {
    data () {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    props: {
      bannerData:{
        type: Array,
        default: ()=>{
          return []
        }
      }
    },
    mounted() {
      
    },
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      
    },
  }
</script>
 
 
<style lang="scss" scoped>
  .swiper-wrapper {
    height: 12.1rem;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>
