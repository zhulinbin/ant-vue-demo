<template>
  <a-layout class="layout_box">
    <v-sider :collapsed="collapsed" />
    <a-layout class="content_box" :style="{ 'margin-left': marginLeft }">
      <v-header :collapsed="collapsed" @onToggleCollapse="toggleCollapse" />
      <a-layout-content class="content">
        <keep-alive>
          <router-view />
        </keep-alive>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import VSider from '@/components/layout/Sider'
import VHeader from '@/components/layout/Header'

export default {
  components: {
    VSider,
    VHeader
  },
  data() {
    return {
      collapsed: false,
      marginLeft: '200px'
    }
  },
  watch: {
    collapsed(value) {
      this.marginLeft = value ? '80px' : '200px'
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style scoped lang="scss">
.layout_box {
  .content_box {
    transition: margin-left 0.3s;
    .content {
      margin: 0 16px 24px 16px;
      padding: 12px;
      min-height: calc(100vh - 112px);
    }
  }
}
</style>
