<script setup>

import onasbg from '@/assets/onasbg.jpg'

</script>

<template>
  <div class="container-fluid">
    <div class="sticky-top">
                    <Baloons style="position: absolute; right: 0;z-index: 10;" />
    </div>

    <!-- SCREEN 1 -->

    <div class="row" style="height: 85vh">
      <div v-bind:class="{
        'fade-leave-active': !homeBg.show,
        'fade-enter-active': homeBg.show,
        'col': true,
        'homeDiv': true
         }" :style="{ backgroundImage: `url(${onasbg})` }">

        <div class="row">
          <div class="col-9">
            <div class="row">
              <div class="col-2"></div>
              <div class="col">
                <h4 class="white" style="margin-top: 2vh; margin-bottom: 10vh;">
                  <!-- FURNITURE DESING & PRODUCTION --> &nbsp;
                </h4>
              </div>
            </div>
            <div class="row">
              <div class="col-2" style="border-bottom: 4px solid white;"></div>
            </div>
            <div class="row">
              <div class="col-2" style="border-right: 4px solid white; height: 10vh;"></div>
            </div>
            <div class="row">
              <div class="col-1" style=""></div>
              <div class="col" style="padding-top: 4vh;padding-bottom: 4vh; height: 26vh">
                <h1 class="white h0">{{$t('onas.poznajmysie')}}<BR />
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-1"></div>
              <div class="col-2" style="padding-bottom: 4vh;">
                <h3 class="white" style="text-align: center">2005</h3>
              </div>
            </div>

            <div class="row">
              <div class="col-2" style="border-right: 4px solid white; height: 25vh;"></div>
            </div>
          </div>
          <div class="col-3 col-auto order-sm-last" style=" justify-content: right;">
            <div class="row">
              <div class="col"></div>
              <div class="col col-auto order-sm-last">
                <!-- <Baloons class="sticky-top" style="padding-top: 5vh;" /> -->
              </div>
            </div>

          </div>
        </div>
      </div>




    </div>

   <!-- SCREEN 2 -->
    <div class="row" style="height: 100vh;">
      <div class="col">
        <div class="row" style="background-color: black; height: 100vh;">
          <div class="col-9">
            <div class="row">
              <div class="col-2" style="border-right: 4px solid white; background-color: black;">
              </div>
              <div class="col" style="background-color: black; padding: 3vw; padding-right: 6vw;">
                <h1 class="h1">SHOPCENTER</h1>
                <p>
                  {{ $t('onas.toprzedewszystkimzespol') }}
                </p>

              </div>
            </div>
            <div class="row">
              <div class="col-1"></div>
              <div class="col-4" style="padding-left: 2vw;">
                <h1>{{$t('onas.co')}}</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-1" style="background-color: #156082;"></div>
              <div class="col-4" style="padding-left: 2vw;background-color: #156082;">
                <h1 v-html="$t('onas.mozemytobiezaoferowac')">
                </h1>
              </div>
            </div>



          </div>
          <div class="col">
          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN 3 -->
    <div class="row" style="height: 100vh;">
      <div class="col">
        <div class="row" style="background-color: black; height: 100vh;">
          <div class="col">
            <div class="row">
              <div class="col-1"></div>
              <div class="col">
                <h1 class="h4 red">W BUDOWIE</h1>
                <p>
                  UNDER CONSTRUCTION

                </p>

              </div>
              <div class="col-1"></div>

            </div>



          </div>
        </div>
      </div>
    </div>

    <!-- SCREEN 4 -->
    <div class="row" style="height: 100vh;">
      <div class="col">
        <div class="row" style="background-color: black; height: 100vh;">
          <div class="col">
            <div class="row">
              <div class="col-1"></div>
              <div class="col">
                <p>
                  {{ $t('onas.firmascswiadczyuslugi') }}
                </p>

              </div>
              <div class="col-1"></div>
            </div>

            <div class="row" style="padding-top: 20px;">
              <div class="col-1"></div>
              <div class="col-5" v-html="$t('onas.firmascswiadczyuslugiExtended')">
              </div>
              <div class="col-5">
                <img :src="'onas/onas004.jpg'" style="width: 100%; height: auto;" />

              </div>
              <div class="col-1"></div>
            </div>


          </div>
        </div>
      </div>
    </div>
    <!-- SCREEN 5 -->
    <div class="row" style="height: 100vh;">
      <div class="col">
        <div class="row fontBlack" style="background-color: white; height: 100vh;">
          <div class="col">
            <div class="row" style="height: 5vh; background-color: black;">
              <div class="col-0"></div>
            </div>
            <div class="row" style="padding-top: 20px; height: 90vh">
              <div class="col">

                <div class="row">
                  <div class="col-1"></div>
                  <div class="col">
                    <h1 class="inline">SHOPCENTER</h1>
                    <h1 class="h0 inline">{{$t('onas.wliczbach')}}</h1>
                  </div>
                  <div class="col-1"></div>
                </div>
                <div class="row" style="height: 70vh">
                  <div class="col-1"></div>
                  <div class="col-2" style="height: 100%;">
                    <div class="container" style="height: 100%;">
                      <div class="row" style="height: 70%;">
                        <div class="col" :style="{
                          backgroundImage: `url('onas/scwliczbach01.jpg')`,
                          backgroundPosition: 'center bottom',
                          backgroundSize: 'cover',
                        }">
                        </div>
                      </div>
                      <div class="row" style="height: 30%; background-color: black;">
                        <div class="col fontWhite">
                          <div class="container">
                            <div class="row">
                              <div class="col">
                                <div align="center" style="font-size: 2vw; padding-top: 1vh;">19+</div>
                                <hr style="border: 1px solid white; width: 70%">
                                <div style="font-size: 1vw" align="center">{{$t('onas.latdosciadczenia')}}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-2" style="height: 100%;">
                    <div class="container" style="height: 100%;">
                      <div class="row" style="height: 70%;">
                        <div class="col" :style="{
                          backgroundImage: `url('onas/scwliczbach02.jpg')`,
                          backgroundPosition: 'center bottom',
                          backgroundSize: 'cover',
                        }">
                        </div>
                      </div>
                      <div class="row" style="height: 30%; background-color: black;">
                        <div class="col fontWhite">
                          <div class="container">
                            <div class="row">
                              <div class="col">
                                <div align="center" style="font-size: 2vw; padding-top: 1vh;">475+</div>
                                <hr style="border: 1px solid white; width: 70%">
                                <div style="font-size: 1vw" align="center">{{$t('onas.zadowolonychklientow')}}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-2" style="height: 100%;">
                    <div class="container" style="height: 100%;">
                      <div class="row" style="height: 70%;">
                        <div class="col" :style="{
                          backgroundImage: `url('onas/scwliczbach03.jpg')`,
                          backgroundPosition: 'center bottom',
                          backgroundSize: 'cover',
                        }">
                        </div>
                      </div>
                      <div class="row" style="height: 30%; background-color: black;">
                        <div class="col fontWhite">
                          <div class="container">
                            <div class="row">
                              <div class="col">
                                <div align="center" style="font-size: 2vw; padding-top: 1vh;">100 000m²</div>
                                <hr style="border: 1px solid white; width: 70%">
                                <div style="font-size: 1vw" align="center">{{$t('onas.wykonczonychprzestrzeni')}}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-2" style="height: 100%;">
                    <div class="container" style="height: 100%;">
                      <div class="row" style="height: 70%;">
                        <div class="col" :style="{
                          backgroundImage: `url('onas/scwliczbach04.jpg')`,
                          backgroundPosition: 'center bottom',
                          backgroundSize: 'cover',
                        }">
                        </div>
                      </div>
                      <div class="row" style="height: 30%; background-color: black;">
                        <div class="col fontWhite">
                          <div class="container">
                            <div class="row">
                              <div class="col">
                                <div align="center" style="font-size: 2vw; padding-top: 1vh;">1 100+</div>
                                <hr style="border: 1px solid white; width: 70%">
                                <div style="font-size: 1vw" align="center">{{$t('onas.dostarczonychmebli')}}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-2" style="height: 100%;">
                    <div class="container" style="height: 100%;">
                      <div class="row" style="height: 70%;">
                        <div class="col" :style="{
                          backgroundImage: `url('onas/scwliczbach05.jpg')`,
                          backgroundPosition: 'center bottom',
                          backgroundSize: 'cover',
                        }">
                        </div>
                      </div>
                      <div class="row" style="height: 30%; background-color: black;">
                        <div class="col fontWhite">
                          <div class="container">
                            <div class="row">
                              <div class="col">
                                <div align="center" style="font-size: 2vw; padding-top: 1vh;">602+
                                </div>
                                <hr style="border: 1px solid white; width: 70%">
                                <div style="font-size: 1vw" align="center">{{$t('onas.wypityczhfilizanek')}}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="col-1"></div>
                </div>


              </div>
            </div>
            <div class="row" style="height: 5vh; background-color: black;">
              <div class="col"></div>
            </div>


          </div>
        </div>
      </div>
    </div>




  </div>


</template>
<script>
import Baloons from "@/components/Baloons.vue";

export default {
  name: "Onas",
  components: { Baloons },
  data: function () {
    return {
      homeBg: {
        bgno: 0,
        show: true,
      }
    };
  },
};
</script>
<style scoped>
.homeDiv {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;
  height: 85vh;
}


.li-box {
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  font-size: 0.8em;
  margin-bottom: 3px;
}

.inline {
  display: inline;
}
</style>
