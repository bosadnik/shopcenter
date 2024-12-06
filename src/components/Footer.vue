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
        </div>
        <div class="col text-right align-top">
          <a href="#">
            <div class="nav-link">
              <!-- <font-awesome-icon :icon="['fas', 'angle-up']" /> -->
            </div>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

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
</style>
