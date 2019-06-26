<template>
  <div>
    <a-row v-if="!isLoading" style="margin: 0 -12px">
      <a-col :sm="24" :md="12" :xl="6" style="padding: 8px 12px 6px;">
        <chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip slot="action" title="指标说明">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <a-steps :current="1" size="small">
              <a-step title="In Progress" />
            </a-steps>
          </div>
          <div slot="footer">
            日均销售额
            <span>￥234.56</span>
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 8px 12px 6px;">
        <chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip slot="action" title="指标说明">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <a-rate :default-value="2.5" allow-half />
          </div>
          <div slot="footer">
            日访问量
            <span>123,4</span>
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 8px 12px 6px;">
        <chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip slot="action" title="指标说明">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <a-steps :current="1" size="small">
              <a-step title="Finished" />
            </a-steps>
          </div>
          <div slot="footer">
            转化率
            <span>60%</span>
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="6" style="padding: 8px 12px 6px;">
        <chart-card title="运营活动效果" total="73%">
          <a-tooltip slot="action" title="指标说明">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <a-progress :percent="50" size="small" status="active" />
          </div>
          <div slot="footer">
            转化率
            <span>60%</span>
          </div>
        </chart-card>
      </a-col>
    </a-row>
    <a-row v-else>
      <a-skeleton active />
    </a-row>
    <a-row v-if="!isLoading" style="margin: 0 -12px">
      <a-col style="padding: 0 12px">
        <a-card :bordered="false" style="margin-top: 12px">
          <a-tabs default-active-key="1">
            <div slot="tabBarExtraContent" class="extra-wrap">
              <a-range-picker :style="{width: '256px'}" />
            </div>
            <a-tab-pane key="1">
              <span slot="tab">
                <a-icon type="apple" />Tab 1
              </span>
              <dot-chart />
            </a-tab-pane>
            <a-tab-pane key="2">
              <span slot="tab">
                <a-icon type="android" />Tab 2
              </span>
              <bar-chart />
            </a-tab-pane>
            <a-tab-pane key="3">
              <span slot="tab">
                <a-icon type="android" />Tab 3
              </span>
              <pie-chart />
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </a-col>
    </a-row>
    <a-row v-else>
      <a-skeleton active />
    </a-row>
    <a-row v-if="!isLoading" style="margin: 0 -12px">
      <a-col style="padding: 0 12px" :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :bordered="false" style="margin-top: 24px" title="热门搜索">
          <map-chart />
        </a-card>
      </a-col>
      <a-col style="padding: 0 12px" :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :bordered="false" style="margin-top: 24px;" title="销售额占比">
          <line-chart />
        </a-card>
      </a-col>
    </a-row>
    <a-row v-else>
      <a-skeleton active />
    </a-row>
    <a-back-top />
  </div>
</template>

<script>
import ChartCard from '@/components/dashboard/ChartCard'
import LineChart from '@/components/dashboard/LineChart'
import MapChart from '@/components/dashboard/MapChart'
import DotChart from '@/components/dashboard/DotChart'
import BarChart from '@/components/dashboard/BarChart'
import PieChart from '@/components/dashboard/PieChart'

const rankList = []

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: '桃源村' + i + '号店',
    total: 1234.56 - i * 100
  })
}

export default {
  name: 'Analysis',
  components: {
    ChartCard,
    LineChart,
    MapChart,
    DotChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      rankList,
      isLoading: true
    }
  },
  activated() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 400)
  }
}
</script>

<style lang="scss" scoped>
.extra-item {
  display: inline-block;
  margin-right: 24px;
  a {
    margin-left: 24px;
  }
}
</style>
