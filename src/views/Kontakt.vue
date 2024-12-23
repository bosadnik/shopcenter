<script setup>
import mainbg3 from '@/assets/mainbg3.jpg'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
</script>
<template>
  <div class="container-fluid">
    <div class="sticky-top">
      <Baloons style="position: absolute; right: 0;z-index: 10;" />
    </div>

    <!-- SCREEN 1 -->
    <div class="row" :style="{
      backgroundImage: `url(${mainbg3})`,
      height: '85vh',
      backgroundColor: 'black'
    }">
      <div class="col-12">
        <div class="row" style="height: 5vh;">
          <div class="col-12">
          </div>
        </div>
        <div class="row" style="height: 65vh;">
          <div class="col-1" style="background-color: black">
            <div class="row" style="height: 40%">
              <div class="col-12">&nbsp;</div>
            </div>
            <div class="row" style="height: 60%;">
              <div class="col-6" style="border-right: 4px solid #f4b414;">&nbsp;</div>
              <div class="col-6" style="border-top: 4px solid #f4b414;">&nbsp;</div>
            </div>
          </div>
          <div class="col-4"
            style="background-color: black; padding: 3vh; height: 60vh; padding-top: 20vh; height: 100%;">

            SHOPCENTER A.Kusina, P.Iwanek s.c.<BR />
            Bodzanów 583<BR />
            32-020 Wieliczka<BR />
            <BR />
            Godziny pracy:<BR />
            Pon. – pt.: 8:30-16:30<BR />
            Sob. – niedz.: niecynne<BR />

            <BR />
            Znajdź nas również na<BR />
            <div class="sociallinks">
              <a href="https://www.facebook.com/shopcenter" target="_blank">
                <FontAwesomeIcon :icon="faFacebook" />
              </a><BR />
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
          <div class="col-6" style="background-color: black; padding: 4vh">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.604858907046!2d20.141564576915783!3d49.981268421034414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471640c3f0806823%3A0x9a4a141b6a73c7c0!2sBodzan%C3%B3w%20583%2C%2032-020%20Wieliczka!5e0!3m2!1spl!2spl!4v1734882521559!5m2!1spl!2spl"
              style="border:0;" allowfullscreen="" loading="lazy" class="google-maps"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="row" style="height: 15vh;">
          <div class="col-1">
            <div class="row" style="height: 100%;">
              <div class="col-6" style="border-right: 4px solid #f4b414;">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="background-color: black;">
      <div class="col-12">
        <div class="row">
          <div class="col-1">
            <div class="row" style="height: 5vh">
              <div class="col-6" style="border-right: 4px solid #f4b414;">
                &nbsp;
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="row" style="background-color: black;">
      <div class="col-12">
        <div class="row">
          <div class="col-1">
            <div class="row">
              <div class="col-6" style="border-right: 4px solid #f4b414;">
                &nbsp;
              </div>
              <div class="col-6" style="border-bottom: 4px solid #f4b414;">
                &nbsp;
              </div>
            </div>
          </div>
          <div class="col-10" style="background-color: #f4b414;">
            <div class="row">
              <div class="col-5" style="padding: 3vh">
                <div class="addresspad">
                  <h5>{{ $t('kontakt.dzialhandlowy') }}</h5>
                  <a href="mailto:sprzedaż@shopcenter.pl">sprzedaż@shopcenter.pl</a><br />
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col"> 601 765 432 Piotr Iwanek<br />
                      730 800 645 Małgorzata Warawąsowska<br />
                      730 800 437 Izabela Sztenderska<br />
                    </div>
                  </div>
                </div>

                <div class="addresspad">
                  <h5>{{ $t('kontakt.dzialprojektu') }}</h5>
                  <a href="mailto:projekt@shopcenter.pl">projekt@shopcenter.pl</a><br />
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col">604 357 588 Marcin Piskorz<br />
                      732 008 932 Norbert Woźniczka<br />
                    </div>
                  </div>
                </div>

                <div class="addresspad">
                  <h5>{{ $t('kontakt.dzialzakupow') }}</h5>
                  <a href="mailto:zakupy@shopcenter.pl">zakupy@shopcenter.pl</a><br />
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col">733 368 901 Magda Flak<br />
                    </div>
                  </div>
                </div>

                <div class="addresspad">
                  <h5>{{ $t('kontakt.dzialfinansowy') }}</h5>
                  <a href="mailto:finanse@shopcenter.pl">finanse@shopcenter.pl</a><br />
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col">535 124 000 Katarzyna Kowalczyk<br />
                      609 604 080 Agata Kusina<br />
                    </div>
                  </div>
                </div>

                <div class="addresspad">
                  <h5>{{ $t('kontakt.produkcjaimontaz') }}</h5>
                  <a href="mailto:……….@shopcenter.pl">……….@shopcenter.pl</a><br />
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col">500 253 004 Rafał Kołos - {{ $t('kontakt.montaz') }}<br />
                      606 885 386 Łukasz Golas - {{ $t('kontakt.produkcja') }}<br />
                    </div>
                  </div>
                </div>


              </div>
              <div class="col-7" style="padding: 3vh; color:black">
                <div class="row">
                  <div class="col">&nbsp;
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-7 col-10" style="background-color: rgba(255,255,255,0.4); padding: 3vh; border-radius: 10px; box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 5%);">



                    <div class="row">
                      <div class="col">
                        <h3>{{ $t('kontakt.skontaktujsieznami') }}</h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <div class="row">
                          <div class="col" style="padding-right: 0;">
                            <input class="form-control" type="text" :placeholder="$t('kontakt.imieinazwisko')"
                              :aria-label="$t('kontakt.imieinazwisko')">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col" style="padding-right: 0;">
                            <input class="form-control" type="text" :placeholder="$t('kontakt.formtelefon')"
                              :aria-label="$t('kontakt.telefon')">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col" style="padding-right: 0;">
                            <input class="form-control" type="text" :placeholder="$t('kontakt.email')"
                              :aria-label="$t('kontakt.email')">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col" style="padding-right: 0;">
                            <input class="form-control" type="file" id="formFile" style="height:45px;">
                          </div>
                        </div>

                      </div>
                      <div class="col-6" style="padding-left: 0;">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label smallitalic4conditions" for="flexCheckDefault">
                            {{ $t('kontakt.akceptujewarunki') }}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row" style="padding-top: 2vh;">
                      <div class="col">
                        <button type="submit" class="btn btn-primary">{{ $t('kontakt.wyslij') }}</button>
                      </div>
                    </div>







                  </div>
                </div>

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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "Kontakt",
  components: { Baloons, FontAwesomeIcon },
  data: () => {
    return {
      title: "Kontakt",
      homeBg: {
        bgno: 0,
        show: true,
      }
    }
  }
}
</script>
<style scoped>
.sociallinks a {
  color: white;
  font-size: 30px;
  margin-right: 10px;
}

.sociallinks:link {
  color: white;
}

.google-maps {
  width: 100%;
  height: 100%;
  border: 2px solid white;
  border-radius: 10px;
}

.addresspad {
  color: black;
  padding-bottom: 1vh;
  padding-top: 1vh;
  border-bottom: 1px dotted rgb(31, 25, 0);
}

.addresspad a{
  color: rgb(100, 82, 1);
  font-style: italic;
}

.smallitalic4conditions {
  font-size: 12px;
  font-style: italic;
}
</style>