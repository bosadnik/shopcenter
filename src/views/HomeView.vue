<script setup>
// where 'name' is the actual name of the file, and 'ext' is the extension
// i.e. myjpg.jpg

import mainbg0 from '@/assets/mainbg0.jpg'
import mainbg1 from '@/assets/mainbg1.jpg'
import mainbg2 from '@/assets/mainbg2.jpg'
import mainbg3 from '@/assets/mainbg3.jpg'
import { VueCompareImage } from 'vue3-compare-image'
import Baloons from "@/components/Baloons.vue";
import owdr01_1 from '@/assets/odwizualizacjidorealizacji01_01.jpg'
import owdr01_2 from '@/assets/odwizualizacjidorealizacji01_02.jpg'
import owdr02_1 from '@/assets/odwizualizacjidorealizacji02_01.jpg'
import owdr02_2 from '@/assets/odwizualizacjidorealizacji02_02.jpg'




let mainBgs = [mainbg0, mainbg1, mainbg2, mainbg3];




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
      }" :style="{ backgroundImage: `url(${mainBgs[homeBg.bgno]})` }">
        <!-- :style="{ backgroundImage: `url(${getImageUrl('../assets/mainbg' + homeBg.bgno + '.jpg})` }" -->
        <!-- :style="{ backgroundImage: 'url(@/assets/mainbg'+homeBg.bgno+'.jpg' }" -->
        <div class="row">
          <div class="col-9">
            <div class="row">
              <div class="col-2"></div>
              <div class="col">
                <h4 class="white" style="margin-top: 2vh; margin-bottom: 10vh;">
                  &nbsp;<!-- FURNITURE DESING & PRODUCTION -->
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
                <h1 class="white h0" style="text-transform: uppercase;">{{$t('home.producentMebli')}}<BR />
                  {{$t('home.zPasji')}}
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
        <div class="row">
          <div class="col-9" :style="{
            backgroundImage: `url(/bg/odadoz01.jpg)`,
            backgroundPosition: 'center bottom',
            backgroundSize: '100% auto',
          }">
            <div class="row">
              <div class="col-2" style="border-right: 4px solid white; background-color: black;">

              </div>
              <div class="col" style="background-color: black; padding: 3vw; padding-right: 6vw;">
                <h1 class="h0" v-html="$t('home.mebleOdAdoZ')"></h1>
                <p>{{$t('home.bezwgledu')}}
                  <br />
                  {{$t('home.zobacz')}}
                </p>

              </div>
            </div>
            <div class="row">
              <div class="col-2" style="border-right: 4px solid white; height: 20vh;">

              </div>
              <div class="col">
              </div>
            </div>
            <div class="row">
              <div class="col-2" style="border-top: 4px solid white; height: 13vh;">

              </div>
              <div class="col">
              </div>
            </div>


          </div>
          <div class="col" :style="{
            backgroundImage: `url(/bg/odadoz02.jpg)`,
            backgroundPosition: 'left bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
          }">
          </div>
        </div>
        <div class="row" style="padding-top: 3vh; height: 38vh; padding-left:3vw; padding-right:3vw">
          <div class="col-1"></div>
          <div class="col fontBlack">
            <h5><span class="fontRed">1.</span> {{$t('home.konsultacja')}}</h5>
            {{$t('home.konsultacjaText')}}
          </div>
          <div class="col fontBlack">
            <h5><span class="fontRed">2.</span> {{$t('home.koncepcja')}}</h5>
            {{$t('home.koncepcjaText')}}

          </div>
          <div class="col fontBlack">
            <h5><span class="fontRed">3.</span> {{$t('home.projekt')}}</h5>
            {{$t('home.projektText')}}
          </div>
          <div class="col fontBlack">
            <h5><span class="fontRed">4.</span> {{$t('home.realizacja')}}</h5>
            {{$t('home.realizacjaText')}}
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </div>

    <!-- SCREEN 3 -->
    <div class="row" style="height: 100vh; background-color: black;">
      <div class="col">
        <div class="row" style="height: 65vh; background-color: black;">
          <div class="col-1"></div>
          <div class="col-3" :style="{
            display: 'flex',
            alignItems: 'flex-end',
            backgroundImage: `url(bg/konstrukcjestalowe01.jpg)`,
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            borderRight: '15px solid black',
            paddingBottom: '4vh',


          }">
            <h1 class="h0" style="margin-left: -4vw; line-height: 0.6em;">
              <span style="font-size: 0.4em">{{$t('home.konstrukcje')}}</span>
              <BR />
              {{$t('home.stalowe')}}
            </h1>
          </div>
          <div class="col-3" :style="{
            backgroundImage: `url(bg/konstrukcjestalowe02.jpg)`,
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            borderRight: '15px solid black',

          }"></div>
          <div class="col-3" :style="{
            backgroundImage: `url(bg/konstrukcjestalowe03.jpg)`,
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            borderRight: '15px solid black',

          }"></div>
          <div class="col-2" :style="{
            backgroundImage: `url(bg/konstrukcjestalowe04.jpg)`,
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 100%',

          }"></div>
        </div>
        <div class="row" style="height: 35vh; background-color: black;">
          <div class="col-1"></div>
          <div class="col-5" style="padding-top: 2vh">
            {{ $t('home.konstrukcjeStaloweText') }}
          </div>
          <div class="col-5" style="padding-top: 4vh" v-html="$t('home.szukaszNietypowychRozwiazan')">
          </div>

        </div>
      </div>
    </div>

    <!-- SCREEN 4 and 5 -->
    <div class="row" style="background-color: black;">
      <div class="col-6">

        <div class="row" :style="{
          backgroundImage: `url(bg/fitout01.jpg)`,
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          height: '100vh',
        }">

          <div class="col">
            <div class="row" style="height: 25vh;">
              <div class="col-8" style="
            height: 25vh;
            border-bottom: 4px solid white;">
              </div>
            </div>
            <div class="row" style="height: 75vh;">
              <div class="col-8" style="
            height: 75vh;
            border-right: 4px solid white;">
              </div>
            </div>
          </div>
        </div>
        <div class="row" :style="{
          backgroundImage: `url(bg/fitout02.jpg)`,
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
          height: '100vh',
        }">

          <div class="col">
            <div class="row" style="height: 75vh;">
              <div class="col-8" style="
            height: 75vh;
            border-right: 4px solid white;">
              </div>
            </div>
            <div class="row" style="height: 25vh;">
              <div class="col-8" style="
            height: 25vh;
            border-top: 4px solid white;">
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="col-6" style="
              padding-left: 3vw;
              padding-right: 6vw;
              padding-top: 3vh;
              padding-bottom: 3vh;
              font-size: 20px;
              line-height: 1.6em;
              ">
        <h1 class="h0" style="line-height: 0.8em;padding-bottom: 0.8em;">FIT OUT <BR />
          <span style='font-size:0.6em'>– PRZESTRZEŃ NA NOWO</span>
        </h1>

        <p style="padding-bottom: 2em;">Coraz więcej inwestorów decyduje się na realizację fit out firmy, przestrzeni
          biurowych i handlowych,
          restauracji i miejsc użyteczności publicznej. Oszczędzają w ten sposób czas i ograniczają formalności,
          korzystając z usług jednej profesjonalnej firmy, która w sposób kompleksowy zajmuje się przygotowaniem
          powierzchni według oczekiwań i życzeń Klienta.
        </p>
        <p style="padding-bottom: 2em;">
          <B style="font-size: 1.2em;">FIT OUT</B> to kompleksowa usługa, która obejmuje swoim zakresem <B
            style="font-size: 1.2em;">wszystkie etapy</B>, które dla Państwa zrealizujemy:
        </p>
        <ul style="padding-bottom: 2em;">
          <li>identyfikacje potrzeb Klienta</li>
          <li>przygotowanie wstępnej koncepcji dopasowanej pod indywidualne potrzeby inwestora</li>
          <li>opracowanie projektu koncepcyjnego (z ew. uwzględnieniem norm Państwowej Inspekcji Sanitarnej)</li>
          <li> przygotowanie wizualizacji projektu</li>
          <li>dobór elementów wykończenia wnętrz</li>
          <li>realizację projektu – montaż</li>
          <li>przygotowanie pełnej dokumentacji technicznej</li>
          <li>prowadzenie zrównoważonej gospodarki odpadami</li>
        </ul>
        <p style="padding-bottom: 2em;">
          Co oznacza, że inwestor nie musi już nadzorować prac kilku wykonawców np. z branży sanitarnej, elektrycznej,
          czy
          budowlanej.
          Prace na każdym etapie prowadzone są w oparciu o ustalony wcześniej budżet.
        </p>
        <p style="padding-bottom: 2em;">
          Powierzając to zadanie specjalistom naszej firmy SHOPCENTER, zyskują Państwo pewność, że zgodnie z założeniami
          i
          budżetem przechodząc przez wszystkie etapy robót, doprowadzimy do oddania gotowych do użytku i wyposażonych
          powierzchni ku Państwa zadowoleniu.
        </p>

        <div style="padding: 3vw">
          <div class="row" style="height: 30px;">
            <div class="col-2" style="border-left: 2px solid white;border-top: 2px solid white"></div>
          </div>

          <div class="row" style="">
            <div class="col-1"></div>
            <div class="col-11">
              Według raportu Światowej Organizacji Zdrowia
              dla 47% pracowników otoczenie pracy ma wpływ na wykonywane obowiązki.
            </div>

          </div>

          <div class="row" style="height: 30px">
            <div class="col-10"></div>
            <div class="col-2" style="border-right: 2px solid white;border-bottom: 2px solid white"></div>
          </div>
        </div>

      </div>



    </div>
    <!-- SCREEN 6 -->
    <div class="row" style="background-color: white; height: 100vh;">
      <div class="col">
        <div class="row" style="background-color: black; height: 5vh;"></div>
        <div class="row" style="background-color: white; height: 90vh;">
          <div class="col">
            <div class="row" style="height: 10h; padding-top: 3vh;">
              <div class="col-5"></div>
              <div class="col-6">
                <h1 class="h0" style="color: black;">OD WIZUALIZACJI</h1>
              </div>
              <div class="col-1"></div>
            </div>
            <div class="row" style=" ">
              <div class="col-6"></div>
              <div class="col-5">
                <h1 class="h0" style="color: black;">DO REAZLIZACJI...</h1>
              </div>
              <div class="col-1"></div>
            </div>
            <div class="row" style="height: 50vh;">
              <div class="col-6" style="display: flex;justify-content: center;align-items: center;">
                <!-- <VueCompareImage :left-image="owdr01_1" :right-image="owdr01_2" /> -->
                <!-- <img :src="bg/odwizualizacjidorealizacji01_01.jpg" /> -->
                <VueCompareImage :left-image="owdr01_1" :right-image="owdr01_2" />
              </div>
              <div class="col-6" style="display: flex;justify-content: center;align-items: center;">
                <VueCompareImage :left-image="owdr02_1" :right-image="owdr02_2" />
                <!-- <VueCompareImage :leftImage="bg/odwizualizacjidorealizacji02_01.jpg"
                  :rightImage="bg/odwizualizacjidorealizacji02_02.jpg" />; -->
                <!-- <img :src="bg/odwizualizacjidorealizacji01_01.jpg" /> -->
              </div>

            </div>


          </div>
        </div>
        <div class="row" style="background-color: black; height: 5vh;"></div>
      </div>
    </div>
    <!-- SCREEN 7 -->
    <div class="row" :style="{
      height: '100vh',
    }">
      <div class="col">
        <div class="row" :style="{
          backgroundImage: `url(bg/nowe_miejsce.jpg)`,
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          height: '95vh',

        }">
          <div class="col">
            <div class="row" style="height: 23vh;">
              <div class="col-3"></div>
              <div class="col-4">
                <h1 class="fontWhite h0" style="
                  display: flex;
                  justify-content: left;
                  align-items: end;
                
                  height: 23vh;
                ">Nowe miejsce,</h1>
              </div>
            </div>
            <div class="row">
              <div class="col-3" style="
                  background-color: #651d2e;
              "></div>
              <div class="col-4" style="
                  background-color: #651d2e;
              ">
                <h1 class="fontWhite h0" style="
                  display: flex;
                  justify-content: left;
                  align-items: center;
                
                  height: 14vh;
              
                ">Nowy adres!</h1>
              </div>
              <div class="col-1" style="
                  background-color: #651d2e;
              ">
              </div>
            </div>
            <div class="row">
              <div class="col-6" style="
                  background-color: #651d2e;
              
              ">
              </div>
              <div class="col-2" style="
                  background-color: #651d2e;
              ">
              </div>
              <div class="col-4" style="
                  background-color: black;
              ">&nbsp;</div>
            </div>
            <div class="row">
              <div class="col-5"> </div>
              <div class="col-7" style="
                  background-color: black;
                  padding-top: 1vh;
                  padding-left: 4vw;
                  padding-right: 20vw;
                  line-height: 1.5em;
                  height: 54vh;
              ">
                <h3>PRZEPROWADZKA …</h3>
                <p>firmy, restauracji czy może przeniesienie biura?</p>

                <p>Wiele może być powodów, dla których podejmowana jest decyzja dotycząca zmiany siedziby firmy.
                  Zazwyczaj jednak wiąże się to z rozwojem, potrzebą pozyskania nowych Klientów lub wejściem na nowy
                  rynek.</p>
                <p>Niezależnie od przyczyny, realizujemy każde tego typu zlecenie profesjonalnie i starannie.</p>

              </div>
            </div>

          </div>
        </div>
        <div class="row" style="height: 5vh;"> </div>
      </div>
    </div>

    <!-- SCREEN 8 -->
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">

            <div class="row" style="height: 13vh;">
              <div class="col" style="text-align: center;">
                <h1 class="fontBlack">ZMIANA LOKALIZACJI – krok po kroku
                </h1>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="row">
                  <div class="col-6 fontBlack">
                    <img :src="'bg/zaplanowanieharmonogramu.png'" /><BR />
                    <h4>1. ZAPLANOWANIE HARMONOGRAMU</h4>
                    prac z uwzględnieniem wymaganych zgód i pozwoleń

                  </div>
                  <div class="col-6 fontBlack">
                    <img :src="'bg/inwentaryzacja.png'" /><BR />
                    <h4>2. INWENTARYZACJA </h4>
                    obecnego budynku – ewentualna utylizacja zużytego sprzętu

                  </div>
                </div>
              </div>
              <div class="col-8 ">
                <div class="row">
                  <div class="col-3 fontBlack">
                    <img :src="'bg/przygotowaniizabezpieczenie.png'" /><BR />
                    <h4>3. PRZYGOTOWANIE I ZABEZPIECZENIE</h4>
                    - od sprzętu, przez dokumenty, aż po meble.
                  </div>

                  <div class="col-3 fontBlack">
                    <img :src="'bg/transport.png'" /><BR />
                    <h4>4. TRANSPORT</h4>do nowej lokalizacji

                  </div>
                  <div class="col-3 fontBlack">
                    <img :src="'bg/montaziaranzacja.png'" /><BR />
                    <h4>5. MONTAŻ I ARANŻACJA </h4>nowej przestrzeni
                  </div>
                  <div class="col-3 fontBlack">
                    <div class="row">
                      <div class="col-12">
                        <div class="row">
                          <div class="col">
                            <img :src="'bg/dajemydrugiezycie.png'" /><BR />
                          </div>
                        </div>
                        <div class="row" style="height: 10vh;">
                          <div class="col-12">
                            <h4>6. DAJEMY DRUGIE ŻYCIE</h4>
                            starym meblom
                          </div>
                        </div>
                        <div class="row" style="height: 10vh;">
                          <div class="col-6" style="border-right: 4px solid #f4b414">
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
    </div>

    <!-- SCREEN 9 -->
    <div class="row" style="height: 100vh; background-color: black;">
      <div class="col">
        <div class="row">
          <div class="col-4" style="text-align: right; align-content: top; padding-right: 0px;">
            <img :src="'bg/srodowisko.jpg'" style="height: 80vh;padding-top: 10vh;" />
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-9 fontBlack" style="padding-top: 10vh;">
                <div>
                  <h1 class="h0 fontWhite" style="margin-left:-8vw; line-height: 0.8em;"><span
                      style="font-size:0.6em">DBAMY</span><BR />O ŚRODOWISKO</h1>
                </div>
                <div class="fontWhite">
                  <p>
                    Działając w branży projektowo-wykonawczej, zdajemy sobie sprawę z naszej odpowiedzialności za
                    wpływanie na to, jak można przeobrażać przestrzeń mając na uwadze zrównoważoną przyszłość.
                    Dlatego też staramy się pomóc naszym Klientom w gospodarowaniu odpadami.
                  </p>
                  <p>
                    Oferujemy także <span class="fontGreen">usługę wywozu</span> zużytych mebli do <span
                      class="fontGreen">utylizacji</span> <img :src="'bg/basket.png'" /> - pozwala
                    to w szybkim czasie
                    przygotować pomieszczenie pod nową aranżacje.
                    Nasz zespół zajmie się:
                  </p>
                  <ul>
                    <li>demontażem</li>
                    <li>pakowaniem – podstawiamy kontener na odpady</li>
                    <li>wywozem</li>
                  </ul>
                  <p>
                    starych mebli, abyś miał miejsce na nowe.
                  </p>
                  <p>
                    Co się dzieje z rzeczami, które odbieramy? Przechodzą one segregację, a następnie są
                    przygotowane
                    do utylizacji. Dzięki recyklingowi odzyskujemy surowce, które zostają ponownie wykorzystane w
                    różnych gałęziach przemysłu.
                  </p>

                </div>
              </div>
              <div class="col-3 fontBlack">
                <div class="row">
                  <div class="col-12">
                    <div class="row" style="height: 10vh;">
                      <div class="col-6" style="border-right: 4px solid #f4b414">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-6"
                        style="height:10vh; color:#f4b414; text-align: right; padding-top:10px; padding-bottom:10px; padding-right: 0px;">
                        <div style="position: absolute; width: 200px; margin-left:auto; right:0">
                          <h4>policzymy
                            Twój
                            ślad węglowy
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="row" style="height: 80vh;">
                      <div class="col-6" style="border-right: 4px solid #f4b414">

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

    <!-- SCREEN 10 -->
    <div class="row" :style="{
      backgroundImage: `url(bg/meblezdrugiejreki.jpg')`,
      backgroundPosition: 'left bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh'
    }">

      <div class="col">

        <div class="row" style="height: 10vh;">
          <div class="col-10" style="">



          </div>

          <div class="col-2" style="">
            <div class="row">
              <div class="col-6" style="height: 10vh; border-right: 4px solid #f4b414"></div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-3" style="">
            <div class="row" style="height: 18vh; ">
              <div class="col">

              </div>
            </div>
            <div class="row align-items-end" style="">
              <div class="col-12" style="background-color: black; height: 4vh"></div>
            </div>
          </div>
          <div class="col-5" style="background-color: #f4b414; padding-top: 2vh; padding-left: 2vw; ">
            <h1 class="fontWhite">
              Meble „z drugiej ręki”<BR />
              - Twoje korzyści

            </h1>
          </div>


          <div class="col-2" style="">
            <div class="row">
              <div class="col-12" style="height: 12vh;  border-bottom: 4px solid #f4b414"></div>
            </div>

          </div>

          <div class="col-2" style="">
            <div class="row">
              <div class="col-6" style="height: 12vh; border-right: 4px solid #f4b414;border-bottom: 4px solid #f4b414">
              </div>
            </div>
            <div class="row">
              <div class="col-11"></div>
            </div>


          </div>
        </div>
        <div class="row">
          <div class="col-6"
            style="background-color: black; padding-left: 5vw; padding-right: 5vw; padding-top: 3vh; padding-bottom: 3vh;">
            <p>Szukasz mebli do swojego biura, które nie tylko spełnią Twoje potrzeby, ale także przyczynią się do
              ochrony naszej planety?</p>

            <p>
              W duchu zrównoważonego rozwoju oferujemy Państwu szeroki wybór używanych mebli biurowych jakości
              PREMIUM – uznanych i najlepszych producentów, które umożliwiają zachowanie maksymalnego komfortu
              podczas pracy.
              Stworzone zgodnie z najnowszymi trendami z myślą o nowoczesnej, biurowej elegancji idealnie dopasują
              się do rozmaitych aranżacji.
            </p>

            <p>Zapraszamy do sklepu <a href="https://rebench.io" class="scbtnlink">rebench.io</a>, gdzie znajdą Państwo
              nowoczesne systemy wyposażenia przestrzeni
              biurowych w atrakcyjnej cenie. </p>

            <div class="text-center">
              <button class="scbtn" onclick="window.location.href='https://rebench.io'">ZAPRASZAMY</button>
            </div>
          </div>
        </div>


      </div>
    </div>

    <!-- SCREEN 11 -->
    <div class="row" style="height: 60vh; background-color: white;">
      <div class="col">
        <div class="row" style="height: 10vh;">
          <div class="col fontBlack text-center" style="padding-top: 5vh;">
            <h2>ZAUFALI NAM:</h2>
          </div>
        </div>
        <div class="container logos">
          <div class="row justify-content-center">
            <div class="col">
              <img :src="'loga/NowyStylLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col" style="padding-top: 20px">
              <img :src="'loga/smayLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col">
              <img :src="'loga/4fLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col">
              <img :src="'loga/AtpLogo.jpg'" class="img-fluid" />
            </div>

          </div>


          <div class="row justify-content-center">
            <div class="col">
              <img :src="'loga/StarbagLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col" style="padding-top: 20px">
              <img :src="'loga/philipMorrisLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col">
              <img :src="'loga/whiteStarLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col">
              <img :src="'loga/NvhLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col">
              <img :src="'loga/NestinoLogo.jpg'" class="img-fluid" />
            </div>

          </div>


          <div class="row justify-content-center">
            <div class="col">
              <img :src="'loga/SamiswoiLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col">
              <img :src="'loga/LewiatanLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col">
              <img :src="'loga/EuroLogo.jpg'" class="img-fluid" />
            </div>
            <div class="col">
              <img :src="'loga/GroszekLogo.jpg'" class="img-fluid" />
            </div>
          </div>



        </div>
      </div>
    </div>

        <!-- SCREEN 12 -->
        <div class="row" style="background-color: black;">
          <div class="col">

            <div class="row" style="height: 10px;">
              <!-- <div class="col text-center" style="padding-top: 5vh;">
                <h2>NASZE REALIZACJE:</h2>
              </div> -->
            </div>
            
            <div class="containercontainer-fluid">

              <div class="row" style="">
                <div
                  v-bind:class="{ 'col-4': true, 'naszeRealizacjeBox': true, 'w-100': true, 'fade-leave-active': !homeBg.show, 'fade-enter-active': homeBg.show }"
                  :style="{ backgroundImage: `url(${naszeRealizacjaBgs[nrIdx[0]]})` }">
                  &nbsp;
                </div>
                <div
                  v-bind:class="{ 'col-4': true, 'naszeRealizacjeBox': true, 'w-100': true, 'fade-leave-active': !homeBg.show, 'fade-enter-active': homeBg.show }"
                  :style="{ backgroundImage: `url(${naszeRealizacjaBgs[nrIdx[1]]})` }">
                </div>
                <div
                  v-bind:class="{ 'col-4': true, 'naszeRealizacjeBox': true, 'w-100': true, 'fade-leave-active': !homeBg.show, 'fade-enter-active': homeBg.show }"
                  :style="{ backgroundImage: `url(${naszeRealizacjaBgs[nrIdx[2]]})` }">
                </div>
              </div>
              <div class="row" style="height: 5vh;">
              </div>
            </div>
          </div>
        </div>



  </div>

  <!-- <main class="fontBlack">
    {{ $t('home }}
  </main> -->
</template>

<script>

import naszeRealizacja01 from "@/assets/naszerealizacja01.png";
import naszeRealizacja02 from "@/assets/naszerealizacja02.png";
import naszeRealizacja03 from "@/assets/naszerealizacja03.png";
import naszeRealizacja04 from "@/assets/naszerealizacja04.png";
import naszeRealizacja05 from "@/assets/naszerealizacja05.png";
import naszeRealizacja06 from "@/assets/naszerealizacja06.png";
import naszeRealizacja07 from "@/assets/naszerealizacja07.png";

const naszeRealizacjaBgs =[naszeRealizacja01, naszeRealizacja02, naszeRealizacja03, naszeRealizacja04, naszeRealizacja05, naszeRealizacja06, naszeRealizacja07];


let naszeRealizacje = () => {
  // Function to generate an array of 3 different random numbers between 1 and 8
  const generateUniqueRandomNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 3) {
      const randomNumber = Math.floor(Math.random() * 7);
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  };

  return generateUniqueRandomNumbers();
};
let rotateTimeout;


export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      homeBg: {
        bgno: 0,
        show: true,
      },
          nrIdx: naszeRealizacje(),
    };
  },
  methods: {
    rotateMainImate() {
      clearInterval(rotateTimeout);
      rotateTimeout = setInterval(async () => {
        if (this.homeBg.bgno == 3) {
          this.homeBg.bgno = 0;
        }
        else {
          this.homeBg.bgno++;
        }
        this.nrIdx = naszeRealizacje();
        // await wait(600);
        // this.homeBg.show = true;
      }, 6000);
    },
  },
  created() {
    this.rotateMainImate();
  },
}
</script>

<style scoped>
.title1 {
  margin-top: 20px;
}

.h0 {
  font-size: 4.5vw;

}

.white {
  color: white;
}

.bal {
  margin-top: 20px;
}

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

.naszeRealizacjeBox {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-transition: background 1s;
  -moz-transition: background 1s;
  -o-transition: background 1s;
  transition: background 1s;
  height: 40vh;
  border: 10px solid black;
}

.fullHeight {
  height: 100vh;
}

.logos .row {
  padding-top: 5vh
}
</style>