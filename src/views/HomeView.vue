<template>
  <div class="home">
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
import PageSplit from "../components/page-split.vue";

export default {
  name: "HomeView",
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
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
