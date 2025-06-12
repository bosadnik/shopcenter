<script setup>
import mainbg3 from '@/assets/mainbg3.jpg'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const formData = ref({
  name: '',
  city: '',
  phone: '',
  email: '',
  message: '',
  file: null,
  acceptTerms: false,
  fileName: null
})

const loading = ref(false)
const errors = ref({})
const showSuccessMessage = ref(false)
const errorMessage = ref('')

const API_ENDPOINT = import.meta.env.DEV ? 'http://localhost:8000/maxfliz.php' : '/maxfliz.php';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const validateForm = () => {
  errors.value = {}

  if (!formData.value.name) errors.value.name = 'Imię jest wymagane'
  // if (!formData.value.phone) errors.value.phone = 'Phone is required'
  if (!formData.value.email) {
    errors.value.email = 'Email jest wymagany'
  } else if (!validateEmail(formData.value.email)) {
    errors.value.email = 'Nieprawidłowy format emaila'
  }
  if (!formData.value.message) errors.value.message = 'Wiadomość jest wymagana'
  if (!formData.value.acceptTerms) errors.value.terms = 'Zaakceptuj warunki'
  console.log(errors.value)
  return Object.keys(errors.value).length === 0
}

const wait = (ms) => new Promise(resolve => {
  setTimeout(() => {
    resolve({ ok: true })
  }, ms)
})

const handleSubmit = async () => {
  if (!validateForm()) return

  loading.value = true
  showSuccessMessage.value = false
  errorMessage.value = ''
  try {
    // Convert file to base64 if exists
    let fileData = null;
    if (formData.value.file) {
      console.log('File selected:', formData.value.file.name);
      console.log('File size:', formData.value.file.size);
      console.log('File type:', formData.value.file.type);

      fileData = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          console.log('File read successfully');
          console.log('Base64 data length:', e.target.result.length);
          resolve(e.target.result);
        };
        reader.onerror = (e) => {
          console.error('Error reading file:', e);
          resolve(null);
        };
        reader.readAsDataURL(formData.value.file);
      });
    }

    const dataToSend = {
      name: formData.value.name,
      city: formData.value.city,
      phone: formData.value.phone,
      email: formData.value.email,
      message: formData.value.message,
      file: fileData,
      fileName: formData.value.fileName
    };

    console.log('Sending data with file:', fileData ? 'yes' : 'no');

    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend)
    });

    if (!response.ok) {
      throw new Error(response.message);
    }

    const result = await response.json();
    if (result.success) {
      showSuccessMessage.value = true;
      // Clear form
      formData.value = {
        name: '',
        city: '',
        phone: '',
        email: '',
        message: '',
        file: null,
        acceptTerms: false,
        fileName: null
      };
    } else {
      errorMessage.value = result.message;
      console.error(result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.value = 'An error occurred while sending the message. Please try again.';
  } finally {
    loading.value = false;
  }
}

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log('File selected:', file.name);
    console.log('File size:', file.size);
    console.log('File type:', file.type);
    formData.value.file = file;
    formData.value.fileName = file.name;
  } else {
    console.log('No file selected');
    formData.value.file = null;
    formData.value.fileName = null;
  }
}
</script>
<template>
  <div class="container">

    <!-- SCREEN 1 -->
    <div class="row" style="background-color: black; border: 2px solid black;">
      <div class="col-12" style="background-color: white; color:black">
        <div class="row">

          <div class="col text-right" style="padding-top: 2vh; padding-bottom: 2vh;">
            <table style="margin-left: auto;">
              <tbody>
               <tr>
                <td valign="bottom"><span class="partner_program">{{ $t('maxfliz.program') }}</span></td>
                <td><img src="@/assets/maxfliz_logo.jpg" style="width: 30vw" alt="Maxflix Partner"></td>
                <td valign="bottom"><span class="partner_partner">{{ $t('maxfliz.partner') }}</span></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div class="row">
          
          <div class="col szukaszBg" :style="{
            backgroundImage: `url(/bg/maxflixbg001_white.jpg)`,
            backgroundPosition: 'center bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '30px',
            minHeight: '60vw'
          }">
            <div class="row">
              <div class="col-2"></div>
              <div class="col szukaszMebliNaWymiar text-right" v-html="$t('maxfliz.szukasz')" />
               <div class="col-2"></div>
            </div>
            <div class="row">
              <div class="col-1"></div>
              <!-- <div class="col programMaxflixPartner" v-html="$t('maxfliz.programmaxflizpartner')"/> -->
              <div class="col-1"></div>
            </div>

            <div>
            </div>

          </div>
          
        </div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col text-center zobacz" v-html="$t('maxfliz.korzysci')"/>
          <div class="col-1"></div>
        </div>
        <div class="row horizonatlPadding">
          <div class="col-1"></div>
          <div class="col">
            <div class="row">
              <div class="col-6 text-center">
                <img src="@/assets/pomiar_ico.jpg" alt="Pomiar">
                <div class="prep_labels" v-html="$t('maxfliz.pomiar')"/>
              </div>
              <div class="col-6 text-center">
                <img src="@/assets/dobor_ico.jpg" alt="Dobór">
                <div class="prep_labels" v-html="$t('maxfliz.dobor')"/>
              </div>
              <div class="col-6 text-center">
                <img src="@/assets/projekt_ico.jpg" alt="Projekt">
                <div class="prep_labels" v-html="$t('maxfliz.projekt')"/>
              </div>
              <div class="col-6 text-center">
                <img src="@/assets/montaz_ico.jpg" alt="Montaz">
                <div class="prep_labels" v-html="$t('maxfliz.montaz')"/>
                
              </div>
              <div class="col-6 text-center">
                <img src="@/assets/rabat_ico.jpg" alt="Rabat">
                <div class="prep_labels" v-html="$t('maxfliz.rabat')"/>
                
              </div>
              <div class="col-6 text-center">
                <img src="@/assets/gwarancja_ico.jpg" alt="Gwarancja">
                <div class="prep_labels" v-html="$t('maxfliz.gwarancja')"/>
                
              </div>
              <div class="col-12 text-center">
                <img src="@/assets/transport_ico.jpg" alt="Transport">
                <div class="prep_labels" v-html="$t('maxfliz.transport')"/>
              </div>

            </div>

          </div>
          <div class="col-1"></div>
        </div>
        <div class="row  realizacjaw5krokach">
          <div class="col-1"></div>
          <div class="col">

            <div class="row horizonatlPadding">
              <div class="col text-center szukaszMebliNaWymiar" v-html="$t('maxfliz.realizacawpieciu')"/>
            </div>

            <div class="row">
              <div class="col">
                <table class="fiveStepsTable">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="circleNumber">1</span></td>
                      <td class="fiveStepsLabel" v-html="$t('maxfliz.wypelnijformularz')"/>
                    </tr>
                    
                    <tr>
                      <td><span class="circleNumber">2</span></td>
                      <td class="fiveStepsLabel" v-html="$t('maxfliz.skontatkujsie')"/>
                    </tr>
                    <tr>
                      <td><span class="circleNumber">3</span></td>
                      <td class="fiveStepsLabel" v-html="$t('maxfliz.ustaltermin')"/>
                    </tr>

                    <tr>
                      <td><span class="circleNumber">4</span></td>
                      <td class="fiveStepsLabel" v-html="$t('maxfliz.przedstawimyci')"/>
                    </tr>

                    <tr>
                      <td><span class="circleNumber">5</span></td>
                      <td class="fiveStepsLabel" v-html="$t('maxfliz.omowimywybrany')"/>
                    </tr>
                    <tr>
                    <td colspan=2 class="szukaszMebliNaWymiar text-right horizonatlPadding" v-html="$t('maxfliz.skontaktujsieznami')"/>
                
            </tr>
                    <tr>
                      <td colspan="2">

                        <div class="row">
                          <div class="col-12">
                            <!-- Success/Error Messages -->
                            <div v-if="showSuccessMessage" class="alert alert-success" role="alert">
                              <i class="fas fa-check-circle me-2"></i>
                              {{ $t('kontakt.mailwyslany') }}
                            </div>
                            <div v-if="errorMessage" class="alert alert-danger" role="alert">
                              <i class="fas fa-exclamation-circle me-2"></i>
                              {{ errorMessage }}
                            </div>

                            <div class="form-wrapper">
                              <form @submit.prevent="handleSubmit">
                                <div class="row mt-1">
                                  <div class="col-sm-12 col-md-6">
                                    <label for="Imie" class="form-label">{{$t('maxfliz.imie')}}</label>
                                    <input :placeholder="$t('maxfliz.wymagane')"  type="text" id="Imie" v-model="formData.name" class="form-control" required>
                                    <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                                  </div>
                                  <div class="col-sm-12 col-md-6 mt-sm-1 mt-md-0">
                                    <label for="Imie" class="form-label">{{$t('maxfliz.adresemail')}} </label>
                                    <input :placeholder="$t('maxfliz.wymagane')" type="email" v-model="formData.email" class="form-control" required>
                                    <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                                  </div>


                                </div>
                                <div class="row mt-1">
                                  <div class="col-sm-12 col-md-6">
                                    <label for="Imie" class="form-label">{{$t('maxfliz.numertelefonu')}}</label>
                                    <input :placeholder="$t('maxfliz.sugerowanedokontatku')"  type="tel" v-model="formData.phone" class="form-control">
                                    <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
                                  </div>
                                  <div class="col-sm-12 col-md-6 mt-sm-1 mt-md-0">
                                    <label for="Imie" class="form-label">{{$t('maxfliz.miasto')}}</label>
                                    <input :placeholder="$t('maxfliz.wymagane')" type="text" v-model="formData.city" class="form-control" required>
                                    <div v-if="errors.city" class="invalid-feedback">{{ errors.city }}</div>
                                  </div>

                                </div>

                                <div class="row mt-1">
                                  <div class="col">
                                    <label for="Imie" class="form-label">{{$t('maxfliz.wiadomosc')}}</label>
                                    <textarea :placeholder="$t('maxfliz.wymagane')" v-model="formData.message" class="form-control" rows="5"
                                      required></textarea>
                                    <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
                                  </div>
                                </div>
                                <div class="row mt-1">
                                  <div class="col">
                                    <input type="file" class="form-control" @change="handleFileChange"
                                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.rtf,.odt,.ods,.odp,.jpg,.jpeg,.png,.gif,.bmp,.webp">
                                  </div>
                                </div>
                                <div class="row mt-1">
                                  <div class="col">
                                    <div class="form-check">
                                      <input type="checkbox" v-model="formData.acceptTerms" class="form-check-input"
                                        id="termsCheck">
                                      <label class="form-check-label wyrazamzgode" for="termsCheck" v-html="$t('maxfliz.wyrazamzgode')"/>
                                    </div>
                                    <div v-if="errors.terms" class="invalid-feedback">{{ errors.terms }}</div>
                                  </div>
                                </div>
                                <div class="row mt-3">
                                  <div class="col">
                                    <button type="submit" class="btn btn-dark" :disabled="loading">
                                      <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status"
                                        aria-hidden="true"></span>
                                      {{ $t('kontakt.wyslij') }}
                                    </button>
                                  </div>
                                </div>
                              </form>
                              <!-- Form Loading Overlay -->
                              <div v-if="loading" class="form-loading-overlay">
                                <div class="loading-content">
                                  <div class="spinner-border text-dark" role="status">
                                    <!-- <span class="visually-hidden">Loading...</span> -->
                                  </div>
                                  <div class="mt-2 text-dark">{{ $t('kontakt.wysylanie') }}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
          <div class="col-1"></div>
        </div>
        <div class="row" style="background-color: black;">
          <div class="col-1"></div>
          <div class="col">
            <div class="row horizonatlPadding">
              <div class="col text-center nasze-realizacje-header">
                {{ $t('maxfliz.naszerealizacje') }}
              </div>
            </div>
            <div class="row horizonatlPadding">
              <div class="col">
                <img src="/bg/maxfliz-naszerealizacje-01.jpg" alt="" class="img-fluid rounded-corners">
              </div>
            </div>
            <div class="row horizonatlPadding">
              <div class="col">
                <img src="/bg/maxfliz-naszerealizacje-03.jpg" alt="" class="img-fluid rounded-corners">
              </div>
            </div>
            <div class="row horizonatlPadding">
              <div class="col">
                <img src="/bg/maxfliz-naszerealizacje-04.jpg" alt="" class="img-fluid rounded-corners">
              </div>
            </div>
            <div class="row horizonatlPadding">
              <div class="col">
                <img src="/bg/maxfliz-naszerealizacje-05.jpg" alt="" class="img-fluid rounded-corners">
              </div>
            </div>
            <div class="row horizonatlPadding">
              <div class="col">
                <img src="/bg/maxfliz-naszerealizacje-06.jpg" alt="" class="img-fluid rounded-corners">
              </div>
            </div>
            <div class="row horizonatlPadding">
              <div class="col">
                <img src="/bg/maxfliz-naszerealizacje-07.jpg" alt="" class="img-fluid rounded-corners">
              </div>
            </div>
            <div class="row horizonatlPadding">
              <div class="col">
                <img src="/bg/maxfliz-naszerealizacje-08.jpg" alt="" class="img-fluid rounded-corners">
              </div>
            </div>
            <div class="row horizonatlPadding">
              <div class="col">
                <img src="/bg/maxfliz-naszerealizacje-09.jpg" alt="" class="img-fluid rounded-corners">
              </div>
            </div>
            <div class="row horizonatlPadding">
              <div class="col">
                <img src="/bg/maxfliz-naszerealizacje-10.jpg" alt="" class="img-fluid rounded-corners">
              </div>
            </div>

          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </div>

















  </div>
  <div class="form-container">
    <div v-if="loading" class="loading-overlay">
      <div class="loading-content">
        <div class="spinner-border text-light" role="status">
          <!-- <span class="visually-hidden">Loading...</span> -->
        </div>
        <div class="mt-2 text-light">Sending message...</div>
      </div>
    </div>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "MaxflixPartner",
  components: { FontAwesomeIcon },
  data: () => {
    return {
      title: "Maxflix Partner",
      homeBg: {
        bgno: 0,
        show: true,
      }
    }
  }
}
</script>
<style scoped>
.partner_program{
  font-size: 1.0em;
  font-style: italic;
  font-weight: 400;
  color: #9c7b56;
  padding-right: 0.4em;
}

.form-control::placeholder {
  color: #9c7b56;
  font-style: italic;
  font-size: 0.8em;
  opacity: 0.4; /* Niektóre przeglądarki domyślnie ustawiają mniejszą przezroczystość */
}

.partner_partner{
  font-style: italic;
  font-weight: 400;
  font-size: 1.5em;
  padding-left: 0.4em;
}

.programMaxflixPartner {
  padding-top: 7vw;
  font-size: 3vw;
  color: black;
  font-style: italic;
  font-weight: 400;
  padding-bottom: 2em;
}

.zobacz {
  
  color: black;
  padding-top: 3em;
  padding-bottom: 2em;
}

.rounded-corners {
  border-radius: 30px;
}

.nasze-realizacje-header {
  color: white;
  font-size: 5vw;

}

.prep_labels {
  padding-bottom: 1em;
}

.bold {
  font-weight: bold;

}

.realizacjaw5krokach {
  border-top: 1px solid #ece6dd;
  background-color: #f5f1ec;
}

.szukaszMebliNaWymiar {
  padding-top: 12vw;
  font-size: 5vw;
  font-weight: 300;
  color: #9c7b56;
  font-style: italic;
}

.horizonatlPadding {
  padding-top: 3vw;
  padding-bottom: 3vw;
}

.fiveStepsTable {
  width: 100%;
}

.fiveStepsTable tr td {
  padding-top: 4vw;
}

.circleNumber {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #9c7b56;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  line-height: 1;
}

.fiveStepsLabel {
  padding-left: 15px;
  font-size: 18px;
  font-style: italic;
  color: black;
  width: 100%;
}


.wyrazamzgode {

  font-size: 14px;
}

.form-label {
  font-size: 14px;
}

.form-label span {
  color: red;
}

@media screen and (max-width: 390px) {

  .partner {
    font-size: 0.8em;
    font-weight: bold;
  }

  .szukaszMebliNaWymiar {
    padding-top: 1.4em;
    font-size: 1.4em;
    color: #9c7b56;
    font-style: italic;
    font-weight: 400;
  }

  .programMaxflixPartner {
    padding-top: 4em;
    font-size: 0.9em;
    color: black;
    font-style: italic;
    font-weight: 500;
    
  }

  .zobacz {
    font-size: 0.7em;
    color: black;
    padding-top: 6vw;
    padding-bottom: 6vw;
    font-weight: 300;
  }

  .prep_labels {
    font-size: 0.7em;
    font-weight: 300;
    padding-bottom: 1em;
  }

  .fiveStepsLabel {
    font-weight: 300;
  }

  .form-label {
    padding-top: 0.5em;
    font-size: 0.9em;
    font-weight: 300;
  }

  .wyrazamzgode {
    font-weight: 300;
  }
}

@media screen and (min-width: 1199px) {
  .partner {
    font-size: 1.5em;
    color: #9c7b56;
    position: relative;
    top: 18px;
  }

  .szukaszMebliNaWymiar {
    padding-top: 3m;
    font-size: 4em;
    color: #9c7b56;
    font-style: italic;
  }


  .programMaxflixPartner {
    padding-top: 7vw;
    font-size: 2em;
    color: black;
    font-style: italic;
    font-weight: 400;
  }

  .zobacz {
    font-size: 2em;
    color: black;
    padding-top: 2em;
    padding-bottom: 1em;
  }

  .rounded-corners {
    border-radius: 30px;
  }

  .nasze-realizacje-header {
    color: white;
    font-size: 5vw;

  }

  .prep_labels {
    font-size: 1.4em;
    }

  .bold {
    font-weight: bold;

  }

  .realizacjaw5krokach {
    border-top: 1px solid #ece6dd;
    background-color: #f5f1ec;
  }


  .horizonatlPadding {
    padding-top: 3vw;
    padding-bottom: 3vw;
  }

  .fiveStepsTable {
    width: 100%;
  }

  .fiveStepsTable tr td {
    padding-top: 2em;
  }

  .circleNumber {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #9c7b56;
    color: white;
    border-radius: 50%;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    line-height: 1;
  }

  .fiveStepsLabel {
    padding-left: 15px;
    font-size: 18px;
    font-style: italic;
    color: black;
    width: 100%;
  }


  .wyrazamzgode {

    font-size: 14px;
  }

  .form-label {

    font-size: 14px;
  }

  .form-label span {
    color: red;
  }
}



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

.addresspad a {
  color: rgb(100, 82, 1);
  font-style: italic;
}

.smallitalic4conditions {
  font-size: 12px;
  font-style: italic;
}

.form-container {
  position: relative;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-content {
  text-align: center;
}

.form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.form-wrapper {
  position: relative;
}

.form-loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  border-radius: 10px;
}

.alert {
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
}

.alert-success {
  background-color: rgba(25, 135, 84, 0.1);
  border: 1px solid #198754;
  color: #0f5132;
}

.alert-danger {
  background-color: rgba(220, 53, 69, 0.1);
  border: 1px solid #dc3545;
  color: #842029;
}
</style>