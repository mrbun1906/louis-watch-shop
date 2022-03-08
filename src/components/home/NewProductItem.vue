<template>
  <div class="new-product-item" @click="$bvModal.show('actions')">
    <div class="thumb">
      <a href="single-product.html" class="image">
        <img :src="image" alt="Product" />
        <img class="hover-image" :src="image" alt="Product" />
      </a>
    </div>
    <div class="content">
      <span class="category">
        <a href="#">{{ category }}</a>
      </span>
      <h5 class="title">
        <a href="single-product.html">{{ title }} </a>
      </h5>
      <span class="price">
        <span class="new">${{ price }}</span>
      </span>
    </div>
    <div class="actions">
      <button
        title="Add To Cart"
        class="action add-to-cart"
      >
        <i class="pe-7s-shopbag"><b-icon-bag></b-icon-bag></i>
      </button>
      <button
        class="action wishlist"
        title="Wishlist"
      >
        <i class="pe-7s-like"><b-icon-heart></b-icon-heart></i>
      </button>
      <button
        class="action quickview"
        data-link-action="quickview"
        title="Quick view"
      >
        <i class="pe-7s-look"><b-icon-eye></b-icon-eye></i>
      </button>
      <button
        class="action compare"
        title="Compare"
      >
        <i class="pe-7s-refresh-2"><b-icon-arrow-repeat></b-icon-arrow-repeat></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewProductItem",
  props: {
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped src="@/assets/css/components/home/new-product-item.css"></style>
