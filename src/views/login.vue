<template>
  <div>
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text">
              <router-link tag="a" to="/">
                <i class="fa fa-home"></i> Home
              </router-link>

              <span>Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Form Section Begin -->

    <!-- Register Section Begin -->
    <div class="register-login-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="login-form">
              <h2>Login</h2>
              <form action="post" @submit.prevent="loginUser">
                <div class="group-input">
                  <label for="username">Username or email address *</label>
                  <input type="text" id="username" v-model="loginData.userData" />
                </div>
                <div class="group-input">
                  <label for="pass">Password *</label>
                  <input type="text" id="pass" v-model="loginData.password" />
                </div>
                <div class="group-input gi-check">
                  <div class="gi-more">
                    <label for="save-pass">
                      Save Password
                      <input type="checkbox" id="save-pass" />
                      <span class="checkmark"></span>
                    </label>
                    <a href="#" class="forget-pass">Forget your Password</a>
                  </div>
                </div>
                <button type="submit" class="site-btn login-btn">Sign In</button>
              </form>
              <div class="switch-login">
                <router-link tag="a" class="or-login" to="register">Or Create An Account</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginData: {}
    }
  },
  methods: {
    async loginUser() {
      try {
        this.$Progress.start()
        console.log(this.loginData)
        const payload = {}
        if (this.loginData.userData.match(/^([a-zA-Z0-9])+(@)([a-z]){3,}(\.)([a-zA-z]){1,}/g)) {
          payload.email = this.loginData.userData
        } else {
          payload.user_name = this.loginData.userData
        }
        payload.password = this.loginData.password
        this.$Progress.finish()
        let apiResponse = await this.$store.dispatch('loginUser', payload)
        if (apiResponse) {
          this.showSuccessNotification(apiResponse.message)
          this.$router.push("/")
        }
      } catch (error) {
        this.showErrorNotification(error.message)
      }
    }
  }
}
</script>