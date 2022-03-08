<template>
  <div class="feature-area py-5">
            <div class="container">
                <div class="feature-wrapper">
                    <div class="single-feature-col mb-md-2 mb-lm-2"
                    v-for="(item, index) in listFeatures"
                    :key="index"
                    >
                        <feature-item
                        :img="item.img"
                        :title="item.title"
                        :subTitle="item.subTitle"
                        />
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import FeatureItem from '../common/FeatureItem.vue'
export default {
  components: { FeatureItem },
    name: 'FeatureArea',
    data() {
        return {
            listFeatures: [
                {
                    img: require('@/assets/images/home/features/1.webp'),
                    title: 'Free Shipping',
                    subTitle: 'Capped at $39 per order'
                },
                {
                    img: require('@/assets/images/home/features/2.webp'),
                    title: 'Card Payments',
                    subTitle: '12 Months Installments'
                },
                {
                    img: require('@/assets/images/home/features/3.webp'),
                    title: 'Easy Returns',
                    subTitle: 'Shop With Confidence'
                }
            ]
        }
    }
}
</script>

<style scoped>
.feature-area {
    position: relative;
    z-index: 1;
}
.feature-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
    border: 2px solid #e1e1e1;
    padding: 100px 55px;
    border-radius: 20px;
    z-index: 1;
}
.feature-wrapper .single-feature-col {
    padding-right: 15px;
    padding-left: 15px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 33.3333333333%;
}
@media only screen and (min-width: 1200px) and (max-width: 1599px), only screen and (min-width: 992px) and (max-width: 1199px) {
    .feature-wrapper .single-feature-col {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: 33.3333333333%;
    }
}
</style>