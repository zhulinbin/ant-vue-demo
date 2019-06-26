<template>
  <a-select
    label-in-value
    :default-value="{ key: languageList[0].value }"
    @change="doChange"
  >
    <a-select-option
      v-for="(item, index) in languageList"
      :key="index"
      :value="item.value"
    >{{ item.label }}</a-select-option>
  </a-select>
</template>
<script>
export default {
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
  methods: {
    doChange(value) {
      this.$i18n.locale = value.key
    }
  }
}
</script>

<style scoped lang="scss">
</style>
