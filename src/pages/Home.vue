<template>
  <div class="home">
        <slider/>
        <banner-area/>
        <new-products/>
        <smart-area/>
        <feature-area/>
        <blog/>
  </div>
</template>

<script>
import Slider from '../components/home/Slider.vue'
import BannerArea from '../components/home/BannerArea.vue'
import NewProducts from '../components/home/NewProducts.vue'
import SmartArea from '../components/home/SmartArea.vue'
import FeatureArea from '../components/common/FeatureArea.vue'
import Blog from '../components/home/Blog.vue'
export default {
  name: 'Home',
  components: {
    Slider,
    BannerArea,
    NewProducts,
    SmartArea,
    FeatureArea,
    Blog
  }
}
</script>
<style scoped>
.img-responsive {
    max-width: 100%;
    display: block;
}
</style>