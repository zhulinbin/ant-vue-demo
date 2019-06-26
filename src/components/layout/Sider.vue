<template>
  <a-layout-sider v-model="collapsed" class="slider" :trigger="null" collapsible>
    <div class="logo">
      <img :src="logo">
    </div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="activeMenu">
      <a-menu-item key="/dashboard" @click="$router.push({ path: '/dashboard' })">
        <a-icon type="video-camera" />
        <span>{{ $t("message.sider[0]") }}</span>
      </a-menu-item>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>demo</span></span>
        <a-menu-item key="/hello" @click="$router.push({ path: '/hello' })">
          <a-icon type="video-camera" />
          <span>{{ $t("message.sider[1]") }}</span>
        </a-menu-item>
        <a-menu-item key="/language" @click="$router.push({ path: '/language' })">
          <a-icon type="user" />
          <span>{{ $t("message.sider[2]") }}</span>
        </a-menu-item>
        <a-menu-item key="/table" @click="$router.push({ path: '/table' })">
          <a-icon type="user" />
          <span>{{ $t("message.sider[3]") }}</span>
        </a-menu-item>
      </a-sub-menu>

    </a-menu>
  </a-layout-sider>
</template>
<script>
import { apiConfig } from '@/configs/api/apiConfig'
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo: apiConfig.img.common.logo
    }
  },
  computed: {
    activeMenu() {
      const activeArry = []
      const path = this.$route.path
      if (path.indexOf('/', 1) > -1) {
        activeArry.push(path.substring(0, path.indexOf('/', 1)))
      } else {
        activeArry.push(path)
      }
      return activeArry
    }
  }
}
</script>

<style scoped lang="scss">
.slider {
  position: fixed;
  left: 0;
  overflow: auto;
  height: 100vh;
  .logo {
    text-align: center;
    padding: 15px 0;
    & > img {
      display: inline-block;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
