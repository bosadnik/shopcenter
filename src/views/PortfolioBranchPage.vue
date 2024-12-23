<template>
    <div class="container-fluid">
        <div class="row" style="min-height: 85vh; background-color: black;">
            <div class="container-fluid">
                <div class="row" :style="{ height: '7vh', backgroundColor: `${color}` }">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                        <h3>{{ $t(`balloons.${title}`) }} - {{ page.name.toUpperCase() }} {{ page.description.toUpperCase() }}</h3>
                    </div>
                </div>
            
                <div class="sticky-top">
                    <Baloons style="position: absolute; right: 0;z-index: 10;" />
                </div>

                <!-- <LightGallery :images="page.imgs" :index="idx" :disable-scroll="true" @close="idx = null" /> -->

                <div class="row">
                    <div class="col-11">

                        <div class="row">
                            
                            <FsLightbox
                                :toggler="toggler"
                                :sources="page.imgs"
                                :slide="slide"
                            />
                            
                            <div class="col-4 col-thumbnail" v-for="(img) in page.images" :key="img.index"
                                @click="openLightboxOnSlide(img.index)">
                                <img :src="img.thumbnail" class="img-fluid thumbnail" />
                            </div>
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

// let wait = async (miliseconds) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, miliseconds);
//     });
// };


import FsLightbox from "fslightbox-vue/v3";

// let wait = async (miliseconds) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, miliseconds);
//     });
// };

// import VuePictureSwipe from 'vue3-picture-swipe';

const pageValues = {
    'Biuro': Biuro,
    'HoReCa': HoReCa,
    'HandelSklepy': HandelSklepy,
    'InvestycjePrywatne': InvestycjePrywatne,
};



const getPageData = (branch, p) => {

    branch = pageValues[branch];

    let page = branch.catalog.filter(item => item.key == p)[0];

    return { ...branch, 'page': { ...page }, idx: null, toggler: false, slide: 0 };
}

export default {
    name: "ProtfolioBranchPage",
    components: { Baloons, FsLightbox },
    data: function () {
        return getPageData(this.$route.params.branch, this.$route.params.page);
    },
    methods: {
        openLightboxOnSlide: function(number) {
                this.idx = number;
				this.slide = number;
				this.toggler = !this.toggler;
			}
    },

};
</script>
<style scoped>
.mainimage {
    margin-top: 5px;
}

.col-thumbnail {
    padding: 3px;
}

img.fade-enter-active,
img.fade-leave-active {
    transition-duration: 0.8s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.description {
    font-style: italic;
    font-size: 0.8rem
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-property: opacity, scale;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}


.thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thumbnail {
    cursor: pointer;
    /* opacity: 0.6; */
    opacity: 1;
    transition: opacity 0.3s ease-in;
    max-height: 50vh;
}

.thumbnail:hover {
    opacity: 1;
}
</style>
