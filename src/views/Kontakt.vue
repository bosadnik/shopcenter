<template>
  <div class="container-fluid">
    <div class="sticky-top">
      <Baloons style="position: absolute; right: 0;z-index: 10;" />
    </div>

    <!-- SCREEN 1 -->

    <div class="row" style="height: 85vh; background-color: black;">
      <div >

        <div class="row">
          <div class="col-12">
              UNDER CONSTRUCTION
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Baloons from "@/components/Baloons.vue";

export default {
  name: "Kontakt",
  components: { Baloons },
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
