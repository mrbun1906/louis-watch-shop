<template>
  <div class="login-area pt-5 pb-5">
    <div class="container">
      <div class="row">
        <b-col lg="7" md="12" class="m-auto">
          <div class="login-register-wrapper">
            <div class="login-register-tab-list nav">
              <h4>Login</h4>
            </div>
            <div class="tab-content">
              <div id="lg1" class="tab-pane active">
                <div class="login-form-container">
                  <div class="login-register-form">
                    <form @submit.prevent="login">
                      <input
                      v-model="userForm.email"
                        type="email"
                        name="user-email"
                        placeholder="Email"
                      />
                      <input
                      v-model="userForm.password"
                        type="password"
                        name="user-password"
                        placeholder="Password"
                      />
                      <div class="button-box">
                        <div class="login-toggle-btn">
                          <input type="checkbox" />
                          <a class="floe-none" href="javascript:void(0)">
                            Remember me</a
                          >
                          <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit"><span>Login</span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/auth-service.js'
export default {
    name: 'Login',
    data() {
        return {
            userForm: {
                email: "",
                password: "",
            }
        }
    },
    methods: {
    async login() {
      const dataLogin = await AuthService.login(this.userForm)
      console.log(dataLogin)
      if (dataLogin.code === 200) {
        this.setToken()
        this.$router.push('/')
      }
    },
    setToken() {
      const token = localStorage.getItem('louisShopToken')
      this.$store.dispatch('actionGetUserToken', token)
    }
  }
};
</script>

<style scoped src="@/assets/css/pages/auth/auth.css">
</style>