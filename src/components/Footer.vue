<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faPhoneAlt, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
// import { phone } from '@fortawesome/fontawesome-common-types'
</script>

<template>
  <footer>
    <div class="container-fluid">
<div class="row justify-content-md-center">
  <div class="col-12" style="padding-top: 2vh;">
    <div class="row">
        <div class="col-12 col-md-4">
          <div class="name">SHOPCENTER A.Kusina, P.Iwanek s.c.<br /></div>
          <div class="addres">
            Bodzanów 583 <BR />
            32-020 Wieliczka <br/>
            NIP: 678-295-87-65
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="contacts">
          <img src="@/assets/envelope.jpg" class="envelope" /> biuro@shopcenter.pl<br/>
          <FontAwesomeIcon :icon="faPhone" class="phone" />&nbsp;+48 601 765 432 | 609 60 40 80
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center">

          <div class="sociallinks">
              <a href="https://www.facebook.com/shopcenterdesign" target="_blank">
                <div style="display: inline-block; position: relative; top: -3px;">
                <FontAwesomeIcon :icon="faFacebookF" style="font-size: 1.1em;" />
                </div>
              </a>
              <a href="https://www.instagram.com/shopcenterdesign" target="_blank">
                <FontAwesomeIcon :icon="faInstagram" style="font-size: 1.4em;" />
              </a>
              <!-- <a href="https://www.linkedin.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faLinkedin" />
              </a> -->
              <!-- <a href="https://www.youtube.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faYoutube" />
              </a>
              <a href="https://www.pinterest.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faPinterest" />
              </a><BR /> -->
            </div>
          
          
        </div>
      </div>
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
  font-size: 1.2em;
  display: block;
  color: rgb(219, 219, 219);
  line-height: 1;
}

.addres {
  display: block;
  font-size: 1.2rem;
  color: rgb(177, 177, 177);
  line-height: 1.2;
}

.sociallinks a {
  color: white;
  font-size: 1.5rem;
  margin-right: 10px;
}

.sociallinks:link {
  color: white;
}

.contacts {
  font-size: 1rem;
   line-height: 2.5em;
}

.phone {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .contacts {
    font-size: 0.9rem;
  }
  .name {
    font-size: 1rem;
  }
  .addres {
    font-size: 0.9rem;
  }
  .envelope {
    width: 1.5rem;
  }
  .phone {
    font-size: 1.0
  }
}
</style>
