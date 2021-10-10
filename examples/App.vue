<!--
 * @Author: Billy
 * @Date: 2021-04-05 20:59:56
 * @LastEditors: Billy
 * @LastEditTime: 2021-10-10 23:36:26
 * @Description: 请输入
-->
<template>
  <div id="app">
    <PageSplit
      :distribute="0.2"
      :lineThickness="6"
      :isVertical="true"
      :firstMinValue="300"
      @resizeLineStartMove="onresizeLineStartMove"
      @resizeLineMove="onResizeLineMove"
      @resizeLineEndMove="onresizeLineEndMove"
    >
      <template v-slot:first>
        <h1>A</h1>
      </template>
      <template v-slot:second>
        <h1>B</h1>
      </template>
    </PageSplit>
  </div>
</template>

<script>
import PageSplit from "../packages/page-split";
// import { PageSplit } from "../packages";

export default {
  name: "App",
  components: { PageSplit },
  methods: {
    onresizeLineStartMove: function () {
      // console.log("onresizeLineStartMove");
    },
    onResizeLineMove: function (e) {
      // console.log("onResizeLineMove :>> ", e);
    },
    onresizeLineEndMove: function () {
      // console.log("onresizeLineEndMove");
    },
  },
};
</script>

<style lang="scss">
body {
  min-width: 1000px; // 页面最小宽度，当浏览器小于此宽带时，出现横向滚动条
}

#app {
  height: 100%;
  font-family: "Microsoft Yahei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
