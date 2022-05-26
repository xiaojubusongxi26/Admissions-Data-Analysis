<template>
  <div class="query-data">
    <div class="title">
      <div class="split"></div>
      <h3>{{ $route.name }}</h3>
    </div>
    <div class="query-condition">
      <div class="demo-input-suffix">
        <span>学校:</span>
        <el-input
          placeholder="请输入学校"
          prefix-icon="el-icon-search"
          v-model="querySchool"
        >
        </el-input>
      </div>
      <div class="demo-input-suffix">
        <span>专业:</span>
        <el-input
          placeholder="请输入专业"
          prefix-icon="el-icon-search"
          v-model="queryProfession"
        >
        </el-input>
      </div>
      <div class="demo-input-suffix">
        <span>省份:</span>
        <el-input
          placeholder="请输入省份"
          prefix-icon="el-icon-search"
          v-model="queryProvince"
        >
        </el-input>
      </div>
      <div class="demo-input-suffix">
        <span>招生年份:</span>
        <el-date-picker v-model="queryYear" type="year" placeholder="选择年">
        </el-date-picker>
      </div>
      <div class="demo-input-suffix">
        <el-button type="primary" icon="el-icon-search">查询</el-button>
        <el-button type="primary" icon="el-icon-download">导出</el-button>
      </div>
    </div>
    <div class="query-show">
      <el-table :data="tableData" stripe border>
        <el-table-column prop="id" label="#"> </el-table-column>
        <el-table-column prop="school" label="学校"> </el-table-column>
        <el-table-column prop="province" label="省份"> </el-table-column>
        <el-table-column prop="profession" label="专业分类"> </el-table-column>
        <el-table-column prop="admissionBatch" label="录取批次">
        </el-table-column>
        <el-table-column prop="enrollment" label="招生人数"> </el-table-column>
        <el-table-column prop="enrollmentYear" label="招生年份">
        </el-table-column>
        <el-table-column prop="collect" label="收藏" width="50px">
          <template slot-scope="scope">
            <div class="collect" @click="dele(scope.row)">
              <svg
                t="1652886245290"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3169"
                width="22"
                height="22"
              >
                <path
                  d="M736.9 892.6c-10.9 0-21.8-2.6-31.9-7.9L510.7 782.5 316.4 884.7c-23.3 12.2-50.9 10.1-72.1-5.2-21.2-15.4-31.6-41-27.2-66.9l37.1-216.4L97.1 443.1c-18.8-18.3-25.4-45.2-17.3-70.1 8.1-24.9 29.3-42.8 55.2-46.6l217.2-31.6L449.3 98c11.6-23.5 35.1-38.2 61.4-38.2 26.2 0 49.7 14.6 61.3 38.1l97.1 196.8 217.2 31.5c26 3.8 47.2 21.7 55.2 46.6 8.1 24.9 1.5 51.8-17.3 70.1L767.1 596.3l37.1 216.4c4.4 25.8-6 51.5-27.2 66.9-12 8.6-26.1 13-40.1 13zM166.8 401.2L313 543.7c16.2 15.7 23.5 38.5 19.7 60.6l-34.5 201.2 180.7-95c20-10.5 43.7-10.5 63.6-0.1l180.7 95-34.5-201.2c-3.9-22.2 3.5-44.8 19.6-60.6l146.2-142.5-202-29.3c-22.3-3.3-41.6-17.3-51.5-37.5l-90.3-183-90.3 183.1c-9.9 20.2-29.2 34.2-51.5 37.4l-202.1 29.4z m334.7-268.4z"
                  fill="#6bc2fc"
                  p-id="3170"
                ></path>
                <path
                  d="M371.5 489.3c-19.2 0-36-14.1-38.9-33.7-3.1-21.5 11.8-41.4 33.3-44.6l75.4-11 33.7-68.4c9.6-19.5 33.2-27.5 52.7-17.9 19.5 9.6 27.5 33.2 17.9 52.7l-40.2 81.4c-7.4 15.1-21.8 25.6-38.5 27.9l-89.7 13.1c-2 0.3-3.8 0.5-5.7 0.5z"
                  fill="#3a9ced"
                  p-id="3171"
                ></path>
              </svg>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
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
      // 查询条件
      querySchool: '',
      queryProfession: '',
      queryProvince: '',
      queryYear: '',

      // 查询结果数据示例
      tableData: [
        {
          id: '1001',
          school: '清华大学',
          province: '北京',
          profession: '计算机科学与技术',
          admissionBatch: '1',
          enrollment: 26,
          enrollmentYear: 2016,
        },
        {
          id: '1001',
          school: '清华大学',
          province: '北京',
          profession: '计算机科学与技术',
          admissionBatch: '1',
          enrollment: 26,
          enrollmentYear: 2016,
        },
        {
          id: '1001',
          school: '清华大学',
          province: '北京',
          profession: '计算机科学与技术',
          admissionBatch: '1',
          enrollment: 26,
          enrollmentYear: 2016,
        },
        {
          id: '1001',
          school: '清华大学',
          province: '北京',
          profession: '计算机科学与技术',
          admissionBatch: '1',
          enrollment: 26,
          enrollmentYear: 2016,
        },
        {
          id: '1001',
          school: '清华大学',
          province: '北京',
          profession: '计算机科学与技术',
          admissionBatch: '1',
          enrollment: 26,
          enrollmentYear: 2016,
        },
      ],
    }
  },
  watch: {},
  computed: {},
  methods: {
    init() {
      this.getDefaultInfo().then(({ data }) => {
        console.log(data)
      })
    },
    // 向收藏栏组件传入要添加的数据
    dele(e) {
      console.log(JSON.stringify(e))
      console.log(e)
      bus.$emit('addQueryData', e)
    },
    async getDefaultInfo() {
      const data = {
        pageNum: 1,
        pageSize: 5
      }
      const res = await this.$axios({
        url: 'gxc/enrollmentplantb/list?pageNum=1&pageSize=5',
        method: 'get',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: data
      })
      return res
    },
  },
  created() {
    this.init()
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.query-data {
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
  .query-condition {
    display: flex;
    box-sizing: border-box;
    padding: 10px 26px;
    border-bottom: 1px solid #ebebeb;
    .demo-input-suffix {
      display: flex;
      height: 40px;
      line-height: 40px;
      margin: 0 12px;
      span {
        margin: 0 15px;
      }
      .el-input {
        width: 150px;
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
    .el-pagination {
      margin: 36px 0;
    }
  }
}
</style>
