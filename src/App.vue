<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <div id="app">
    <Nav />
    <div class="container-fluid nopadding">
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- <transition name="fade" mode="out-in">
        <RouterView />
      </transition> -->
    </div>
    <Footer />
  </div>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <h1>{{ $t('message.hello') }}</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <select v-model="currentLocale" @change="changeLanguage">
        <option value="en">English</option>
        <option value="ja">Japanese</option>
      </select>
    </div>
  </header> -->


</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
// import BR from "@/components/BR.vue"; // Ensure BR component is imported if used

export default {
  data() {
    return {
      currentLocale: this.$i18n.locale
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.currentLocale;
    }
  },
  components: {
    Nav,
    Footer,
    
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

#app {
  font-family: "Segoe UI Light", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  font-weight: 100;
  font-style: normal;
  font-size: 18px;
  line-height: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
}

.fontWhite {
  color: white;
}


.fontBlack {
  color: black;
}

.fontRed {
  color: red;
}

.fontGreen {
  color: #00b050;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.container-fluid.nopadding {
  padding: 0;
}

.scbtn {
  border: 4px solid #f4b414;
  background-color: transparent;
  color: #f4b414;
  padding: 10px 48px;
}

.scbtnlink:link,
.scbtnlink:visited {
  color: #f4b414;
  text-decoration: none;
}

.h0 {
  font-size: 4.5vw;

}

.white {
  color: white;
}

.rb {
  border: 1px solid red;
}

.rbg {
  background-color: red;
}
</style>
