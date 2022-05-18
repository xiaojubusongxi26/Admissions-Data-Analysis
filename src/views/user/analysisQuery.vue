<template>
<div class="analysis-query">
  <QueryData></QueryData>
  <QueryCompare></QueryCompare>
</div>
</template>

<script>
import QueryData from '@/components/user/analysisQuery/QueryData.vue'
import QueryCompare from '@/components/user/analysisQuery/QueryCompare.vue'
export default {
  components: { QueryData, QueryCompare },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.analysis-query {
  >div {
    width: 100%;
    min-height: 550px;
    margin-bottom: 24px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 8px -5px 7px 0 rgb(189 189 189 / 20%), -4px 5px 12px 0 rgb(203 203 203 / 19%);
  }
}
</style>
