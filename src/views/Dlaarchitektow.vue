<template>
  <div class="container">
    <div class="row">
      <div class="col d-none d-sm-block">
        <h1 class="page-title text-left">{{ title }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-2 order-sm-last sticky-top">
        <Baloons class="sticky-top" />
      </div>
      <div class="col">
        <div class="about">
          <div class="row d-block d-sm-none">
            <div class="col">
              <h1 class="page-title text-left">{{ title }}</h1>
            </div>
          </div>

          <div class="row">
            <p class="col-lg-6 col-md-12 text-justify">
              Lorem ipsum dolor sit amet quam. Ut lorem. Fusce dui at orci at
              arcu. Etiam fringilla at, aliquet neque, blandit justo, eget
              tortor. Morbi felis fermentum sed, suscipit adipiscing. Cum sociis
              natoque penatibus et lacus at risus vehicula lectus. Nam dictum
              id, ullamcorper lorem eros diam bibendum vitae, fringilla
              sollicitudin, odio eu dui nulla, faucibus nibh. Donec sollicitudin
              dignissim, tellus. Vestibulum ante ipsum sit amet ligula. Sed nec
              libero. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per conubia nostra, per inceptos hymenaeos.
              Maecenas interdum mi at ipsum. Vestibulum ante congue risus.
              Suspendisse dapibus aliquam arcu. Cras dignissim. Donec nonummy,
              tellus pede urna felis, eleifend posuere lobortis, nibh risus,
              euismod elit. Aenean vel neque mauris, interdum mi ligula, quis
              felis in velit vitae risus tortor, hendrerit sollicitudin eu,
              magna. Nulla semper. Morbi id mi. Suspendisse eu odio et neque.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Nunc vitae massa ut mattis vel,
              ornare ligula eleifend erat volutpat. Nunc massa molestie
              ultricies in, ipsum. Fusce tristique, leo ultrices posuere, nibh
              condimentum convallis. Fusce.
            </p>
            <p class="col-lg-6 col-md-12 order-lg-1 order-md-12 text-justify">
              Lorem ipsum dolor sit amet quam. Ut lorem. Fusce dui at orci at
              arcu. Etiam fringilla at, aliquet neque, blandit justo, eget
              tortor. Morbi felis fermentum sed, suscipit adipiscing. Cum sociis
              natoque penatibus et lacus at risus vehicula lectus. Nam dictum
              id, ullamcorper lorem eros diam bibendum vitae, fringilla
              sollicitudin, odio eu dui nulla, faucibus nibh. Donec sollicitudin
              dignissim, tellus. Vestibulum ante ipsum sit amet ligula. Sed nec
              libero. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per conubia nostra, per inceptos hymenaeos.
              Maecenas interdum mi at ipsum. Vestibulum ante congue risus.
              Suspendisse dapibus aliquam arcu. Cras dignissim. Donec nonummy,
              tellus pede urna felis, eleifend posuere lobortis, nibh risus,
              euismod elit. Aenean vel neque mauris, interdum mi ligula, quis
              felis in velit vitae risus tortor, hendrerit sollicitudin eu,
              magna. Nulla semper. Morbi id mi. Suspendisse eu odio et neque.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Nunc vitae massa ut mattis vel,
              ornare ligula eleifend erat volutpat. Nunc massa molestie
              ultricies in, ipsum. Fusce tristique, leo ultrices posuere, nibh
              condimentum convallis. Fusce.
            </p>
          </div>
        </div>
        <div class="subscribe-form">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <hr />
              <h4>Dostpęp do materiałów</h4>
              <p>
                Aby uzyskać dostp do matierałów dla architektów wypełnij
                poniższy formularz
              </p>
            </div>
          </div>
          <div
          :class="[
                  'row alert-success',
                  success ? 'visible' : 'hidden',
                ]"
          >
            <div class="col-lg-6 col-md-12 text-center sendresultmessages">
              <table height="100%" width="100%"><tr><td class="align-middle">Wysłane</td></tr></table>
            </div>  
          </div>
          <div
          :class="[
                  'row alert alert-danger text-center sendresultmessages',
                  fail ? 'visible' : 'hidden',
                ]"
          >
            <div class="col-lg-6 col-md-12">
              <table height="100%" width="100%"><tr><td class="align-middle">Błąd wysłania</td></tr></table>
            </div>  
          </div>

          <div :class="[
                  'row alert',
                  !success ? 'visible' : 'hidden',
                ]"
>            
            <div class="col-lg-6 col-md-12">
              <div
                id="overlay"
                :class="[
                  'text-center align-middle',
                  loading ? 'visible' : 'hidden',
                ]"
              >
                <div class="spinner-border align-middle" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <form v-on:submit="submitForm">
                <div class="form-group">
                  <label for="exampleInputEmail1">Adres email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Adres email"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <label for="NameAndSurnameId">Imię i nazwisko</label>
                  <input
                    type="text"
                    class="form-control"
                    id="NameAndSurnameId"
                    aria-describedby="emailHelp"
                    placeholder="Imię i Nazwisko"
                    v-model="namesurname"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Baloons from "@/components/Baloons.vue";
let wait = async (miliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, miliseconds);
  });
};

export default {
  name: "Dlaarchitektów",
  components: { Baloons },
  data: () => {
    return {
      title: "Dla architektów",
      email: "",
      namesurname: "",
      loading: false,
      success: false,
      fail: false
    };
  },
  methods: {
    async submitForm(e) {
      e.preventDefault(); // it prevent from page reload
      this.loading = true;
      await wait(300);
      try {await fetch("https://sc-mailer.bossworks.pl/mailsender", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        // pass in the information from our form
        body: JSON.stringify({
          email: this.email,
          name: this.namesurname,
        }),
      });
      this.loading = false;
      this.success = true;
      this.fail = false;
      } catch (e) {
        console.log(e);
      this.loading = false;  
      this.success = false;
      this.fail = true;
      }
      
    },
  },
};
</script>
<style scoped>
#overlay {
  position: absolute;
  padding-top: 20%;
  display: none;
  top: -10px;
  left: 0;
  right: 0;
  bottom: -18px;
  background-color: rgba(100, 100, 100, 0.3);
  border-radius: 5px;
  z-index: 2;
  cursor: pointer;
}
#overlay.visible, .visible {
  display: block;
}
#overlay.hidden, .hidden {
  display: none;
}
.sendresultmessages{
  height: 100px;
}
</style>
