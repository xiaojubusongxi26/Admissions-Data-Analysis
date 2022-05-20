<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background: #fdfdfd;
  overflow : auto;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fdfdfd;
}
// 滚动条宽度
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
// 滚动条轨道
::-webkit-scrollbar-track {
  background: rgb(244, 244, 244);
  border-radius: 2px;
}
// 小滑块
::-webkit-scrollbar-thumb {
  background: #d3d3d48d;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #1595d4;
}
</style>
