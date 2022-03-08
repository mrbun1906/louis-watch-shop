<template>
  <div class="header">
      <!-- Header top area start -->
            <div class="header-top">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col">
                            <div class="welcome-text">
                                <p>World Wide Completely Free Returns and Shipping</p>
                            </div>
                        </div>
                        <div class="col d-none d-lg-block">
                            <div class="top-nav">
                                <ul>
                                    <li><a href="tel:0123456789"><i class="fa"><font-awesome-icon :icon="['fas', 'phone-alt']" /></i> +012 3456 789</a></li>
                                    <li><a href="mailto:demo@example.com"><i class="fa"><font-awesome-icon :icon="['far', 'envelope']" /></i> demo@example.com</a></li>
                                    <li class="dropdown">
                                        <a @click.prevent="show = !show">
                                            <i class="fa"><font-awesome-icon :icon="['fas', 'user']" /></i> Account
                                            <transition name="slide-fade">
                                                <div v-if="show">
                                                    <ul class="sub-menu">
                                                    <template v-if="userToken && userToken !== '' ">
                                                        <li class="dropdown position-static">
                                                            <router-link to="/me" class="a-login">Tài khoản</router-link>
                                                        </li>
                                                        <li class="dropdown position-static">
                                                            <a href="#" @click.prevent="logout" class="a-login">Đăng xuất</a>
                                                        </li>
                                                    </template>
                                                    <template v-else>
                                                        <li class="dropdown position-static">
                                                            <router-link to="/login" class="a-login">Đăng nhập</router-link>
                                                        </li>
                                                        <li class="dropdown position-static">
                                                            <router-link to="/register" class="a-login">Đăng ký</router-link>
                                                        </li>
                                                    </template>
                                                </ul>
                                                </div>
                                            </transition>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header top area end -->
            <!-- Header action area start -->
            <div class="header-bottom  d-none d-lg-block">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-3 col">
                            <div class="header-logo">
                                <router-link to="/"><img src="@/assets/images/common/logo-name-rem.png" alt="Site Logo" class="logo"/></router-link>
                            </div>
                        </div>
                        <div class="col-lg-6 d-none d-lg-block">
                            <div class="search-element">
                                <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button><i class="fa fas-search"><font-awesome-icon :icon="['fas', 'search']" /></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col">
                            <div class="header-actions">
                                <!-- Single Wedge Start -->
                                <a href="#offcanvas-wishlist" class="header-action-btn offcanvas-toggle">
                                    <i class="header-actions__icon wishlist-header"><font-awesome-icon :icon="['far', 'heart']" /></i>
                                </a>
                                <!-- Single Wedge End -->
                                <a href="#offcanvas-cart" class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                    <i class="header-actions__icon shopping-bag-header"><font-awesome-icon :icon="['fas', 'shopping-bag']" /></i>
                                    <span class="header-action-num">01</span>
                                    <!-- <span class="cart-amount">€30.00</span> -->
                                </a>
                                <a href="#offcanvas-mobile-menu" class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                    <i class="pe-7s-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header action area end -->
            <!-- Header action area start -->
            <div class="header-bottom d-lg-none sticky-nav style-1">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-3 col">
                            <div class="header-logo">
                                <a href="#"><img src="@/assets/images/common/logo-name-rem.png" alt="Site Logo" /></a>
                            </div>
                        </div>
                        <div class="col-lg-6 d-none d-lg-block">
                            <div class="search-element">
                                <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button><i class="pe-7s-search"><b-icon-search></b-icon-search></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col">
                            <div class="header-actions">
                                <!-- Single Wedge Start -->
                                <a href="#offcanvas-wishlist" class="header-action-btn offcanvas-toggle">
                                    <i class="pe-7s-like"><font-awesome-icon :icon="['far', 'heart']" /></i>
                                </a>
                                <!-- Single Wedge End -->
                                <a href="#offcanvas-cart" class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                    <i class="pe-7s-shopbag"><font-awesome-icon :icon="['fas', 'shopping-bag']" /></i>
                                    <span class="header-action-num">01</span>
                                    <!-- <span class="cart-amount">€30.00</span> -->
                                </a>
                                <a href="#offcanvas-mobile-menu" class="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                    <i class="pe-7s-menu"><font-awesome-icon :icon="['fas', 'bars']" /></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header action area end -->
            <!-- header navigation area start -->
            <div class="header-nav-area d-none d-lg-block sticky-nav">
                <div class="container">
                    <div class="header-nav">
                        <div class="main-menu position-relative">
                            <ul>
                                <li class="dropdown">
                                    <router-link to="/"
                                    class="menu-item">Home <i class="fa fa-angle-down"></i></router-link>
                                </li>
                                <li>
                                    <router-link to="/about"
                                    class="menu-item">About</router-link>
                                    </li>
                                <li class="dropdown position-static">
                                    <router-link to="/shop" class="menu-item">Shop <i
                                    class="fa fa-angle-down"></i></router-link>
                                </li>
                                <li class="dropdown ">
                                    <router-link to="#" class="menu-item">Blog <i class="fa fa-angle-down"></i></router-link>
                                </li>
                                <li><router-link to="/contact" class="menu-item">Contact</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- header navigation area end -->
            <div class="mobile-search-box d-lg-none">
                <div class="container">
                    <!-- mobile search start -->
                    <div class="search-element max-width-100">
                        <form action="#">
                            <input type="text" placeholder="Search" />
                            <button><i class="pe-7s-search"><b-icon-search></b-icon-search></i></button>
                        </form>
                    </div>
                    <!-- mobile search start -->
                </div>
            </div>
  </div>
</template>

<script>
import AuthService from '@/services/auth-service.js'
export default {
    name: 'TheHeader',
    data() {
        return {
            show: false,
        }
    },
    methods: {
        async logout() {
            const dataLogout = await AuthService.logout()
            console.log(dataLogout)
            if (dataLogout.code === 200) {
                this.$store.dispatch('actionGetUserToken', null)
      }
        },

    },
    computed: {
        userToken() {
            return this.$store.state.userToken
        }
    }
}
</script>

<style scoped src="@/assets/css/components/common/the-header.css">

</style>