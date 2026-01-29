<template>
    <div class="container-fluid">
        <div class="row" style="min-height: 85vh; background-color: black;">
            <div class="container-fluid">
                <div class="row" :style="{ height: '7vh', backgroundColor: `${color}` }">
                    <div class="col-12 d-flex justify-content-center align-items-center">
                        <h3 class="h3-responsive">{{ $t(`balloons.${title}`) }} - {{ page.name.toUpperCase() }} {{ page.description.toUpperCase() }}</h3>
                    </div>
                </div>
            
                <div class="sticky-top">
                    <Baloons style="position: absolute; right: 0;z-index: 10;" />
                </div>

                <!-- <LightGallery :images="page.imgs" :index="idx" :disable-scroll="true" @close="idx = null" /> -->

                <div class="row">
                    <div class="col-md-11 col-12">

                        <div class="row">
                            
                            <FsLightbox
                                v-if="lightboxMounted"
                                :toggler="toggler"
                                :sources="page.imgs"
                                :slide="slide"
                            />
                            
                            <div
                                class="col-md-4 col-6 col-thumbnail"
                                v-for="(img) in page.images"
                                :key="img.index"
                                @mouseenter="preloadLarge(img.index)"
                                @focus="preloadLarge(img.index)"
                                @click="openLightboxOnSlide(img.index)"
                            >
                                <picture>
                                    <source :srcset="img.thumbnailWebP" type="image/webp" />
                                    <img
                                        :src="img.thumbnail"
                                        class="img-fluid thumbnail"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </picture>
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

    return { ...branch, 'page': { ...page }, idx: null, toggler: false, slide: 0, lightboxMounted: false };
}

export default {
    name: "ProtfolioBranchPage",
    components: { Baloons, FsLightbox },
    data: function () {
        return { ...getPageData(this.$route.params.branch, this.$route.params.page), preloadedLarge: {} };
    },
    mounted() {
        // Warm up the first large image during idle time to speed up the first lightbox open,
        // without aggressively downloading the whole gallery.
        const run = () => this.preloadLarge(1);
        if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
            window.requestIdleCallback(run, { timeout: 1500 });
        } else {
            setTimeout(run, 300);
        }
    },
    methods: {
        preloadLarge: function (number) {
            // FsLightbox slide numbers are 1-based in our data model; page.imgs is a 0-based array.
            if (!number || this.preloadedLarge[number]) return;
            const imgData = this.page && this.page.images ? this.page.images[number - 1] : null;
            if (!imgData) return;

            this.preloadedLarge[number] = true;
            // Prefer WebP, fallback to original
            const url = imgData.srcWebP || imgData.src;
            if (!url) return;

            const img = new Image();
            // Hint to browsers that support it
            try { img.decoding = 'async'; } catch (e) {}
            img.src = url;
        },
        openLightboxOnSlide: function(number) {
                this.lightboxMounted = true;
                // Start fetching the clicked large image ASAP (even if lightbox UI opens immediately)
                this.preloadLarge(number);
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

.h3-responsive {
    font-size: 2rem;
}

@media (max-width: 768px) {
    .h3-responsive {
        font-size: 1em;
    }
}


</style>
