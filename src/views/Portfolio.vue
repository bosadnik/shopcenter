<template>
  <div class="container-fluid">
    <div class="row" style="height: 85vh; background-color: black;">
      <div class="col" style="height: 100%;">
        <div class="row" >
          <div class="col-2 d-none d-md-block"></div>
          
          <ImageLinkHover class="col" nameClass="porFolioBoxMain" linkTo="/portfolio/Biuro" imgUrl="portfolio/pf_Biuro_bg.jpg" name="Biuro" description=""/>
<!-- 
          <router-link to="/portfolio/Biuro" class="col portfolioBox"
            :style="{ backgroundImage: `url(${require('../assets/portfolio/pf_Biuro_bg.jpg')})` }">
            <h1>Biuro </h1>
          </router-link> -->

          <ImageLinkHover class="col" nameClass="porFolioBoxMain" linkTo="/portfolio/HoReCa" imgUrl="portfolio/pf_HoReCa_bg.jpg" name="HoReCa" description=""/>

          <div class="col-2 d-none d-md-block"></div>
        </div>
        <div class="row" >
          <div class="col-2 d-none d-md-block"></div>
          
          <ImageLinkHover class="col" nameClass="porFolioBoxMain" linkTo="/portfolio/HandelSklepy" imgUrl="portfolio/pf_Handel_Sklepy.jpg" name="Handel - Sklepy" description=""/>
          <ImageLinkHover class="col" nameClass="porFolioBoxMain" linkTo="/portfolio/InvestycjePrywatne" imgUrl="portfolio/pf_Inwestycje_Prywatne.jpg" name="Inwestycje Prywatne" description=""/>
          <div class="col-2 d-none d-md-block"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import ImageLinkHover from '../components/ImageLinkHover.vue';
export default {
  name: "Portfolio",
  components: { ImageLinkHover},
  data: () => {
    return {
      title: "Portfolio",
      email: "",
      namesurname: "",
      loading: false,
      success: false,
      fail: false
    };
  },
  methods: {

  },
};
</script>
<style>
.porFolioBoxMain{
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-size: 2rem;
}

@media (max-width: 768px) {
  .porFolioBoxMain {
    font-size: 0.8rem;
  }
}
</style>
