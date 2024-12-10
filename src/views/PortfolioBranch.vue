<template>
    <div class="container-fluid">
        <div class="row" style="min-height: 85vh; background-color: black;">
            <div class="container-fluid">
                <div class="row" :style="{ height: '7vh', backgroundColor: `${color}` }">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                        <h3>{{ $t(`balloons.${title}`) }}</h3>
                    </div>
                </div>

                <div class="sticky-top">
                    <Baloons style="position: absolute; right: 0;z-index: 10;" />
                </div>
                
                <div class="row">
                    <div class="col-11">
                        <div class="row">
                            <ImageLinkHover
                                v-for="item in catalog" 
                                :key="item.key"
                                :linkTo="`/portfolio/${branch}/${item.key}`"
                                :imgUrl="`${item.folder}/${item.img}`"
                                :name="item.name"
                                :description="item.description"
                                class="col-4"
                            />
                            <!-- <div v-for="item in catalog" :key="item.key" class="col-4 portfolioBoxSmall"
                                :style="{ backgroundImage: `url(${require(`../assets/portfolio/${item.folder}/${item.img}`)})` }">
                                <router-link :to="`/portfolio/${branch}/${item.key}`" class="portfolioBoxSmallLink">
                                    <h1>{{ item.name }}</h1>
                                    {{ item.description }}
                                </router-link>
                            </div> -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Baloons from "@/components/Baloons.vue";
import Biuro from "@/data/pages/Biuro.js";
import HoReCa from "@/data/pages/HoReCa.js";
import HandelSklepy from "@/data/pages/HandelSklepy.js";
import InvestycjePrywatne from "@/data/pages/InvestycjePrywatne.js";
import ImageLinkHover from '../components/ImageLinkHover.vue';
let wait = async (miliseconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, miliseconds);
    });
};




const pageValues = {
    'Biuro': Biuro,
    'HoReCa': HoReCa,
    'HandelSklepy': HandelSklepy,
    'InvestycjePrywatne': InvestycjePrywatne,
};

//console.log(pageValues);


const getPageData = (branch) => {
    return { branch, ...pageValues[branch] };
}

export default {
    name: "PortgolioBranch",
    components: { Baloons,ImageLinkHover },
    data: function () {
        return getPageData(this.$route.params.branch);
    },
    methods: {

    },
    watch: {
        '$route.params.branch': {
            async handler(newValue) {
                await wait(10);
                Object.assign(this, getPageData(newValue));
            },
            deep: false,
        },
    },
};
</script>
<style scoped>

</style>
