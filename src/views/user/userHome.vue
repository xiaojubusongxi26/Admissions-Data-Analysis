<template>
  <div class="user-home">
    <Header></Header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/user/home/Header.vue'
export default {
  components: { Header },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/nav.scss';

.user-home {
  width: 1280px;
  margin: 126px 0 0;
}
</style>
