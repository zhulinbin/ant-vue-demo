<template>
  <div class="parent">
    <p>Parent Component</p>
    <p>Delete table: {{ type }}</p>
    <p>Add table: {{ type }}</p>
    <div class="children">
      <p>Children</p>
      <a-row type="flex" justify="space-around">
        <a-col span="10">
          <a-spin :spinning="isLoadingTable1">
            <v-table-cell :type="'table1'" :data-list="dataList" @onDeleteItem="doDelete" @onAddItem="doAdd" />
          </a-spin>
        </a-col>
        <a-col span="10">
          <a-spin :spinning="isLoadingTable2">
            <v-table-cell :type="'table2'" :data-list="dataList2" @onDeleteItem="doDelete2" @onAddItem="doAdd2" />
          </a-spin>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import VTableCell from '@/components/TableCell'
export default {
  components: {
    VTableCell
  },
  data() {
    return {
      dataList: [],
      dataList2: [],
      count: 2,
      type: '',
      isLoadingTable1: true,
      isLoadingTable2: true
    }
  },
  watch: {
    '$store.state.shoppingCart'(newValue) {
      // this.$message.warning(`父元素报警: 购物车被改动为--${newValue}--抓紧查下谁干的`)
    }
  },
  activated() {
    this.isLoadingTable1 = true
    this.isLoadingTable2 = true
    this.httpService.get('/mock/table/list').then(res => {
      this.isLoadingTable1 = false
      this.dataList = res.data.data.list
    }).catch(() => {})
    this.httpService.get('/mock/table/list2').then(res => {
      this.isLoadingTable2 = false
      this.dataList2 = res.data.data.list
    }).catch(() => {})
  },
  methods: {
    doDelete(key, type) {
      const dataList = [...this.dataList]
      this.dataList = dataList.filter(item => item.key !== key)
      this.type = type
    },
    doAdd(type) {
      const { count, dataList } = this
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`
      }
      this.dataList = [...dataList, newData]
      this.count = count + 1
      this.type = type
    },
    doDelete2(key, type) {
      const dataList2 = [...this.dataList2]
      this.dataList2 = dataList2.filter(item => item.key !== key)
      this.type = type
    },
    doAdd2(type) {
      const { count, dataList2 } = this
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`
      }
      this.dataList2 = [...dataList2, newData]
      this.count = count + 1
      this.type = type
    }
  }
}
</script>
<style lang="scss" scoped>
.parent {
  border: 1px double blue;
  padding: 30px;
  .children {
    border: 1px dotted red;
    padding: 15px;
  }
}
</style>

