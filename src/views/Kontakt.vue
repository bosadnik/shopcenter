<script setup>
import mainbg3 from '@/assets/mainbg3.jpg'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const formData = ref({
  name: '',
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

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const validateForm = () => {
  errors.value = {}
  
  if (!formData.value.name) errors.value.name = 'Name is required'
  if (!formData.value.phone) errors.value.phone = 'Phone is required'
  if (!formData.value.email) {
    errors.value.email = 'Email is required'
  } else if (!validateEmail(formData.value.email)) {
    errors.value.email = 'Invalid email format'
  }
  if (!formData.value.message) errors.value.message = 'Message is required'
  if (!formData.value.acceptTerms) errors.value.terms = 'You must accept the terms'
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
      phone: formData.value.phone,
      email: formData.value.email,
      message: formData.value.message,
      file: fileData,
      fileName: formData.value.fileName
    };

    console.log('Sending data with file:', fileData ? 'yes' : 'no');

    const response = await fetch('http://localhost:8000/mailsend.php', {
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
  <div class="container-fluid">
    <div class="sticky-top">
      <Baloons style="position: absolute; right: 0;z-index: 10;" />
    </div>

    <!-- SCREEN 1 -->
    <div class="row" :style="{
      backgroundImage: `url(${mainbg3})`,
     
      backgroundColor: 'black'
    }">
      <div class="col-12">
        <div class="row" style="height: 5vh;">
          <div class="col-12">
          </div>
        </div>
        <div class="row" >
          <div class="col-md-1 d-none d-md-block" style="background-color: rgba(0, 0, 0, 0.65);">
            <div class="row" style="height: 40%">
              <div class="col-12">&nbsp;</div>
            </div>
            <div class="row" style="height: 60%;">
              <div class="col-6" style="border-right: 4px solid #f4b414;">&nbsp;</div>
              <div class="col-6" style="border-top: 4px solid #f4b414;">&nbsp;</div>
            </div>
          </div>
          <div class="col-12 col-md-5"
            style="background-color: rgba(0, 0, 0, 0.65); padding: 3vh; height: 60vh; padding-top: 20vh; height: 100%; ">

            SHOPCENTER A.Kusina, P.Iwanek s.c.<BR />
            Bodzanów 583<BR />
            32-020 Wieliczka<BR />
            NIP: 678-295-87-65<BR />
            <BR />  
            <div class="contacts">
              <img src="@/assets/envelope.jpg"  style="opacity: 0.45;"/> biuro@shopcenter.pl<br/>
      
              <FontAwesomeIcon :icon="faPhone" style="font-size: 1rem;" />&nbsp;+48 601 765 432 | 609 60 40 80
            </div>

            <BR />
            {{ $t('kontakt.godzinypracy') }}<BR />
            
            <b>{{ $t('kontakt.ponnpt') }}: 8:30-16:30</b><BR />
            {{ $t('kontakt.sbnie') }}<BR />

            <BR />
            {{ $t('kontakt.znajdznas') }} <BR />
            <div class="sociallinks">
              <a href="https://www.facebook.com/shopcenterdesign" target="_blank">
                <FontAwesomeIcon :icon="faFacebookF" style="font-size: 1.1em;" />
              </a>
              <a href="https://www.instagram.com/shopcenterdesign" target="_blank">
                <FontAwesomeIcon :icon="faInstagram" style="font-size: 1.1em;" />
              </a>              
            </div>


          </div>
          <div class="col-12 col-md-6" style="background-color: rgba(0, 0, 0, 0.65); padding: 4vh">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.604858907046!2d20.141564576915783!3d49.981268421034414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471640c3f0806823%3A0x9a4a141b6a73c7c0!2sBodzan%C3%B3w%20583%2C%2032-020%20Wieliczka!5e0!3m2!1spl!2spl!4v1734882521559!5m2!1spl!2spl"
              style="border:0;" allowfullscreen="" loading="lazy" class="google-maps"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="row" style="height: 15vh;">
          <div class="col-1 d-none d-md-block">
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
          <div class="col-1 d-none d-md-block">
            <div class="row" style="height: 5vh">
              <div class="col-6" style="border-right: 4px solid #f4b414;">
                &nbsp;
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="row" style="background-color: black; padding-bottom: 10vh;">
      <div class="col-12">
        <div class="row">
          <div class="col-1 d-none d-md-block">
            <div class="row">
              <div class="col-6" style="border-right: 4px solid #f4b414;">
                &nbsp;
              </div>
              <div class="col-6" style="border-bottom: 4px solid #f4b414;">
                &nbsp;
              </div>
            </div>
          </div>
          <div class="col-12 col-md-10" style="background-color: #f4b414;">
            <div class="row">
              <!-- MAIL FORM -->
              <div class="col-12 col-md-5" style="padding: 3vh; color:black;">
                <div class="row">
                  <div class="col">&nbsp;
                  </div>
                </div>

                <div class="row">
                  <div class="col-12" style="background-color: rgba(255,255,255,0.4); padding: 3vh; border-radius: 10px; box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 5%);">
                    <!-- Success/Error Messages -->
                    <div v-if="showSuccessMessage" class="alert alert-success" role="alert">
                      <i class="fas fa-check-circle me-2"></i>
                      {{ $t('kontakt.mailwyslany') }}
                    </div>
                    <div v-if="errorMessage" class="alert alert-danger" role="alert">
                      <i class="fas fa-exclamation-circle me-2"></i>
                      {{ errorMessage }}
                    </div>
                    
                    <div class="row">
                      <div class="col">
                        <h3>{{ $t('kontakt.skontaktujsieznami') }}</h3>
                      </div>
                    </div>
                    <div class="form-wrapper">
                      <form @submit.prevent="handleSubmit">
                        <div class="row">
                          <div class="col">
                            <input type="text" v-model="formData.name" class="form-control" :placeholder="$t('kontakt.imieinazwisko')" required>
                            <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <input type="email" v-model="formData.email" class="form-control" :placeholder="$t('kontakt.email')" required>
                            <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <input type="tel" v-model="formData.phone" class="form-control" :placeholder="$t('kontakt.telefon')" required>
                            <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col">
                            <textarea v-model="formData.message" class="form-control" :placeholder="$t('kontakt.wiadomosc')" rows="5" required></textarea>
                            <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col">
                            <input type="file" class="form-control" @change="handleFileChange" 
                              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.rtf,.odt,.ods,.odp,.jpg,.jpeg,.png,.gif,.bmp,.webp">
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col">
                            <div class="form-check">
                              <input type="checkbox" v-model="formData.acceptTerms" class="form-check-input" id="termsCheck">
                              <label class="form-check-label" for="termsCheck">{{ $t('kontakt.akceptujwarunki') }}</label>
                            </div>
                            <div v-if="errors.terms" class="invalid-feedback">{{ errors.terms }}</div>
                          </div>
                        </div>
                        <div class="row mt-3">
                          <div class="col">
                            <button type="submit" class="btn btn-dark" :disabled="loading">
                              <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
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

              </div>
              <!-- MAIL FOMR END -->
              <div class="col-12 col-md-5" style="padding: 3vh">
                <div class="addresspad">
                  <h5>{{ $t('kontakt.dzialhandlowy') }}</h5>
                  <a href="mailto:handel@shopcenter.pl">handel@shopcenter.pl</a><br />
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col">+48 601 765 432 Piotr Iwanek<br />
                      +48 730 800 645 Małgorzata Warawąsowska<br />
                      +48 730 800 437 Izabela Sztenderska<br />
                    </div>
                  </div>
                </div>

                <!-- <div class="addresspad">
                  <h5>{{ $t('kontakt.dzialprojektu') }}</h5>
                  <a href="mailto:projekt@shopcenter.pl">projekt@shopcenter.pl</a><br />
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col">604 357 588 Marcin Piskorz<br />
                      732 008 932 Norbert Woźniczka<br />
                    </div>
                  </div>
                </div>
 -->
                <!-- <div class="addresspad">
                  <h5>{{ $t('kontakt.dzialzakupow') }}</h5>
                  <a href="mailto:zakupy@shopcenter.pl">zakupy@shopcenter.pl</a><br />
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col">733 368 901 Magda Flak<br />
                    </div>
                  </div>
                </div> -->

                <div class="addresspad">
                  <h5>{{ $t('kontakt.dzialfinansowy') }}</h5>
                  <a href="mailto:biuro@shopcenter.pl">biuro@shopcenter.pl</a><br />
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col">+48 535 124 000 Katarzyna Kowalczyk<br />
                      +48 609 604 080 Agata Kusina<br />
                    </div>
                  </div>
                </div>

                <div class="addresspad">
                  <h5>{{ $t('kontakt.produkcjaimontaz') }}</h5>
                  <!-- <a href="mailto:……….@shopcenter.pl">……….@shopcenter.pl</a><br /> -->
                  <div class="row">
                    <div class="col-2">{{ $t('kontakt.telefon') }}</div>
                    <div class="col">+48 500 253 004 Rafał Kołos<br />
                      <!-- 606 885 386 Łukasz Golas - {{ $t('kontakt.produkcja') }}<br /> -->
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