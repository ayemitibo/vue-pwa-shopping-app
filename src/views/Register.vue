<template>
  <div>
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text">
              <a href="#">
                <i class="fa fa-home"></i> Home
              </a>
              <span>Register</span>
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
            <div class="register-form">
              <h2>Register</h2>
              <form action="post" @submit.prevent="register">
                <div class="group-input">
                  <label for="username">Username</label>
                  <input type="text" id="username" v-model="profile.user_name" />
                </div>
                <div class="group-input">
                  <label for="pass">Email</label>
                  <input type="email" id="pass" v-model="profile.email" />
                </div>
                <div class="group-input">
                  <label for="con-pass">Password *</label>
                  <input type="password" id="con-pass" v-model="profile.password" />
                </div>
                <button type="submit" class="site-btn register-btn">REGISTER</button>
              </form>
              <div class="switch-login">
                <a href="./login.html" class="or-login">Or Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Register Form Section End -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      profile: {}
    }
  },
  methods: {
    async register() {
      this.$Progress.start();
      try {
        let apiResponse = await this.$store.dispatch('createCustomer', this.profile)
        if (apiResponse.data.message) {
          this.$Progress.finish();
          this.showSuccessNotification(apiResponse.data.message)
          this.$router.push('/login')
        }
      } catch (error) {
        console.log('catch', error)
        this.showErrorNotification(error.message)
      }
    }
  }
}
</script>