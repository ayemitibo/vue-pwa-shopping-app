<template>
  <section class="checkout-section spad">
    <div class="container">
      <form action="post" class="checkout-form" @submit.prevent="createProduct">
        <div class="row">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-12">
                <label for="fir">
                  Product Name
                  <span>*</span>
                </label>
                <input type="text" id="fir" v-model="product.product_name" />
              </div>
              <div class="col-lg-12">
                <label for="last">
                  Product Category
                  <span>*</span>
                </label>
                <div class="select-wrapper">
                  <select class="input-bordered" v-model="product.product_categories_id">
                    <option
                      v-for="option in productCategory"
                      v-bind:value="option.id"
                      :key="option.id"
                    >{{ option.product_category_label }}</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12 mt-3">
                <label for="cun">
                  Product Image
                  <span>*</span>
                </label>
                <input type="file" id="cun" @change="uploadPic" ref="profilePic" />
              </div>
              <div class="col-lg-12">
                <label for="street">
                  Product Price
                  <span>*</span>
                </label>
                <input type="tel" id="street" class="street-first" v-model="product.product_price" />
              </div>
              <div class="col-md-12">
                <button type="submit" class="primary-btn" style="opacity : 1">Create Product</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="place-order">
              <div class="back-image"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      product: {},
      product_pic: '',
      productCategory: []
    }
  },
  methods: {
    async createProduct() {
      console.log('here')
      try {
        this.$Progress.start()
        console.log(this.product.product_name, this.product.product_price, this.product_pic, this.product.product_categories_id)
        const formData = new FormData()
        formData.append('product_name', this.product.product_name)
        formData.append('product_price', this.product.product_price)
        formData.append('product_image', this.product_pic)
        formData.append('product_categories_id', this.product.product_categories_id)
        console.log('here')
        let apiResponse = await this.$store.dispatch('createProduct', formData)
        console.log(apiResponse)
        if (apiResponse) {
          console.log(apiResponse)
          this.product = {}
          this.product_pic = ''
          this.$Progress.finish()
          this.showSuccessNotification(apiResponse.message)
        }
      } catch (error) {
        console.log(error)
      }
    },
    uploadPic() {
      let file2 = this.$refs.profilePic.files[0]
      this.product_pic = file2
    },
  },
  async mounted() {
    try {
      let response = await this.$store.dispatch('getMetaData')
      console.log(response)
      this.productCategory = response
    } catch (error) {

    }
  }
}
</script>

<style scoped>
.input-bordered {
  border-radius: 4px;
  border: 1px solid #d2dde9;
  width: 100%;
  padding: 10px 15px;
  line-height: 20px;
  font-size: 0.9em;
  color: rgba(73, 84, 99, 0.7);
  transition: all 0.4s;
}
select {
  width: 100%;
  line-height: 20px;
  padding: 10px 20px 10px 15px;
  border: none;
  border-radius: 4px;
  height: 42px !important;
  font-size: 14px;
  color: #6e81a9;
  background: transparent;
  vertical-align: top;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
button,
select {
  text-transform: none;
}
</style>