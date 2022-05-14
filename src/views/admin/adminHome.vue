<template>
  <div class="admin-home">
    <Header></Header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/admin/home/Header.vue'

export default {
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  data () {
    return {
    }
  },
  components: { Header },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

.admin-home {
  width: 1280px;
  margin-top: 126px;
}
</style>
