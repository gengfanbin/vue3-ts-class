<template src="./index.html"></template>
<style lang="scss" scoped src="./index.scss"></style>
<script lang="ts">
import {Vue,Options} from "vue-class-component";
import { useStore } from "vuex";
@Options({})
export default class About extends Vue {
  get name():void{
    return useStore().state.user.userInfo.name
  }
  get test():void{
    return useStore().state.user.test
  }
}
</script>