<template>
  <section class="g-section product g-space">
    <div class="product-list">
        <div class="partial-list" v-show="index == 0" v-for="(item,index) in productList" :key="index">
            <a :href="atem.src" v-for="(atem,andex) in item.productList" class="product-item row" :key="andex">
              <div class="product-img">
                  <i class="shine new-yellow" v-if="isNew == 1 && atem.recommendForNew == 1">新人优选</i>
                  <i class="shine red">热卖</i>
                  <i class="shine green">新品</i>
                <img :src="atem.pic2" alt="">
              </div>
              <div class="product-info col row">
                <div class="detail col">
                  <h3>{{atem.title}}</h3>
                  <div class="desc">
                    <p v-for="(desc,descIndex) in atem.advantage" :key="descIndex">{{desc}}</p>
                  </div>
                  <div class="tag row">
                    
                  </div>
                </div>
                <div class="func row">
                  <div class="col">
                    <span class="price"><b>{{atem.price}}</b>元</span>
                  </div>
                  <button class="btn-buy">立即投保</button>
                </div>
              </div>
            </a>
        </div>
    </div>
    <div class="product-more hide">
      <a href="javascript:;" class="btn-more" data-track="index_moreInsurance"><span></span><i class="icon-arrow-right"></i></a>
    </div>
  </section>
</template>
<script>
export default {
  props:{
    productList: {
      type:Array,
      default:() => []
    },
    isNew: {
      type: Number,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/css/index/productList.scss';
</style>


