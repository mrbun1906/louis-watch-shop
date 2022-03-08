<template>
  <div class="slider container-fluid p-0">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide  class="slider-top" :img-src="slideOne">
      <div class="slider-top__content">
        <h1>POPULAR</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <common-btn title="Discovery Now"/>
      </div>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide class="slider-top" :img-src="slideTwo">
        <div class="slider-top__content">
          <h1>NEW ARRIVAL</h1>
          <h3>This December</h3>
          <common-btn title="Discovery Now"/>
        </div>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="OUR SERVICES" img-alt="Blank image" :img-src="slideThree">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
        <common-btn title="Discovery Now"/>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import CommonBtn from '../common/CommonBtn.vue'
export default {
  components: { CommonBtn },
  name: 'Slider',
  data() {
      return {
        slide: 0,
        sliding: null,
        slideOne: require('@/assets/images/home/slider/slide-6.jpg'),
        slideTwo: require('@/assets/images/home/slider/slide-2.png'),
        slideThree: require('@/assets/images/home/slider/slide-5.jpg')
      }
    }
}
</script>

<style scoped src="@/assets/css/components/home/slider.css">

</style>