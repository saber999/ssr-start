<template>
    <section>
        <Head></Head>
        <Banner :bannerData ="originData.indexBanner" ></Banner>
        <Entries :hasPaidConsult="originData.hasPaidConsult"></Entries>
        <Welfare :isNew="originData.isNew"></Welfare>
        <Nav></Nav>
        <product-list :productList="originProductData.productList" :isNew="originData.isNew"></product-list>
        <Adviser></Adviser>
        <Aboutus></Aboutus>
        <Company></Company>
        <Contact></Contact>
    </section>
</template>
<script>
import Head from '@/components/index/head.vue';
import Banner from '@/components/index/banner.vue';
import Entries from '@/components/index/entries.vue';
import Welfare from '@/components/index/welfare.vue';
import Nav from '@/components/index/nav.vue';
import Adviser from '@/components/index/adviser.vue';
import Aboutus from '@/components/index/aboutus.vue';
import Company from '@/components/index/company.vue';
import Contact from '@/components/index/contact.vue';
import {replaceChn} from '@/plugins/util.js'
import ProductList from '@/components/index/productList.vue'
export default {
    components: {
        Head,
        Banner,
        Entries,
        Welfare,
        Nav,
        ProductList,
        Adviser,
        Aboutus,
        Company,
        Contact
    },
    data() {
        return {
            originData: null,
            originProductData: null,
            proDatamap: null,
        }
    },
    methods:{
    },
    async asyncData({store}){
        let originProductData,originData,proDatamap;
        await store.dispatch('getIndexData').then( (res) => {
            const [res1, res2] = res.res
            if(res1.ret == 0) {
                originData = res1.data
            }
            if(res2.ret == 0){
                
                originProductData = res2.data
                 if (originProductData && originProductData.productList && originProductData.productList.length > 0) {
                        originProductData.productList.forEach((item) => {
                        let urlLink = decodeURIComponent(item.src);
                        urlLink = replaceChn(urlLink, 'ssr');
                        item.url = encodeURIComponent(urlLink);
                        if (item.favorpack) {
                            console.log(item.favorpack)
                            for(let j = 0, len = item.favorpack.length; j < len; j ++) {
                            if (item.favorpack[j].class == '1' && item.favorpack[j].platformType && item.favorpack[j].platformType.indexOf('4') !== -1) {
                                item.isShowFavorpack = true;
                                break;
                            }
                            item.isShowFavorpack = false;
                            };
                        }
                        let id = item.productId || '';
                        let classId = (item.insuranceClassify && item.insuranceClassify.id != null) ? item.insuranceClassify.id : '';
                        let src = item.src || '';
                        let key = `${id}+${classId}+${src}`;
                        proDatamap[key] = item;
                    });
                }
            }
        }).catch(()=>{})
        return {
            originData,
            originProductData,
            proDatamap
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/index/common.scss';
</style>


