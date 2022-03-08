<template>
  <div class="scrollToTop">
      <a id="scrollUp" @click.prevent="scrollToTop"><b-icon-chevron-up/></a>
  </div>
</template>

<script>
export default {
    name: 'ScrollToTop',
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
#scrollUp {
    position: fixed;
    cursor: pointer;
    width: 45px;
    height: 45px;
    background: #266bf9;
    color: #fff;
    right: 20px;
    bottom: 60px;
    text-align: center;
    overflow: hidden;
    border-radius: 50px;
    z-index: 9811!important;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
#scrollUp:hover {
    background: #000;
    color: #fff;
    transform: scale(1.05);
}
</style>