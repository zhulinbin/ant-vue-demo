<template>
  <div>
    <div class="action_box">
      <a-button type="primary" icon="plus" @click="handleAdd">Add</a-button>
      <a-button v-if="type === 'table1'" type="dashed" @click="doShopping(1)">Add Shopping</a-button>
      <a-button v-else type="dashed" @click="doShopping(2)">Minus Shopping</a-button>
    </div>
    <a-table bordered :data-source="dataList" :columns="columns">
      <template slot="operation" slot-scope="text, record">
        <a-button type="danger" ghost @click="onDelete(record.key)">Delete</a-button>
      </template>
    </a-table>
  </div>
</template>
<script>
import * as types from '../store/mutationsType'
export default {
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      columns: [{
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        scopedSlots: { customRender: 'name' }
      }, {
        title: 'age',
        dataIndex: 'age'
      }, {
        title: 'address',
        dataIndex: 'address'
      }, {
        title: 'operation',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' }
      }]
    }
  },
  methods: {
    onDelete(key) {
      this.$emit('onDeleteItem', key, this.type)
    },
    handleAdd() {
      this.$emit('onAddItem', this.type)
    },
    doShopping(actionType) {
      const shoppingNum = actionType === 1 ? this.$store.state.shoppingCart++ : this.$store.state.shoppingCart--
      this.$store.dispatch(types.SHOPPING_CART, shoppingNum)
      this.$message.success('add shopping success in table!')
    }
  }
}
</script>
<style lang="scss" scoped>
.action_box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>

