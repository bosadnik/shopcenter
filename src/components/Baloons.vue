<template>
  <div class="d-none d-md-block">

    <!-- <div class="row balloonsRow">
      <div class="col balloonBox ballonName"> AAA </div>
      <div class="col balloonBox"><img :src="require('../assets/biuro_btn.png')" /></div>
    </div>
    <div class="row balloonsRow">
      <div class="col balloonBox ballonName"> AAA </div>
      <div class="col balloonBox"><img :src="require('../assets/biuro_btn.png')" /></div>
    </div> -->

    <div v-for="balloon in balloons" :key="balloon.name">
      <router-link :to="balloon._link" class="balloonLink">
        <div :class="{ row: true, balloonsRow: true, active: isCurrentPath(balloon._link)}">

          <div :class="['col',balloon._cssClassName, 'balloonBox', 'ballonName']">
            {{ $t(`balloons.${balloon._name}`) }}
          </div>
          <div :class="['col', balloon._cssClassName, 'balloonBox']">

            <img :src="balloon._image" />

          </div>

        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
import balloons from "../utils/balloons";


export default {
  name: "Baloons",
  data: function () {
    return {
      isCurrentPath: path => {
        //return this.$route.path == `/${path}` || this.$route.path == `${path}`;
        return this.$route.path.includes(`${path}`);
      },
      balloons
    };
  },

  //this.$router.history.current.path
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap');
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.balloonsRow {
  width: 320px;
  padding-top: 5px;
}

.balloonBox {
  background-color: black;
  border: 1px solid white;
  min-width: 91px;
  min-height: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.balloonBox:hover {
  border: 1px solid white;
}

.active .balloonBox {
  border: 1px solid white;
}

.balloonsRow .ballonName {
  visibility: hidden;
  position: relative;
  align-items: left;
}

.active .ballonName {
  /* visibility: visible; */
  animation: fade-in 0.5s backwards;
}

.ballonName {
  justify-content: right;
  min-width:  220px;
}
.balloonLink {
  
}

.balloonLink:link, .balloonLink:visited {
  text-decoration: none;
  color:white;
}


.balloonsRow:hover .ballonName {
  visibility: visible;
  animation: fade-in 0.5s backwards;
}



.balloonsrow {}

.baloon {
  background-color: black;
  margin-bottom: 5px;
  border: 1px solid black;
  /* min-width: 91px;
  min-height: 91px; */
}

.baloon a {
  color: rgb(136, 136, 136);
  text-transform: uppercase;
  font-family: 'Patrick Hand SC', cursive;
  font-size: 0.9em;
}

.baloon img {
  padding: 25px;
  border: solid black;
  min-width: 40px;
  /* border-width: 1px 2px 1px 1px;
  border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
  transform: rotate(1deg);
  transition: all .2s ease-in-out;
  max-height: 110px; */
}

.baloon img:hover {
  border: solid white;
  /* border-width: 1px 2px 1px 1px;
  border-radius:95% 4% 92% 5%/4% 95% 6% 95%;
  transform: rotate(1deg) scale(1.02); */
}

.baloon.active img {
  border-color: white;
}

.biuro:hover, .biuro.ballonName, .active .biuro {
  background-color: #1a3854;
}

.horeca:hover, .horeca.ballonName, .active .horeca {
  background-color: #651d2e;
}

.handelsklepy:hover, .handelsklepy.ballonName, .active .handelsklepy {
  background-color: #c09200;
}

.investycjeprywatne:hover, .investycjeprywatne.ballonName, .active .investycjeprywatne  {
  background-color: #385723;
}



@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
