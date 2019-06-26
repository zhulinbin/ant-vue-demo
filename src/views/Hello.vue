<template>
  <div>
    <div class="hello">
      <a-input v-model="message" placeholder="please input" />
      <p>Message is: {{ message }}</p>
    </div>

    {{ testMessage }}
    <a-button type="dashed" @click="doShopping">Add Shopping</a-button>
  </div>
</template>

<script>
import { apiConfig } from '@/configs/api/apiConfig'
import * as types from '../store/mutationsType'
export default {
  name: 'Hello',
  props: {
    testMessage: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      message: ''
    }
  },
  activated() {
    this.httpService.get(apiConfig.server.getErrorCode).then().catch()
    this.httpService.get(apiConfig.server.getNormalCode).then().catch()
  },
  methods: {
    doShopping() {
      this.$store.dispatch(types.SHOPPING_CART, this.$store.state.shoppingCart++)
      this.$message.success('add shopping success in hello!')
    }
  }
}
</script>
<style lang="scss">
@import '../assets/css/vars.scss';
.hello {
  width: 200px;
  & > p {
    margin-top: 15px;
    font-size: 0.13rem;
    color: $ent-color-primary;
  }
}
</style>

