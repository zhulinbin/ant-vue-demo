<template>
  <a-layout-header class="header">
    <a-row>
      <a-col span="6">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleCollapse"
        />
      </a-col>
      <a-col class="right_box" span="18">
        <a-dropdown class="login_box">
          <span style="cursor: pointer">
            <span>{{ user }}</span>
          </span>
          <a-menu slot="overlay">
            <a-menu-item>
              <div @click="doLogout">
                <a-icon style="margin-right: 5px;" type="poweroff" />
                <span>退出登录</span>
              </div>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <a-badge class="shopping_cart" :count="$store.state.shoppingCart" :offset="[5, -5]" :show-zero="true">
          <a-icon style="fontSize: 20px" type="shopping-cart" />
        </a-badge>
        <v-language />
      </a-col>
    </a-row>
  </a-layout-header>
</template>
<script>
import VLanguage from '../Language'
export default {
  components: {
    VLanguage
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      languageList: [
        {
          value: 'en',
          label: 'English'
        },
        {
          value: 'ja',
          label: '日本語'
        },
        {
          value: 'zh',
          label: '中文'
        }
      ]
    }
  },
  computed: {
    user() {
      // return this.$store.state.account.user
      return 'Admin'
    }
  },
  methods: {
    toggleCollapse() {
      this.$emit('onToggleCollapse')
    },
    doLogout() {
      this.$message.success('退出成功')
      this.storage.cookie.delete('token')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: #ffffff;
  padding: 0;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .right_box {
    padding-right: 35px;
    text-align: right;
    & .login_box {
      margin-right: 20px;
    }
    & .shopping_cart {
      margin-right: 25px;
    }
  }
}
</style>
