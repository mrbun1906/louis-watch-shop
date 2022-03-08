<template>
  <div id="app">
    <the-header/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <the-footer/>
    <scroll-to-top v-if="showIconBTT"/>
  </div>
</template>
<script>
import ScrollToTop from './components/common/ScrollToTop.vue'
import TheFooter from './components/common/TheFooter.vue'
import TheHeader from './components/common/TheHeader.vue'
export default {
  name: 'App',
  components: { TheHeader, TheFooter, ScrollToTop },
  data() {
    return {
      showIconBTT: true
    }
  },
  mounted() {
    const token = localStorage.getItem('louisShopToken')
    if(token && token !== '') {
      this.$store.dispatch('actionGetUserToken', token)
      console.log('Data token '+ this.$store.state.userToken)
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fruktur&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: Poppins,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 32px;
  position: relative;
  visibility: visible;
  scroll-behavior: none;
  color: #3a3a3a;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a, button {
    -webkit-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    text-decoration: none!important;
    background-color: transparent;
    border: 0 ;
}
input {
    display: inline-block;
    line-height: 50px;
    height: 50px;
    font-size: 15px;
    width: 100%;
    background: 0 0;
    border-radius: 0;
    -webkit-border-radius: 0;
    text-align: left;
    box-shadow: none;
    -webkit-box-shadow: none;
    padding-left: 20px;
    padding-right: 10px;
    outline: 0;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
