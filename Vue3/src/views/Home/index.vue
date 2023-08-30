<template src="./index.html"></template>
<style lang="scss" scoped src="./index.scss"></style>
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { useStore } from "vuex";
@Options({})
export default class Home extends Vue {
  store = useStore().state
  name = "test";
  mounted() {
    this.name = "name";
  }
  clickFN() {
    this.name += "1";
    this.store.user.userInfo.name = this.name
  }
  get test():any{
    return useStore().state.user.userInfo.name
  }

}
</script>
