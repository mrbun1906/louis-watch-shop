<template>
  <div class="new-products product-area pb-5">
    <div class="container">
      <!-- Section Title & Tab Start -->
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center">
            <h2 class="title">New Products</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available
            </p>
          </div>
        </div>
      </div>
      <!-- Section Title & Tab End -->
      <div class="row">
        <div class="col">
          <div class="row mb-n-3">
            <div
              class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-3"
              v-for="(item, index) in newProducts"
              :key="index"
            >
              <new-product-item
              :image="item.image"
              :category="item.category"
              :title="item.title"
              :price="item.price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewProductItem from "./NewProductItem.vue";
export default {
  name: "NewProducts",
  components: {
    NewProductItem
  },
  data() {
    return {
      newProducts: [
        {
          image: require("@/assets/images/home/product-categories/product-3.jpg"),
          category: "Men's Watch",
          title: "SKY-DWELLER",
          price: 260,
        },
        {
          image: require("@/assets/images/home/product-categories/product-3.jpg"),
          category: "Men's Watch",
          title: "SKY-DWELLER",
          price: 260,
        },
        {
          image: require("@/assets/images/home/product-categories/product-3.jpg"),
          category: "Men's Watch",
          title: "SKY-DWELLER",
          price: 260,
        },
        {
          image: require("@/assets/images/home/product-categories/product-3.jpg"),
          category: "Men's Watch",
          title: "SKY-DWELLER",
          price: 260,
        },
        {
          image: require("@/assets/images/home/product-categories/product-3.jpg"),
          category: "Men's Watch",
          title: "SKY-DWELLER",
          price: 260,
        },
        {
          image: require("@/assets/images/home/product-categories/product-3.jpg"),
          category: "Men's Watch",
          title: "SKY-DWELLER",
          price: 260,
        },
        {
          image: require("@/assets/images/home/product-categories/product-3.jpg"),
          category: "Men's Watch",
          title: "SKY-DWELLER",
          price: 260,
        },
        {
          image: require("@/assets/images/home/product-categories/product-3.jpg"),
          category: "Men's Watch",
          title: "SKY-DWELLER",
          price: 260,
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/new-products.css">
</style>
