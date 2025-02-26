<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="name">SHOPCENTER A.Kusina, P.Iwanek s.c.<br /></div>
          <div class="addres">
            Bodzanów 583 <BR />
            32-020 Wieliczka
          </div>
        </div>
        <div class="col">
          <img src="@/assets/envelope.jpg"  /> biuro@shopcenter.pl
          <div class="sociallinks">
              <a href="https://www.facebook.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faFacebook" />
              </a>
              <a href="https://www.instagram.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faInstagram" />
              </a>
              <a href="https://www.twitter.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faTwitter" />
              </a>
              <a href="https://www.linkedin.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faLinkedin" />
              </a>
              <a href="https://www.youtube.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faYoutube" />
              </a>
              <a href="https://www.pinterest.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faPinterest" />
              </a><BR />
            </div>


        </div>
        <div class="col text-right align-top">
          
          
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "Footer",
  components: { FontAwesomeIcon },
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background-color: black;
  padding-bottom: 40px;
  text-align: left;
}

footer a {
  font-size: 1.2em;
  color: rgb(219, 219, 219);
}

.name {
  font-size: 1em;
  display: block;
  color: rgb(219, 219, 219);
  line-height: 1.8;
}

.addres {
  display: block;
  font-size: 0.9rem;
  color: rgb(177, 177, 177);
  line-height: 1;
}

.sociallinks a {
  color: white;
  font-size: 30px;
  margin-right: 10px;
}

.sociallinks:link {
  color: white;
}

</style>
