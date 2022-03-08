<template>
  <div class="register-area pt-5 pb-5">
    <div class="container">
      <div class="row">
        <b-col lg="7" md="12" class="m-auto">
          <div class="login-register-wrapper">
            <div class="login-register-tab-list nav">
              <h4>Register</h4>
            </div>
            <div class="tab-content">
              <div id="lg2" class="tab-pane active">
                <div class="login-form-container">
                  <div class="login-register-form">
                    <form @submit.prevent="register">
                      <input
                        v-model="userForm.firstName"
                        type="text"
                        name="first-name"
                        placeholder="First name"
                      />
                      <input
                        v-model="userForm.lastName"
                        type="text"
                        name="last-name"
                        placeholder="Last name"
                      />
                      <input
                        v-model="userForm.email"
                        name="user-email"
                        placeholder="Email"
                        type="email"
                      />
                      <input
                        v-model="userForm.password"
                        type="password"
                        name="user-password"
                        placeholder="Password"
                      />
                      <input
                        v-model="userForm.confirmPassword"
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                      />
                      <div class="button-box">
                        <button type="submit"><span>Register</span></button>
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
  name: "Register",
  data() {
    return {
      userForm: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }
    };
  },
  methods: {
    async register() {
      const dataRegister = await AuthService.register(this.userForm)
      console.log(dataRegister)
      if (dataRegister.code === 200) {
        this.$router.push('/login')
      }
    }
  }
};
</script>

<style scoped src="@/assets/css/pages/auth/auth.css">
</style>