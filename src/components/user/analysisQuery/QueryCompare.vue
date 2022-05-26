<template>
  <div class="query-compare">
    <div class="title">
      <div class="split"></div>
      <h3>收藏栏</h3>
    </div>
    <div class="query-show" v-if="collectTableData.length !== 0">
      <el-table :data="collectTableData" stripe border>
        <el-table-column prop="id" label="#"> </el-table-column>
        <el-table-column prop="school" label="学校"> </el-table-column>
        <el-table-column prop="province" label="省份"> </el-table-column>
        <el-table-column prop="profession" label="专业分类"> </el-table-column>
        <el-table-column prop="admissionBatch" label="录取批次">
        </el-table-column>
        <el-table-column prop="enrollment" label="招生人数"> </el-table-column>
        <el-table-column prop="enrollmentYear" label="招生年份">
        </el-table-column>
        <el-table-column prop="collect" label="删除" width="50px">
          <template slot-scope="scope">
            <div class="collect" @click="deleteCol(scope.$index)">
              <svg
                t="1652891914628"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9692"
                width="22"
                height="22"
              >
                <path
                  d="M681.6256 188.2624H335.1552c-25.4976 0-46.1312-20.6336-46.1312-46.1312s20.6336-46.1312 46.1312-46.1312h346.5216c25.4976 0 46.1312 20.6336 46.1312 46.1312s-20.6848 46.1312-46.1824 46.1312z"
                  fill="#59ADF8"
                  p-id="9693"
                ></path>
                <path
                  d="M891.2896 229.9392H127.4368c-25.2416 0-47.3088 19.456-48.0768 44.7488-0.768 26.112 20.1728 47.5648 46.1312 47.5648h53.8624v527.104c0 46.0288 37.3248 83.3536 83.3536 83.3536h491.3664c46.0288 0 83.3536-37.3248 83.3536-83.3536V322.2528h51.9168c25.2416 0 47.3088-19.456 48.0768-44.7488 0.768-26.112-20.1728-47.5648-46.1312-47.5648zM429.312 688.128c0 25.4976-20.6336 46.1312-46.1312 46.1312-25.4976 0-46.1312-20.6336-46.1312-46.1312V466.8416c0-25.4976 20.6336-46.1312 46.1312-46.1312 25.4976 0 46.1312 20.6336 46.1312 46.1312v221.2864z m250.4192 0c0 25.4976-20.6336 46.1312-46.1312 46.1312-25.4976 0-46.1312-20.6336-46.1312-46.1312V466.8416c0-25.4976 20.6336-46.1312 46.1312-46.1312 25.4976 0 46.1312 20.6336 46.1312 46.1312v221.2864z"
                  fill="#2595E8"
                  p-id="9694"
                ></path>
                <path
                  d="M837.4272 672.6144V322.2528h51.9168c25.2416 0 47.3088-19.456 48.0768-44.7488 0.768-26.112-20.1728-47.5648-46.1312-47.5648H127.4368c-25.2416 0-47.3088 19.456-48.0768 44.7488-0.768 26.112 20.1728 47.5648 46.1312 47.5648h53.8624v527.104c0 46.0288 37.3248 83.3536 83.3536 83.3536h203.4688c153.1392-39.2704 284.2112-133.376 371.2512-260.096z m-249.9584-205.7728c0-25.4976 20.6336-46.1312 46.1312-46.1312 25.4976 0 46.1312 20.6336 46.1312 46.1312v221.2864c0 25.4976-20.6336 46.1312-46.1312 46.1312-25.4976 0-46.1312-20.6336-46.1312-46.1312V466.8416z m-204.288 267.4176c-25.4976 0-46.1312-20.6336-46.1312-46.1312V466.8416c0-25.4976 20.6848-46.1312 46.1312-46.1312 25.4976 0 46.1312 20.6336 46.1312 46.1312v221.2864c0 25.4464-20.6336 46.1312-46.1312 46.1312z"
                  fill="#3A9CED"
                  p-id="9695"
                ></path>
                <path
                  d="M127.4368 229.9392c-25.2416 0-47.3088 19.456-48.0768 44.7488-0.768 26.112 20.1728 47.5648 46.1312 47.5648h53.8624V721.92c54.784-4.2496 107.6736-15.3088 157.7472-32.3584 0-0.4608-0.0512-0.9728-0.0512-1.4336V466.8416c0-25.4976 20.6848-46.1312 46.1312-46.1312 25.4976 0 46.1312 20.6336 46.1312 46.1312v182.9888a647.00416 647.00416 0 0 0 158.1056-117.248V466.8416a46.1056 46.1056 0 0 1 79.4112-31.8976 640.98816 640.98816 0 0 0 89.2416-204.9536l-628.6336-0.0512z"
                  fill="#59ADF8"
                  p-id="9696"
                ></path>
                <path
                  d="M563.456 96H335.1552c-25.4976 0-46.1312 20.6336-46.1312 46.1312s20.6336 46.1312 46.1312 46.1312h181.2992a648.3456 648.3456 0 0 0 47.0016-92.2624zM79.36 274.688c-0.768 26.112 20.1728 47.5648 46.1312 47.5648h53.8624V459.776c125.0816-43.6224 232.6016-124.7232 309.0944-229.8368H127.4368c-25.2928 0-47.3088 19.5072-48.0768 44.7488z"
                  fill="#6BC2FC"
                  p-id="9697"
                ></path>
              </svg>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="text" v-else>
      <span>暂无收藏</span>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/eventBus.js'
export default {
  components: {},
  props: {},
  data() {
    return {
      collectTableData: [],
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 向收藏栏中添加数据
    addQueryData() {
      // 接收分析查询组件传递过来的要添加的数据
      bus.$on('addQueryData', (val) => {
        console.log(this.collectTableData.length)
        if (this.collectTableData.length === 10) {
          this.$message.warning('收藏栏最多添加10条数据')
          return
        }
        this.collectTableData.push(val)
      })
    },
    // 删除收藏记录
    deleteCol(rowIndex) {
      console.log(rowIndex)
      this.collectTableData.splice(rowIndex, 1)
    },
  },
  created() {},
  mounted() {
    this.addQueryData()
  },
}
</script>
<style lang="scss" scoped>
.query-compare {
  .title {
    box-sizing: border-box;
    padding: 0 36px 0 10px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ebebeb;
    .split {
      width: 5px;
      height: 20px;
      background: #1595d4;
      float: left;
      border-radius: 4px;
      display: inline;
      margin: 20px 8px 20px 0;
      line-height: 60px;
    }
    h3 {
      float: left;
      display: block;
    }
    .record {
      float: right;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        color: #ffcb3b;
        font-size: 14px;
        font-weight: bolder;
      }
    }
  }
  .query-show {
    box-sizing: border-box;
    display: flex;
    padding: 26px 48px;
    flex-direction: column;
    .collect {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  .text {
    color: #bbbbbb;
    height: 400px;
    line-height: 400px;
    width: 100%;
  }
}
</style>
