<template>
  <div class="mod_container iphonex_padding faq-part">
      <div class="or">
          <div v-for="(item,i) in list" class="or_box" :ref="getClass(item)">
              <div class="or_hd">
                  <img :src="item.imgurl" alt class="or_icon">{{item.title}}
              </div>
              <div class="or_bd">
                  <div v-for="(qitem,j) in item.data" :class="{'or_item': true, 'active': !qitem.fold}" :ref="'faq_item_'+qitem.id" :id="'q'+qitem.id" :data-track="'question_faq_' + qitem.type">
                      <div @click="toggleItem(i,j)" class="or_item_tit">{{qitem.question}}<i class="icon icon_arrow"></i></div>
                      <div :class="{'or_item_txt': true, 'fold': !qitem.fold}" v-html="qitem.answer"></div>
                  </div>
              </div>
          </div>
      </div>
      <!-- <div class="fixed" v-show="showBackToConsult">
          <div class="fixed_box">
              <a class="fixed_buy grid middle" href="javascript: void 0;" @click="onGoBack">返回在线咨询页面</a>
          </div>
      </div> -->
      <!--20171227 leon-->
      <div class="bottom_btn iphonex_padding">
          <div class="add_padd row middle">
              <a :href="consultUrl" @click="handleJump" class="add_advice">在线咨询</a>
              <!-- <a href="/question/adviceAndComplain">投诉建议</a> -->
          </div>
      </div>
      <!--20171227 leon-->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'
const classMap = {
    guess: '猜你想问',
    buy: '购买问题',
    insurance: '保单问题',
    claims: '理赔问题',
    bq: '售后问题',
}
export default {
  data() {
    return {
      consultUrl:'javascript: void(0)'
    }
  },
  components: {
    list:Array
  },
  async asyncData(ctx) {
    let list;
    console.log(ctx)
    await axios.post('http://dev.xinhulu.com/question/getFaqList',{}).then(res => {
      list = res.data.data.list
    });
    console.log(list)
    return {
      list
    }
  },
  created() {
    console.log(this.list)
  },
  methods: {
    toggleItem (i, j) {
      let qitem = this.list[i].data[j];
      if(typeof qitem.fold == 'undefined') {
        this.$set(qitem, 'fold', true);
      }else {
        qitem.fold = !qitem.fold
      }
      // 统计
      try {
        let track = this.$refs['faq_item_'+qitem.id][0].dataset.track;
        if (track) {
            window._hmt && window._hmt.push(['_trackEvent', 'default_'+track, 'click']);
        }
      } catch (e) { }
    },
    getClass (item) {
      let index = Object.values(classMap).indexOf(item.title);
      if (index < 0 ) {
          return '';
      } else {
          return Object.keys(classMap)[index];
      }
    },
    handleJump() {
      //
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/question/faq.scss";
</style>


